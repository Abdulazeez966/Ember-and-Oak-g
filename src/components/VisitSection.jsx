import { useState } from "react"
import { useNavigate } from "react-router-dom"

function VisitSection() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", party: "", time: "" })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // No backend yet — route to a confirmation page carrying the details
    // in navigation state, rather than a query string, so it never sits
    // in the URL or browser history.
    navigate("/confirmed", { state: form })
  }

  return (
    <section className="visit" id="visit">
      <div className="visit__info">
        <h2>Come sit for a while.</h2>
        <dl>
          <div><dt>Address</dt><dd>412 Milner Street</dd></div>
          <div><dt>Hours</dt><dd>Mon–Sat, 7am – 3pm</dd></div>
          <div><dt>Hold a table</dt><dd>Groups of 6 or more, Saturdays only.</dd></div>
        </dl>
      </div>

      <form className="visit__form" onSubmit={handleSubmit}>
        <h3>Reserve a table</h3>

        <label htmlFor="name">Name</label>
        <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />

        <label htmlFor="party">Party size</label>
        <input id="party" name="party" type="number" min="1" max="12" required value={form.party} onChange={handleChange} placeholder="2" />

        <label htmlFor="time">Preferred time</label>
        <input id="time" name="time" type="time" required value={form.time} onChange={handleChange} />

        <button type="submit" className="btn btn--primary">Request table</button>
      </form>
    </section>
  )
}

export default VisitSection
