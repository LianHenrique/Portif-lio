import NavBar from "../../components/NavBar/NavBar"
import Skills from "./Skills/Skills"
import About from "./stections/About/About"
import Hero from "./stections/Hero/Hero"

function Home() {

  return (
    <div>
        <NavBar />
        <Hero />
        <About />
        <Skills />
    </div>
  )
}

export default Home
