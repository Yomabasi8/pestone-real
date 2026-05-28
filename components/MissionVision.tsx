import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* Header */}
        <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-brand-black-dark text-center">
          Our Mission{" "}
          <span className="font-playfair italic font-normal">and</span>{" "}
          Vision
        </h2>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">

          {/* Mission Card */}
          <div className="bg-stone-50 border border-stone-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
            <h3 className="font-alatsi text-lg font-normal text-brand-black-dark">
              Our Mission
            </h3>
            <p className="font-sans text-sm sm:text-base text-stone-500 leading-relaxed tracking-[-1px] flex-1">
              To simplify real estate transactions by providing{" "}
              <span className="text-brand-orange">transparent</span>, reliable, and{" "}
              <span className="text-brand-orange">professional</span> services that help clients confidently buy, sell, and invest in valuable properties.
            </p>
            <span className="text-brand-orange text-xl font-bold leading-none">&raquo;</span>
          </div>

          {/* Center Image */}
          <div className="relative w-full lg:w-80 xl:w-96 h-[320px] sm:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden shadow-lg flex-shrink-0 mx-auto">
            <Image
              src="/Images/rant-human-hand.jpg"
              alt="About Pestone Signature"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Vision Card */}
          <div className="bg-stone-50 border border-stone-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
            <h3 className="font-alatsi text-lg font-normal text-brand-black-dark">
              Our Vision
            </h3>
            <p className="font-sans text-sm sm:text-base text-stone-500 leading-relaxed tracking-[-1px] flex-1">
              To become a leading real estate brand known for{" "}
              <span className="text-brand-orange">trust</span>, innovation, in delivering{" "}
              <span className="text-brand-orange">premium</span> property solutions and creating long-term value for clients and investors.
            </p>
            <span className="text-brand-orange text-xl font-bold leading-none">&raquo;</span>
          </div>

        </div>
      </div>
    </section>
  );
}
