import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { company, processSteps, properties, services } from '../data/content'

const heroImage =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80'

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <img src={heroImage} alt="Contemporary home with landscaped garden" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {company.name}
          </motion.span>
          <motion.h1
            className="display"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            Crafted spaces. Considered investments.
          </motion.h1>
          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            We transform properties into homes worth living in and assets worth holding — from loft
            conversions and extensions to off-market sales and full management.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            <Link to="/quote" className="btn btn-gold">
              Request a quote
            </Link>
            <Link to="/services" className="btn btn-ghost">
              Explore services
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">What we do</span>
              <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>
                Construction, finishes and stewardship.
              </h2>
              <p className="lede">
                A dedicated team for a seamless experience — from first sketch to occupied, income-producing
                property.
              </p>
            </div>
          </Reveal>
          <div className="card-grid">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.08}>
                <Link to="/services" className="service-card" style={{ display: 'block' }}>
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-body">
                    <span>{service.category}</span>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap split">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80"
              alt="Interior of a recently completed living space"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="eyebrow">The studio</span>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: '12px 0 18px' }}>
              Innovation meets craftsmanship.
            </h2>
            <p className="lede">
              Welcome to {company.name}. Our mission is to turn your spaces into dream homes and
              investment opportunities — with excellence, attention to detail, and customer satisfaction
              at the centre of every project.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              Whether it is a stunning loft conversion, a practical garage extension, or effective
              property management, we stay with you from start to finish.
            </p>
            <Link to="/about" className="btn btn-ink" style={{ marginTop: 28 }}>
              Our story <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">How we work</span>
              <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Four stages. One standard.
              </h2>
            </div>
          </Reveal>
          <div className="process">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <article>
                  <div className="n">{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Private market</span>
              <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Off-market and below-market opportunities.
              </h2>
              <p className="lede">
                Exclusive listings without the noise of the public market — and hidden gems with room to
                create value.
              </p>
            </div>
          </Reveal>
          <div className="property-grid">
            {properties.slice(0, 2).map((property, i) => (
              <Reveal key={property.id} delay={i * 0.1}>
                <Link to="/properties" className="property-card">
                  <img src={property.image} alt="" />
                  <div className="property-card-body">
                    <span className="badge">{property.type}</span>
                    <h3>{property.title}</h3>
                    <p>{property.detail}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Begin</span>
            <h2>Join us in turning your vision into reality.</h2>
            <p>Tell us about the property, the brief, or the investment you have in mind.</p>
            <Link to="/quote" className="btn btn-gold">
              Request a quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
