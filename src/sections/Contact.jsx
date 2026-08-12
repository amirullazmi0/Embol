import { CONTACTS, WORDMARK } from '../data/site'
import Icon from '../components/Icons'
import Marquee from '../components/Marquee'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__grid">
        {CONTACTS.map((item) => (
          <a
            key={item.id}
            className="contact__item"
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name={item.icon} />
            <span className="contact__label">{item.label}</span>
          </a>
        ))}
      </div>

      <Marquee
        as="h2"
        className="wordmark wordmark--sm contact__title"
        text={WORDMARK}
      />
    </section>
  )
}
