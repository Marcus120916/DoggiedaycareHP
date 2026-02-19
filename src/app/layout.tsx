import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hundstund | Ditt hunddagis",
  description: "Ett tryggt och kärleksfullt hunddagis för dina fyrbenta vänner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans flex flex-col min-h-screen`}>
        <Navbar />
        {/* 'flex-grow' ser till att footern alltid är längst ner även på korta sidor */}
        <main className="relative z-10 flex-grow pt-20">
          {children}
        </main>
        <Footer /> 
      </body>
    </html>
  );
}
