import { Link } from 'react-router-dom'
import { company } from '../data/content'

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link to="/" className={`logo ${className}`.trim()} aria-label={company.name}>
      <img src="/logo.png?v=2" alt={company.name} className="logo-img" />
    </Link>
  )
}
