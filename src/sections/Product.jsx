import Marquee from '../components/Marquee'
import { PRODUCT, WORDMARK } from '../data/site'

export default function Product() {
  return (
    <section id="product" className="section product">
      <div className="product__grid">
        <figure className="product__photo">
          <img
            src="/images/product.png"
            alt="Peyeum nugget dalam kotak dengan saus cocolan"
          />
        </figure>

        <div className="product__info">
          <p className="product__price">{PRODUCT.price}</p>
          <p className="product__note">
            {PRODUCT.notes.map((note, i) => (
              <span key={note}>
                {note}
                {i < PRODUCT.notes.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      <Marquee
        as="h2"
        className="wordmark wordmark--sm product__title"
        text={WORDMARK}
      />
    </section>
  )
}
