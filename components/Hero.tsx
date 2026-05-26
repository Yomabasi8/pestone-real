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
      <div className="relative w-full rounded-3xl overflow-hidden min-h-[520px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[700px] flex items-center shadow-xl border border-stone-200/50">
        
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
          {/* Gradients to blend and soften the visual while preserving content readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-900/40 to-transparent sm:from-stone-950/65 sm:via-stone-900/40 sm:to-stone-900/10" />
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-3xl px-6 py-16 sm:px-12 md:px-16 lg:px-20 flex flex-col items-start gap-4">
          
          {/* Main Title utilizing Alatsi Font */}
          <h1 className="font-alatsi text-[42px] sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-white select-none">
            <span className="text-brand-orange block mb-1">Premium</span>
            Real Estate{" "}
            <br className="hidden sm:inline" />
            <span className="inline-flex items-center min-h-[1.2em]">
              <span className="inline-flex items-center gap-x-[0.25em]">
                {renderTypedContent()}
              </span>
              <span className="animate-blink font-light text-brand-orange">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-stone-200 max-w-lg mt-3 leading-relaxed font-light">
            Find, buy, and invest in quality properties with ease, transparency, and trust.
          </p>

          {/* Button Link */}
          <div className="mt-6 sm:mt-8">
            <Link
              href="#properties"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-brand-dark hover:bg-brand-orange transition-all duration-300 shadow-lg shadow-brand-dark/20 hover:shadow-brand-orange/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark active:translate-y-0"
            >
              Explore Properties
            </Link>
          </div>

        </div>

        {/* Decorative subtle ambient border glow overlay for glassmorphism look */}
        <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
      </div>
    </section>
  );
}
