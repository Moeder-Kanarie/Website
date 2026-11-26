import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { fullTitle, OG_IMAGE, pages, SITE_URL } from './seo'

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = value
}

// Zet titel, beschrijving, canonical en social tags voor de huidige pagina.
export function useTitle(title?: string, notFound = false) {
  const { pathname } = useLocation()
  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : '/'
    const meta = pages[path]
    const t = fullTitle(title ?? meta?.title)
    const description = meta?.description ?? pages['/'].description
    const url = SITE_URL + (path === '/' ? '/' : path)

    document.title = t
    setMeta('name', 'description', description)
    setMeta('name', 'robots', notFound ? 'noindex' : 'index, follow')
    setMeta('property', 'og:title', t)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', SITE_URL + OG_IMAGE)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, pathname, notFound])
}
