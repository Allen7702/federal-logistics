import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://federallogisticsgroup.co.tz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Federal Logistics Group Limited | Customs Clearing & Forwarding in Dar es Salaam",
    template: "%s | Federal Logistics Group Limited",
  },
  description:
    "Customs clearing and forwarding, freight transport, warehousing and general supplies from Dar es Salaam across Tanzania, Zambia, DRC, Rwanda, Burundi, Uganda and Malawi.",
  keywords: [
    "clearing and forwarding Tanzania",
    "customs clearing Dar es Salaam",
    "freight forwarding Tanzania",
    "logistics company Dar es Salaam",
    "general supplies and procurement Tanzania",
  ],
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: siteUrl,
    siteName: company.name,
    title: "Federal Logistics Group Limited | Clearing & Forwarding, Dar es Salaam",
    description:
      "End-to-end customs clearing, freight logistics, warehousing and procurement across East and Central Africa.",
    images: [{ url: "/images/port-dar-es-salaam.webp", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Federal Logistics Group Limited",
    description:
      "Clearing & forwarding, freight, warehousing and procurement from Dar es Salaam.",
    images: ["/images/port-dar-es-salaam.webp"],
  },
  alternates: { canonical: "/" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LogisticsBusiness",
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  telephone: company.phone,
  email: company.email,
  foundingDate: String(company.established),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    addressCountry: "TZ",
  },
  areaServed: ["Tanzania", "Zambia", "DR Congo", "Rwanda", "Burundi", "Uganda", "Malawi"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Without JavaScript the scroll-reveal never fires, so show everything. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className={`${archivo.variable} ${inter.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ember-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
