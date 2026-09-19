import { Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Confirmed from "./pages/Confirmed"
import "./App.css"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="confirmed" element={<Confirmed />} />
      </Route>
    </Routes>
  )
}

export default App
