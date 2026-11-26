// SEO: titel en beschrijving per pagina. Wordt gebruikt in de browser (useMeta)
// én bij de build (vite.config.ts) om per pagina een eigen HTML-bestand, sitemap.xml en robots.txt te maken.
import { praesidia } from './content.ts'

export const SITE_URL = 'https://moederkanarie.be'
export const SITE_NAME = 'Moeder Kanarie'
export const DEFAULT_TITLE = 'Moeder Kanarie · Truiense studentenclub in Hasselt & Leuven'
export const OG_IMAGE = '/img/groep.jpg'

export type PageMeta = { title?: string; description: string }

export const pages: Record<string, PageMeta> = {
  '/': {
    description:
      'Moeder Kanarie is de studentenclub voor Truienaars in Hasselt en Leuven. Cantussen, clubavonden en samen supporteren voor STVV. Sinds 1898, in de traditie van Cicindria.',
  },
  '/over-ons': {
    title: 'Over ons',
    description:
      'De geschiedenis van Moeder Kanarie, de Truiense studentenclub met wortels in Cicindria (1898): folklore, ons clublied en het huishoudelijk reglement.',
  },
  '/praesidium': {
    title: 'Praesidium',
    description: 'Maak kennis met het praesidium van Moeder Kanarie, de Truiense studentenclub in Hasselt en Leuven, en bekijk de besturen van vroeger.',
  },
  '/activiteiten': {
    title: 'Activiteiten',
    description: 'Cantussen, clubavonden en STVV-matchen: ontdek de activiteiten van Moeder Kanarie, de studentenclub voor Truienaars in Hasselt en Leuven.',
  },
  '/galerij': {
    title: 'Galerij',
    description: "Foto's en video's van cantussen, clubavonden en andere activiteiten van Moeder Kanarie, de Truiense studentenclub.",
  },
  '/contact': {
    title: 'Contact',
    description: 'Neem contact op met Moeder Kanarie, de Truiense studentenclub in Hasselt en Leuven. Vragen over lid worden of activiteiten? Stuur ons een mailtje.',
  },
}

for (const b of praesidia.slice(1)) {
  pages[`/praesidium/${b.year}`] = {
    title: `Praesidium ${b.year}`,
    description: `Het praesidium van Moeder Kanarie in werkjaar ${b.year.replace('-', '–')}.`,
  }
}

export function fullTitle(title?: string) {
  return title ? `${title} · ${SITE_NAME}` : DEFAULT_TITLE
}
