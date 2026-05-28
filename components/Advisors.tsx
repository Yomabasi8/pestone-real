import Image from "next/image";

export default function Advisors() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col gap-12">
      
      {/* Header Grid: Title and Subtitle aligned */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
        <div>
          <h2 className="text-[38px] sm:text-5xl font-normal leading-[1.12] tracking-tight text-brand-black-dark">
            Your Trusted Real <br />
            <span className="font-playfair italic block mt-2 text-brand-black-dark">Estate Advisors</span>
          </h2>
        </div>
        <div className="flex md:justify-end md:pt-3">
          <p className="font-sans text-lg sm:text-xl text-stone-600 max-w-sm leading-relaxed" style={{ letterSpacing: "-1.5px" }}>
            We guide you through every step of your real estate journey with clarity, professionalism, and integrity.
          </p>
        </div>
      </div>

      {/* Content Grid: Large Image and Staggered Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-8 lg:gap-12 items-center">

        {/* Left Column: Architectural Photo */}
        <div className="w-full">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-stone-200/50 group select-none">
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

        {/* Right Column: Premium Staggered Stat Cards */}
        <div className="w-full grid grid-cols-2 gap-4 sm:gap-6 items-start">
          
          {/* Staggered Column 1: Orange & White Card */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Orange Card */}
            <div className="group bg-brand-orange text-white p-6 sm:p-8 rounded-2xl shadow-lg shadow-brand-orange/10 flex flex-col justify-center min-h-[140px] sm:min-h-[170px] transform transition-all duration-300 hover:-translate-y-1 hover:bg-[#c24e22] cursor-pointer">
              <span className="font-alatsi text-3xl sm:text-4xl lg:text-[42px] font-normal leading-none block mb-1">
                500+
              </span>
              <span className="font-sans text-sm sm:text-base text-white/90 font-medium">
                Satisfied Clients
              </span>
            </div>

            {/* White Card */}
            <div className="group bg-white text-brand-black-dark p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-center min-h-[140px] sm:min-h-[170px] transform transition-all duration-300 hover:-translate-y-1 hover:bg-brand-orange hover:border-transparent hover:shadow-lg hover:shadow-brand-orange/20 cursor-pointer">
              <span className="font-alatsi text-3xl sm:text-4xl lg:text-[42px] font-normal leading-none block mb-1 text-brand-black-dark transition-colors duration-300 group-hover:text-white">
                10+
              </span>
              <span className="font-sans text-sm sm:text-base text-stone-500 font-medium transition-colors duration-300 group-hover:text-white/90">
                Years Experience
              </span>
            </div>
          </div>

          {/* Staggered Column 2: Two White Cards offset vertically on desktop */}
          <div className="flex flex-col gap-4 sm:gap-6 md:mt-10">
            {/* White Card */}
            <div className="group bg-white text-brand-black-dark p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-center min-h-[140px] sm:min-h-[170px] transform transition-all duration-300 hover:-translate-y-1 hover:bg-brand-orange hover:border-transparent hover:shadow-lg hover:shadow-brand-orange/20 cursor-pointer">
              <span className="font-alatsi text-3xl sm:text-4xl lg:text-[42px] font-normal leading-none block mb-1 text-brand-black-dark transition-colors duration-300 group-hover:text-white">
                100+
              </span>
              <span className="font-sans text-sm sm:text-base text-stone-500 font-medium transition-colors duration-300 group-hover:text-white/90">
                Properties Sold
              </span>
            </div>

            {/* White Card */}
            <div className="group bg-white text-brand-black-dark p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-center min-h-[140px] sm:min-h-[170px] transform transition-all duration-300 hover:-translate-y-1 hover:bg-brand-orange hover:border-transparent hover:shadow-lg hover:shadow-brand-orange/20 cursor-pointer">
              <span className="font-alatsi text-3xl sm:text-4xl lg:text-[42px] font-normal leading-none block mb-1 text-brand-black-dark transition-colors duration-300 group-hover:text-white">
                105+
              </span>
              <span className="font-sans text-sm sm:text-base text-stone-500 font-medium transition-colors duration-300 group-hover:text-white/90">
                Properties Available
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
