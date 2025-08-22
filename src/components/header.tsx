export default function Header() {
  return (
    <header className="position h-screen w-screen p-10" id="home" a>
      <div className="custom-container flex h-full w-1/2 flex-col items-start justify-center">
        <h1 className="my-4 font-mono text-6xl">
          Hi! I'm
          <br />
          <span className="text-9xl font-bold">
            Lisa<span className="text-secondary animate-pulse">.</span>
          </span>
        </h1>
        <h2 className="text-secondary mt-6 text-3xl leading-14">
          A Frontend Developer <br />
          based in Dresden, Germany
        </h2>
      </div>
    </header>
    // TODO: scroll down arrow
  )
}
