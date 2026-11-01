// public/img/*.jpg -> public/img/<id>-800.webp ve <id>-1600.webp (yoksa üretir)
import sharp from 'sharp';
import { readdir, access } from 'node:fs/promises';
const exists = (p) => access(p).then(() => true, () => false);
for (const f of (await readdir('public/img')).filter((f) => f.endsWith('.jpg'))) {
  const id = f.replace('.jpg', '');
  for (const w of [800, 1600]) {
    const out = `public/img/${id}-${w}.webp`;
    if (await exists(out)) continue;
    await sharp(`public/img/${f}`).resize({ width: w, withoutEnlargement: true }).webp({ quality: 72 }).toFile(out);
    console.log('webp', out);
  }
}
