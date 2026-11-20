import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import HarvestEstimator from "../components/HarvestEstimator";
import FlyerGallery from "../components/FlyerGallery";
import SEO from "../components/SEO";
import { SITE_NAME, absoluteUrl } from "../lib/seo";
import {
  HARVEST_LOCATION,
  HARVEST_PHONES,
  TITLE_DOCUMENTS,
  flyers,
  neighbours,
  plans,
} from "../data/harvestHomes";

const harvestJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Harvest Homes Farmland",
  description:
    "Freehold farmland and managed plantain plantations at Laloko Village, by Siun, Owode Obafemi, Ogun State. Own the land and earn from the plantation.",
  url: absoluteUrl("/harvest-homes"),
  image: absoluteUrl("/Images/harvest-homes/flyer-introducing.jpg"),
  provider: { "@type": "RealEstateAgent", name: SITE_NAME },
  about: {
    "@type": "Place",
    name: "Harvest Homes",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Owode Obafemi",
      addressRegion: "Ogun State",
      addressCountry: "NG",
    },
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "NGN",
    lowPrice: 3000000,
    highPrice: 60000000,
  },
};

const stats = [
  { prefix: "₦", to: 1, suffix: "M", label: "Deposit to get started" },
  { to: 300, label: "Plantain suckers per acre" },
  { to: 70, suffix: "%", label: "Of annual profit goes to you" },
  { to: 5, suffix: " yrs", label: "Of farm management included" },
];

const steps = [
  {
    title: "Choose your plot",
    description: "Pick bare land, or a plantain plantation by the acre or hectare. Every plot comes with Freehold, Deed of Assignment and Survey.",
  },
  {
    title: "We plant & manage",
    description: "On the plantation option, we plant 300 plantain suckers per acre and run the farm for you for 5 years.",
  },
  {
    title: "You earn every harvest",
    description: "70% of the annual profit goes straight to you, while the land underneath keeps growing in value.",
  },
];

const inspectionDetails = [
  { value: "7:30AM", label: "Take-off time" },
  { value: "Ajah", label: "Bus stop pickup" },
  { value: "Berger", label: "Bus stop pickup" },
];

