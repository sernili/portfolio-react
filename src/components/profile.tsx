import profileImage from "../assets/img/ich.jpg"

export default function Profile() {
  return (
    <section
      id="profile"
      className="custom-container my-20 flex h-screen flex-col items-center justify-center space-y-20"
    >
      <div>
        <h2 className="my-6 text-center text-8xl font-bold">Expertise</h2>
      </div>

      <div className="grid grid-cols-[1fr_1.5fr] items-center">
        <div className="relative h-80 w-80 overflow-hidden rounded-full">
          <img src={profileImage} alt="profile image" className="h-full w-full object-cover" />
          <div className="bg-primary absolute inset-0 mix-blend-color"></div>
        </div>
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Development <span className="text-accent animate-pulse">.</span>
            </h3>
            <p>
              I focus on <strong>frontend and web development</strong> with technologies like&nbsp;
              <strong>HTML, CSS, JavaScript, Tailwind, React, and TypeScript</strong>, while staying
              open to learning and applying new tools. My main strength lies in building clean,
              responsive user interfaces, with an outlook to grow further towards&nbsp;
              <strong>fullstack development</strong>.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Design & Prototyping <span className="text-accent animate-pulse">.</span>
            </h3>
            <p>
              I create &nbsp;<strong>UI/UX concepts and prototypes in Figma</strong>, ensuring
              designs are user-friendly and align with brand identity. My goal is to connect design
              and development, making ideas tangible and ready for implementation.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Requirements & Collaboration <span className="text-accent animate-pulse">.</span>
            </h3>
            <p>
              I support teams in shaping clear requirements and turning them into actionable
              development tasks. With experience in backlog management, documentation, and close
              cross-team collaboration, I help ensure solutions meet both&nbsp;
              <strong>business goals and user needs</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
