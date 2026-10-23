// Astro integration: after the build, write a Markdown twin next to every docs page
// (dist/components/button/index.html -> dist/components/button.md).
//
// Agents can fetch /components/button.md instead of scraping HTML. Live demos are
// emitted as ```html blocks because the markup is what an agent needs to copy.

import { access, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'node-html-parser';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

function createConverter() {
  const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
  td.use(gfm);

  // Syntax-highlighted code: <pre data-language="html"><code>…</code></pre>
  td.addRule('codeBlock', {
    filter: (node) => node.nodeName === 'PRE',
    replacement: (_, node) => {
      const lang = node.getAttribute('data-language') ?? '';
      const code = node.textContent.replace(/\n$/, '');
      return `\n\n\`\`\`${lang === 'plaintext' ? '' : lang}\n${code}\n\`\`\`\n\n`;
    }
  });

  // Live demos: keep the markup, drop the rendering.
  td.addRule('demo', {
    filter: (node) => node.nodeName === 'DIV' && /\bdemo\b/.test(node.getAttribute('class') ?? ''),
    replacement: (_, node) => `\n\n\`\`\`html\n${node.innerHTML.trim()}\n\`\`\`\n\n`
  });

  td.remove(['script', 'style', 'svg', 'button']);
  return td;
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '_astro') yield* walk(path);
    } else if (entry.name === 'index.html') yield path;
  }
}

export function markdownPages() {
  return {
    name: 'keel-markdown-pages',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const td = createConverter();
        let written = 0;

        for await (const file of walk(root)) {
          const route = relative(root, dirname(file));
          if (!route) continue; // home page is marketing, not documentation

          // Hand-published Markdown (e.g. public/skill.md) wins over the generated twin.
          const out = join(root, `${route}.md`);
          if (await access(out).then(() => true, () => false)) continue;

          const doc = parse(await readFile(file, 'utf8')).querySelector('.doc-content');
          if (!doc) continue;

          // Demos need their buttons; strip only the docs-chrome ones.
          doc.querySelectorAll('.doc-toc, .copy-button').forEach((n) => n.remove());

          const title = doc.querySelector('.doc-title')?.text.trim() ?? route;
          const description = doc.querySelector('.doc-description')?.text.trim();
          doc.querySelector('.doc-header')?.remove();
          const body = td.turndown(doc.innerHTML).replace(/\n{3,}/g, '\n\n').trim();

          await mkdir(dirname(out), { recursive: true });
          await writeFile(out, `# ${title}\n\n${description ? `> ${description}\n\n` : ''}${body}\n`);
          written++;
        }
        logger.info(`wrote ${written} markdown pages`);
      }
    }
  };
}
