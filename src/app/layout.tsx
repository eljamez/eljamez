import { Footer } from "@/components/Footer";
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
  openGraph: {
    title: "eljamez.com - James Augustus Hall",
    description:
      "Internet homepage of James Augustus Hall. Musician, Software Engineer, and World's number something Dad",
    url: "https://eljamez.com/",
    siteName: "eljamez.com",
    images: [
      {
        url: "https://www.eljamez.com/profile.png", // You can change this to a more appropriate image if needed
        width: 1200,
        height: 630,
        alt: "James Augustus Hall profile image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eljamez.com - James Augustus Hall",
    description:
      "Internet homepage of James Augustus Hall. Musician, Software Engineer, and World's number something Dad",
    images: ["https://www.eljamez.com/profile.png"],
    creator: "@eljamez", // Update if you have a Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Google Analytics - requires NEXT_PUBLIC_GOOGLE_ANALYTICS_ID in your .env */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="">
        <main
          className={`${inter.variable} ${russoOne.variable} ${silkscreen.variable} font-silkscreen flex flex-col gap-0 bg-zinc-950 text-zinc-100`}
        >
          <Header />
          <div className="flex flex-col sm:h-auto flex-1">
            <section className="flex-1 bg-zinc-900 h-full  p-4 sm:p-8 duration-400 transition-all">
              {children}
            </section>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
