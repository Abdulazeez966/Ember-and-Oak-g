import MenuCard from "../components/MenuCard"
import { menuItems } from "../data"

function Menu() {
  return (
    <section className="menu menu--page">
      <div className="menu__head">
        <h2>The full list</h2>
        <p>Everything we make, on any given day. Ask what's freshest.</p>
      </div>

      <div className="menu__grid">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Menu
