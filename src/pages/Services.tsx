import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { services } from '../data/content'

const extra = [
  {
    title: 'Off-market properties',
    text: 'Access exclusive listings and opportunities without the competition of the public market.',
  },
  {
    title: 'Below-market properties',
    text: 'Find undervalued properties with genuine potential — hidden gems with room for return.',
  },
  {
    title: 'Property management',
    text: 'Tenant screening, rent collection, maintenance and inspections so your investment is well cared for.',
  },
]

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="From structure to stewardship."
        lede="Construction, plastering, roofing, private sales and full-service management — one team, one standard."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section">
        <div className="wrap">
          <div className="card-grid">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.07}>
                <article className="service-card">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-body">
                    <span>{service.category}</span>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Sales & management</span>
              <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                The property, after the build.
              </h2>
            </div>
          </Reveal>
          <div className="values">
            {extra.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="value">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link to="/quote" className="btn btn-ink" style={{ marginTop: 40 }}>
              Start a project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
