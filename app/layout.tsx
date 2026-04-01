import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vilunim — Get Paid Faster. Automated Cash Flow for NZ Trades.",
  description:
    "Vilunim connects your Xero account to a powerful automation system that handles every invoice follow-up — automatically. Stop chasing. Start getting paid.",
  openGraph: {
    title: "Vilunim — Get Paid Faster. Automated Cash Flow for NZ Trades.",
    description:
      "The work is done. The money should follow. Automated invoice follow-up for NZ trade businesses.",
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
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
