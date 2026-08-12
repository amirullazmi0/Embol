import { useEffect, useRef } from 'react'
import { BRAND, SECTIONS } from '../data/site'

export default function Navbar({ active }) {
  const barRef = useRef(null)
  const tone = SECTIONS.find((s) => s.id === active)?.tone ?? 'orange'

  // Publish the real bar height so section scroll offsets stay correct even
  // when the bar wraps to two rows on small screens.
  useEffect(() => {
    const el = barRef.current
    if (!el) return

    const sync = () =>
      document.documentElement.style.setProperty('--nav-real', `${el.offsetHeight}px`)

    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="nav" data-tone={tone} ref={barRef}>
      <p className="nav__brand">{BRAND}</p>

      <nav aria-label="Utama">
        <ul className="nav__menu">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                className="nav__link"
                aria-current={active === section.id}
                onClick={() => goTo(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
