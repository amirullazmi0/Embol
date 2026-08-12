import { useEffect, useState } from 'react'

/** Live height of the sticky navbar, published as --nav-real by <Navbar>. */
function navHeight() {
  const style = getComputedStyle(document.documentElement)
  return (
    parseFloat(style.getPropertyValue('--nav-real')) ||
    parseFloat(style.getPropertyValue('--nav-h')) ||
    84
  )
}

/**
 * Tracks which section id is currently the closest one under the navbar,
 * so the menu can highlight it while the visitor scrolls.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const pick = () => {
      // A section counts as reached once its top clears the navbar; the last
      // one to do so is the section actually on screen.
      const threshold = navHeight() + 12

      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) current = id
      }

      // At the very bottom the last section may be too short to reach the
      // threshold, so claim it explicitly.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
      setActive(atBottom ? ids[ids.length - 1] : current)
    }

    pick()
    window.addEventListener('scroll', pick, { passive: true })
    window.addEventListener('resize', pick)
    return () => {
      window.removeEventListener('scroll', pick)
      window.removeEventListener('resize', pick)
    }
  }, [ids])

  return active
}
