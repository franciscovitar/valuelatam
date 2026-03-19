import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend("re_5MvA5P9w_AV77NaxungrK67U4YBmuDLhW");

export async function POST(request) {
  try {
    const formData = await request.formData();

    const empresa = formData.get("empresa")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const telefono = formData.get("telefono")?.toString().trim();

    const balance = formData.get("balance");
    const ventas = formData.get("ventas");
    const accionaria = formData.get("accionaria");

    if (!empresa || !email || !telefono) {
      return Response.json(
        { ok: false, error: "Faltan datos obligatorios." },
        { status: 400 },
      );
    }

    if (!balance || !ventas || !accionaria) {
      return Response.json(
        { ok: false, error: "Faltan archivos obligatorios." },
        { status: 400 },
      );
    }

    const files = [
      { label: "Último balance inscripto", file: balance },
      { label: "Detalle de ventas posteriores al cierre", file: ventas },
      { label: "Composición accionaria con CUIT", file: accionaria },
    ];

    const attachments = await Promise.all(
      files.map(async ({ file }) => {
        const arrayBuffer = await file.arrayBuffer();

        return {
          filename: file.name,
          content: Buffer.from(arrayBuffer),
        };
      }),
    );

    const text = [
      "Nueva solicitud de evaluación financiera",
      "",
      `Empresa: ${empresa}`,
      `Email de contacto: ${email}`,
      `Teléfono de contacto: ${telefono}`,
      "",
      "Archivos adjuntos:",
      `- Balance: ${balance.name}`,
      `- Ventas posteriores al cierre: ${ventas.name}`,
      `- Composición accionaria: ${accionaria.name}`,
    ].join("\n");

    const { data, error } = await resend.emails.send({
      from: "Value Latam Evaluación <onboarding@resend.dev>",
      to: ["info@valuelatam.com"],
      replyTo: email,
      subject: `Nueva evaluación financiera - ${empresa}`,
      text,
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { ok: false, error: "No se pudo enviar el email." },
        { status: 500 },
      );
    }

    return Response.json({ ok: true, id: data?.id ?? null });
  } catch (err) {
    console.error("Evaluation route error:", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
