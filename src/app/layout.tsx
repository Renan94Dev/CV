import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import { socialMedia, userInfo } from "@/data/user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `CV ${userInfo.name}`,
  description: `CV By Renan94Dev :: ${socialMedia[2].link}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
