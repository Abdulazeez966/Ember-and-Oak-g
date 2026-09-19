import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import MenuCard from "../components/MenuCard"
import Story from "../components/Story"
import VisitSection from "../components/VisitSection"
import { menuItems } from "../data"

function Home() {
  const preview = menuItems.slice(0, 3)

  return (
    <>
      <Hero />

      <section className="menu">
        <div className="menu__head">
          <h2>This week's pour</h2>
          <p>A short list, changed by what's freshest.</p>
        </div>

        <div className="menu__grid">
          {preview.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <Link to="/menu" className="menu__more">See the full menu →</Link>
      </section>

      <Story />
      <VisitSection />
    </>
  )
}

export default Home
