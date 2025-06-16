// app/layout.js or app/layout.tsx
import Navbar from "@/components/Navbar";
import "./globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Khushi Edu Consultancy Pvt. Ltd - Study in Japan | Education Consultancy Nepal",
  description:
    "Khushi Edu Consultancy - Your trusted partner for studying in Japan. We offer comprehensive education consulting services including visa assistance, Japanese language courses (JLPT, N4, N5, JFT), and university admissions guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link
          rel="icon"
          href="/IMAGES/LOGO.jpg"
          sizes="16x16"
          type="image/png"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KKYR6EY08E"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KKYR6EY08E');
            `,
          }}
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* SEO Meta */}
        <meta
          name="keywords"
          content="study in Japan, Japanese education consultant, JLPT preparation, visa assistance Japan, education consultancy Nepal, Japanese language courses, university admission Japan"
        />
        <meta name="author" content="Khushi Edu Consultancy Pvt. Ltd" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khushi-nepal.com.np/" />
        <meta
          property="og:title"
          content="Khushi Edu Consultancy - Your Gateway to Education in Japan"
        />
        <meta
          property="og:description"
          content="Premier education consultancy helping students achieve their dreams of studying in Japan. Expert guidance for university admissions, visa processing, and Japanese language preparation."
        />
        <meta property="og:image" content="/IMAGES/LOGO.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://khushiedu.com/" />
        <meta
          property="twitter:title"
          content="Khushi Edu Consultancy - Study in Japan"
        />
        <meta
          property="twitter:description"
          content="Your trusted partner for studying in Japan. Complete education consulting services including visa assistance and language preparation."
        />
        <meta property="twitter:image" content="/IMAGES/LOGO.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://khushi-nepal.com.np/" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Khushi Edu Consultancy Pvt. Ltd",
              description:
                "Premier education consultancy specializing in Japanese education and visa services",
              url: "https://khushi-nepal.com.np/",
              logo: "/IMAGES/LOGO.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2nd Floor, Chabahil, Saraswatinagar",
                addressLocality: "Kathmandu",
                addressRegion: "Bagmati",
                addressCountry: "Nepal",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+977 9851363063",
                contactType: "customer service",
                email: "shekhar@khushiedu.com",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61558940106593",
              ],
              offers: {
                "@type": "Offer",
                itemOffered: [
                  {
                    "@type": "Service",
                    name: "Japanese Language Courses",
                    description: "JLPT, N4, N5, and JFT preparation courses",
                  },
                  {
                    "@type": "Service",
                    name: "Visa Assistance",
                    description:
                      "Complete guidance for Japanese student visa application",
                  },
                  {
                    "@type": "Service",
                    name: "University Admission Support",
                    description:
                      "Assistance with Japanese university applications and admissions",
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
