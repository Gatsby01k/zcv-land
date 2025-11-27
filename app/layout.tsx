import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zcash.ventures"),
  title: "Zcash.Ventures — Privacy Ventures Program",
  description:
    "Zcash.Ventures — private, Zcash-focused privacy ventures program with structured participation and an early bonus framework up to +25%.",
  keywords: [
    "Zcash",
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
    "crypto ventures"
  ],
  alternates: {
    canonical: "https://zcash.ventures",
  },
  openGraph: {
    type: "website",
    url: "https://zcash.ventures",
    title: "Zcash.Ventures — Privacy-First Zcash Ventures Access",
    description:
      "Private, ventures-style access to the Zcash ecosystem with a disciplined, privacy-first framework and an early bonus model up to +25%.",
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
      "Structured Zcash-focused access for privacy-aligned capital with an early bonus framework up to +25%.",
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
      "Privacy-driven ventures access program focused on the Zcash ecosystem.",
    sameAs: ["https://z.cash"],
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
