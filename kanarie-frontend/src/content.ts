// Alle teksten en data van de site op één plek — pas hier aan.

// Link naar de inschrijvingen. Leeg = alle "Word lid"-knoppen staan uitgeschakeld.
export const JOIN_URL = ''
export const EMAIL = 'info@moederkanarie.be'
export const SOCIALS = [{ label: 'Facebook', url: 'https://www.facebook.com/MoederKanarie' }]
export const REGLEMENT_URL = '/documenten/huishoudelijk-reglement-moeder-kanarie.pdf'

export const nav = [
  { to: '/over-ons', label: 'Over ons' },
  { to: '/praesidium', label: 'Praesidium' },
  { to: '/activiteiten', label: 'Activiteiten' },
  { to: '/galerij', label: 'Galerij' },
  { to: '/contact', label: 'Contact' },
]

export const activities = [
  {
    title: 'Cantussen',
    text: 'Zingen, bokskes tetten en tradities in ere houden. Onze Beiaardcantus is het hoogtepunt van het jaar.',
  },
  {
    title: 'Clubavonden',
    text: 'Samenkomen met Truienaars in Hasselt en Leuven, gewoon om e koppel bokskes te tetten en wa te zievere.',
  },
  {
    title: 'STVV',
    text: 'Samen naar de match van de Kanaries kijken, in Stayen of op café.',
  },
]

// Over ons > Folklore: de verhalen over wat we deden, in volgorde. img is optioneel.
export type Story = { year: string; title: string; text: string; img?: string }

export const folklore: Story[] = [
  {
    year: '1898',
    title: 'Cicindria wordt geboren',
    text: 'Een groep Truiense vrienden richt Cicindria op, de oudste studentenclub van Limburg. Kleuren: blauw-geel-blauw. Na de Eerste Wereldoorlog valt de club stil.',
  },
  {
    year: '1980',
    title: 'De eerste heropstanding',
    text: 'Miel Goris en een vijftiental anderen blazen Cicindria nieuw leven in. De club wordt bekend om haar galabal met zo’n 400 man en haar eigen carnavalswagen.',
  },
  {
    year: '1982–83',
    title: 'Het XVII lustrum en de plaat',
    text: 'Voor het lustrum brengt Cicindria een echte plaat uit, met op de B-kant “Het Cicindria-lied”. De lustrummedaille hangt vandaag nog altijd in de Boulle in Leuven. In 1988 gaat Cicindria opnieuw op pauze.',
    img: '/gallery/c5963457-t.jpg',
  },
  {
    year: '2016',
    title: 'Moeder Kanarie is geboren',
    text: 'Op 23 februari 2016 richten vrienden uit Sint-Truiden Moeder Kanarie op, om de geest van Cicindria verder te zetten. Op het schild: de arend en de appel van Sint-Truiden, en de zirkel met de K. Het begint met voetbalavonden en groeit uit tot iets wekelijks.',
    img: '/img/groep.jpg',
  },
  {
    year: '2015–2019',
    title: 'ZVC Moeder Kanarie',
    text: 'Onze zaalvoetbalploeg speelt in eerste klasse van de LZV Cup voor Leuvense studenten: 4e, dan 2e, dan 3e, en in 2018–2019 eindelijk kampioen.',
    img: '/img/geschiedenis/zvc.jpg',
  },
  {
    year: '2017',
    title: 'De eerste doop',
    text: 'Na een eerste wervingsjaar en de STVV-studentendag worden op 18 april 2017 de eerste schachten van Moeder Kanarie gedoopt.',
  },
  {
    year: '2018',
    title: 'De eerste Beiaardcantus',
    text: 'Op 14 september 2018 zingen zo’n 500 man mee op de allereerste Beiaardcantus. Meteen een traditie.',
    img: '/gallery/b74aee7f-t.jpg',
  },
  {
    year: '2019',
    title: 'MK Beerpong op de Grote Markt',
    text: 'Op 3 maart 2019, in het carnavalsweekend, verovert het MK beerpongtoernooi de Grote Markt van Sint-Truiden. Verkleden was verplicht, er waren prijzen voor de beste outfit.',
  },
  {
    year: '2021',
    title: 'Vijf jaar Moeder Kanarie',
    text: 'Het eerste lustrum, in pak en met ballonnen.',
    img: '/gallery/87d3f517-t.jpg',
  },
  {
    year: '2026',
    title: 'Tien jaar en een heroprichting',
    text: 'Tien jaar na de oprichting begint een nieuw hoofdstuk, met heel wat nieuwe gezichten uit Hasselt.',
    img: '/img/lustrumSchildKanaries.webp',
  },
]

