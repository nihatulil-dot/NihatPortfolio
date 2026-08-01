import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Nihat | Portfolio",
  description:
    "Portfolio of Muhammad Nihat Ulil Amri - Data Science Student, Quantitative Trader",
  keywords: [
    "Muhammad Nihat Ulil Amri",
    "Portfolio",
    "Data Science",
    "Quant Trading",
    "Next.js",
    "Python",
    "FastAPI",
  ],
  authors: [{ name: "Muhammad Nihat Ulil Amri" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <LenisProvider>

          {children}

        </LenisProvider>

      </body>
    </html>
  );
}