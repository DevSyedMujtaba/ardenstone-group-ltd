import { Reveal } from './Reveal'

type PageHeroProps = {
  eyebrow: string
  title: string
  lede: string
  image: string
}

export function PageHero({ eyebrow, title, lede, image }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="hero-media">
        <img src={image} alt="" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display">{title}</h1>
          <p className="lede">{lede}</p>
        </Reveal>
      </div>
    </section>
  )
}
