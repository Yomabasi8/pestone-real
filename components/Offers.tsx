import Image from "next/image";
import Link from "next/link";

const offers = [
  {
    image: "/Images/land-banking.jpg",
    title: "Land Banking",
    description:
      "Secure valuable land assets today and position yourself for future growth and long-term investment opportunities.",
    link: "/land-banking",
    linkLabel: "Explore Land Parcels",
    active: false,
  },
  {
    image: "/Images/housing-units.jpg",
    title: "Housing Units",
    description:
      "Explore comfortable, modern, and well-located housing options designed to suit different lifestyles and needs.",
    link: "/properties",
    linkLabel: "Explore Residences",
    active: false,
  },
  {
    image: "/Images/cashback.png",
    title: "Cashback",
    description:
      "Enjoy rewarding cashback opportunities on selected property deals and investment packages.",
    link: "/cashback",
    linkLabel: "Explore Cashback",
    active: false,
  },
];

export default function Offers() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-brand-black-dark">
            What we Offer
          </h2>
          <p className="font-sans text-lg sm:text-xl text-brand-black-light max-w-2xl leading-relaxed tracking-[-1px]">
            We specialize in connecting our clients with both raw potential and finished perfection. Which journey is yours?
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-stone-50 border border-stone-100 rounded-2xl p-5 flex flex-col gap-4 group"
            >
              {/* Image — inset with rounded corners */}
              <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 px-2 pb-2">
                <h3 className="font-alatsi text-xl font-normal text-brand-black-dark">
                  {offer.title}
                </h3>
                <p className="font-sans text-sm text-stone-500 leading-relaxed tracking-[-1px]">
                  {offer.description}
                </p>
                <Link
                  href={offer.link}
                  className={`inline-flex items-center gap-1 text-sm font-medium mt-2 transition-colors duration-200 ${
                    offer.active
                      ? "text-brand-orange"
                      : "text-brand-black-dark hover:text-brand-orange"
                  }`}
                >
                  {offer.linkLabel}
                  <span className="text-base">↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
