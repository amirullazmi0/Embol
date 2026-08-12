import Marquee from '../components/Marquee'
import { ABOUT_PARAGRAPHS, WORDMARK } from '../data/site'

const BANNER_ALT = 'Perempuan menggigit peyeum nugget di jalanan Bandung'

export default function About() {
  return (
    <section id="about" className="section about">
      {/* Deck page 2: bare banner closed by an orange wordmark band. */}
      <div className="about__intro">
        <div className="about__banner">
          <img src="/images/about-eating.png" alt={BANNER_ALT} />
        </div>
        <div className="about__band">
          <Marquee as="h2" className="wordmark about__title" text={WORDMARK} />
        </div>
      </div>

      {/* Deck page 3: the same banner, now carrying the logo card. */}
      <div className="about__head">
        <div className="about__banner">
          <img src="/images/about-eating.png" alt="" aria-hidden="true" />
        </div>
        <div className="about__logo">
          <img src="/images/logo.png" alt="Logo Peyeumin Ajah" />
        </div>
      </div>

      <div className="about__body">
        {ABOUT_PARAGRAPHS.map((text, i) => (
          <p key={text.slice(0, 24)}>
            {i === 0 ? (
              <>
                <strong>Peyeumin Ajah</strong>
                {text.slice('Peyeumin Ajah'.length)}
              </>
            ) : (
              text
            )}
          </p>
        ))}
      </div>
    </section>
  )
}
