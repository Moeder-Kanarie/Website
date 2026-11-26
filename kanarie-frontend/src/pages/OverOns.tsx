import { useState } from 'react'
import { useTitle } from '../hooks'
import { JoinBand, PageHeader } from '../components'
import { clublied, folklore, REGLEMENT_URL } from '../content'

function YouTube({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false)
  return (
    <div className="yt">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button onClick={() => setPlay(true)} aria-label={`Speel ${title} af`}>
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="play" aria-hidden />
        </button>
      )}
    </div>
  )
}

export default function OverOns() {
  useTitle('Over ons')
  return (
    <>
      <PageHeader eyebrow="Over ons" title={<>Beste <mark>Truineers</mark></>}>
        Een club voor, door en van Sint-Truiden. Hed dje e Truiense inborst? Dan zet dje welkom!
      </PageHeader>

      <section className="section">
        <div className="container split">
          <div>
            <h2>
              Sinds <mark>1898</mark>
            </h2>
            <p>
              Moeder Kanarie zet de traditie verder van <em>Cicindria</em>, de Truiense studentenclub die in 1898
              werd opgericht en de oudste van Limburg was. Twee keer viel ze stil, twee keer kwam ze terug.
            </p>
            <p>
              Regelmatig e koppel bokskes tetten, samen naar STVV kijken, cantussen en clubavonden: daar draait het
              om. Neem je vrienden mee en kom eens langs.
            </p>
          </div>
          <img className="photo" src="/img/geschiedenis/banner.jpg" alt="Zicht op Sint-Truiden" loading="lazy" />
        </div>
      </section>

      <section className="section section-alt" id="folklore">
        <div className="container narrow">
          <p className="eyebrow">Folklore</p>
          <h2>
            Verhalen uit onze <mark>geschiedenis</mark>
          </h2>
          <ol className="timeline">
            {folklore.map((s) => (
              <li key={s.year + s.title}>
                <span className="tl-year">{s.year}</span>
                <div className="tl-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  {s.img && <img src={s.img} alt={s.title} loading="lazy" />}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="clublied">
        <div className="container narrow">
          <p className="eyebrow">Clublied</p>
          <h2>
            <mark>{clublied.title}</mark>
          </h2>
          <p className="muted">{clublied.credit}</p>
          {clublied.youtube && <YouTube id={clublied.youtube} title={clublied.title} />}
          {clublied.verses.length > 0 ? (
            <div className="lyrics">
              {clublied.verses.map((v, i) => (
                <div className={`verse ${v.label?.toLowerCase().startsWith('refrein') ? 'chorus' : ''}`} key={i}>
                  {v.label && <p className="verse-label">{v.label}</p>}
                  {v.lines.map((l, j) => (
                    <p key={j}>{l}</p>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p className="muted">
              De volledige tekst staat op{' '}
              <a href={clublied.source} target="_blank" rel="noopener">
                onze oude site
              </a>
              .
            </p>
          )}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split split-rev">
          <img className="lustrum-side" src="/img/lustrumSchildKanaries.webp" alt="Lustrumschild 10 jaar Moeder Kanarie" loading="lazy" />
          <div>
            <p className="eyebrow">Vandaag</p>
            <h2>
              Onze <mark>heroprichting</mark>
            </h2>
            <p>
              Nu zitten we midden in onze heroprichting. Er zijn heel wat nieuwe gezichten bij, vooral uit{' '}
              <strong>Hasselt</strong>, dus we zijn er voortaan in Hasselt én Leuven.
            </p>
            <dl className="facts">
              <div>
                <dt>1898</dt>
                <dd>Wortels in Cicindria</dd>
              </div>
              <div>
                <dt>Hasselt &amp; Leuven</dt>
                <dd>Onze thuisbasis</dd>
              </div>
              <div>
                <dt>STVV</dt>
                <dd>Geel-blauw in het hart</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section" id="reglement">
        <div className="container narrow">
          <p className="eyebrow">Reglement</p>
          <h2>
            Huishoudelijk <mark>reglement</mark>
          </h2>
          <p>
            Hoe de club werkt, van lidmaatschap en clubvergadering tot het praesidium, de verkiezingen en de Oude
            Garde: het staat allemaal in ons huishoudelijk reglement.
          </p>
          <a className="btn btn-primary" href={REGLEMENT_URL} target="_blank" rel="noopener">
            Lees het reglement (PDF)
          </a>
        </div>
      </section>

      <JoinBand />
    </>
  )
}
