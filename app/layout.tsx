import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import {
  CONTACT_EMAIL,
  OG_DESCRIPTION,
  OG_TITLE,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_TITLE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_HEIGHT,
  SOCIAL_IMAGE_PATH,
  SOCIAL_IMAGE_URL,
  SOCIAL_IMAGE_WIDTH,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const socialImage = {
  url: SOCIAL_IMAGE_PATH,
  secureUrl: SOCIAL_IMAGE_URL,
  width: SOCIAL_IMAGE_WIDTH,
  height: SOCIAL_IMAGE_HEIGHT,
  alt: SOCIAL_IMAGE_ALT,
  type: "image/webp",
};

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
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: {
      url: SOCIAL_IMAGE_PATH,
      secureUrl: SOCIAL_IMAGE_URL,
      width: SOCIAL_IMAGE_WIDTH,
      height: SOCIAL_IMAGE_HEIGHT,
      alt: SOCIAL_IMAGE_ALT,
      type: "image/webp",
    },
  },
  other: {
    "contact:email": CONTACT_EMAIL,
    "llms:txt": `${SITE_URL}/llms.txt`,
    "og:title": SITE_NAME,
    "twitter:title": SITE_NAME,
    "og:image": SOCIAL_IMAGE_URL,
    "og:image:secure_url": SOCIAL_IMAGE_URL,
    "og:image:type": "image/webp",
    "og:image:width": String(SOCIAL_IMAGE_WIDTH),
    "og:image:height": String(SOCIAL_IMAGE_HEIGHT),
    "og:image:alt": SOCIAL_IMAGE_ALT,
    "twitter:image": SOCIAL_IMAGE_URL,
    "twitter:image:src": SOCIAL_IMAGE_URL,
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
