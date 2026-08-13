import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { company } from '../data/content'

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A conversation, not a call centre."
        lede="Reach the studio directly. We respond to construction, management and private-sale enquiries."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-meta">
            <article>
              <h3>
                <Mail size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />
                Email
              </h3>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </article>
            <article>
              <h3>
                <Phone size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />
                Telephone
              </h3>
              <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
            </article>
            <article>
              <h3>
                <MapPin size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />
                Coverage
              </h3>
              <p>{company.area}</p>
            </article>
          </div>

          {sent ? (
            <motion.div
              className="success form"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 size={40} color="#b8955a" />
              <h3>Message sent.</h3>
              <p className="lede" style={{ marginInline: 'auto' }}>
                We will reply to your enquiry as soon as we can.
              </p>
            </motion.div>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required autoComplete="email" />
                </label>
              </div>
              <label>
                Message
                <textarea name="message" required placeholder="How can we help?" />
              </label>
              <button className="btn btn-gold" type="submit" style={{ justifySelf: 'start' }}>
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
