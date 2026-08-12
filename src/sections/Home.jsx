import Marquee from '../components/Marquee'
import { WORDMARK } from '../data/site'

export default function Home() {
  return (
    <section id="home" className="section home">
      <figure className="home__figure">
        <img
          src="/images/hero-nugget.png"
          alt="Dua tangan memegang peyeum nugget dengan latar merah muda"
        />
      </figure>
      <Marquee as="h1" className="wordmark home__title" text={WORDMARK} />
    </section>
  )
}
