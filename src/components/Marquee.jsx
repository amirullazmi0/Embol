const REPEATS = 4

/**
 * Endlessly scrolling text. The track holds an even number of identical
 * copies and slides by exactly half its width, so the loop has no seam.
 */
export default function Marquee({ text, as: Tag = 'div', className = '' }) {
  return (
    <Tag className={`marquee ${className}`.trim()}>
      <span className="marquee__track">
        {Array.from({ length: REPEATS }, (_, i) => (
          <span key={i} className="marquee__item" aria-hidden={i > 0}>
            {text}
          </span>
        ))}
      </span>
    </Tag>
  )
}
