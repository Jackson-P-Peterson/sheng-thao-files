import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import {
  CONTACT_EMAIL,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ogImageAlt =
  "Sheng Thao — Oakland's first recalled mayor, now facing an 8-count federal indictment";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Politics",
  classification: "Political Accountability",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/sheng-thao.webp",
        width: 2560,
        height: 1440,
        alt: ogImageAlt,
        type: "image/webp",
      },
      {
        url: "/og-image.jpg",
        width: 2560,
        height: 1440,
        alt: ogImageAlt,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: ["/sheng-thao.webp"],
  },
  other: {
    "contact:email": CONTACT_EMAIL,
    "llms:txt": `${SITE_URL}/llms.txt`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
