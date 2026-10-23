import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { markdownPages } from './scripts/markdown-pages.mjs';

export default defineConfig({
  integrations: [mdx(), react(), markdownPages()],
});
