import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { company, navLinks } from '../data/content'

function Logo() {
  return (
    <Link to="/" className="logo" aria-label={company.name}>
      <svg className="logo-mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect width="64" height="64" rx="8" fill="#141311" />
        <path d="M32 10L52 50H12L32 10Z" stroke="#cbb892" strokeWidth="2.5" />
        <path d="M32 22L44 46H20L32 22Z" fill="#cbb892" />
      </svg>
      <span className="logo-text">
        <strong>ARDENSTONE</strong>
        <span>Group Ltd</span>
      </span>
    </Link>
  )
}

export function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const solid = pathname !== '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header className={`nav ${scrolled || solid ? 'scrolled' : ''} ${solid ? 'solid' : ''}`}>
        <Logo />
        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={({ isActive }) => (isActive ? 'active' : '')} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/quote" className="btn btn-gold nav-cta">
          Request a quote
        </Link>
        <button className="menu-btn" type="button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 * i }}
              >
                <Link to={link.to}>{link.label}</Link>
              </motion.div>
            ))}
            <Link to="/quote" className="btn btn-gold" style={{ width: 'fit-content', marginTop: 12 }}>
              Request a quote
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
