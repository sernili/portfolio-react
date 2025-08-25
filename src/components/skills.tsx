export default function Skills() {
  return (
    <section id="skills">
      <div className="custom-container my-20 flex h-screen flex-col items-center justify-center space-y-20">
        <div>
          <h2 className="my-6 text-center text-8xl font-bold">My Skills</h2>
        </div>

        <div className="flex w-full flex-col items-center gap-y-6 text-white">
          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-9 cursor-default bg-gradient-to-r p-2">
              HTML
            </div>
            <div className="col-span-1 bg-white p-2">&nbsp;</div>
            <div className="text-bg group-hover:animate-slideDownUnder invisible z-5 col-span-10 hidden bg-white/80 p-4 transition-all duration-3000 group-hover:visible group-hover:block">
              I write semantic and accessible HTML, creating structured markup that forms the
              foundation of web applications. My work ensures clarity, maintainability, and
              compatibility across browsers and devices.
            </div>
          </div>

          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-9 bg-gradient-to-r p-2">
              CSS (incl. SCSS, Tailwind)
            </div>
            <div className="col-span-1 bg-white p-2">&nbsp;</div>
            <div className="text-bg group-hover:animate-slideDownUnder invisible z-5 col-span-10 hidden bg-white/80 p-4 transition-all duration-3000 group-hover:visible group-hover:block">
              I style web interfaces using CSS, SCSS, and Tailwind CSS, focusing on responsive
              design and visual consistency. I have implemented complex layouts and ensured that
              designs match branding guidelines while remaining performant.
            </div>
          </div>

          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-9 bg-gradient-to-r p-2">
              JavaScript (ES6)
            </div>
            <div className="col-span-1 bg-white p-2">&nbsp;</div>
            <div className="text-bg group-hover:animate-slideDownUnder invisible z-5 col-span-10 hidden bg-white/80 p-4 transition-all duration-3000 group-hover:visible group-hover:block">
              I am a certified Salesforce JavaScript Developer, with strong experience in modern
              JavaScript (ES6+). I have built dynamic and interactive web features, debugged complex
              scripts, and emphasized clean, reusable code in my projects.
            </div>
          </div>

          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-5 bg-gradient-to-r p-2">
              React (incl. Next.js)
            </div>
            <div className="col-span-5 bg-white p-2">&nbsp;</div>
            <div className="text-bg group-hover:animate-slideDownUnder invisible z-5 col-span-10 hidden bg-white/80 p-4 transition-all duration-3000 group-hover:visible group-hover:block">
              I am actively expanding my skills in React and TypeScript through private projects and
              ongoing learning. I build reusable components, manage state efficiently, and integrate
              APIs to create modern, scalable web applications. My goal is to grow towards fullstack
              development while mastering these technologies.
            </div>
          </div>

          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-6 bg-gradient-to-r p-2">
              TypeScript
            </div>
            <div className="col-span-4 bg-white p-2">&nbsp;</div>
            <div className="text-bg group-hover:animate-slideDownUnder invisible z-5 col-span-10 hidden bg-white/80 p-4 transition-all duration-3000 group-hover:visible group-hover:block">
              I write semantic and accessible HTML, creating structured markup that forms the
              foundation of web applications. My work ensures clarity, maintainability, and
              compatibility across browsers and devices.
            </div>
          </div>

          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-4 bg-gradient-to-r p-2">
              Salesforce B2B Commerce
            </div>
            <div className="col-span-6 bg-white p-2">&nbsp;</div>
            <div className="text-bg group-hover:animate-slideDownUnder invisible z-5 col-span-10 hidden bg-white/80 p-4 transition-all duration-3000 group-hover:visible group-hover:block">
              In previous roles, I worked extensively with Salesforce B2B Commerce and Converse,
              managing frontend requirements, implementing features, and configuring storefronts.
              While I do not currently pursue these technologies, this experience strengthened my
              understanding of complex enterprise platforms and cross-team collaboration.
            </div>
          </div>

          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-6 bg-gradient-to-r p-2">
              AST (codecept.js/ Playwright)
            </div>
            <div className="col-span-4 bg-white p-2">&nbsp;</div>
            <div className="text-bg group-hover:animate-slideDownUnder invisible z-5 col-span-10 hidden bg-white/80 p-4 transition-all duration-3000 group-hover:visible group-hover:block">
              I have developed automated tests using codecept.js and Playwright, ensuring the
              quality and reliability of digital storefronts. This includes end-to-end test
              scenarios and maintaining test suites for long-term project stability.
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}
