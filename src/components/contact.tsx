import { useState } from "react"
import kittieImage from "../assets/img/kitties.jpeg"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: implement submit
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  return (
    <section id="contact-me">
      <div className="custom-container my-20 flex h-screen flex-col items-center justify-center space-y-20">
        <div>
          <h2 className="my-6 text-center text-8xl font-bold">Contact</h2>
        </div>

        <div className="grid w-3/4 grid-cols-2 flex-col items-center gap-12 gap-y-8 rounded-2xl bg-white px-8 py-10 shadow-2xl transition-all duration-300">
          <div className="text-darker flex w-full flex-col items-center justify-center gap-8 text-center">
            <h3 className="font-mono text-2xl font-bold">Get in touch!</h3>

            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <img src={kittieImage} alt="profile image" className="h-full w-full object-cover" />
              <div className="bg-primary absolute inset-0 mix-blend-color"></div>
            </div>
            <p>
              My little assistants will make sure your message reaches me purr-fectly and I’ll get
              back to you soon!
            </p>
          </div>
          <div className="w-full">
            {submitted ? (
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
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
