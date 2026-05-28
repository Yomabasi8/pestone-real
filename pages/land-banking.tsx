import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const images = [
  { src: "/Images/landbanking/Every Plot 1.png", alt: "Every Plot Land Banking Offer" },
  { src: "/Images/landbanking/PHOTO-2026-05-26-10-37-25 1.png", alt: "Land Banking Photo" },
  { src: "/Images/landbanking/PHOTO-2026-05-26-10-37-26 2 1.png", alt: "Land Banking Photo" },
  { src: "/Images/landbanking/PHOTO-2026-05-26-10-37-26 3.png", alt: "Land Banking Photo" },
  { src: "/Images/landbanking/PHOTO-2026-05-26-11-07-06 1.png", alt: "Land Banking Photo" },
];

export default function LandBankingPage() {
  return (
    <>
      <Head>
        <title>Land Banking | Pestone Signature</title>
        <meta
          name="description"
          content="Secure valuable land assets today and position yourself for future growth with Pestone Signature's land banking programme."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/logo-icon-pestone.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Images/logo-icon-pestone.png" />
      </Head>

      <main className="min-h-screen bg-[#E7E5E4] flex flex-col pb-16">
        <Navbar />

        {/* Page Banner */}
        <section className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="relative w-full rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[420px] flex items-center justify-center border border-stone-200/50">
            <div className="absolute inset-0 select-none">
              <Image
                src="/Images/land-banking.jpg"
                alt="Land Banking"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-900/50 to-stone-900/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="relative z-10 text-center px-4">
              <h1 className="font-alatsi text-5xl sm:text-6xl lg:text-7xl font-normal leading-none tracking-tight">
                <span className="text-brand-orange">Land</span>
                <span className="text-white"> Banking</span>
              </h1>
            </div>
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </div>
        </section>

        {/* Intro */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-5">
            <span className="inline-flex mx-auto items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              Investment Opportunity
            </span>
            <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-brand-black-dark">
              Own Land. Build Wealth.
            </h2>
            <p className="font-sans text-base sm:text-lg text-brand-black-light leading-relaxed tracking-[-1px]">
              Land banking is one of the smartest long-term investment strategies available. By acquiring land in strategic locations today, you position yourself to benefit from appreciation as infrastructure, development, and demand grow around it. Pestone Signature connects you with verified, high-potential land parcels across prime locations.
            </p>
            <div className="flex justify-center mt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl text-white bg-brand-dark hover:bg-brand-orange transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark active:translate-y-0"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </section>

        {/* Infinite Image Scroll */}
        <section className="w-full overflow-hidden pb-14">
          <div className="relative w-full">
            {/* Left fade */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#E7E5E4] to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#E7E5E4] to-transparent z-10 pointer-events-none" />
            <div className="animate-marquee flex gap-5 w-max">
              {[...images, ...images].map((img, i) => (
                <div
                  key={i}
                  className="relative h-80 sm:h-96 w-64 sm:w-72 flex-shrink-0 rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Land Banking */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <div className="bg-white rounded-3xl border border-stone-100 p-8 sm:p-12">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="font-alatsi text-3xl sm:text-4xl font-normal tracking-tight text-brand-black-dark">
                Why Land Banking?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Low Entry Cost",
                  description:
                    "Acquire land at today's prices before urban expansion drives values higher in surrounding areas.",
                },
                {
                  step: "02",
                  title: "Long-Term Growth",
                  description:
                    "Land is a finite asset. As demand increases and infrastructure develops, so does the value of your investment.",
                },
                {
                  step: "03",
                  title: "Verified & Secure",
                  description:
                    "All our land parcels are properly documented and legally verified for your peace of mind.",
                },
              ].map(({ step, title, description }) => (
                <div key={step} className="flex flex-col items-center text-center gap-3">
                  <span className="font-alatsi text-4xl text-brand-orange">{step}</span>
                  <h3 className="font-alatsi text-xl text-brand-black-dark">{title}</h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed tracking-[-1px]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
        <Footer />
      </main>
    </>
  );
}
