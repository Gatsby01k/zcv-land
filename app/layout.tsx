import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zcash.ventures"),
  title: "Zcash Ventures",
  description:
    "Zcash.Ventures is a private, Zcash-focused ventures access program for privacy-aligned capital, offering structured participation and an illustrative early bonus framework of up to +25%.",
  keywords: [
    "Zcash",
    "Buy Zcash",
    "Buy Crypto",
    "ZEC",
    "zcash ventures",
    "zcash investment",
    "privacy coin",
    "crypto privacy",
    "zero-knowledge",
    "zk-SNARK",
    "zcash ecosystem",
    "crypto fund",
    "private access program",
    "venture capital",
    "crypto ventures",
  ],
  alternates: {
    canonical: "https://zcash.ventures",
  },
  openGraph: {
    type: "website",
    url: "https://zcash.ventures",
    title: "Zcash.Ventures — Privacy-First Zcash Ventures Access",
    description:
      "Private, ventures-style access to the Zcash ecosystem with a structured, privacy-first framework and an illustrative early bonus model of up to +25%.",
    siteName: "Zcash.Ventures",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zcash.Ventures — Privacy Ventures Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zcash.Ventures — Privacy Ventures Program",
    description:
      "Structured Zcash-focused access for privacy-aligned capital with an illustrative early bonus framework of up to +25%.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zcash.Ventures",
    url: "https://zcash.ventures",
    description:
      "Private, Zcash-focused ventures access for privacy-aligned capital with structured participation and an illustrative early bonus framework of up to +25%.",
    sameAs: [
      "https://x.com/zcashventures",
      "https://t.me/zcashventures",
      "https://www.linkedin.com/company/zcash-ventures",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={plusJakarta.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
