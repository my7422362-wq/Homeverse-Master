import { useEffect, useState } from 'react'

export function useScrollHeaderActive(thresholdPx: number) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setActive(window.scrollY >= thresholdPx)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [thresholdPx])

  return active
}

