import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) => (isActive ? "is-active" : "")

  return (
    <header className="nav">
      <div className="nav__inner">
        <NavLink to="/" className="nav__mark" onClick={() => setOpen(false)}>
          Ember &amp; Oak
        </NavLink>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/menu" className={linkClass} onClick={() => setOpen(false)}>Menu</NavLink>
          <NavLink to="/#story" className={linkClass} onClick={() => setOpen(false)}>Story</NavLink>
          <NavLink to="/#visit" className={linkClass} onClick={() => setOpen(false)}>Visit</NavLink>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
