// import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(req) {
//   try {
//     const { firstName, lastName, email, message } = await req.json()

//     await resend.emails.send({
//       from: "Portfolio",
//       to: "li.sachse@gmail.com",
//       subject: "Neue Kontaktanfrage",
//       text: `Von: ${firstName} ${lastName}\n\n(${email})\n\n${message}`,
//     })

//     return new Response(JSON.stringify({ success: true }), { status: 200 })
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 })
//   }
// }
