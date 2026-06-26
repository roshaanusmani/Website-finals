import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Differentiator } from "@/components/sections/Differentiator";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { LocalExpertise } from "@/components/sections/LocalExpertise";
import { Process } from "@/components/sections/Process";
import { Experience } from "@/components/sections/Experience";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { Comparison } from "@/components/sections/Comparison";
import { ProofTrust } from "@/components/sections/ProofTrust";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { seo, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: seo.slug,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${siteConfig.url}${seo.slug}`,
    siteName: siteConfig.name,
    images: [{ url: "images/logo.png", width: 666, height: 195, alt: siteConfig.name }],
    locale: "en_CA",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: seo.description,
  url: `${siteConfig.url}${seo.slug}`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Windsor",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Windsor-Essex",
  },
  serviceType: "Property Management",
};

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Differentiator />
        <WhoThisIsFor />
        <Services />
        <Packages />
        <LocalExpertise />
        <Process />
        <Experience />
        <LeadMagnet />
        <Comparison />
        <ProofTrust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
