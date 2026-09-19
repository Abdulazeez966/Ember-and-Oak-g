import { Link } from "react-router-dom"

function getGreeting() {
  const hour = new Date().getHours()
  if (hour >= 12 && hour < 17) return "Good afternoon."
  if (hour >= 17 || hour < 5) return "Good evening."
  return "Good morning."
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <p className="hero__greeting">{getGreeting()}</p>
        <h1 className="hero__headline">Coffee for<br />slow mornings.</h1>
        <p className="hero__sub">
          Small-batch beans, roasted three blocks from here. No syrups, no
          rush — just a cup worth sitting down for.
        </p>
        <div className="hero__cta">
          <Link to="/menu" className="btn btn--primary">See the menu</Link>
          <Link to="/#visit" className="btn btn--ghost">Find us</Link>
        </div>
      </div>

      <div className="hero__mark" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="hero__ring">
          <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M70 60 Q60 30 80 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M100 55 Q90 25 110 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M130 60 Q140 30 120 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
