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
      className={`custom-container -translate-y-[1rem]s fixed ${scrollActive ? "bg-bg" : ""} top-[1rem] left-[50%] z-10 m-2 flex translate-x-[-50%] items-center justify-between gap-2 rounded-xl p-4 text-white transition-all duration-300`}
    >
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
