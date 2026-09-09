import { PDFDocument, PDFFont, StandardFonts, rgb } from "pdf-lib";

const PAGE_WIDTH = 595.28; // A4
const PAGE_HEIGHT = 841.89;
const MARGIN = 50;
const BRAND_COLOR = rgb(0.145, 0.388, 0.282); // #256348

export type RequestPdfData = {
  name: string;
  phone: string;
  email: string;
  location: string;
  services: string[];
  surface: string;
  message: string;
  files: File[];
};

/**
 * The standard PDF fonts only support the WinAnsi (cp1252) charset. Text
 * copied from other apps sometimes arrives as NFD unicode (base letter +
 * combining accent, e.g. "n" + U+0301) which WinAnsi can't encode and
 * crashes pdf-lib. Normalizing to NFC recomposes those into single
 * precomposed characters (e.g. "ñ") that WinAnsi does support; anything
 * left outside that charset is swapped for "?" instead of throwing.
 */
const WINANSI_SAFE_CHARS =
  /[^\t\n\r\x20-\x7E\u00A0-\u00FF\u2018\u2019\u201C\u201D\u2013\u2014\u2022\u2026]/g;

function sanitizeForPdf(text: string): string {
  return text.normalize("NFC").replace(WINANSI_SAFE_CHARS, "?");
}

function wrapText(
  text: string,
  font: PDFFont,
  fontSize: number,
  maxWidth: number
): string[] {
  const lines: string[] = [];

  for (const paragraph of sanitizeForPdf(text).split("\n")) {
    const words = paragraph.split(" ");
    let currentLine = "";

    for (const word of words) {
      const candidate = currentLine ? `${currentLine} ${word}` : word;

      if (font.widthOfTextAtSize(candidate, fontSize) > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = candidate;
      }
    }

    lines.push(currentLine);
  }

  return lines;
}

export async function generateRequestPdf(
  data: RequestPdfData
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let cursorY = PAGE_HEIGHT - MARGIN;
  const contentWidth = PAGE_WIDTH - MARGIN * 2;

  function ensureSpace(height: number) {
    if (cursorY - height < MARGIN) {
      page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      cursorY = PAGE_HEIGHT - MARGIN;
    }
  }

  function drawTitle(text: string) {
    ensureSpace(30);
    page.drawText(sanitizeForPdf(text), {
      x: MARGIN,
      y: cursorY,
      size: 20,
      font: boldFont,
      color: BRAND_COLOR,
    });
    cursorY -= 30;
  }

  function drawSectionLabel(text: string) {
    ensureSpace(20);
    page.drawText(sanitizeForPdf(text.toUpperCase()), {
      x: MARGIN,
      y: cursorY,
      size: 9,
      font: boldFont,
      color: rgb(0.45, 0.45, 0.45),
    });
    cursorY -= 16;
  }

  function drawParagraph(text: string, size = 11) {
    const lines = wrapText(text, font, size, contentWidth);

    for (const line of lines) {
      ensureSpace(size + 6);
      page.drawText(line, {
        x: MARGIN,
        y: cursorY,
        size,
        font,
        color: rgb(0.1, 0.1, 0.1),
      });
      cursorY -= size + 6;
    }
  }

  function drawField(label: string, value: string) {
    drawSectionLabel(label);
    drawParagraph(value || "-");
    cursorY -= 8;
  }

  function drawDivider() {
    ensureSpace(20);
    page.drawLine({
      start: { x: MARGIN, y: cursorY },
      end: { x: PAGE_WIDTH - MARGIN, y: cursorY },
      thickness: 0.5,
      color: rgb(0.85, 0.85, 0.85),
    });
    cursorY -= 20;
  }

  drawTitle("Solicitud de presupuesto");
  drawParagraph(
    `Recibida el ${new Date().toLocaleString("es-ES")}`,
    9
  );
  cursorY -= 10;
  drawDivider();

  drawField("Nombre", data.name);
  drawField("Teléfono", data.phone);
  drawField("Email", data.email);
  drawField("Localidad", data.location);
  drawField("Superficie aproximada", `${data.surface} m²`);
  drawField(
    "Servicios seleccionados",
    data.services.length > 0 ? data.services.map((s) => `• ${s}`).join("\n") : "-"
  );
  drawField(
    "Comentarios",
    data.message.trim() ? data.message.trim() : "Sin comentarios"
  );

  const imageFiles = data.files.filter((file) =>
    ["image/jpeg", "image/png"].includes(file.type)
  );
  const pdfFiles = data.files.filter(
    (file) => file.type === "application/pdf"
  );

  if (data.files.length > 0) {
    drawDivider();
    drawSectionLabel(
      `Archivos adjuntos (${data.files.length})`
    );
    drawParagraph(
      data.files
        .map(
          (file) =>
            `• ${file.name}${pdfFiles.includes(file) ? " (adjunto por separado)" : ""}`
        )
        .join("\n"),
      10
    );
  }

  for (const file of imageFiles) {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const image =
      file.type === "image/png"
        ? await pdfDoc.embedPng(bytes)
        : await pdfDoc.embedJpg(bytes);

    const photoPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    const maxWidth = PAGE_WIDTH - MARGIN * 2;
    const maxHeight = PAGE_HEIGHT - MARGIN * 2 - 30;
    const scale = Math.min(
      maxWidth / image.width,
      maxHeight / image.height,
      1
    );
    const drawWidth = image.width * scale;
    const drawHeight = image.height * scale;

    photoPage.drawText(sanitizeForPdf(file.name), {
      x: MARGIN,
      y: PAGE_HEIGHT - MARGIN,
      size: 10,
      font: boldFont,
      color: rgb(0.3, 0.3, 0.3),
    });

    photoPage.drawImage(image, {
      x: (PAGE_WIDTH - drawWidth) / 2,
      y: (PAGE_HEIGHT - drawHeight - 30) / 2,
      width: drawWidth,
      height: drawHeight,
    });
  }

  return pdfDoc.save();
}
