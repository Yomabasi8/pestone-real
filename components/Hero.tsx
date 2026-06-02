import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const fullText = "for Modern Living";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(fullText.substring(0, displayText.length + 1));
        
        if (displayText === fullText) {
          // Pause at the end of the phrase
          timer = setTimeout(() => setIsDeleting(true), 3000);
          return;
        }
      } else {
        // Deleting
        setDisplayText(fullText.substring(0, displayText.length - 1));
        
        if (displayText === "") {
          setIsDeleting(false);
          // Pause briefly before typing again
          setTypingSpeed(120);
          timer = setTimeout(() => {}, 600);
          return;
        }
      }

      setTypingSpeed(isDeleting ? 50 : 100);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  // Helper to parse the typed text and apply white/orange/white colors
  const renderTypedContent = () => {
    if (displayText.length === 0) {
      // Return zero-width space to keep the height stable and prevent line-height collapsing
      return <span className="text-white opacity-0">&#8203;</span>;
    }
    
    if (displayText.length <= 3) {
      // Typing "for"
      return <span className="text-white">{displayText}</span>;
    } else if (displayText.length <= 10) {
      // "for" is fully typed, typing " Modern"
      const orangePart = displayText.substring(4); // Excludes the space
      return (
        <>
          <span className="text-white">for</span>
          <span className="text-brand-orange">{orangePart}</span>
        </>
      );
    } else {
      // "for Modern" is fully typed, now typing " Living"
      const livingProgress = displayText.substring(11); // Excludes the space
      return (
        <>
          <span className="text-white">for</span>
          <span className="text-brand-orange">Modern</span>
          <span className="text-white">{livingProgress}</span>
        </>
      );
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Modern Rounded Hero Container */}
      <div className="relative w-full rounded-3xl overflow-hidden min-h-[500px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[660px] flex items-center border border-stone-200/50">

        {/* Background Image */}
        <div className="absolute inset-0 select-none">
          <Image
            src="/Images/vertical-shot-white-building-clear-sky 1.png"
            alt="Premium Real Estate White Building"
            fill
            className="object-cover object-center transform transition-transform duration-1000 ease-out hover:scale-105"
            sizes="(max-w-1280px) 100vw, 1280px"
            priority
          />
          {/* Left-heavy gradient to anchor the text side */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-900/35 to-stone-900/10" />
          {/* Bottom vignette to ground the composition */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-2xl px-6 py-12 sm:px-10 md:px-14 lg:px-16 flex flex-col items-start gap-3">

          {/* Main Title */}
          <h1 className="font-alatsi text-[46px] sm:text-6xl md:text-[68px] lg:text-7xl font-normal leading-none tracking-tight text-white select-none">
            <span className="text-brand-orange block">Premium</span>
            Real Estate{" "}
            <br className="hidden sm:inline" />
            <span className="inline-flex items-center min-h-[1em]">
              <span className="inline-flex items-center gap-x-[0.25em]">
                {renderTypedContent()}
              </span>
              <span className="animate-blink font-light text-brand-orange">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg text-white max-w-sm mt-2 leading-relaxed tracking-[-1px] font-light [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
            While everyone chases properties, smart investors chase returns. We don&apos;t just list houses and landed properties— we find assets that actually make money in this market.
          </p>

          {/* CTA Button */}
          <div className="mt-5">
            <Link
              href="#properties"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-xl text-white bg-brand-dark hover:bg-brand-orange transition-all duration-300 shadow-md shadow-brand-dark/20 hover:shadow-brand-orange/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark active:translate-y-0"
            >
              Explore Properties
            </Link>
          </div>

        </div>

        {/* Glassmorphism border ring */}
        <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
      </div>
    </section>
  );
}
