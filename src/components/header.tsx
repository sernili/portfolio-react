export default function Header() {
  return (
    <header className="position h-screen w-screen p-10" id="home">
      <div className="custom-container flex h-full w-1/2 flex-col items-start justify-center">
        <h1 className="animate-comeUp1000 font-mono text-6xl text-white">
          Hi! I'm
          <br />
          <span className="text-9xl font-bold">
            Lisa<span className="text-accent animate-pulse">.</span>
          </span>
          <br />
        </h1>
        <span className="from-secondary to-accent mt-6 bg-gradient-to-tr bg-clip-text text-3xl leading-14 text-transparent">
          A Frontend Developer <br /> based in Dresden, Germany
        </span>
      </div>
    </header>
    // TODO: scroll down arrow
  )
}
