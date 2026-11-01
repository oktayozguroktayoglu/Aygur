# Aygur Turizm web sitesi

Astro ile statik site; GitHub Pages'te yayınlanır. İçerik eski WordPress sitesinden (aygur.com.tr) birebir aktarıldı.

- Sayfa metinleri ve hizmetler: `src/data/site.js`
- Blog (Bilgi Bankası) yazıları: `src/content/blog/*.md` — dosya adı = adres
- Renkler: `src/styles/global.css` en üstteki `:root`
- Görseller/logo: ilk yayında `scripts/import-assets.mjs` indirir ve repoya kaydeder.
- Teklif formu: `src/components/QuoteForm.astro` içinde `WEB3FORMS_KEY` girilirse e-postaya gider, boşsa WhatsApp'a açılır.

aygur.com.tr bağlanınca `astro.config.mjs` (site/base), `public/CNAME` ve `public/robots.txt` güncellenir.
