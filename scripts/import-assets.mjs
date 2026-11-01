// İlk yayında çalışır: eksik görselleri (Pexels), logoyu ve eski sitenin tema stillerini indirir.
// Dosyalar repoya kaydedilir; sonraki derlemeler internete ihtiyaç duymaz.
import { mkdir, writeFile, access, readdir, readFile } from 'node:fs/promises';
import { allImageIds } from '../src/data/site.js';

const OLD = 'https://www.aygur.com.tr';
const exists = (p) => access(p).then(() => true, () => false);
async function get(url) {
  const r = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 (aygur-site-import)' } });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r;
}
async function save(url, path) {
  if (await exists(path)) return false;
  try { await writeFile(path, Buffer.from(await (await get(url)).arrayBuffer())); console.log('indirildi', path); return true; }
  catch (e) { console.warn('ATLANDI', path, e.message); return false; }
}

await mkdir('public/img', { recursive: true });
await mkdir('import', { recursive: true });

// Blog yazılarındaki kapak (cover) ve yazı içi (img:ID) görseller
const blogIds = [];
for (const f of (await readdir('src/content/blog')).filter((f) => f.endsWith('.md'))) {
  const t = await readFile('src/content/blog/' + f, 'utf8');
  for (const m of t.matchAll(/(?:cover:\s*['"]?|img:)(\d+)/g)) blogIds.push(m[1]);
}
for (const id of new Set([...allImageIds, ...blogIds])) {
  await save(`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`, `public/img/${id}.jpg`);
}

// Logo ve favicon (eski siteden)
await save(`${OLD}/wp-content/uploads/elementor/thumbs/AYGURLOGO-rnjmt8zsct5xkbtz48c4u8panu3aan2kc88mw7w8ig.png`, 'public/logo-footer.png');
await save(`${OLD}/wp-content/uploads/cropped-AYGURLOGO-1-270x270.png`, 'public/favicon.png');
await save(`${OLD}/wp-content/uploads/cropped-AYGURLOGO-1-180x180.png`, 'public/apple-touch-icon.png');

// Ana sayfa HTML'i ve stil dosyaları (renk paleti ve başlık logosu için)
if (!(await exists('import/home.html'))) {
  try {
    const html = await (await get(OLD + '/')).text();
    await writeFile('import/home.html', html);
    const logo = html.match(/<img[^>]+class="[^"]*custom-logo[^"]*"[^>]*src="([^"]+)"/) || html.match(/<img[^>]+src="([^"]+)"[^>]+class="[^"]*custom-logo/);
    if (logo) await save(logo[1], 'public/logo.png');
    const css = [...html.matchAll(/<link[^>]+href=['"]([^'"]+\.css[^'"]*)['"]/g)].map((m) => m[1])
      .filter((u) => /elementor\/css\/post-|astra|custom-frontend|uploads/.test(u));
    let i = 0;
    for (const u of css) await save(u.startsWith('http') ? u : OLD + u, `import/style-${++i}.css`);
    console.log('stil dosyaları:', css.length);
  } catch (e) { console.warn('Ana sayfa alınamadı:', e.message); }
}
