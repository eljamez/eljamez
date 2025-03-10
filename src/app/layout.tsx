import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter, Russo_One, Silkscreen } from "next/font/google";
import React from "react";
import { Header } from "../components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const russoOne = Russo_One({
  subsets: ["latin"],
  variable: "--font-russo-one",
  display: "swap",
  weight: ["400"],
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-silkscreen",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "eljamez.com - James Augustus Hall",
  description:
    "Internet homepage of James Augustus Hall. Musician, Software Engineer, and World's number something Dad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <main
          className={`${inter.variable} ${russoOne.variable} ${silkscreen.variable} font-silkscreen flex flex-col h-screen sm:gap-4 bg-zinc-950`}
        >
          <Header />
          <div className="flex flex-col h-full sm:h-auto sm:flex-row gap-4 md:gap-12">
            <Sidebar />
            <section className="flex-1 bg-zinc-900 hover:bg-zinc-800 sm:rounded-l-3xl p-4 sm:p-8 duration-400 transition-all">
              {children}
            </section>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
