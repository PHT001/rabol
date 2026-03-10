import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpexIA — Lance ton agence IA rentable en 30 jours",
  description:
    "Formation complète pour créer et vendre des services IA aux entreprises locales avec Claude et OpenClaw. Atteins 10k€/mois.",
  keywords: [
    "agence IA",
    "formation IA",
    "Claude",
    "OpenClaw",
    "intelligence artificielle",
    "freelance IA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
