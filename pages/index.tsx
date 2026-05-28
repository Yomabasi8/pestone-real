import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Advisors from "../components/Advisors";
import Offers from "../components/Offers";
import About from "../components/About";
import FeaturedProperties from "../components/FeaturedProperties";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
        <Hero />

        {/* Advisors and Stats Section Component */}
        <Advisors />

        {/* What We Offer Section */}
        <Offers />

        {/* About Section */}
        <About />

        {/* Featured Properties Section */}
        <FeaturedProperties />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

