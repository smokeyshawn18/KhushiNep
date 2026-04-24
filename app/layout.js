import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstallPopup from "@/components/InstallApp";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import "./globals.css";

import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  KEYWORDS,
  OG_IMAGE,
  FACEBOOK_URL,
  PHONE,
  EMAIL,
  ADDRESS,
} from "@/app/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Khushi Edu Consultancy",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-icon-180.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Khushi Edu Consultancy - Your Gateway to Education in Japan",
    description:
      "Premier education consultancy helping students achieve their dreams of studying in Japan. Expert guidance for university admissions, visa processing, and Japanese language preparation.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Khushi Edu Consultancy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khushi Edu Consultancy - Study in Japan",
    description:
      "Your trusted partner for studying in Japan. Complete education consulting services including visa assistance and language preparation.",
    images: [OG_IMAGE],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Khushi",
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-KKYR6EY08E";

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    description:
      "Premier education consultancy specializing in Japanese education and visa services",
    url: SITE_URL,
    logo: OG_IMAGE,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      addressCountry: ADDRESS.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      email: EMAIL,
    },
    sameAs: [FACEBOOK_URL],
  };

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster />
        <InstallPopup />
        <Footer />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>

        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(orgSchema)}
        </Script>
      </body>
    </html>
  );
}