// Clublied. Plak de tekst per strofe in `verses` (elke strofe = lijst van regels).
export const clublied = {
  title: 'Sint-Truin Begot',
  credit: 'Tekst: Willy Dewaelheyns',
  youtube: 'eWjmMg0SfeE', // voorbeeld van het lied gezongen
  verses: [
    { label: "Refrein", lines: [
      "Sèn Truin begot, ich haan van oech,",
      "Sèn Truin ich zien oech gein,",
      "Bèt oer fameuze voetbalploeg,",
      "Drei tores op een rij,",
      "Sèn Truin djee zeit de parel on de kroewen van Haspengouw,",
      "Bè mich taas stie van oech ne shoine foto op de schouww.",
    ] },
    { label: "1", lines: [
      "En in ’t veursezoen geeft dzjee ôs bloemepracht in euvervloed,",
      "De bloesems van dei fruitbuum, al dei kleure,",
      "Wa loater, in de zomer, keuningin in geel en roewet,",
      "Dei keeze, peere, appele doen oech geure.",
    ] },
    { label: "2", lines: [
      "Sint Trudo stie doo te geniete, hiel hoeg in de locht,",
      "Hee ziet euver de merek en al dei doake,",
      "’t Hoevemuseum, poaterskerk of wa dzje och mar docht,",
      "Do stie ter al oer schatte te bewoake.",
    ] },
    { label: "3", lines: [
      "Al mier as dattienhonderd joar gezellig en gastvrij,",
      "De Truieneers stoin beter bekend als Binke,",
      "Het Festraetsuurwerk op ’t Begijnhof, rust op Tichelrij,",
      "Of op de Groewete Merek e pintje drènke.",
    ] },
  ] as { label?: string; lines: string[] }[],
  source: 'https://moederkanarie.wixsite.com/moederkanarie/folklore',
}

// Praesidium per werkjaar, nieuwste eerst. img is optioneel: zonder foto worden de initialen getoond.
// Foto's in public/img/bestuur/, vierkant werkt best.
export type Member = { name: string; role: string; text?: string; img?: string }
// photo: groepsfoto van het praesidium (optioneel). Leden staan dan van links naar rechts.
export type Board = { year: string; members: Member[]; photo?: string }

