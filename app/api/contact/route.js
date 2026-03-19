import { Resend } from "resend";

const resend = new Resend("re_5MvA5P9w_AV77NaxungrK67U4YBmuDLhW");

export async function POST(req) {
  try {
    const { nombre, email, telefono, empresa, objetivo, mensaje } =
      await req.json();

    if (!nombre || !email || !telefono || !empresa || !objetivo) {
      return Response.json(
        { ok: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "ValueLatam Formulario <onboarding@resend.dev>",
      to: ["info@valuelatam.com"],
      replyTo: email,
      subject: `Nuevo contacto (${objetivo}) - ${empresa}`,
      text: [
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        `Teléfono: ${telefono}`,
        `Empresa: ${empresa}`,
        `Objetivo: ${objetivo}`,
        "",
        "Mensaje:",
        mensaje || "-",
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
