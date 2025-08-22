import "./App.css"
import Header from "./components/header"
import NavBar from "./components/navBar"
import headerImage from "./assets/img/header.png"
import profileImage from "./assets/img/ich.jpg"

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

      <main>
        <section
          id="profile"
          className="custom-container my-20 flex h-screen flex-col items-center justify-center space-y-20"
        >
          <div>
            <h2 className="my-6 text-center text-8xl font-bold">My Profile</h2>
          </div>

          <div className="grid grid-cols-[1fr_1.5fr]">
            <div className="relative h-80 w-80 overflow-hidden rounded-full">
              <img src={profileImage} alt="profile image" className="h-full w-full object-cover" />
              <div className="bg-primary absolute inset-0 mix-blend-color"></div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Design <span className="text-secondary animate-pulse">.</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis aut esse,
                voluptatibus ipsa provident et dolor quisquam doloremque atque pariatur consequuntur
                saepe odit eligendi, blanditiis modi fugiat ipsam aspernatur.
              </p>

              <h3 className="text-2xl font-bold">
                Development <span className="text-secondary animate-pulse">.</span>
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, id aut enim
                perspiciatis labore perferendis iure assumenda ipsa veniam rem laboriosam molestias
                quam cum fuga saepe fugiat sit eligendi commodi.
              </p>

              <h3 className="text-2xl font-bold">
                Requirements Engineering <span className="text-secondary animate-pulse">.</span>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati mollitia
                reiciendis numquam, tempora praesentium nemo eos corporis ipsa nam odio amet illo
                provident dolores perferendis placeat vitae laborum accusantium ab?
              </p>
            </div>
          </div>
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
