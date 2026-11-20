import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PRICE_PER_BUNCH, formatNaira, plotSizes } from "../data/harvestHomes";

function AnimatedValue({ value, className }: { value: string; className?: string }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={`block ${className ?? ""}`}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );
}

export default function HarvestEstimator() {
  const [selected, setSelected] = useState(0);
  const plot = plotSizes[selected];
  const harvest = plot.suckers * PRICE_PER_BUNCH;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-harvest-deep p-6 sm:p-10 lg:p-12">
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-harvest-leaf/20 blur-3xl pointer-events-none" />
      <div className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-harvest-gold/10 blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
        {/* Controls */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-harvest-gold/15 text-harvest-gold border border-harvest-gold/30">
            Harvest Estimator
          </span>
          <h2 className="font-alatsi text-4xl sm:text-5xl font-normal tracking-tight text-white leading-[1.05]">
            See what your <span className="font-playfair italic text-harvest-gold">plantation</span> could earn
          </h2>
          <p className="font-sans text-base text-white/70 leading-relaxed tracking-[-0.5px] max-w-md">
            Pick a plot size to see the land price, how many plantain suckers we plant, and the estimated value of each harvest cycle.
          </p>

          <div role="radiogroup" aria-label="Plot size" className="grid grid-cols-3 gap-2">
            {plotSizes.map((size, i) => (
              <button
                key={size.label}
                type="button"
                role="radio"
                aria-checked={selected === i}
                onClick={() => setSelected(i)}
                className={`rounded-xl px-2 py-3 text-xs sm:text-sm whitespace-nowrap font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-harvest-gold ${
                  selected === i
                    ? "bg-harvest-gold text-harvest-deep shadow-lg shadow-harvest-gold/20"
                    : "bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-2xl">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-400">
              Estimated harvest per cycle
            </span>
            <AnimatedValue
              value={formatNaira(harvest)}
              className="font-alatsi text-5xl sm:text-6xl text-harvest-green mt-2 leading-none"
            />
            <p className="font-sans text-sm text-stone-500 mt-3 tracking-[-0.3px]">
              {plot.suckers.toLocaleString("en-US")} bunches × {formatNaira(PRICE_PER_BUNCH)} average market price per bunch
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/50">Land price</span>
              <AnimatedValue value={formatNaira(plot.price)} className="font-alatsi text-xl sm:text-3xl text-white mt-1" />
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/50">Suckers</span>
              <AnimatedValue value={plot.suckers.toLocaleString("en-US")} className="font-alatsi text-xl sm:text-3xl text-white mt-1" />
            </div>
          </div>

          <p className="font-sans text-xs italic text-white/50 leading-relaxed">
            Figures are estimates based on average market prices. Actual harvest and prices may vary.
          </p>
        </div>
      </div>
    </div>
  );
}
