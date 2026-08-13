import { Link } from 'react-router-dom'
import { company } from '../data/content'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="logo" style={{ marginBottom: 18 }}>
            <span className="logo-text">
              <strong>ARDENSTONE</strong>
              <span>Group Ltd</span>
            </span>
          </div>
          <p>
            Property construction and management, delivered with craftsmanship, care and lasting
            relationships. {company.tagline}
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/quote">Request a quote</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3>Visit</h3>
          <div className="footer-links">
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
            <span>{company.area}</span>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>Construction · Sales · Management</span>
      </div>
    </footer>
  )
}
