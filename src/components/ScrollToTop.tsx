import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPage } from '../analytics'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    trackPage(pathname)
  }, [pathname])

  return null
}
