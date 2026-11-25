import { useTitle } from '../hooks'
import { Navigate, NavLink, useParams } from 'react-router'
import { MemberCard, PageHeader } from '../components'
import { praesidia } from '../content'

export default function Praesidium() {
  const { jaar } = useParams()
  const board = jaar ? praesidia.find((b) => b.year === jaar) : praesidia[0]
  useTitle(board ? `Praesidium ${board.year}` : 'Praesidium')
  if (!board) return <Navigate to="/praesidium" replace />

  return (
    <>
      <PageHeader eyebrow="Praesidium" title={<>Het <mark>bestuur</mark> door de jaren</>} />
      <section className="section section-tight">
        <div className="container">
          <nav className="years" aria-label="Werkjaar">
            {praesidia.map((b, i) => (
              <NavLink
                key={b.year}
                to={i === 0 ? '/praesidium' : `/praesidium/${b.year}`}
                className={() => (b === board ? 'active' : '')}
                end
              >
                {b.year.replace('-', ' – ')}
              </NavLink>
            ))}
          </nav>
          <h2 className="year-title">
            Praesidium <mark>{board.year.replace('-', ' – ')}</mark>
          </h2>
          {board.photo ? (
            <div className="board-group">
              <img className="photo" src={board.photo} alt={`Praesidium ${board.year}`} loading="lazy" />
              <div>
                <p className="muted">Van links naar rechts</p>
                <ol className="board-list">
                  {board.members.map((m, i) => (
                    <li key={i}>
                      <strong>{m.name}</strong>
                      <span>{m.role}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ) : (
            <div className="grid people">
              {board.members.map((m, i) => (
                <MemberCard key={i} m={m} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
