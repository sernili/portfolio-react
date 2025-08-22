import "./App.css"
import Header from "./components/header"
import NavBar from "./components/navBar"

function App() {
  return (
    <div className="h-full w-full">
      <NavBar />

      <Header />

      <main>
        <section id="profile" className="bg-primary custom-container">
          <h2 className="text-center text-6xl font-bold">Profile</h2>
          <p>
            Lorem ipsum dolor sit amet, vitae volutpat, dui conubia, dolor urna. Non auctor, montes
            nulla distinctio.
          </p>
        </section>

        <hr />

        <section id="skills">
          <h2>My Skills</h2>
          <div className="skill-row">
            <h3>Lorem & Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum,
              nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.
            </p>
          </div>
          <div className="skill-row">
            <h3>Lorem Ipsum Dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum,
              lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.
            </p>
          </div>
        </section>

        <hr />

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
