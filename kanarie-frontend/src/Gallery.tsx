import { useCallback, useEffect, useState } from 'react'
import { gallery } from './content'

const STEP = 12
const src = (id: string, ext: string) => `/gallery/${id}${ext}`

// limit: toon een vast aantal items (bv. op home), zonder "Toon meer".
export default function Gallery({ limit }: { limit?: number }) {
  const [shown, setShown] = useState(limit ?? STEP)
  const [open, setOpen] = useState<number | null>(null)
  const items = limit ? gallery.slice(0, limit) : gallery

  const go = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, go])

  const current = open === null ? null : items[open]

  return (
    <>
      <div className="masonry">
        {items.slice(0, shown).map((g, i) => (
          <button key={g.id} className="tile" onClick={() => setOpen(i)} aria-label={`Open ${g.alt}`}>
            <img src={src(g.id, '-t.jpg')} alt={g.alt} width={g.w} height={g.h} loading="lazy" />
            {g.video && <span className="play" aria-hidden />}
            <span className="tile-cap">{g.alt}</span>
          </button>
        ))}
      </div>
      {shown < items.length && (
        <div className="center">
          <button className="btn btn-ghost" onClick={() => setShown(shown + STEP)}>
            Toon meer
          </button>
        </div>
      )}

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt} onClick={() => setOpen(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            {current.video ? (
              <video key={current.id} src={src(current.id, '.mp4')} poster={src(current.id, '-t.jpg')} controls autoPlay playsInline />
            ) : (
              <img key={current.id} src={src(current.id, '.jpg')} alt={current.alt} />
            )}
            <figcaption>
              {current.alt}
              <span>
                {open! + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
          <button className="lb-btn lb-close" onClick={() => setOpen(null)} aria-label="Sluiten">
            ×
          </button>
          <button className="lb-btn lb-prev" onClick={(e) => (e.stopPropagation(), go(-1))} aria-label="Vorige">
            ‹
          </button>
          <button className="lb-btn lb-next" onClick={(e) => (e.stopPropagation(), go(1))} aria-label="Volgende">
            ›
          </button>
        </div>
      )}
    </>
  )
}
