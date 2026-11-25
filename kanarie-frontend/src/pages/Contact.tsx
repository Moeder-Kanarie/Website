import { useTitle } from '../hooks'
import { JoinButton, PageHeader } from '../components'
import { EMAIL, JOIN_URL } from '../content'

export default function Contact() {
  useTitle('Contact')
  return (
    <>
      <PageHeader eyebrow="Contact" title={<>Zeg <mark>ns</mark> iets</>}>
        Interesse om lid te worden of een vraag? Laat het ons weten.
      </PageHeader>
      <section className="section section-tight">
        <div className="container grid contact-grid">
          <article className="card">
            <h3>Mail ons</h3>
            <p>Voor vragen, samenwerkingen of sponsoring.</p>
            <a className="big-link" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </article>
          <article className="card">
            <h3>Word lid</h3>
            <p>
              {JOIN_URL
                ? 'Inschrijven gaat online. Daarna ben je welkom op elke activiteit.'
                : 'De inschrijvingen openen binnenkort. Interesse? Mail ons gerust al.'}
            </p>
            <JoinButton>Schrijf je in</JoinButton>
          </article>
        </div>
      </section>
    </>
  )
}
