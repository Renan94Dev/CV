import { savePdf } from "@/lib/puppeteer";

export async function POST() {
  const pdfFile = await savePdf();

  const response = new Response(pdfFile, {
    headers: {
      "Content-disposition": "attachment; filename=perfil.pdf",
      "Content-Type": "application/pdf",
    },
    status: 200,
  });

  return response;
}
