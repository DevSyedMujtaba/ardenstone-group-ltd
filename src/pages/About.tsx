import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { company, values } from '../data/content'

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built on trust, transparency and outstanding results."
        lede={`At ${company.name}, we pride ourselves on a commitment to excellence and a seamless experience from start to finish.`}
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section">
        <div className="wrap split">
          <Reveal>
            <span className="eyebrow">Our mission</span>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: '12px 0 18px' }}>
              Homes to live in. Assets to hold.
            </h2>
            <p className="lede">
              Welcome to {company.name}, where innovation meets craftsmanship. We specialise in
              high-quality construction and management services tailored to the unique needs of each
              client.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              Whether it is a stunning loft conversion, a practical garage extension, or effective
              property management, our dedicated team is here to ensure a calm, well-run project —
              and a relationship that lasts beyond handover.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80"
              alt="Craftsman working on a refined interior finish"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">How we show up</span>
              <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Principles we will not compromise.
              </h2>
            </div>
          </Reveal>
          <div className="values">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <article className="value">
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <Reveal>
            <h2>Ready to talk about your property?</h2>
            <p>We would be glad to walk the site, review drawings, or discuss an off-market brief.</p>
            <Link to="/contact" className="btn btn-gold">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
