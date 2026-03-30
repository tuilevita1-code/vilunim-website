import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vilunim — AI Voice Receptionist for NZ Trades",
  description:
    "Never miss another job. Lydia is your AI voice receptionist — she answers every call 24/7, qualifies leads, and delivers them straight to you.",
  openGraph: {
    title: "Vilunim — AI Voice Receptionist for NZ Trades",
    description:
      "Never miss another job. Lydia answers every call 24/7 so you can focus on the work.",
    url: "https://vilunim.com",
    siteName: "Vilunim",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
