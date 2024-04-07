import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["sebaprogramer@gmail.com"], // Asegúrate de enviar al email proporcionado en el formulario.
      subject: subject,
      react: EmailTemplate({ firstName: name, message: message, email: email }), // Ajusta el componente EmailTemplate para aceptar y mostrar el mensaje.
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
