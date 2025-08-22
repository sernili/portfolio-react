export default function NavBar() {
  return (
    <nav className="bg-bg sticky top-2 z-10 m-2 flex items-center justify-between gap-2 rounded-xl p-4 text-white">
      <a href="#home" className="soft-scroll block font-mono text-2xl font-bold no-underline">
        LISA<span className="text-secondary text-4xl">.</span>
      </a>

      <div className="flex w-full items-center justify-end gap-6">
        <a
          className="soft-scroll hover:text-secondary slow block no-underline transition-all duration-300 hover:scale-125 hover:tracking-wider"
          href="#profile"
        >
          Profile
        </a>
        <a
          className="soft-scroll hover:text-secondary slow block no-underline transition-all duration-300 hover:scale-125 hover:tracking-wider"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="soft-scroll hover:text-secondary slow block no-underline transition-all duration-300 hover:scale-105 hover:tracking-wider"
          href="#projects-overview"
        >
          Projects
        </a>
        <a
          className="soft-scroll hover:text-secondary slow ml-4 block border p-4 no-underline transition-all duration-300 hover:scale-105 hover:space-x-1.5"
          href="#contact-me"
        >
          Get in touch!
        </a>
      </div>
    </nav>
  )
}