export const praesidia: Board[] = [
  {
    year: '2026-2027',
    members: [
      { name: 'Michaël Bielen', role: 'Praeses', img: '/img/bestuur/2026-michael-sq.jpg', text: 'Houdt de club draaiende, met focus op sfeer, vriendschap en liefde.' },
      { name: 'Ronan Stiers', role: 'Vice-praeses', img: '/img/bestuur/2026-ronan-sq.jpg', text: 'Rechterhand van de praeses. Mee achter clubavonden en cantussen.' },
      { name: 'Nicole Laeremans', role: 'Ab-actis', img: '/img/bestuur/2026-nicole-sq.jpg', text: 'Notulen, archief, truien en de foto’s van elke activiteit.' },
      { name: 'Niels Schütt', role: 'Schachtenmeester', img: '/img/bestuur/2026-niels-sq.jpg', text: 'Aanspreekpunt en beschermer van de schachten.' },
    ],
  },
  {
    year: '2019-2020',
    members: [
      { name: 'Dario', role: 'Praeses', img: '/img/bestuur/2019-dario.jpg' },
      { name: 'Seppe', role: 'Vice-praeses', img: '/img/bestuur/2019-seppe.jpg' },
      { name: 'Dieter', role: 'Quaestor', img: '/img/bestuur/2019-dieter.jpg' },
      { name: 'Arthur', role: 'Schachtenmeester', img: '/img/bestuur/2019-arthur.jpg' },
      { name: 'Niels', role: 'Abactis', img: '/img/bestuur/2019-niels.jpg' },
    ],
  },
  {
    year: '2018-2019',
    photo: '/img/bestuur/2018-groep.jpg',
    members: [
      { name: 'Bram Van de Walle', role: 'Quaestor' },
      { name: 'Maxime Bouflette', role: 'Vice-praeses' },
      { name: 'Kenzo Van den Brande', role: 'Ab-actis' },
      { name: 'Robin Vantilt', role: 'Praeses' },
      { name: 'Robbe Coopmans', role: 'Schachtenmeester' },
    ],
  },
  {
    year: '2017-2018',
    photo: '/img/bestuur/2017-groep.jpg',
    members: [
      { name: 'William Thevis', role: 'Feest' },
      { name: 'Dario Coppers', role: 'Schachtenmeester' },
      { name: 'Simon Hazevoets', role: 'Sport' },
      { name: 'Cédric Odeurs', role: 'Vice-praeses' },
      { name: 'Ruben Odeurs', role: 'Praeses' },
      { name: 'Seppe Lenearts', role: 'Feest' },
      { name: 'Robin Vantilt', role: 'Quaestor' },
      { name: 'Arthur Schreurs', role: 'Café' },
      { name: 'Kobe De Ridder', role: 'Ab-actis' },
    ],
  },
  {
    year: '2016-2017',
    photo: '/img/bestuur/2015-groep.jpg',
    members: [
      { name: 'Toon Vanspringel', role: 'Schachtenmeester' },
      { name: 'Rob Smets', role: 'BM' },
      { name: 'Ruben Odeurs', role: 'Vice-praeses' },
      { name: 'Maxime Miermans', role: 'Quaestor' },
      { name: 'Michiel Vandenbosch', role: 'Praeses' },
      { name: 'Cédric Odeurs', role: 'Praesidium' },
    ],
  },
  {
    year: '2015-2016',
    photo: '/img/bestuur/2015-groep.jpg',
    members: [
      { name: 'Toon Vanspringel', role: 'Schachtenmeester' },
      { name: 'Rob Smets', role: 'BM' },
      { name: 'Ruben Odeurs', role: 'Vice-praeses' },
      { name: 'Maxime Miermans', role: 'Quaestor' },
      { name: 'Michiel Vandenbosch', role: 'Praeses' },
      { name: 'Cédric Odeurs', role: 'Praesidium' },
    ],
  },
]

export type ClubEvent = { date: string; title: string; place: string; url?: string }

// Datum in ISO-formaat (YYYY-MM-DD). Voorbije activiteiten worden automatisch verborgen.
export const events: ClubEvent[] = []

// Galerij: bestanden staan in public/gallery/<id>.jpg (groot) en <id>-t.jpg (thumbnail).
// Video's: public/gallery/<id>.mp4 met <id>-t.jpg als voorbeeldbeeld.
export type GalleryItem = { id: string; w: number; h: number; alt: string; video?: boolean }

