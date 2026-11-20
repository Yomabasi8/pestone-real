import Image from "next/image";
import Link from "next/link";

const highlights = [
  { value: "₦3M", label: "per acre" },
  { value: "₦1M", label: "to get started" },
  { value: "70%", label: "of annual profit to you" },
];

export default function HarvestHomesPromo() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link
        href="/harvest-homes"
        className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center rounded-3xl bg-white border border-stone-100 p-4 sm:p-5 transition-shadow duration-300 hover:shadow-xl"
      >
        {/* Copy */}
        <div className="order-2 md:order-1 flex flex-col items-start gap-5 px-3 pb-4 sm:px-6 md:py-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-harvest-green/10 border border-harvest-green/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-harvest-green">
            <span className="h-1.5 w-1.5 rounded-full bg-harvest-leaf" />
            New Launch
          </span>

          <div className="flex flex-col gap-3">
            <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-brand-black-dark leading-none">
              Harvest <span className="font-playfair italic">Homes</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-stone-500 leading-relaxed tracking-[-0.5px] max-w-md">
              Own the land. Earn from the plantation. Freehold farmland in Owode Obafemi, Ogun State.
            </p>
          </div>

          <div className="grid grid-cols-3 w-full max-w-md divide-x divide-stone-200 border-y border-stone-200 py-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex flex-col gap-0.5 px-3 first:pl-0">
                <span className="font-alatsi text-2xl text-harvest-green leading-none">{h.value}</span>
                <span className="font-sans text-xs text-stone-500 leading-snug">{h.label}</span>
              </div>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-5 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-harvest-green">
            Explore Harvest Homes
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 relative w-full aspect-[16/10] md:aspect-auto md:h-full md:min-h-[340px] overflow-hidden rounded-2xl">
          <Image
            src="/Images/harvest-homes/plantation-logo.jpg"
            alt="Harvest Homes plantain plantation in Ogun State"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>
    </section>
  );
}
