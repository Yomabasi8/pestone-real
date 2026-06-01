import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function BramsCityscapePage() {
  return (
    <>
      <Head>
        <title>Introducing Brams Cityscape | Pestone Signature</title>
        <meta
          name="description"
          content="Discover Brams Cityscape — a premium city development in partnership with Pestone Signature."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/logo-icon-pestone.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Images/logo-icon-pestone.png" />
      </Head>

      <main className="min-h-screen bg-[#E7E5E4] flex flex-col pb-16">
        <Navbar />

        {/* Hero Banner */}
        <section className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="relative w-full rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[420px] flex items-center border border-stone-200/50">
            <div className="absolute inset-0 select-none">
              <Image
                src="/Images/Banner for bams.jpg"
                alt="Brams Cityscape"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="relative z-10 text-right px-8 sm:px-12 lg:px-16 w-full">
              <h1 className="font-alatsi text-5xl sm:text-6xl lg:text-7xl font-normal leading-none tracking-tight [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                <span className="text-brand-orange">Introducing</span>
                <br />
                <span className="text-white">Brams Cityscape</span>
              </h1>
            </div>
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </div>
        </section>

        {/* Executive Summary */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <div className="text-center">
              <span className="inline-flex mx-auto items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                Partner Development
              </span>
              <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-brand-black-dark mt-4">
                A New Standard of Living
              </h2>
            </div>

            {/* Video */}
            <div className="w-full rounded-2xl overflow-hidden">
              <video
                src="/Brams city video.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-auto"
              />
            </div>

            <div className="flex flex-col gap-6 text-left max-w-3xl mx-auto">
                <p className="font-sans text-base sm:text-lg text-brand-black-light leading-relaxed tracking-[-1px]">
                  This project offers a rare dual-income investment opportunity at a dynamic growth corridor
                </p>

                <div className="border-t border-stone-100 pt-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <h3 className="font-alatsi text-sm font-normal text-stone-400 uppercase tracking-widest mb-1">Project</h3>
                      <p className="font-sans text-base text-brand-black-dark font-medium">200 acres in Kobape, Abeokuta</p>
                    </div>
                    <div>
                      <h3 className="font-alatsi text-sm font-normal text-stone-400 uppercase tracking-widest mb-1">Off Takers Entry</h3>
                      <p className="font-sans text-base text-brand-black-dark font-medium">₦30 million minimum secures 5+1 acres</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-stone-100 pt-5">
                  <h3 className="font-alatsi text-sm font-normal text-stone-400 uppercase tracking-widest mb-3">Returns</h3>
                  <ul className="flex flex-col gap-2">
                    <li className="font-sans text-base text-brand-black-dark flex items-start gap-2">
                      <span className="text-brand-orange mt-0.5">➔</span>
                      <span>Up to 35% annual agricultural cash returns</span>
                    </li>
                    <li className="font-sans text-base text-brand-black-dark flex items-start gap-2">
                      <span className="text-brand-orange mt-0.5">➔</span>
                      <span>200–400% capital appreciation in land value (10-year horizon)</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-stone-100 pt-5">
                  <h3 className="font-alatsi text-sm font-normal text-stone-400 uppercase tracking-widest mb-3">Exit Options</h3>
                  <p className="font-sans text-base text-brand-black-dark">Sale, JV development, subdivision, or continued agriculture</p>
                </div>

                <div className="border-t border-stone-100 pt-6">
                  <div className="grid grid-cols-3 gap-5">
                    <div className="bg-stone-50 rounded-2xl p-5 text-center">
                      <p className="font-alatsi text-3xl sm:text-4xl text-brand-orange">200</p>
                      <p className="font-sans text-xs text-stone-500 uppercase tracking-wider mt-1">acres of land</p>
                    </div>
                    <div className="bg-stone-50 rounded-2xl p-5 text-center">
                      <p className="font-alatsi text-3xl sm:text-4xl text-brand-orange">₦30M</p>
                      <p className="font-sans text-xs text-stone-500 uppercase tracking-wider mt-1">minimum investment</p>
                    </div>
                    <div className="bg-stone-50 rounded-2xl p-5 text-center">
                      <p className="font-alatsi text-3xl sm:text-4xl text-brand-orange">35%</p>
                      <p className="font-sans text-xs text-stone-500 uppercase tracking-wider mt-1">annual returns</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact
          title="Schedule Investment Consultation"
          subtitle="Ready to secure your stake in Brams Cityscape? Fill in the form below and our team will reach out to discuss this exclusive opportunity."
        />

        <Footer />
      </main>
    </>
  );
}
