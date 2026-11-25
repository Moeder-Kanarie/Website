import { useEffect } from 'react'

export function useTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · Moeder Kanarie` : 'Moeder Kanarie · Truienaars in Hasselt & Leuven'
  }, [title])
}
