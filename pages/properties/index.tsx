import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { properties } from "../../data/properties";

export default function PropertiesPage() {
  return (
    <>
      <Head>
        <title>Properties | Pestone Signature</title>
        <meta name="description" content="Browse all available properties listed by Pestone Signature — luxury apartments, duplexes, and more in prime Lagos locations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/logo-icon-pestone.png" type="image/png" />
      </Head>

      <main className="min-h-screen bg-[#E7E5E4] flex flex-col pb-16">
        <Navbar />

        {/* Page Banner */}
        <Reveal>
        <section className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="relative w-full rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[360px] flex items-center justify-center border border-stone-200/50">
            <div className="absolute inset-0 select-none">
              <Image
                src="/Images/semi-detached.png"
                alt="Properties"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-900/50 to-stone-900/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="relative z-10 text-center">
              <h1 className="font-alatsi text-5xl sm:text-6xl lg:text-7xl font-normal leading-none tracking-tight">
                <span className="text-brand-orange">Our</span>
                <span className="text-white"> Properties</span>
              </h1>
            </div>
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </div>
        </section>
        </Reveal>

        {/* Listings Grid */}
        <Reveal>
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div key={property.id} className="bg-stone-50 border border-stone-100 rounded-2xl p-5 flex flex-col gap-4">
                <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden">
                  <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold shadow-sm">
                    {property.status}
                  </span>
                  <Image src={property.images[0]} alt={property.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-1 px-1 pt-1 pb-2">
                  <h3 className="font-alatsi text-xl text-brand-black-dark leading-snug">{property.title}</h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed tracking-[-1px]">{property.shortDescription}</p>
                  <p className="font-sans text-sm font-semibold text-brand-black-dark">Location: {property.location}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-alatsi text-xl text-brand-black-dark">{property.price}</span>
                    <Link
                      href={`/properties/${property.id}`}
                      className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-sm font-medium border border-brand-orange/50 text-brand-black-dark hover:bg-brand-orange hover:text-white hover:border-transparent transition-all duration-200"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        </Reveal>

        <Reveal><Contact /></Reveal>
        <Reveal><Footer /></Reveal>
      </main>
    </>
  );
}
