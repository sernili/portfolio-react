import { ArrowDownIcon } from "@heroicons/react/24/outline"

export default function Header() {
  return (
    <header className="position h-screen w-screen p-10" id="home">
      <div className="custom-container flex h-full w-full flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-bold text-white md:text-9xl">
          Lisa Sachse<span className="text-accent animate-pulse">.</span>
        </h1>
        <span className="from-accent mt-6 bg-gradient-to-r to-white bg-clip-text font-mono text-xl leading-10 text-transparent md:text-3xl">
          Frontend Development - Made in Germany
        </span>
        <a href="#profile" className="hover:no-underline">
          <ArrowDownIcon className="hover:text-tertiary mt-20 h-10 w-10 animate-bounce transition-all duration-300 md:mt-30" />
        </a>
      </div>
    </header>
  )
}
