import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpexIA — Lance ton agence IA rentable en 30 jours",
  description:
    "Formation compl\u00e8te pour cr\u00e9er et vendre des services IA aux entreprises locales. Atteins 10k\u20ac/mois.",
  keywords: [
    "agence IA",
    "formation IA",
    "automatisation IA",
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
      <body className={`${dmSans.variable} antialiased`} style={{ fontFamily: "var(--font-dm), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
