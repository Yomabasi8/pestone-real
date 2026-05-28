import Image from "next/image";

const reasons = [
  {
    icon: "/Images/lisiting.png",
    title: "Verified Listings",
    description:
      "We provide carefully verified property options to help you make confident real estate decisions.",
  },
  {
    icon: "/Images/home-icon.png",
    title: "Transparent Process",
    description:
      "We believe in honesty and clarity, ensuring every transaction is smooth and straightforward.",
  },
  {
    icon: "/Images/dual-home.png",
    title: "Professional Service",
    description:
      "From consultation to closing, we maintain a high standard of professionalism and customer care.",
  },
];

const WaveDash = () => (
  <svg
    className="hidden lg:block w-full h-12 flex-1"
    viewBox="0 0 160 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M0 30 C30 30, 40 8, 80 8 S130 30, 160 30"
      stroke="#D95F31"
      strokeWidth="1.5"
      strokeDasharray="5 5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-brand-black-dark">
            Why Choose Us
          </h2>
          <p className="font-sans text-lg sm:text-xl text-brand-black-light tracking-[-1px]">
            We make real estate simple, reliable, and stress-free.
          </p>
        </div>

        {/* Icons + connectors row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-0">
          {reasons.map((reason, i) => (
            <>
              {/* Card */}
              <div
                key={reason.title}
                className="flex flex-col items-center text-center gap-4 flex-1"
              >
                {/* Orange circle icon */}
                <div className="w-20 h-20 rounded-full bg-brand-orange flex items-center justify-center shadow-md shadow-brand-orange/20 flex-shrink-0">
                  <div className="relative w-9 h-9">
                    <Image
                      src={reason.icon}
                      alt={reason.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 max-w-xs">
                  <h3 className="font-alatsi text-xl font-normal text-brand-black-dark">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-stone-500 leading-relaxed tracking-[-1px]">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Wave connector between items */}
              {i < reasons.length - 1 && (
                <div className="hidden lg:flex items-center self-start mt-9 w-28 xl:w-40 flex-shrink-0">
                  <WaveDash />
                </div>
              )}
            </>
          ))}
        </div>

      </div>
    </section>
  );
}
