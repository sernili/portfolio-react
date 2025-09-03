import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

export default function NavBar() {
  // Scroll Effect
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

  // Mobile Menu
  const [isOpen, setIsOpen] = useState(false)
  const menuClasses_Base =
    "group max-md:bg-darker flex w-full items-center justify-end gap-6 max-md:overflow-hidden  max-md:absolute max-md:top-[calc(16px+16px+41px)] max-md:left-0 max-md:transition-all max-md:duration-500 max-md:ease-in-out max-md:w-full max-md:flex-col max-md:items-center max-md:justify-start max-md:gap-10 "

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={`-translate-y-[1rem]s fixed w-full ${scrollActive ? "bg-darker" : ""} top-0 left-[50%] z-100 translate-x-[-50%] opacity-90 transition-all duration-1000`}
    >
      <div className="custom-container flex items-center justify-between gap-2 p-4 text-white">
        <a href="#home" className="soft-scroll block font-mono text-2xl font-bold no-underline">
          LISA<span className="text-secondary text-4xl">.</span>
        </a>

        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <XMarkIcon className="group-hover:text-darker h-6 w-6" />
          ) : (
            <Bars3Icon className="group-hover:text-darker h-6 w-6" />
          )}
        </button>
        <div
          className={
            isOpen
              ? `${menuClasses_Base} max-md:h-screen max-md:p-12`
              : `${menuClasses_Base} max-md:h-0`
          }
        >
          <a
            className="soft-scroll block no-underline transition-all duration-300 group-hover:opacity-40 hover:opacity-100"
            href="#profile"
            onClick={toggleMenu}
          >
            Expertise
          </a>
          <a
            className="soft-scroll block no-underline transition-all duration-300 group-hover:opacity-40 hover:opacity-100"
            href="#skills"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            className="soft-scroll block no-underline transition-all duration-300 group-hover:opacity-40 hover:opacity-100"
            href="#career"
            onClick={toggleMenu}
          >
            Career
          </a>
          <a
            className="soft-scroll block no-underline transition-all duration-300 group-hover:opacity-40 hover:opacity-100"
            href="#projects"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            className="soft-scroll hover:text-darker hover:border-darker ml-4 block border p-4 text-center no-underline transition-all duration-300 hover:bg-white max-md:w-full"
            href="#contact-me"
            onClick={toggleMenu}
          >
            Get in touch!
          </a>
        </div>
      </div>
    </nav>
  )
}
