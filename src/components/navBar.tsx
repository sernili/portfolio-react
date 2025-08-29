import { useEffect, useState } from "react"

export default function NavBar() {
  const [scrollActive, setScrollActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > document.body.clientHeight)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`-translate-y-[1rem]s fixed w-full ${scrollActive ? "bg-darker" : ""} top-0 left-[50%] z-100 translate-x-[-50%] opacity-90 transition-all duration-300`}
    >
      <div className="custom-container flex items-center justify-between gap-2 p-4 text-white">
        <a href="#home" className="soft-scroll block font-mono text-2xl font-bold no-underline">
          LISA<span className="text-secondary text-4xl">.</span>
        </a>

        <div className="group flex w-full items-center justify-end gap-6">
          <a
            className="soft-scroll block no-underline transition-all duration-300 group-hover:opacity-40 hover:opacity-100"
            href="#profile"
          >
            Expertise
          </a>
          <a
            className="soft-scroll block no-underline transition-all duration-300 group-hover:opacity-40 hover:opacity-100"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="soft-scroll block no-underline transition-all duration-300 group-hover:opacity-40 hover:opacity-100"
            href="#career"
          >
            Career
          </a>
          <a
            className="soft-scroll block no-underline transition-all duration-300 group-hover:opacity-40 hover:opacity-100"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="soft-scroll hover:text-darker hover:border-darker ml-4 block border p-4 no-underline transition-all duration-300 hover:bg-white"
            href="#contact-me"
          >
            Get in touch!
          </a>
        </div>
      </div>
    </nav>
  )
}
