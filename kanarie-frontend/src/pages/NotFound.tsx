import { useTitle } from '../hooks'
import { Link } from 'react-router'
import { PageHeader } from '../components'

export default function NotFound() {
  useTitle('Pagina niet gevonden', true)
  return (
    <PageHeader eyebrow="404" title={<>Deze pagina is <mark>gevlogen</mark></>}>
      <Link className="text-link" to="/">
        Terug naar home →
      </Link>
    </PageHeader>
  )
}
