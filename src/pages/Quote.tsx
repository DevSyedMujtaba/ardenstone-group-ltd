import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { quoteServices } from '../data/content'

export function Quote() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Quote"
        title="Tell us what you want to build — or buy."
        lede="Share a few details and we will come back with a clear next step: a site visit, a budget range, or a private listing conversation."
        image="https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="section">
        <div className="wrap" style={{ maxWidth: 820 }}>
          {sent ? (
            <motion.div
              className="success form"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 size={40} color="#b8955a" />
              <h3>Request received.</h3>
              <p className="lede" style={{ marginInline: 'auto' }}>
                Thank you. A member of the Ardenstone team will review your brief and be in touch
                shortly.
              </p>
            </motion.div>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <div className="form-row">
                <label>
                  Full name
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required autoComplete="email" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Telephone
                  <input name="phone" type="tel" required autoComplete="tel" />
                </label>
                <label>
                  Service
                  <select name="service" required defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {quoteServices.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label>
                Property address
                <input name="address" required autoComplete="street-address" />
              </label>
              <label>
                Project details
                <textarea name="details" required placeholder="Scope, timings, budget range, or the kind of property you are seeking." />
              </label>
              <button className="btn btn-gold" type="submit" style={{ justifySelf: 'start' }}>
                Send request
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
