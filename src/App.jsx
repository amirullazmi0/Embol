import Navbar from './components/Navbar'
import ScrollTopButton from './components/ScrollTopButton'
import Home from './sections/Home'
import About from './sections/About'
import Product from './sections/Product'
import Contact from './sections/Contact'
import useActiveSection from './hooks/useActiveSection'
import { SECTIONS } from './data/site'
import './styles/App.css'

const IDS = SECTIONS.map((s) => s.id)

export default function App() {
  const active = useActiveSection(IDS)

  return (
    <>
      <Navbar active={active} />
      <main>
        <Home />
        <About />
        <Product />
        <Contact />
      </main>
      <ScrollTopButton />
    </>
  )
}
