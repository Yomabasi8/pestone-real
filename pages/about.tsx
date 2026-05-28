import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import About from "../components/About";
import MissionVision from "../components/MissionVision";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Pestone Signature</title>
        <meta
          name="description"
          content="Learn about Pestone Signature LTD — our mission, values, and commitment to helping you find the perfect property."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/logo-icon-pestone.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Images/logo-icon-pestone.png" />
      </Head>

      <main className="min-h-screen bg-brand-bg bg-[#E7E5E4] flex flex-col pb-16">

        {/* Navbar */}
        <Navbar />

        {/* Page Banner */}
        <section className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="relative w-full rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[420px] flex items-center justify-center border border-stone-200/50">

            <div className="absolute inset-0 select-none">
              <Image
                src="/Images/about-us-image.jpg"
                alt="About Pestone Signature"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-900/50 to-stone-900/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 text-center">
              <h1 className="font-alatsi text-5xl sm:text-6xl lg:text-7xl font-normal leading-none tracking-tight">
                <span className="text-brand-orange">About</span>
                <span className="text-white"> Us</span>
              </h1>
            </div>

            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </div>
        </section>

        {/* About section — no badge */}
        <About showBadge={false} />

        {/* Mission & Vision */}
        <MissionVision />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />

      </main>
    </>
  );
}
