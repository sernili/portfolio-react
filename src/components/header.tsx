import { ArrowDownIcon } from "@heroicons/react/24/outline"

export default function Header() {
  return (
    <header className="position h-screen w-screen p-10" id="home">
      <div className="custom-container flex h-full w-full flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-bold text-white">
          Lisa Sachse<span className="text-accent animate-pulse">.</span>
        </h1>
        <span className="from-accent mt-6 bg-gradient-to-r to-white bg-clip-text font-mono text-3xl leading-14 text-transparent">
          Frontend Development - Made in Germany
        </span>
        <a href="#profile" className="hover:no-underline">
          <ArrowDownIcon className="mt-30 h-10 w-10 animate-bounce" />
        </a>
      </div>
    </header>
  )
}
