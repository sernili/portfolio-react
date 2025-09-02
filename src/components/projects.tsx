import yummyImg from "../assets/img/yummy.png"

export default function Projects() {
  const yummyTags = ["Next.js", "Typescript", "Tailwind", "Firestore", "Figma", "Zustand"]

  return (
    <section id="projects">
      <div className="custom-container my-20 flex h-screen flex-col items-center justify-center space-y-20">
        <div>
          <h2 className="my-6 text-center text-8xl font-bold">Projects</h2>
        </div>

        <div className="flex w-2/3 flex-col items-center gap-y-8 text-white">
          <div className="bg-darker grid grid-cols-2 gap-8 rounded-2xl p-6 shadow-2xl transition-all duration-300">
            <img src={yummyImg} alt="yummy" className="h-full w-full rounded-xl object-cover" />
            <div className="flex h-full flex-col items-start justify-between py-6">
              <div>
                <h3 className="mb-2 font-mono text-2xl">Yummy!</h3>
                <p className="mb-6">
                  <a
                    href="https://yummy-lovat-beta.vercel.app/"
                    target="_blank"
                    className="text-tertiary w-fit border-b hover:font-semibold hover:no-underline"
                  >
                    Website
                  </a>
                  &nbsp;|&nbsp;
                  <a
                    href="https://github.com/sernili/2025-02-Yummy"
                    target="_blank"
                    className="text-tertiary border-b hover:font-semibold hover:no-underline"
                  >
                    Repository
                  </a>
                </p>
                <p>
                  A sleek and user-friendly app to save, organize, and manage your favorite recipes.
                  It lets you create personalized meal plans from your collection, making weekly
                  cooking simple and stress-free. Designed with a clean interface, it combines
                  practicality and inspiration for everyday cooking.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {yummyTags.map((tag) => {
                  return (
                    <span className="from-secondary to-accent rounded-2xl bg-gradient-to-r px-2 py-1 font-mono text-xs text-white">
                      {tag}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
