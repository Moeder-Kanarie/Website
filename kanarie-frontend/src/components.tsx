import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { activities, EMAIL, JOIN_URL, nav, type Member } from './content'

// Naar boven scrollen bij een nieuwe pagina, maar niet bij wisselen binnen dezelfde sectie
// (bv. van het ene praesidiumjaar naar het andere).
const section = (path: string) => path.split('/')[1]

export function ScrollToTop() {
  const { pathname } = useLocation()
  const prev = useRef(pathname)
  useEffect(() => {
    if (section(prev.current) !== section(pathname)) window.scrollTo(0, 0)
    prev.current = pathname
  }, [pathname])
  return null
}

// Zonder JOIN_URL: uitgeschakelde knop zonder link.
function JoinLink({ className, children }: { className: string; children: ReactNode }) {
  if (!JOIN_URL)
    return (
      <span className={`${className} is-disabled`} aria-disabled="true" title="Inschrijvingen openen binnenkort">
        {children}
      </span>
    )
  return (
    <a className={className} href={JOIN_URL} target="_blank" rel="noopener">
      {children}
    </a>
  )
}

export function JoinButton({ className = '', children = 'Word lid' }: { className?: string; children?: ReactNode }) {
  return (
    <JoinLink className={`btn btn-primary ${className}`}>{children}</JoinLink>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={close}>
          <img src="/img/logo.png" alt="" width={40} height={40} />
          <span>Moeder Kanarie</span>
        </Link>
        <button className="menu-toggle" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          <span className="sr-only">Menu</span>
          <span className="bars" aria-hidden />
        </button>
        <nav id="site-nav" className={`nav ${open ? 'is-open' : ''}`}>
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} onClick={close}>
              {n.label}
            </NavLink>
          ))}
          <JoinButton className="btn-sm" />
        </nav>
      </div>
    </header>
  )
}

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="page-header">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <p className="lead">{children}</p>}
      </div>
    </section>
  )
}

export function ActivityCards() {
  return (
    <div className="grid cards">
      {activities.map((a, i) => (
        <article className="card" key={a.title}>
          <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
          <h3>{a.title}</h3>
          <p>{a.text}</p>
        </article>
      ))}
    </div>
  )
}

export function MemberCard({ m }: { m: Member }) {
  return (
    <article className="person">
      {m.img ? (
        <img src={m.img} alt={m.name} loading="lazy" width={600} height={600} />
      ) : (
        <div className="avatar" aria-hidden>
          {m.name
            .split(' ')
            .map((w) => w[0])
            .join('')}
        </div>
      )}
      <h3>{m.name}</h3>
      <p className="role">{m.role}</p>
      {m.text && <p>{m.text}</p>}
    </article>
  )
}

export function JoinBand() {
  return (
    <section className="band">
      <div className="container band-inner">
        <div>
          <h2>Word lid van Moeder Kanarie</h2>
          <p>{JOIN_URL ? 'Schrijf je in, haal je trui en zet dje welkom op de volgende activiteit.' : 'De inschrijvingen openen binnenkort. Hou deze site in de gaten!'}</p>
        </div>
        <JoinLink className="btn btn-dark">{JOIN_URL ? 'Schrijf je in →' : 'Binnenkort'}</JoinLink>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/img/logo.png" alt="Schild van Moeder Kanarie" width={72} height={72} loading="lazy" />
          <div>
            <strong>Moeder Kanarie</strong>
            <p>Een club voor, door en van Sint-Truiden. In Hasselt en Leuven.</p>
          </div>
        </div>
        <div>
          <h3>Ontdek</h3>
          <ul className="footer-links">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <JoinButton className="btn-sm" />
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} Moeder Kanarie</div>
    </footer>
  )
}
