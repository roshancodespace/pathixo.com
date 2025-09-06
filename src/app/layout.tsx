import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const monstserrat = Montserrat({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Pathixo - Web Development, Android & SEO Services",
  description: "Pathixo delivers comprehensive IT solutions including web development, Android app development, and SEO optimization services to help your business grow online.",
  keywords: [
    "web development",
    "android app development",
    "SEO optimization",
    "IT services",
    "digital solutions",
    "mobile apps",
    "website design",
    "search engine optimization"
  ],
  authors: [{ name: "Pathixo" }],
  creator: "Pathixo",
  publisher: "Pathixo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Pathixo - Web Development, Android & SEO Services",
    description: "Pathixo delivers comprehensive IT solutions including web development, Android app development, and SEO optimization services to help your business grow online.",
    siteName: "Pathixo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathixo - Web Development, Android & SEO Services",
    description: "Pathixo delivers comprehensive IT solutions including web development, Android app development, and SEO optimization services.",
    creator: "@pathixo",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monstserrat.className} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
