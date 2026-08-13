import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../data/content'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
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
          <div className="footer-links footer-visit">
            <a href={`mailto:${company.email}`}>
              <Mail size={16} aria-hidden="true" />
              {company.email}
            </a>
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>
              <Phone size={16} aria-hidden="true" />
              {company.phone}
            </a>
            <a href={company.mapsUrl} target="_blank" rel="noreferrer">
              <MapPin size={16} aria-hidden="true" />
              {company.address.line1}, {company.address.city} {company.address.postcode}
            </a>
            <span>
              <Building2 size={16} aria-hidden="true" />
              Head office: {company.headOffice}
            </span>
            <span>
              <MapPin size={16} aria-hidden="true" />
              Operating in the {company.coverage}
            </span>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>Property · Construction · Investment · Community</span>
      </div>
    </footer>
  )
}
