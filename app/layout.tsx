import type { Metadata } from "next";
import {
  Bebas_Neue,
  DM_Sans,
  Caveat,
} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sadhna Singh | Fullstack Developer",
  description:
    "Portfolio of Sadhna Singh — Fullstack Developer building modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${caveat.variable} antialiased`}
    >
      <body className="w-full h-full flex flex-col">
        <Navbar/>
        <main className="flex flex-col w-full overflow-x-hidden">{children}</main>
        <Footer/>
        </body>
    </html>
  );
}