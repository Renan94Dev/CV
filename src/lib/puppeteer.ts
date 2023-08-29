import puppeteer from "puppeteer";

export const savePdf = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  await page.setUserAgent(
    "Puppeteer/5.5.0 (Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36"
  );

  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle0",
  });

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  return pdf;
};
