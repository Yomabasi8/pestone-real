import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const galleryImages = [
  { src: "/Images/caskback-1.png", alt: "Cashback Offer 1" },
  { src: "/Images/caskback-2.jpg", alt: "Cashback Offer 2" },
  { src: "/Images/caskback-3.jpg", alt: "Cashback Offer 3" },
];

export default function CashbackPage() {
  return (
    <>
      <Head>
        <title>Cashback | Pestone Signature</title>
        <meta
          name="description"
          content="Enjoy rewarding cashback opportunities on selected property deals and investment packages with Pestone Signature."
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
                src="/Images/luxury-apartment.jpg"
                alt="Cashback"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-900/50 to-stone-900/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="relative z-10 text-center px-4">
              <h1 className="font-alatsi text-5xl sm:text-6xl lg:text-7xl font-normal leading-none tracking-tight">
                <span className="text-brand-orange">Cash</span>
                <span className="text-white">back</span>
              </h1>
              <p className="mt-4 font-sans text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
                Earn rewarding cashback on selected property deals and investment packages.
              </p>
            </div>
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </div>
        </section>

        {/* Intro */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-5">
            <span className="inline-flex mx-auto items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              Exclusive Offer
            </span>
            <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-brand-black-dark">
              Get Rewarded When You Invest
            </h2>
            <p className="font-sans text-base sm:text-lg text-brand-black-light leading-relaxed">
              At Pestone Signature, we believe investing in real estate should also reward you instantly. Our cashback programme gives you money back on selected property purchases and investment packages — a benefit designed to put more value in your hands from day one.
            </p>
            <div className="flex justify-center mt-2">
              <Link
                href="https://www.instagram.com/reel/DArLd4BtVSe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl text-white bg-brand-dark hover:bg-brand-orange transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark active:translate-y-0"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative w-full aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <div className="bg-white rounded-3xl border border-stone-100 p-8 sm:p-12">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="font-alatsi text-3xl sm:text-4xl font-normal tracking-tight text-brand-black-dark">
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Choose a Property",
                  description: "Browse our listings and select any property that qualifies for the cashback offer.",
                },
                {
                  step: "02",
                  title: "Complete Your Purchase",
                  description: "Finalise your investment or property purchase with our team — simple and transparent.",
                },
                {
                  step: "03",
                  title: "Receive Your Cashback",
                  description: "Your cashback is processed and paid out directly to you after the transaction is completed.",
                },
              ].map(({ step, title, description }) => (
                <div key={step} className="flex flex-col items-center text-center gap-3">
                  <span className="font-alatsi text-4xl text-brand-orange">{step}</span>
                  <h3 className="font-alatsi text-xl text-brand-black-dark">{title}</h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">{description}</p>
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
