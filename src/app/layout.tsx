import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Merriweather, Zilla_Slab } from "next/font/google";
import React from "react";
import { Header } from "../components/Header";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  variable: "--font-zilla-slab",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "eljamez.com - James Augustus Hall",
  description:
    "Internet homepage of James Augustus Hall, Senior Software Engineer, Full Stack",
  openGraph: {
    title: "eljamez.com - James Augustus Hall",
    description:
      "Internet homepage of James Augustus Hall, Senior Software Engineer, Full Stack",
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
      "Internet homepage of James Augustus Hall, Senior Software Engineer, Full Stack",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          className={`${merriweather.variable} ${zillaSlab.variable} font-serif flex flex-col gap-0 min-h-screen text-primary`}
        >
          <Header />
          <div className="flex flex-col sm:h-auto flex-1">
            <div className="p-4 sm:p-8">{children}</div>

            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
