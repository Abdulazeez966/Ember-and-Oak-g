import { useState } from "react"

// No backend on GitHub Pages (static hosting only), so this ships with
// curated pairing notes instead of a live AI call — see the Netlify
// version of this project for the Groq-backed version of this feature.
const NOTES = {
  Filter: "Pairs well with something plain — a croissant, not a pastry that fights it.",
  Espresso: "Drink it first, before anything sweet touches your palate.",
  Cold: "Best after noon, when the ice has time to matter.",
  Pastry: "Eat it warm if you can — ask when the last batch came out.",
}

function MenuCard({ item }) {
  const [showNote, setShowNote] = useState(false)
  const note = NOTES[item.category] || "A good all-day choice."

  return (
    <article className="card">
      <p className="card__cat">{item.category}</p>
      <div className="card__row">
        <h3>{item.name}</h3>
        <span className="card__price">{item.price}</span>
      </div>
      <p className="card__desc">{item.description}</p>

      {showNote ? (
        <p className="card__note">{note}</p>
      ) : (
        <button className="card__note-btn" onClick={() => setShowNote(true)}>
          Get a pairing tip
        </button>
      )}
    </article>
  )
}

export default MenuCard
