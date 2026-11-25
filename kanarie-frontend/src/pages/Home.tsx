import { useTitle } from '../hooks'
import { Link } from 'react-router'
import { ActivityCards, JoinBand, JoinButton, MemberCard } from '../components'
import { praesidia } from '../content'
import Gallery from '../Gallery'

export default function Home() {
  useTitle()
  const current = praesidia[0]
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden />
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">Truienaars in Hasselt &amp; Leuven</p>
            <h1>
              Een club <mark>voor, door en van</mark> Sint-Truiden
            </h1>
            <p className="lead">Hed dje e Truiense inborst? Dan zet dje welkom!</p>
            <div className="actions">
              <JoinButton />
              <Link className="btn btn-ghost" to="/over-ons">
                Ons verhaal
              </Link>
            </div>
          </div>
          <Link to="/over-ons" className="lustrum" aria-label="Ons verhaal">
            <img src="/img/lustrumSchildKanaries.webp" alt="Lustrumschild 10 jaar Moeder Kanarie" width={840} height={738} />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Over ons</p>
            <h2>
              Wie <mark>zijn</mark> wij?
            </h2>
            <p>
              Een bende Truienaars die de traditie van <em>Cicindria</em> (1898) verderzet. Nu in volle{' '}
              <strong>heroprichting</strong>, met heel wat nieuwe gezichten uit <strong>Hasselt</strong>.
            </p>
            <Link className="text-link" to="/over-ons">
              Lees ons verhaal →
            </Link>
          </div>
          <img className="photo" src="/img/groep.jpg" alt="Leden van Moeder Kanarie op de Grote Markt in Leuven" loading="lazy" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Wat we doen</p>
              <h2>
                Onze <mark>activiteiten</mark>
              </h2>
            </div>
            <Link className="text-link" to="/activiteiten">
              Kalender bekijken →
            </Link>
          </div>
          <ActivityCards />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Galerij</p>
              <h2>
                Check <mark>onze</mark> foto’s
              </h2>
            </div>
            <Link className="text-link" to="/galerij">
              Alle foto’s →
            </Link>
          </div>
          <Gallery limit={8} />
        </div>
      </section>

      <JoinBand />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Praesidium {current.year}</p>
              <h2>
                Ons <mark>bestuur</mark>
              </h2>
            </div>
            <Link className="text-link" to="/praesidium">
              Bestuur door de jaren →
            </Link>
          </div>
          <div className="grid people">
            {current.members.map((m, i) => (
              <MemberCard key={i} m={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
