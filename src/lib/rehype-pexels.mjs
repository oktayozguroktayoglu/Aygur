// Markdown'da ![açıklama](img:12345) -> <figure><img srcset=webp ...><figcaption>
import { visit } from 'unist-util-visit';
export default function rehypePexels({ base = '/' } = {}) {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'img' || !String(node.properties?.src || '').startsWith('img:')) return;
      const id = String(node.properties.src).slice(4);
      const alt = node.properties.alt || '';
      const img = {
        type: 'element', tagName: 'img', children: [],
        properties: {
          src: `${base}img/${id}.jpg`,
          srcSet: `${base}img/${id}-800.webp 800w, ${base}img/${id}-1600.webp 1600w`,
          sizes: '(max-width: 900px) 100vw, 760px',
          alt, loading: 'lazy', decoding: 'async', width: 1600, height: 1067,
        },
      };
      const fig = { type: 'element', tagName: 'figure', properties: { className: ['post-figure'] }, children: [img] };
      if (alt) fig.children.push({ type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: alt }] });
      // <p> içindeyse paragrafın yerine geç
      if (parent?.tagName === 'p' && parent.children.filter((c) => !(c.type === 'text' && !c.value.trim())).length === 1) {
        Object.assign(parent, fig);
      } else parent.children[index] = fig;
    });
  };
}
