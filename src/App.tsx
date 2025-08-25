import "./App.css"
import Header from "./components/header"
import NavBar from "./components/navBar"
import headerImage from "./assets/img/header.png"
import Profile from "./components/profile"
import Skills from "./components/skills"

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

        <section id="projects-overview">
          <h2>My Projects</h2>

          <div className="project-card-container">
            <div className="projects-card">
              <img src="https://picsum.photos/400/250" />
              <div className="project-text">
                <h3 className="project-title">Project1</h3>
                <p className="project-description">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="projects-card">
              <img src="https://picsum.photos/400/250" />
              <div className="project-text">
                <h3 className="project-title">Project1</h3>
                <p className="project-description">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="projects-card">
              <img src="https://picsum.photos/400/250" />
              <div className="project-text">
                <h3 className="project-title">Project1</h3>
                <p className="project-description">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="projects-card">
              <img src="https://picsum.photos/400/250" />
              <div className="project-text">
                <h3 className="project-title">Project1</h3>
                <p className="project-description">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="projects-card">
              <img src="https://picsum.photos/400/250" />
              <div className="project-text">
                <h3 className="project-title">Project1</h3>
                <p className="project-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sed?
                </p>
              </div>
            </div>
          </div>

          <div className="github-link">
            <h3 className="github-heading">You can also:</h3>
            <p className="github-text">
              Check out my{" "}
              <a href="https://github.com/sernili" className="github-link" target="_blank">
                GitHub
              </a>{" "}
              here!
            </p>
          </div>
        </section>

        <hr />

        <section id="contact-me">
          <h2>Get In Touch</h2>
          <h3>Lorem ipsum dolor sit amet, non elit.</h3>
          <p>
            Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales, tellus donec dui,
            ornare erat.
          </p>
          <a className="btn" href="mailto:li.sachse@gmail.com">
            CONTACT ME
          </a>
        </section>
      </main>

      <footer className="bottom-container">
        <p>Copyright © 2020 Lisa Sachse</p>
      </footer>

      <a href="#" className="scroll-btn hide-btn">
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  )
}

export default App
