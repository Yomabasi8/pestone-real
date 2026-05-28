import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { properties, Property } from "../../data/properties";

interface Props {
  property: Property;
  similar: Property[];
}

function MiniContactForm() {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-5 shadow-sm border border-stone-100">
      <div>
        <h3 className="font-alatsi text-2xl text-brand-black-dark">Let&apos;s Get In Touch</h3>
        <p className="font-sans text-sm text-stone-400 mt-1 leading-relaxed">
          Ready to find your next property?<br />
          Let&apos;s help you get started. Reach out today and our team will respond promptly.
        </p>
      </div>
      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-xs font-semibold text-brand-black-dark">Full Name</label>
            <input type="text" className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-xs font-semibold text-brand-black-dark">Email Address</label>
            <input type="email" className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold text-brand-black-dark">Subject of Inquiry</label>
          <input type="text" className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold text-brand-black-dark">Message</label>
          <textarea rows={4} className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors resize-none" />
        </div>
        <button type="submit" className="w-full py-3 rounded-xl bg-brand-dark text-white text-sm font-semibold hover:bg-brand-orange transition-all duration-300">
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default function PropertyDetail({ property, similar }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const router = useRouter();

  if (router.isFallback) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const thumbs = property.images.slice(1, 6);

  return (
    <>
      <Head>
        <title>{property.title} | Pestone Signature</title>
        <meta name="description" content={property.shortDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/logo-icon-pestone.png" type="image/png" />
      </Head>

      <main className="min-h-screen bg-brand-bg bg-[#E7E5E4] flex flex-col">
        <Navbar />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8 pb-12">

          {/* Back */}
          <button onClick={() => router.back()} className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-brand-orange transition-colors w-fit">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          {/* Main 2-col grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-8 items-start">

            {/* LEFT */}
            <div className="flex flex-col gap-5">

              {/* Main image */}
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md">
                <Image src={property.images[activeImage]} alt={property.title} fill className="object-cover" priority />
                <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold shadow-sm">
                  {property.status}
                </span>
              </div>

              {/* Thumbnail gallery — mobile only */}
              <div className="flex flex-col gap-2 lg:hidden">
                <div className="grid grid-cols-2 gap-2">
                  {thumbs.slice(0, 2).map((img, i) => (
                    <button key={i} onClick={() => setActiveImage(i + 1)} className={`relative h-32 sm:h-44 rounded-xl overflow-hidden transition-all ${activeImage === i + 1 ? "ring-2 ring-brand-orange" : ""}`}>
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
                {thumbs.slice(2).length > 0 && (
                  <div className={`grid gap-2 ${thumbs.slice(2).length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                    {thumbs.slice(2).map((img, i) => (
                      <button key={i + 2} onClick={() => setActiveImage(i + 3)} className={`relative h-24 sm:h-32 rounded-xl overflow-hidden transition-all ${activeImage === i + 3 ? "ring-2 ring-brand-orange" : ""}`}>
                        <Image src={img} alt="" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Title + Price */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h1 className="font-alatsi text-2xl sm:text-3xl text-brand-black-dark">{property.title}</h1>
                  <div className="flex items-center gap-1.5 mt-1 text-stone-500 text-sm">
                    <div className="relative w-4 h-4 flex-shrink-0">
                      <Image src="/Images/location-icon.png" alt="location" fill className="object-contain" />
                    </div>
                    {property.location}
                  </div>
                </div>
                <span className="font-alatsi text-2xl sm:text-3xl text-brand-black-dark whitespace-nowrap">{property.fullPrice}</span>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm flex flex-col gap-4">
                <h2 className="font-alatsi text-lg text-brand-black-dark border-none">Property Description</h2>
                <div className="font-sans text-sm text-stone-500 leading-relaxed flex flex-col gap-3">
                  {property.longDescription.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  <ul className="list-disc list-inside flex flex-col gap-1">
                    {property.documents.map((doc) => (
                      <li key={doc}>{doc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm flex flex-col gap-4">
                <h2 className="font-alatsi text-lg text-brand-black-dark border-none">Features</h2>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feat) => (
                    <span key={feat} className="px-3 py-1.5 rounded-full border border-stone-200 bg-stone-50 text-sm text-stone-600 font-sans">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-5">

              {/* Thumbnail gallery — desktop only */}
              <div className="hidden lg:flex flex-col gap-2">
                {/* Top row — always 2 */}
                <div className="grid grid-cols-2 gap-2">
                  {thumbs.slice(0, 2).map((img, i) => (
                    <button key={i} onClick={() => setActiveImage(i + 1)} className={`relative h-36 sm:h-44 rounded-xl overflow-hidden transition-all ${activeImage === i + 1 ? "ring-2 ring-brand-orange" : ""}`}>
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
                {/* Bottom row — 3 cols if 3 images, 2 cols if 2 */}
                {thumbs.slice(2).length > 0 && (
                  <div className={`grid gap-2 ${thumbs.slice(2).length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                    {thumbs.slice(2).map((img, i) => (
                      <button key={i + 2} onClick={() => setActiveImage(i + 3)} className={`relative h-28 sm:h-32 rounded-xl overflow-hidden transition-all ${activeImage === i + 3 ? "ring-2 ring-brand-orange" : ""}`}>
                        <Image src={img} alt="" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mini contact form */}
              <MiniContactForm />
            </div>

          </div>

        </div>

        {/* Similar Properties — full-width white section */}
        <section className="w-full bg-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
            <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-brand-black-dark">
              Explore Similar <br />
              <span className="font-playfair italic font-normal">Properties</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
              {similar.map((p, i) => (
                <div key={p.id} className={`bg-stone-50 border border-stone-100 rounded-2xl p-5 flex flex-col gap-4 overflow-hidden transition-transform ${i === 1 ? "-translate-y-8" : ""}`}>
                  <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden">
                    <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold shadow-sm">
                      {p.status}
                    </span>
                    <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-1 px-1 pt-1 pb-2">
                    <h3 className="font-alatsi text-xl text-brand-black-dark leading-snug">{p.title}</h3>
                    <p className="font-sans text-sm text-stone-500 leading-relaxed">{p.shortDescription}</p>
                    <p className="font-sans text-sm font-semibold text-brand-black-dark">Location: {p.location}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-alatsi text-xl text-brand-black-dark">{p.price}</span>
                      <Link href={`/properties/${p.id}`} className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-sm font-medium border border-brand-orange/50 text-brand-black-dark hover:bg-brand-orange hover:text-white hover:border-transparent transition-all duration-200">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: properties.map((p) => ({ params: { id: p.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const property = properties.find((p) => p.id === params?.id);
  if (!property) return { notFound: true };
  const similar = properties.filter((p) => p.id !== property.id).slice(0, 3);
  return { props: { property, similar } };
};
