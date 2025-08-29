import Header from "./components/header"
import NavBar from "./components/navBar"
import headerImage from "./assets/img/header.png"
import Profile from "./components/profile"
import Skills from "./components/skills"
import Career from "./components/career"
import Projects from "./components/projects"
import Contact from "./components/contact"

function App() {
  return (
    <div className="h-full w-full">
      <div
        style={{ "--image-url": `url(${headerImage})` }}
        className="h-screen bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat"
      >
        <NavBar />

        <Header />
      </div>

      <main className="from-secondary to-darker via-dark bg-linear-to-t">
        <Profile />

        <Skills />

        <Career />

        <Projects />

        <Contact />
      </main>

      <footer className="py-14 text-center text-white">
        <p>Copyright © {new Date().getFullYear()} Lisa Sachse</p>
        <p>
          <a>Impressum</a> &nbsp;|&nbsp;
          <a>Datenschutz</a>
        </p>
      </footer>
    </div>
  )
}

export default App
