import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid"

export default function Career() {
  const workExperience = [
    {
      period: "10/2024 – Present",
      company: "Health-related sabbatical",
      details: ["Self-directed further training in React and TypeScript"],
      tags: ["React", "Next.js", "Typescript"],
    },
    {
      period: "07/2024 – 09/2024",
      company: "AQMS GmbH",
      role: "Frontend Developer",
      details: [
        "Debugging and performance optimization of a TV streaming service based on Python, React, and TypeScript",
        "Independent migration of a website to Next.js and TypeScript",
        "Design and implementation of UI/UX concepts for multiple websites and digital products using Figma",
        "Implementation and configuration of Google Analytics tracking across the complete purchase process of a digital product",
      ],
      tags: ["React", "Next.js", "Typescript", "Figma", "Google Analytics"],
    },
    {
      period: "02/2021 – 06/2024",
      company: "dotSource SE",
      role: "Frontend Developer",
      details: [
        "Client consulting regarding the optimal implementation of new, complex features",
        "Creation of design proposals in line with the client’s corporate identity",
        "Independent responsibility for the frontend backlog, including ticket creation, refinement, task prioritization, and deputy leadership of Scrum meetings",
        "Preparation of documentation and guides for the client",
        "Independent development of Codecept.js tests for a complete e-commerce shop",
        "Clean and precise implementation of frontend requirements in close collaboration with the backend team (Salesforce B2B Classic and Lightning)",
      ],
      tags: ["Tailwind", "Codecept.js", "Salesforce"],
    },
    {
      period: "10/2020 – 01/2021",
      company: "Self-study",
      role: "Frontend Developer Training",
      details: ["Training towards becoming a Frontend Developer"],
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      period: "05/2018 – 06/2019",
      company: "Motion Control and Power Electronics GmbH",
      role: "Working Student IT",
      details: [
        "Support in the selection and introduction of a document management system",
        "Development of a Python-based interface for data transfer",
      ],
      tags: ["Python"],
    },
  ]

  const education = [
    {
      period: "10/2019 – 04/2021",
      degree: "M.Sc. Business Psychology (not completed)",
      institution: "IU International University of Applied Sciences",
    },
    {
      period: "09/2017 – 09/2019",
      degree: "B.Sc. Business Informatics",
      grade: "2.1",
      institution: "AKAD University, Stuttgart",
    },
    {
      period: "10/2013 – 02/2017",
      degree: "B.A. Business Administration",
      grade: "1.4",
      institutions: ["HTW Dresden", "Institut Supérieur de Gestion Paris"],
    },
    {
      period: "08/2005 – 08/2013",
      degree: "Abitur (German High School Diploma)",
      grade: "1.2",
      institution: "Julius-Ambrosius-Hülße-Gymnasium Dresden",
    },
  ]

  return (
    <section id="career">
      <div className="custom-container my-20 flex h-screen flex-col items-center justify-center space-y-20">
        <div>
          <h2 className="my-6 text-center text-8xl font-bold">Career</h2>
        </div>
        <div className="space-y-4">
          {workExperience.map((work) => {
            return (
              <details className="group bg-dark relative w-full rounded-xl p-4">
                <summary className="marker:color-accent open mb-0 flex items-center justify-between marker:absolute marker:content-none">
                  <h3 className="text-xl font-bold">
                    {work.role && `${work.role} | `}
                    {work.company}
                  </h3>
                  <div className="flex items-center space-x-12">
                    <span>{work.period}</span>
                    <PlusIcon className="text-accent mr-0 h-6 w-6 transition-all duration-300 group-open:hidden hover:scale-110 hover:cursor-pointer" />
                    <MinusIcon className="text-accent hidden h-6 w-6 transition-all duration-300 group-open:block hover:scale-110 hover:cursor-pointer" />
                  </div>
                </summary>
                <div className="mt-6 space-y-6">
                  <ol className="list-inside list-disc">
                    {work.details.map((detail) => {
                      return <li>{detail}</li>
                    })}
                  </ol>
                  <div className="flex flex-wrap gap-3">
                    {work.tags.map((tag) => {
                      return (
                        <span className="from-secondary to-accent rounded-2xl bg-gradient-to-r px-2 py-1 font-mono text-xs text-white">
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </details>
            )
          })}
        </div>
      </div>
    </section>
  )
}
