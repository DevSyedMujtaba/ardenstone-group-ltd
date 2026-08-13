import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { properties } from '../data/content'

export function Properties() {
  return (
    <>
      <PageHero
        eyebrow="Properties"
        title="Quiet listings. Stronger positions."
        lede="Off-market access and below-market opportunities for clients who prefer discretion over the open market."
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Current opportunities</span>
              <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                A sample of the private book.
              </h2>
              <p className="lede">
                Listings rotate. Share your brief and we will match you with properties that never reach
                the portals — or that sit below prevailing market value.
              </p>
            </div>
          </Reveal>
          <div className="property-grid">
            {properties.map((property, i) => (
              <Reveal key={property.id} delay={i * 0.08}>
                <article className="property-card">
                  <img src={property.image} alt="" />
                  <div className="property-card-body">
                    <span className="badge">{property.type}</span>
                    <h3>{property.title}</h3>
                    <p>{property.detail}</p>
                    <p style={{ marginTop: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
                      {property.status}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <Reveal>
            <h2>Looking for a specific type of asset?</h2>
            <p>Tell us the area, budget and strategy. We will come back with a private shortlist.</p>
            <Link to="/quote" className="btn btn-gold">
              Share your brief
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
