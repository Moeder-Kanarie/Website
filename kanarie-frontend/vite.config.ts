import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { fullTitle, pages, SITE_URL } from './src/seo.ts'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Maakt bij de build per pagina een eigen index.html (juiste titel, beschrijving en canonical
// al in de HTML, zodat zoekmachines en social previews ze zonder JavaScript zien),
// plus sitemap.xml en robots.txt.
function seo(): Plugin {
  return {
    name: 'kanarie-seo',
    apply: 'build',
    writeBundle({ dir }) {
      if (!dir) return
      const html = readFileSync(join(dir, 'index.html'), 'utf8')
      const emit = (fileName: string, source: string) => {
        const file = join(dir, fileName)
        mkdirSync(dirname(file), { recursive: true })
        writeFileSync(file, source)
      }

      for (const [path, meta] of Object.entries(pages)) {
        if (path === '/') continue
        const title = esc(fullTitle(meta.title))
        const desc = esc(meta.description)
        const url = SITE_URL + path
        const page = html
          .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
          .replace(/(<meta (?:name|property)="(?:description|og:description)" content=")[^"]*"/g, `$1${desc}"`)
          .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
          .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
          .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
        emit(`${path.slice(1)}/index.html`, page)
      }

      const today = new Date().toISOString().slice(0, 10)
      const urls = Object.keys(pages)
        .map((p) => `  <url><loc>${SITE_URL}${p}</loc><lastmod>${today}</lastmod></url>`)
        .join('\n')
      emit(
        'sitemap.xml',
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
      emit('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seo()],
})
