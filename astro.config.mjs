import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The production URL lives here and in src/config/site.ts (keep them in sync).
export default defineConfig({
  site: 'https://waukeshaelitedrywall.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
