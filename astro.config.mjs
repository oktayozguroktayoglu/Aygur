import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypePexels from './src/lib/rehype-pexels.mjs';

const BASE = '/Aygur';

// Önizleme: GitHub Pages proje adresi. aygur.com.tr bağlanınca:
// site: 'https://www.aygur.com.tr', base: '/' yapın, public/CNAME ekleyin, robots.txt'i güncelleyin.
export default defineConfig({
  site: 'https://oktayozguroktayoglu.github.io',
  base: BASE,
  markdown: { rehypePlugins: [[rehypePexels, { base: BASE + '/' }]] },
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
