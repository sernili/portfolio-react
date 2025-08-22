import astronaut from "../assets/img/astronaut.png"

export default function Header() {
  return (
    <header className="position custom-container flex justify-between p-10">
      <div className="w-1/2">
        <h1 className="my-4 font-mono text-8xl">Lisa Sachse</h1>
        <h2 className="text-tertiary animate-pulse text-3xl">Frontend Developer</h2>
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <img
          src={astronaut}
          alt="astronaut"
          className="k animate-comeUp h-92 w-auto rotate-[25deg]"
        />
      </div>
    </header>
  )
}
