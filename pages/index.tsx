import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Advisors from "../components/Advisors";
import Offers from "../components/Offers";
import WatchOut from "../components/WatchOut";
import About from "../components/About";
import FeaturedProperties from "../components/FeaturedProperties";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { SITE_NAME, SITE_URL } from "../lib/seo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/Images/Logo-.png`,
  image: `${SITE_URL}/Images/Logo-.png`,
  description:
    "Real estate agency helping clients buy, sell and invest in properties across Lekki, Ikota, Victoria Island and Lagos, Nigeria.",
  email: "pestonesignature@gmail.com",
  telephone: "+2349130426840",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lekki",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  areaServed: ["Lekki", "Ikota", "Victoria Island", "Lagos", "Nigeria"],
  sameAs: ["https://www.instagram.com/realtorgeeoflagos"],
};

export default function Home() {
  return (
    <>
      <SEO
        title="Pestone Signature | Real Estate Agency in Lekki & Lagos, Nigeria"
        description="Buy, sell and invest in verified properties in Lekki, Ikota, Victoria Island and across Lagos, Nigeria. Duplexes, apartments, land banking and more with Pestone Signature."
        jsonLd={organizationJsonLd}
      />

      <main className="min-h-screen bg-brand-bg bg-[#E7E5E4] flex flex-col pb-16">
        {/* Navigation Bar Component */}
        <Navbar />

        {/* Hero Section Component */}
        <Reveal><Hero /></Reveal>

        {/* Advisors and Stats Section Component */}
        <Reveal><Advisors /></Reveal>

        {/* What We Offer Section */}
        <Reveal><Offers /></Reveal>

        {/* Watch Out! Section */}
        <Reveal><WatchOut /></Reveal>

        {/* About Section */}
        <Reveal><About /></Reveal>

        {/* Featured Properties Section */}
        <Reveal><FeaturedProperties /></Reveal>

        {/* Why Choose Us Section */}
        <Reveal><WhyChooseUs /></Reveal>

        {/* Testimonials Section */}
        <Reveal><Testimonials /></Reveal>

        {/* Contact Section */}
        <Reveal><Contact /></Reveal>

        {/* Footer */}
        <Reveal><Footer /></Reveal>
      </main>
    </>
  );
}

