export default function Skills() {
  return (
    <section id="skills">
      <div className="custom-container my-20 flex h-screen flex-col items-center justify-center space-y-20">
        <div>
          <h2 className="main-header">Skills</h2>
        </div>

        <div className="flex w-2/3 flex-col items-center gap-y-8 text-white">
          <div className="group grid w-full grid-cols-10 rounded-2xl">
            <div className="from-secondary to-accent z-10 col-span-9 cursor-default rounded-l-2xl bg-gradient-to-r p-2 font-mono">
              HTML
            </div>
            <div className="col-span-1 rounded-r-2xl bg-white p-2">&nbsp;</div>
            <div className="z-0 col-span-10 max-h-0 overflow-hidden p-0 text-white opacity-0 transition-all duration-1000 ease-in-out group-hover:max-h-96 group-hover:p-4 group-hover:opacity-100">
              I write semantic and accessible HTML, creating structured markup that forms the
              foundation of web applications. My work ensures clarity, maintainability, and
              compatibility across browsers and devices.
            </div>
          </div>

          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-9 rounded-l-2xl bg-gradient-to-r p-2 font-mono">
              CSS (incl. SCSS, Tailwind)
            </div>
            <div className="col-span-1 rounded-r-2xl bg-white p-2">&nbsp;</div>
            <div className="z-0 col-span-10 max-h-0 overflow-hidden p-0 text-white opacity-0 transition-all duration-1000 ease-in-out group-hover:max-h-96 group-hover:p-4 group-hover:opacity-100">
              I style web interfaces using CSS, SCSS, and Tailwind CSS, focusing on responsive
              design and visual consistency. I have implemented complex layouts and ensured that
              designs match branding guidelines while remaining performant.
            </div>
          </div>

          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-9 rounded-l-2xl bg-gradient-to-r p-2 font-mono">
              JavaScript (ES6)
            </div>
            <div className="col-span-1 rounded-r-2xl bg-white p-2">&nbsp;</div>
            <div className="z-0 col-span-10 max-h-0 overflow-hidden p-0 text-white opacity-0 transition-all duration-1000 ease-in-out group-hover:max-h-96 group-hover:p-4 group-hover:opacity-100">
              I am a certified Salesforce JavaScript Developer, with strong experience in modern
              JavaScript (ES6+). I have built dynamic and interactive web features, debugged complex
              scripts, and emphasized clean, reusable code in my projects.
            </div>
          </div>

          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-5 rounded-l-2xl bg-gradient-to-r p-2 font-mono">
              React (incl. Next.js)
            </div>
            <div className="col-span-5 rounded-r-2xl bg-white p-2">&nbsp;</div>
            <div className="z-0 col-span-10 max-h-0 overflow-hidden p-0 text-white opacity-0 transition-all duration-1000 ease-in-out group-hover:max-h-96 group-hover:p-4 group-hover:opacity-100">
              I am actively expanding my skills in React and TypeScript through private projects and
              ongoing learning. I build reusable components, manage state efficiently, and integrate
              APIs to create modern, scalable web applications. My goal is to grow towards fullstack
              development while mastering these technologies.
            </div>
          </div>

          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-6 rounded-l-2xl bg-gradient-to-r p-2 font-mono">
              TypeScript
            </div>
            <div className="col-span-4 rounded-r-2xl bg-white p-2">&nbsp;</div>
            <div className="z-0 col-span-10 max-h-0 overflow-hidden p-0 text-white opacity-0 transition-all duration-1000 ease-in-out group-hover:max-h-96 group-hover:p-4 group-hover:opacity-100">
              I write semantic and accessible HTML, creating structured markup that forms the
              foundation of web applications. My work ensures clarity, maintainability, and
              compatibility across browsers and devices.
            </div>
          </div>

          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-4 rounded-l-2xl bg-gradient-to-r p-2 font-mono">
              Salesforce B2B Commerce
            </div>
            <div className="col-span-6 rounded-r-2xl bg-white p-2">&nbsp;</div>
            <div className="z-0 col-span-10 max-h-0 overflow-hidden p-0 text-white opacity-0 transition-all duration-1000 ease-in-out group-hover:max-h-96 group-hover:p-4 group-hover:opacity-100">
              In previous roles, I worked extensively with Salesforce B2B Commerce and Converse,
              managing frontend requirements, implementing features, and configuring storefronts.
              While I do not currently pursue these technologies, this experience strengthened my
              understanding of complex enterprise platforms and cross-team collaboration.
            </div>
          </div>

          <div className="group grid w-full grid-cols-10">
            <div className="from-secondary to-accent z-10 col-span-6 rounded-l-2xl bg-gradient-to-r p-2 font-mono">
              AST (codecept.js/ Playwright)
            </div>
            <div className="col-span-4 rounded-r-2xl bg-white p-2">&nbsp;</div>
            <div className="z-0 col-span-10 max-h-0 overflow-hidden p-0 text-white opacity-0 transition-all duration-1000 ease-in-out group-hover:max-h-96 group-hover:p-4 group-hover:opacity-100">
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
