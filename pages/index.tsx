import Head from "next/head";
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Pestone Signature | Premium Real Estate for Modern Living</title>
        <meta
          name="description"
          content="Find, buy, and invest in quality properties with ease, transparency, and trust with Pestone Signature."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/logo-icon-pestone.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Images/logo-icon-pestone.png" />
      </Head>

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

