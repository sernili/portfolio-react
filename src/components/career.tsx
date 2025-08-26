import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid"

export default function Career() {
  return (
    <section id="career">
      <div className="custom-container my-20 flex h-screen flex-col items-center justify-center space-y-20">
        <div>
          <h2 className="my-6 text-center text-8xl font-bold">Career</h2>
        </div>

        <details className="group bg-dark relative w-full rounded-xl p-4" open>
          <summary className="marker:color-accent open mb-0 flex items-center justify-between marker:absolute marker:content-none">
            <h3 className="text-xl font-bold">Health-related sabbatical</h3>
            <div className="flex items-center space-x-12">
              <span>10/2024 – Present</span>
              <PlusIcon className="text-accent mr-0 h-6 w-6 transition-all duration-300 group-open:hidden hover:scale-110 hover:cursor-pointer" />
              <MinusIcon className="text-accent hidden h-6 w-6 transition-all duration-300 group-open:block hover:scale-110 hover:cursor-pointer" />
            </div>
          </summary>
          <div className="mt-6 space-y-6">
            <p className="">Self-directed further training in React and TypeScript</p>
            <div className="flex flex-wrap gap-2">
              <span className="from-secondary to-accent rounded-2xl bg-gradient-to-r px-2 py-1 font-mono text-xs text-white">
                React
              </span>
              <span className="from-secondary to-accent rounded-2xl bg-gradient-to-r px-2 py-1 font-mono text-xs text-white">
                Next.js
              </span>
              <span className="from-secondary to-accent rounded-2xl bg-gradient-to-r px-2 py-1 font-mono text-xs text-white">
                Typescript
              </span>
            </div>
          </div>
        </details>

        <div className="grid w-full grid-cols-[auto_1fr] items-center gap-6 border-l">
          <div className="">&mdash; 2024 - 2028</div>

          <div className="">
            dotSource SE
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ipsa laboriosam quis
              accusamus quo dolorum, nam similique voluptatibus consectetur veritatis, modi iure
              natus perferendis doloremque quidem eaque excepturi mollitia? Alias?
            </p>
          </div>
          <div className="">&mdash; 2024 - 2028</div>

          <div className="">
            dotSource SE
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ipsa laboriosam quis
              accusamus quo dolorum, nam similique voluptatibus consectetur veritatis, modi iure
              natus perferendis doloremque quidem eaque excepturi mollitia? Alias?
            </p>
          </div>
          <div className="">&mdash; 2024 - 2028</div>

          <div className="">
            dotSource SE
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ipsa laboriosam quis
              accusamus quo dolorum, nam similique voluptatibus consectetur veritatis, modi iure
              natus perferendis doloremque quidem eaque excepturi mollitia? Alias?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
