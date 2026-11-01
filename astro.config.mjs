import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Önizleme: GitHub Pages proje adresi. aygur.com.tr bağlanınca:
// site: 'https://www.aygur.com.tr', base: '/' yapın, public/CNAME ekleyin, robots.txt'i güncelleyin.
export default defineConfig({
  site: 'https://oktayozguroktayoglu.github.io',
  base: '/Aygur',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
