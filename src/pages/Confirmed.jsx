import { Link, useLocation, Navigate } from "react-router-dom"

function Confirmed() {
  const { state } = useLocation()

  // Reached directly (no form data in state) — send back rather than
  // show a broken confirmation.
  if (!state) return <Navigate to="/#visit" replace />

  return (
    <section className="confirmed">
      <h1>See you soon, {state.name}.</h1>
      <p>
        Table for {state.party || "a couple"} at {state.time || "your requested time"} —
        we've noted it. We'll follow up if anything changes.
      </p>
      <Link to="/" className="btn btn--primary">Back to home</Link>
    </section>
  )
}

export default Confirmed