const faqs = [
  {
    q: "What title documents come with the land?",
    a: "Every Harvest Homes plot comes with Freehold title, a Deed of Assignment and a Survey.",
  },
  {
    q: "How much do I need to get started?",
    a: "You can start with ₦1,000,000. Bare land is ₦3M per acre, the plantain plantation is ₦4.5M per acre (₦1.5M deposit) or ₦12M per hectare (₦3M deposit).",
  },
  {
    q: "Can I pay in instalments?",
    a: "Yes. Pay outright, or spread your payment over 3 or 6 months. The 3-month plan attracts no interest.",
  },
  {
    q: "Who manages the plantation?",
    a: "On the plantation option, we plant 300 plantain suckers per acre and manage the farm for 5 years. 70% of the annual profit goes to you.",
  },
  {
    q: "How much can the plantation earn?",
    a: "At an average of ₦5,000 per bunch, 1 acre (300 suckers) can produce an estimated ₦1,500,000 per harvest cycle. These are estimates based on average market prices; actual harvest and prices may vary.",
  },
  {
    q: "Can I visit the site before buying?",
    a: "Absolutely. We run site inspections with a 7:30AM take-off and pickup points at Ajah and Berger bus stops. Book your slot using the form below.",
  },
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.2-7-11.5a7 7 0 1114 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, accent, description }: { eyebrow: string; title: string; accent: string; description?: string }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-harvest-green/10 text-harvest-green border border-harvest-green/20">
        {eyebrow}
      </span>
      <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-brand-black-dark leading-[1.08]">
        {title} <span className="font-playfair italic">{accent}</span>
      </h2>
      {description && (
        <p className="font-sans text-lg text-brand-black-light max-w-2xl leading-relaxed tracking-[-1px]">{description}</p>
      )}
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-stone-200 rounded-3xl bg-white border border-stone-100 px-6 sm:px-10">
      {faqs.map((faq, i) => (
        <div key={faq.q}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-6 py-6 text-left focus:outline-none group"
          >
            <span className="font-alatsi text-lg sm:text-xl text-brand-black-dark group-hover:text-harvest-green transition-colors">
              {faq.q}
            </span>
            <span
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                open === i ? "rotate-45 bg-harvest-green border-harvest-green text-white" : "border-stone-300 text-stone-500"
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="font-sans text-base text-stone-500 leading-relaxed tracking-[-0.5px] pb-6 pr-12">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function HarvestHomesPage() {
  return (
    <>
      <SEO
        title="Harvest Homes | Farmland & Plantain Plantation in Ogun State - Pestone Signature"
        description="Own freehold farmland at Laloko Village, Owode Obafemi, Ogun State and earn from a managed plantain plantation. From ₦3M per acre with flexible 3 or 6 month payment plans."
        image={absoluteUrl("/Images/harvest-homes/flyer-introducing.jpg")}
        jsonLd={harvestJsonLd}
      />

      <main className="min-h-screen bg-[#E7E5E4] flex flex-col pb-16">
        <Navbar />

        {/* Hero — not wrapped in Reveal so it paints immediately */}
        <section className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="relative w-full rounded-3xl overflow-hidden bg-harvest-deep border border-stone-200/50">
            <div className="absolute inset-0 select-none">
              <Image
                src="/Images/harvest-homes/plantation-wide.jpg"
                alt=""
                fill
                className="object-cover opacity-30 blur-[2px] scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-harvest-deep via-harvest-deep/90 to-harvest-green/70" />
              <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-harvest-gold/20 blur-3xl" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
              {/* Copy */}
              <div className="flex flex-col items-start gap-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-harvest-gold/30 bg-harvest-gold/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-harvest-gold">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-harvest-gold opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-harvest-gold" />
                  </span>
                  New Launch
                </span>

                <div className="flex flex-col gap-4">
                  <h1 className="font-alatsi text-[52px] sm:text-7xl lg:text-[84px] font-normal leading-[0.95] tracking-tight text-white">
                    Harvest <span className="text-harvest-gold">Homes</span>
                  </h1>
                  <p className="font-alatsi text-2xl sm:text-3xl text-white/90 leading-snug">
                    Own the land.{" "}
                    <span className="font-playfair italic text-harvest-gold">Earn from the plantation.</span>
                  </p>
                </div>

                <p className="inline-flex items-start gap-2 font-sans text-base text-white/75 tracking-[-0.3px]">
                  <PinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-harvest-gold" />
                  {HARVEST_LOCATION}
                </p>

                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl text-harvest-deep bg-harvest-gold hover:bg-white transition-all duration-300 shadow-lg shadow-harvest-gold/20 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Book a Site Inspection
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                  <Link
                    href="#pricing"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl text-white border border-white/25 hover:bg-white/10 transition-all duration-300"
                  >
                    View Pricing
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {TITLE_DOCUMENTS.map((doc) => (
                    <span key={doc} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs font-semibold text-white">
                      <CheckIcon className="h-4 w-4 text-harvest-leaf" />
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arch image with floating cards */}
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-square overflow-hidden rounded-t-full rounded-b-3xl border-4 border-white/10 shadow-2xl">
                  <Image
                    src="/Images/harvest-homes/plantation-logo.jpg"
                    alt="Harvest Homes plantain plantation in Owode Obafemi, Ogun State"
                    fill
                    sizes="(max-width: 1024px) 90vw, 448px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-2 sm:-left-8 bottom-10 rounded-2xl bg-white px-5 py-4 shadow-2xl"
                >
                  <span className="block font-sans text-[11px] font-semibold uppercase tracking-widest text-stone-400">Start with</span>
                  <span className="block font-alatsi text-2xl sm:text-3xl text-harvest-green leading-tight">₦1,000,000</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-2 sm:-right-6 top-1/3 rounded-2xl bg-harvest-gold px-4 py-3 shadow-2xl"
                >
                  <span className="block font-alatsi text-xl text-harvest-deep leading-tight">₦1.5M</span>
                  <span className="block font-sans text-[11px] font-semibold text-harvest-deep/70 leading-tight">est. per acre,<br />per harvest</span>
                </motion.div>
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </div>
        </section>

        {/* Stats strip */}
        <Reveal>
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl bg-white border border-stone-100 overflow-hidden">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-1 px-6 py-7 sm:px-8 sm:py-9 border-stone-100 ${i % 2 === 0 ? "border-r" : ""} ${
                    i < 2 ? "border-b lg:border-b-0" : ""
                  } ${i === 1 ? "lg:border-r" : ""}`}
                >
                  <Counter
                    to={stat.to}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={1.4}
                    className="font-alatsi text-4xl sm:text-5xl text-harvest-green leading-none"
                  />
                  <span className="font-sans text-sm text-stone-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* How it works */}
        <Reveal>
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col gap-12">
            <SectionHeading
              eyebrow="How it works"
              title="Land that"
              accent="works for you"
              description="Harvest Homes turns farmland into a dual-income asset: the land appreciates while the plantation pays you every harvest."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((step, i) => (
                <div key={step.title} className="group relative flex flex-col gap-4 rounded-3xl bg-white border border-stone-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <span className="font-alatsi text-6xl text-harvest-green/15 leading-none transition-colors group-hover:text-harvest-gold">
                    0{i + 1}
                  </span>
                  <h3 className="font-alatsi text-2xl text-brand-black-dark">{step.title}</h3>
                  <p className="font-sans text-base text-stone-500 leading-relaxed tracking-[-0.5px]">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Pricing */}
        <section id="pricing" className="w-full bg-white scroll-mt-6">
          <Reveal>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col gap-12">
              <SectionHeading
                eyebrow="Pricing & payment plans"
                title="Two ways to own"
                accent="your farmland"
                description="Pay outright, or spread it over 3 or 6 months. The 3-month plan comes with no interest."
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative flex flex-col gap-7 rounded-3xl p-7 sm:p-10 ${
                      plan.featured ? "bg-harvest-deep text-white shadow-2xl shadow-harvest-deep/30" : "bg-stone-50 border border-stone-200"
                    }`}
                  >
                    {plan.featured && (
                      <span className="absolute -top-3.5 right-8 rounded-full bg-harvest-gold px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-harvest-deep shadow-md">
                        Earns from harvest
                      </span>
                    )}

                    <div className="flex flex-col gap-3">
                      <h3 className={`font-alatsi text-2xl ${plan.featured ? "text-harvest-gold" : "text-harvest-green"}`}>{plan.name}</h3>
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span className={`font-alatsi text-5xl sm:text-6xl leading-none ${plan.featured ? "text-white" : "text-brand-black-dark"}`}>
                          {plan.price}
                        </span>
                        <span className={`font-sans text-sm font-medium whitespace-nowrap ${plan.featured ? "text-white/60" : "text-stone-500"}`}>{plan.unit}</span>
                      </div>
                      <p className={`font-sans text-base leading-relaxed tracking-[-0.5px] ${plan.featured ? "text-white/70" : "text-stone-500"}`}>
                        {plan.blurb}
                      </p>
                    </div>

                    {/* 3-month schedule */}
                    <div className={`rounded-2xl overflow-hidden ${plan.featured ? "bg-white/5 border border-white/10" : "bg-white border border-stone-200"}`}>
                      <div className={`flex items-center justify-between px-5 py-3 text-xs font-bold uppercase tracking-widest ${plan.featured ? "bg-harvest-leaf text-white" : "bg-harvest-green text-white"}`}>
                        <span>3-month plan</span>
                        <span>{plan.price}</span>
                      </div>
                      {plan.schedule.map(([label, amount]) => (
                        <div
                          key={label}
                          className={`flex items-center justify-between px-5 py-3 text-sm border-t ${
                            plan.featured ? "border-white/10 text-white/80" : "border-stone-100 text-stone-600"
                          }`}
                        >
                          <span>{label}</span>
                          <span className={`font-semibold ${plan.featured ? "text-white" : "text-brand-black-dark"}`}>{amount}</span>
                        </div>
                      ))}
                    </div>

                    <ul className="flex flex-col gap-3">
                      {plan.perks.map((perk) => (
                        <li key={perk} className={`flex items-start gap-3 font-sans text-sm ${plan.featured ? "text-white/90" : "text-brand-black-light"}`}>
                          <CheckIcon className={`mt-0.5 h-5 w-5 flex-shrink-0 ${plan.featured ? "text-harvest-gold" : "text-harvest-leaf"}`} />
                          {perk}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="#contact"
                      className={`mt-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
                        plan.featured
                          ? "bg-harvest-gold text-harvest-deep hover:bg-white"
                          : "bg-brand-dark text-white hover:bg-harvest-green"
                      }`}
                    >
                      Reserve {plan.name === "Bare Land" ? "bare land" : "a plantation plot"}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Estimator */}
        <Reveal>
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <HarvestEstimator />
          </section>
        </Reveal>

        {/* Location */}
        <Reveal>
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
              <div className="flex flex-col gap-6">
                <span className="inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-harvest-green/10 text-harvest-green border border-harvest-green/20">
                  Location
                </span>
                <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-brand-black-dark leading-[1.08]">
                  Neighbours that <span className="font-playfair italic">mean business</span>
                </h2>
                <p className="inline-flex items-start gap-2 font-sans text-base text-brand-black-light tracking-[-0.3px]">
                  <PinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-harvest-green" />
                  {HARVEST_LOCATION}
                </p>
                <ul className="flex flex-col gap-3">
                  {neighbours.map((n, i) => (
                    <li key={n.name} className="flex items-center gap-4 rounded-2xl bg-white border border-stone-100 px-5 py-4 transition-all duration-300 hover:border-harvest-green/30 hover:shadow-md">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-harvest-green/10 font-alatsi text-harvest-green">
                        0{i + 1}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-alatsi text-lg text-brand-black-dark leading-tight">{n.name}</span>
                        <span className="font-sans text-sm text-stone-400">{n.type}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative w-full overflow-hidden rounded-3xl border border-stone-200 shadow-md h-[360px] sm:h-[480px] lg:h-full lg:min-h-[520px]">
                <iframe
                  src="https://maps.google.com/maps?q=Siun,%20Obafemi%20Owode,%20Ogun%20State,%20Nigeria&z=12&output=embed"
                  title="Map of Harvest Homes location in Owode Obafemi, Ogun State"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* Site inspection */}
        <Reveal>
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-harvest-gold px-6 py-12 sm:px-12 sm:py-14 lg:px-16">
              <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-white/25 blur-2xl pointer-events-none" />
              <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
                <div className="flex flex-col gap-4">
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-harvest-deep/70">You are invited</span>
                  <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-harvest-deep leading-[1.05]">
                    Come see it <span className="font-playfair italic">for yourself</span>
                  </h2>
                  <p className="font-sans text-base text-harvest-deep/80 leading-relaxed tracking-[-0.3px] max-w-md">
                    Join our guided site inspection and walk the land before you commit. Book your slot today.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl text-white bg-harvest-deep hover:bg-brand-dark transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Book Your Slot
                    </Link>
                    <a
                      href={`tel:${HARVEST_PHONES[0].tel}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl text-harvest-deep border border-harvest-deep/25 hover:bg-harvest-deep/5 transition-all duration-300"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.3a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.5 1.2l-1.6.8a11 11 0 005.3 5.3l.8-1.6a1 1 0 011.2-.5l3.3 1.1a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
                      </svg>
                      Call to Book
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {inspectionDetails.map((d) => (
                    <div key={d.value} className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-harvest-deep px-3 py-6 sm:py-8 text-center">
                      <span className="font-alatsi text-xl sm:text-3xl text-harvest-gold leading-none">{d.value}</span>
                      <span className="font-sans text-xs sm:text-sm text-white/70">{d.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Flyers */}
        <Reveal>
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col gap-12">
            <SectionHeading
              eyebrow="Campaign"
              title="The Harvest Homes"
              accent="flyers"
              description="Everything at a glance. Tap any flyer to view it full size."
            />
            <FlyerGallery flyers={flyers} />
          </section>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 flex flex-col gap-12">
            <SectionHeading eyebrow="FAQ" title="Questions," accent="answered" />
            <FAQ />
            <p className="text-center font-sans text-sm text-stone-500">
              Still have questions? Call{" "}
              {HARVEST_PHONES.map((phone, i) => (
                <span key={phone.tel}>
                  {i > 0 && " or "}
                  <a href={`tel:${phone.tel}`} className="font-semibold text-harvest-green hover:text-brand-orange transition-colors">
                    {phone.display}
                  </a>
                </span>
              ))}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <Contact
            title="Book a Site Inspection"
            subtitle="Ready to own your farmland? Tell us which plan interests you and our team will reach out with available slots and next steps."
            subject="Harvest Homes Enquiry"
          />
        </Reveal>

        <Reveal><Footer /></Reveal>
      </main>
    </>
  );
}
