import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { generateRequestPdf } from "@/lib/generate-request-pdf";

const RECIPIENT_EMAIL = "davidpertoros10@gmail.com";
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB por archivo
const MAX_TOTAL_FILES = 8;

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Falta la variable de entorno RESEND_API_KEY");
    return NextResponse.json(
      { error: "El envío de solicitudes no está configurado todavía." },
      { status: 500 }
    );
  }

  const formData = await request.formData();

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const surface = String(formData.get("surface") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const services = formData.getAll("services").map(String);
  const files = formData
    .getAll("files")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (!name || !phone || !email || !location) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }

  if (files.length > MAX_TOTAL_FILES) {
    return NextResponse.json(
      { error: `Puedes adjuntar como máximo ${MAX_TOTAL_FILES} archivos.` },
      { status: 400 }
    );
  }

  if (files.some((file) => file.size > MAX_FILE_SIZE)) {
    return NextResponse.json(
      { error: "Cada archivo debe pesar como máximo 10 MB." },
      { status: 400 }
    );
  }

  let pdfBytes: Uint8Array;

  try {
    pdfBytes = await generateRequestPdf({
      name,
      phone,
      email,
      location,
      services,
      surface,
      message,
      files,
    });
  } catch (error) {
    console.error("Error generando el PDF de la solicitud", error);
    return NextResponse.json(
      { error: "No se pudo generar el documento de la solicitud." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const uploadedPdfFiles = files.filter(
    (file) => file.type === "application/pdf"
  );

  const uploadedPdfAttachments = await Promise.all(
    uploadedPdfFiles.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
    }))
  );

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Solicitudes Web <onboarding@resend.dev>",
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nueva solicitud de presupuesto — ${name}`,
      text: [
        `Nueva solicitud recibida desde la web.`,
        ``,
        `Nombre: ${name}`,
        `Teléfono: ${phone}`,
        `Email: ${email}`,
        `Localidad: ${location}`,
        `Superficie: ${surface} m²`,
        `Servicios: ${services.join(", ") || "-"}`,
        ``,
        `Consulta el documento adjunto para el detalle completo y las fotografías.`,
        ...(uploadedPdfAttachments.length > 0
          ? [`Además se adjuntan ${uploadedPdfAttachments.length} PDF(s) enviados por el solicitante.`]
          : []),
      ].join("\n"),
      attachments: [
        {
          filename: `solicitud-${slugify(name) || "presupuesto"}.pdf`,
          content: Buffer.from(pdfBytes),
        },
        ...uploadedPdfAttachments,
      ],
    });

    if (error) {
      console.error("Error de Resend enviando el email", error);
      return NextResponse.json(
        { error: "No se pudo enviar la solicitud por correo." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error inesperado enviando el email", error);
    return NextResponse.json(
      { error: "No se pudo enviar la solicitud por correo." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
