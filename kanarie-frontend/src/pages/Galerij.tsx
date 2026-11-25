import { useTitle } from '../hooks'
import { PageHeader } from '../components'
import Gallery from '../Gallery'

export default function Galerij() {
  useTitle('Galerij')
  return (
    <>
      <PageHeader eyebrow="Galerij" title={<>Check <mark>onze</mark> foto’s</>}>
        Cantussen, feesten, matchen en de beiaard. Klik op een foto of video om ze groot te bekijken.
      </PageHeader>
      <section className="section section-tight">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </>
  )
}
