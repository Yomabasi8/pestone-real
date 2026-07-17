import Image from "next/image";
import Counter from "./Counter";

export default function Advisors() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-start">

        {/* Left Column: Architectural Photo */}
        <div className="w-full order-2 lg:order-1">
          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border border-stone-200/50 group select-none">
            <Image
              src="/Images/real-estate 1.png"
              alt="Premium architectural building design"
              fill
              className="object-cover object-center transform transition-transform duration-700 group-hover:scale-103"
              sizes="(max-w-1024px) 100vw, 700px"
              priority
            />
            {/* Ambient glassmorphism border highlight overlay */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Heading + Description above Stats */}
        <div className="flex flex-col gap-6 order-1 lg:order-2">
          <h2 className="text-[38px] sm:text-5xl font-normal leading-[1.12] tracking-tight text-brand-black-dark">
            Your Trusted Real <br />
            <span className="font-playfair italic block mt-2 text-brand-black-dark">Estate Advisors</span>
          </h2>
          <p className="font-sans text-lg sm:text-xl text-stone-600 max-w-lg leading-relaxed" style={{ letterSpacing: "-1.5px" }}>
            We guide you through every step of your real estate journey with clarity, professionalism, and integrity.
          </p>

          {/* Stat Row with Left Accent Stroke */}
          <div className="w-full flex flex-row flex-wrap gap-6 sm:gap-8 mt-4">
            {[
              { value: 150, suffix: "+", label: "Clients Reached" },
              { value: 100, suffix: "+", label: "Properties Available" },
              { value: 5, suffix: "+", label: "Years Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group flex-1 min-w-[110px] flex flex-col justify-center border-l-2 border-brand-orange/40 pl-4 sm:pl-5 transition-colors duration-300 hover:border-brand-orange"
              >
                <Counter
                  to={stat.value}
                  suffix={stat.suffix}
                  className="font-alatsi text-3xl sm:text-4xl lg:text-[42px] font-normal leading-none block mb-1 text-brand-black-dark"
                />
                <span className="font-sans text-sm sm:text-base text-stone-500 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
