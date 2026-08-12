const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4" {...stroke} />
      <circle cx="12" cy="12" r="4.6" {...stroke} />
      <circle cx="17.6" cy="6.4" r="1.25" fill="currentColor" />
    </svg>
  )
}

function Location() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 22s7.2-7.1 7.2-12.4A7.2 7.2 0 0 0 4.8 9.6C4.8 14.9 12 22 12 22Z"
        fill="currentColor"
      />
      <circle cx="12" cy="9.4" r="2.9" fill="var(--orange)" />
    </svg>
  )
}

function Whatsapp() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.6a9.4 9.4 0 0 0-8.1 14.1L2.6 21.4l4.8-1.25A9.4 9.4 0 1 0 12 2.6Z"
        {...stroke}
      />
      <path
        d="M9.1 8.1c.25-.05.5 0 .65.3l.75 1.5c.15.3.05.55-.15.75l-.45.45a.5.5 0 0 0-.1.6 6.4 6.4 0 0 0 2.9 2.9c.2.1.45.05.6-.1l.45-.45c.2-.2.45-.3.75-.15l1.5.75c.3.15.35.4.3.65-.2 1-1.1 1.7-2.15 1.6-3.2-.35-6-3.15-6.35-6.35-.1-1.05.6-1.95 1.6-2.15Z"
        fill="currentColor"
      />
    </svg>
  )
}

const ICONS = {
  instagram: Instagram,
  location: Location,
  whatsapp: Whatsapp,
}

export default function Icon({ name }) {
  const Component = ICONS[name]
  return Component ? <Component /> : null
}
