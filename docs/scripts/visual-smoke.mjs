import { chromium } from 'playwright';

const pages = [
  '/',
  '/colors',
  '/typography',
  '/spacing',
  '/accessibility',
  '/components/button',
  '/components/input',
  '/components/table',
  '/components/dialog',
  '/brand/logo-usage'
];

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:4321';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  for (const path of pages) {
    const url = `${baseUrl}${path}`;
    const response = await page.goto(url, { waitUntil: 'networkidle' });
    if (!response || response.status() >= 400) {
      throw new Error(`Visual smoke failed for ${url} (status ${response?.status() ?? 'no-response'})`);
    }
    await page.screenshot({ path: `./.visual-smoke${path === '/' ? '/home' : path}.png`, fullPage: true });
  }

  await browser.close();
  console.log(`Captured ${pages.length} visual smoke screenshots.`);
}

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
