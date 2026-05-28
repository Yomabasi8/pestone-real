import Image from "next/image";
import Link from "next/link";
import { properties } from "../data/properties";

function PropertyCard({ property }: { property: typeof properties[number] }) {
  return (
    <div className="min-w-[300px] sm:min-w-[340px] lg:min-w-[360px] flex-shrink-0 bg-stone-50 border border-stone-100 rounded-2xl p-5 flex flex-col gap-4">
      {/* Image */}
      <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden">
        <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold shadow-sm">
          {property.status}
        </span>
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 px-1 pt-1 pb-2">
        <h3 className="font-alatsi text-xl text-brand-black-dark leading-snug">
          {property.title}
        </h3>
        <p className="font-sans text-sm text-stone-500 leading-relaxed">
          {property.shortDescription}
        </p>
        <p className="font-sans text-sm font-semibold text-brand-black-dark">
          Location: {property.location}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-alatsi text-xl text-brand-black-dark">
            {property.price}
          </span>
          <Link
            href={`/properties/${property.id}`}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-sm font-medium border border-brand-orange/50 text-brand-black-dark hover:bg-brand-orange hover:text-white hover:border-transparent transition-all duration-200"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="flex flex-col gap-12">

        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 text-center">
          <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-brand-black-dark">
            Featured Properties
          </h2>
          <p className="font-sans text-lg sm:text-xl text-brand-black-light max-w-2xl leading-relaxed">
            Discover handpicked properties that match your lifestyle and investment goals.
            Browse our latest listings and connect directly with our team for inquiries or inspections.
          </p>
        </div>

        {/* Infinite Marquee Track */}
        <div className="relative w-full">
          {/* Left fade */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling strip — duplicated for seamless loop */}
          <div className="animate-marquee flex gap-5 w-max pb-2">
            {[...properties, ...properties].map((property, i) => (
              <PropertyCard key={`${property.id}-${i}`} property={property} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
