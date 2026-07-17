import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function About({ showBadge = true }: { showBadge?: boolean }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pt-16 sm:px-6 lg:px-8 sm:pt-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-end">

        {/* Left: Text Content */}
        <div className="flex flex-col gap-6 pb-0 lg:pb-24">

          {/* Badge */}
          {showBadge && (
            <span className="inline-flex w-fit items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              About Us
            </span>
          )}

          {/* Heading */}
          <h2 className="font-alatsi text-4xl sm:text-5xl lg:text-[52px] font-normal leading-[1.1] tracking-tight text-brand-black-dark">
            Committed to <br />
            Delivering{" "}
            <span className="font-playfair italic font-normal">Trusted</span>{" "}
            Real <br />
            Estate Solutions
          </h2>

          {/* Body */}
          <div className="flex flex-col gap-4 text-brand-black-light font-sans text-base sm:text-lg leading-relaxed tracking-[-1px]">
            <p>
              At PESTONE SIGNATURE LTD, we are focused on helping individuals and investors secure valuable properties with confidence.
            </p>
            <p>
              We specialize in property sales, rentals, and real estate advisory services, delivering solutions that are simple, transparent, and tailored to your needs.
            </p>
          </div>

          {/* CTA */}
          <div>
            <Link
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl text-white bg-brand-dark hover:bg-brand-orange transition-all duration-300 shadow-md hover:shadow-brand-orange/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark active:translate-y-0"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right: Image — pinned to section bottom via overflow-hidden clip */}
        <div className="relative flex justify-center lg:justify-end">
          <Reveal y={100} duration={0.9} className="relative w-full max-w-lg lg:max-w-none h-[320px] sm:h-[420px] lg:h-[640px] mb-[-1px]">
            <Image
              src="/Images/hand-holding-house.png"
              alt="Hand holding a house model"
              fill
              className="object-contain object-bottom"
              priority
            />
          </Reveal>
        </div>

      </div>
    </section>
  );
}
