// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
<html lang="en">
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
    />
  </head>
  <body>...</body>
</html>;

import {
  Inter,
  Poppins,
  Montserrat,
  Manrope,
  Raleway,
  Nunito_Sans,
  Outfit,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Brillytech Networks — Building Digital Futures",
  description:
    "Fullstack development, data solutions, and brand/UX for teams that ship fast.",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://brillytech.com.ng"),
  openGraph: {
    title: "Brillytech Networks — Building Digital Futures",
    description:
      "Websites, apps, dashboards, and brand experiences that scale.",
    url: "https://brillytech.com.ng",
    siteName: "Brillytech Networks",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Brillytech" }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brillytech Networks",
    description: "Fullstack • Data • Brand/UX. Launch better, iterate faster.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${montserrat.variable} ${manrope.variable} ${raleway.variable} ${nunito.variable} ${outfit.variable}`}
      >
        <Nav />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brillytech Networks",
              url: "https://brillytech.com.ng",
              logo: "https://brillytech.com.ng/logo.png",
              sameAs: [
                "https://twitter.com/yourhandle",
                "https://www.linkedin.com/company/yourcompany",
              ],
            }),
          }}
        />

        <main className="w-full">{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
