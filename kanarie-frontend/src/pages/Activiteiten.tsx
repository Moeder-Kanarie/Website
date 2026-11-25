import { useTitle } from '../hooks'
import { ActivityCards, JoinBand, PageHeader } from '../components'
import { events } from '../content'

export default function Activiteiten() {
  useTitle('Activiteiten')
  const today = new Date().toISOString().slice(0, 10)
  const upcoming = events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date))
  const fmt = new Intl.DateTimeFormat('nl-BE', { weekday: 'short', day: 'numeric', month: 'short' })

  return (
    <>
      <PageHeader eyebrow="Activiteiten" title={<>Wat we <mark>doen</mark></>}>
        Cantussen, clubavonden en STVV, in Hasselt en Leuven.
      </PageHeader>

      <section className="section section-tight">
        <div className="container narrow">
          <h2>
            Aankomende <mark>activiteiten</mark>
          </h2>
          {upcoming.length === 0 ? (
            <p className="empty">Er staan nog geen nieuwe activiteiten gepland. Word lid en je bent als eerste op de hoogte.</p>
          ) : (
            <ul className="events">
              {upcoming.map((e) => (
                <li key={e.date + e.title}>
                  <time dateTime={e.date}>{fmt.format(new Date(e.date))}</time>
                  <div>
                    <strong>{e.url ? <a href={e.url}>{e.title}</a> : e.title}</strong>
                    <span>{e.place}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>
            Wat je bij ons <mark>vindt</mark>
          </h2>
          <ActivityCards />
        </div>
      </section>

      <JoinBand />
    </>
  )
}