export const gallery: GalleryItem[] = [
  { id: '14148a7a', w: 640, h: 640, alt: 'Feest op de markt' },
  { id: 'c6a7de5c', w: 640, h: 360, alt: 'Op bezoek bij de beiaardier', video: true },
  { id: '3a76a9b2', w: 640, h: 640, alt: 'Op het podium' },
  { id: 'cd5cab62', w: 640, h: 640, alt: 'Trots op ons schild' },
  { id: '6f7f6bd7', w: 640, h: 480, alt: 'ZVC Moeder Kanarie' },
  { id: '61100806', w: 536, h: 640, alt: 'Cantus' },
  { id: '71021d76', w: 640, h: 427, alt: 'Geel-blauw supporteren' },
  { id: 'b09ba59f', w: 640, h: 480, alt: 'Zomerfeest' },
  { id: 'ca77b0f3', w: 640, h: 640, alt: 'Grote Markt Sint-Truiden' },
  { id: '33a16f17', w: 640, h: 360, alt: 'Rond het kampvuur', video: true },
  { id: 'c5963457', w: 359, h: 640, alt: 'De Cicindria-medaille' },
  { id: 'd6b22e4a', w: 640, h: 480, alt: 'Groepsfoto met schild' },
  { id: '39eea608', w: 480, h: 640, alt: 'Nachtelijk feest' },
  { id: 'dccd3f86', w: 640, h: 480, alt: 'Picknick aan Herkenrode' },
  { id: '554ddb1c', w: 360, h: 640, alt: 'Uitzicht in de clubtrui' },
  { id: 'a5176dd6', w: 640, h: 360, alt: 'Zaalvoetbal', video: true },
  { id: '0789abca', w: 480, h: 640, alt: 'Sint-Truiden van boven' },
  { id: 'b74aee7f', w: 640, h: 480, alt: 'Bij de beiaard' },
  { id: '90a97d40', w: 480, h: 640, alt: 'Op festival' },
  { id: '1b5dd48f', w: 480, h: 640, alt: 'Kaarsjescantus' },
  { id: '7365b8c9', w: 640, h: 480, alt: 'Op het terras' },
  { id: 'cee55afb', w: 640, h: 360, alt: 'De beiaard bespeeld', video: true },
  { id: '72b45baa', w: 640, h: 480, alt: 'Pokeravond' },
  { id: '948bfda0', w: 640, h: 360, alt: 'Avond in het gras' },
  { id: '9a9a8d9e', w: 640, h: 381, alt: 'Met de vriendinnen' },
  { id: 'b7b4c53a', w: 360, h: 640, alt: 'Op de tribune' },
  { id: '07db2de7', w: 480, h: 640, alt: 'Schachten aan de tafel' },
  { id: '84cb09e3', w: 360, h: 640, alt: 'Het schild' },
  { id: '87d3f517', w: 640, h: 427, alt: 'Vijf jaar Moeder Kanarie' },
  { id: '089c5408', w: 640, h: 480, alt: 'Samen bloed geven' },
  { id: '61e9bc49', w: 640, h: 480, alt: 'Ons schild op het podium' },
  { id: '69278a9d', w: 640, h: 360, alt: 'Onze stand op de markt' },
  { id: 'f068e57a', w: 480, h: 640, alt: 'Op de trein' },
  { id: 'e5f0baf9', w: 640, h: 360, alt: 'Dansen op de clubavond', video: true },
  { id: '30036780', w: 640, h: 480, alt: 'Feestje' },
  { id: '0e39cdbd', w: 640, h: 480, alt: 'Volle zaal' },
  { id: '4674d1ec', w: 480, h: 640, alt: 'Cantus' },
  { id: 'd4788a8d', w: 480, h: 640, alt: 'Ad fundum' },
  { id: '0b3bdb7b', w: 480, h: 640, alt: 'Cantus bij kaarslicht' },
  { id: '172555ed', w: 640, h: 479, alt: 'Zingen in het donker' },
  { id: '8bc495dd', w: 640, h: 480, alt: 'Kaarsjes en liedboeken' },
  { id: '2300a5bc', w: 360, h: 640, alt: 'Fuifje rond het vuur', video: true },
  { id: 'd378e246', w: 640, h: 480, alt: 'Het schild bij kaarslicht' },
  { id: '29e56e05', w: 480, h: 640, alt: 'Kaars en codex' },
  { id: 'f03a81f6', w: 640, h: 640, alt: 'Zomerfeesten' },
  { id: '9ba15b09', w: 480, h: 640, alt: 'Op de fuif' },
  { id: '88514f03', w: 640, h: 480, alt: 'Blokken in de clubtrui' },
  { id: '0db1ebc0', w: 640, h: 480, alt: 'Het clublokaal' },
  { id: '64f77f51', w: 480, h: 640, alt: 'Selfie op café' },
  { id: '4dc0fdde', w: 360, h: 640, alt: 'De clubtrui van dichtbij' },
  { id: '05f6a5b1', w: 640, h: 360, alt: 'Laat op de avond', video: true },
]
