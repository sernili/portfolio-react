import CatImg from "./cats"

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   message: "",
  // })

  // const [submitted, setSubmitted] = useState(false)

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = event.target
  //   setFormData({ ...formData, [name]: value })
  // }

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   try {
  //     const res = await fetch("/src/api/resend.tsx", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     })
  //     if (res.ok) {
  //       setSubmitted(true)
  //     } else {
  //       console.error("Error submitting form")
  //     }
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  return (
    <section
      id="contact-me"
      className="text-darker flex w-full flex-col items-center justify-center bg-white/80"
    >
      <div className="flex w-full flex-col items-center justify-center space-y-20 px-8 py-24 text-center md:w-3/4 lg:text-left">
        <div className="z-0 w-full space-y-8">
          <div className="mb-14 grid w-full items-center justify-end gap-8 lg:grid-cols-2">
            <div className="space-y-12">
              <h2 className="w-full font-mono text-8xl font-bold">Get in touch!</h2>
              <div className="flex w-full items-center justify-center">
                <div className="block h-60 w-60 lg:hidden">
                  <CatImg />
                </div>
              </div>

              <p className="font-mono">
                My assistants will make sure your message reaches me purr-fectly and I’ll get back
                to you soon!
              </p>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="hidden h-80 w-80 lg:block">
                <CatImg />
              </div>
            </div>
          </div>

          <p>
            <a
              href="mailto:l.sachse.professional@gmail.com"
              target="_blank"
              className="text-darker after:bg-tertiary relative text-[clamp(1.25rem,3vw,2rem)] font-bold text-wrap after:absolute after:bottom-[-10%] after:left-[-5%] after:-z-10 after:h-4 after:w-[110%] after:rounded-2xl after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:no-underline hover:after:h-[120%]"
            >
              l.sachse.professional@gmail.com
            </a>
          </p>
          <div className="z-10 w-full flex-col items-center justify-center gap-2 space-y-2 font-mono max-lg:flex">
            <p className="relative z-0 w-fit">
              <a
                href="https://github.com/sernili"
                target="_blank"
                className="text-darker after:bg-secondary after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-0 after:w-full after:transition-all after:duration-100 after:content-[''] hover:after:h-1"
              >
                GitHub
              </a>
            </p>
            <p className="relative z-0 w-fit">
              <a
                href="https://www.linkedin.com/in/lisa-sachse-7269431b4/?originalSubdomain=de"
                target="_blank"
                className="text-darker after:bg-secondary after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-0 after:w-full after:transition-all after:duration-100 after:content-[''] hover:after:h-1"
              >
                LinkedIn
              </a>
            </p>
            <p className="relative z-0 w-fit">
              <a
                href="https://www.xing.com/profile/Lisa_Sachse"
                target="_blank"
                className="text-darker after:bg-secondary after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-0 after:w-full after:transition-all after:duration-100 after:content-[''] hover:after:h-1"
              >
                XING
              </a>
            </p>
          </div>

          {/* {submitted ? (
              <p className="text-darker text-center font-mono font-medium">
                Thank you!
                <br />
                <br /> Your message has been sent.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="grid w-full grid-cols-2 gap-4 font-mono">
                <div>
                  <label className="text-dark block text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="focus:ring-darker text-darker mt-1 w-full rounded-sm border p-2 focus:ring-2 focus:outline-none"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="text-dark block text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="focus:ring-darker text-darker mt-1 w-full rounded-sm border p-2 focus:ring-2 focus:outline-none"
                    placeholder="Your last name"
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-dark block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:ring-darker text-darker mt-1 w-full rounded-sm border p-2 focus:ring-2 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-dark block text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="focus:ring-darker text-darker mt-1 w-full rounded-sm border p-2 focus:ring-2 focus:outline-none"
                    placeholder="Your message..."
                  />
                </div>

                <div className="col-span-2 text-start">
                  <button
                    type="submit"
                    className="from-secondary to-primary w-fit rounded-sm bg-gradient-to-tr px-4 py-2 text-center text-white transition-colors hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )} */}
        </div>
      </div>
    </section>
  )
}
