import Image from "next/image";
import Link from "next/link";

export default function HarvestHomesPromo() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link
        href="/harvest-homes"
        className="group relative grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-3xl bg-harvest-deep border border-stone-200/50 transition-shadow duration-300 hover:shadow-2xl"
      >
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-harvest-gold/15 blur-3xl pointer-events-none" />

        {/* Copy */}
        <div className="relative z-10 flex flex-col items-start gap-4 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-harvest-gold/30 bg-harvest-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-harvest-gold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-harvest-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-harvest-gold" />
            </span>
            New Launch
          </span>
          <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-white leading-none">
            Harvest <span className="text-harvest-gold">Homes</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/75 leading-relaxed tracking-[-0.5px] max-w-md">
            Own the land. Earn from the plantation. Freehold farmland in Owode Obafemi, Ogun State, from ₦3M per acre. Start with ₦1,000,000.
          </p>
          <span className="mt-2 inline-flex items-center gap-2 rounded-xl bg-harvest-gold px-5 py-3 text-sm font-semibold text-harvest-deep transition-all duration-300 group-hover:bg-white">
            Explore Harvest Homes
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        {/* Image */}
        <div className="relative min-h-[240px] md:min-h-full">
          <Image
            src="/Images/harvest-homes/plantation-logo.jpg"
            alt="Harvest Homes plantain plantation in Ogun State"
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-harvest-deep via-harvest-deep/20 to-transparent" />
        </div>
      </Link>
    </section>
  );
}
