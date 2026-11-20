import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Flyer {
  src: string;
  width: number;
  height: number;
  alt: string;
}

function FlyerCard({ flyer, onOpen, hidden }: { flyer: Flyer; onOpen: () => void; hidden: boolean }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View flyer: ${flyer.alt}`}
      // The duplicated half of each row is decorative, so keep it out of the tab order and screen readers
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className="group relative w-56 sm:w-64 lg:w-72 flex-shrink-0 aspect-[4/5] overflow-hidden rounded-2xl bg-harvest-deep shadow-md transition-shadow duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-harvest-gold"
    >
      <Image
        src={flyer.src}
        alt={hidden ? "" : flyer.alt}
        fill
        sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-harvest-deep">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
          View
        </span>
      </span>
    </button>
  );
}

export default function FlyerGallery({ flyers }: { flyers: Flyer[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) => setActive((i) => (i === null ? i : (i + dir + flyers.length) % flyers.length)),
    [flyers.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <>
      {/* Two endless rows scrolling in opposite directions — duplicated for a seamless loop */}
      <div className="relative w-full flex flex-col gap-5">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#E7E5E4] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#E7E5E4] to-transparent z-10 pointer-events-none" />

        {[
          { order: flyers.map((_, i) => i), className: "animate-marquee" },
          { order: flyers.map((_, i) => (i + 3) % flyers.length), className: "animate-marquee-reverse" },
        ].map((row, r) => (
          <div key={r} className={`${row.className} flex gap-5 w-max`}>
            {[...row.order, ...row.order].map((index, i) => (
              <FlyerCard
                key={`${r}-${i}`}
                flyer={flyers[index]}
                onOpen={() => setActive(index)}
                hidden={i >= row.order.length}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Flyer viewer"
          >
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={flyers[active].src}
                alt={flyers[active].alt}
                width={flyers[active].width}
                height={flyers[active].height}
                sizes="90vw"
                className="h-auto max-h-[85vh] w-auto max-w-[90vw] rounded-xl object-contain"
              />
            </motion.div>

            <span className="absolute top-5 left-1/2 -translate-x-1/2 font-sans text-sm text-white/70">
              {active + 1} / {flyers.length}
            </span>

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {[
              { dir: -1, label: "Previous flyer", side: "left-3 sm:left-6", d: "M15 19l-7-7 7-7" },
              { dir: 1, label: "Next flyer", side: "right-3 sm:right-6", d: "M9 5l7 7-7 7" },
            ].map(({ dir, label, side, d }) => (
              <button
                key={label}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(dir);
                }}
                aria-label={label}
                className={`absolute ${side} top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={d} />
                </svg>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
