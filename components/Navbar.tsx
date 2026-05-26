import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8">
      {/* Floating White Navbar Card */}
      <nav className="bg-white rounded-2xl shadow-sm border border-stone-100 px-6 py-4 sm:px-8 sm:py-3.5 flex items-center justify-between transition-all duration-300">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-lg">
          <div className="relative w-40 h-10 sm:w-48 sm:h-12">
            <Image
              src="/Images/Logo-.png"
              alt="Pestone Signature Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-sans">
          <Link
            href="/"
            className="relative py-2 text-brand-orange font-medium transition-colors duration-200 focus:outline-none focus:text-brand-orange group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange rounded-full transition-transform duration-200 origin-left scale-x-100"></span>
          </Link>
          <Link
            href="#properties"
            className="relative py-2 text-stone-600 hover:text-brand-orange font-medium transition-colors duration-200 focus:outline-none focus:text-brand-orange group"
          >
            Properties
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange rounded-full transition-transform duration-200 origin-left scale-x-0 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="#about"
            className="relative py-2 text-stone-600 hover:text-brand-orange font-medium transition-colors duration-200 focus:outline-none focus:text-brand-orange group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange rounded-full transition-transform duration-200 origin-left scale-x-0 group-hover:scale-x-100"></span>
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-brand-dark hover:bg-brand-orange transition-all duration-300 shadow-md shadow-brand-dark/10 hover:shadow-brand-orange/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark active:translate-y-0"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-xl text-stone-500 hover:text-brand-orange hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop & Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>

        {/* Menu Panel */}
        <div
          className={`absolute right-4 top-24 w-72 bg-white rounded-2xl shadow-xl border border-stone-100 p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0 scale-100" : "translate-x-4 scale-95"
          }`}
          id="mobile-menu"
        >
          <div className="flex flex-col gap-4 font-sans text-lg">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl text-brand-orange font-semibold bg-stone-50"
            >
              Home
            </Link>
            <Link
              href="#properties"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl text-stone-600 hover:text-brand-orange hover:bg-stone-50 font-medium transition-colors"
            >
              Properties
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl text-stone-600 hover:text-brand-orange hover:bg-stone-50 font-medium transition-colors"
            >
              About Us
            </Link>
          </div>

          <hr className="border-stone-100" />

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-6 py-3.5 text-base font-semibold rounded-xl text-white bg-brand-dark hover:bg-brand-orange transition-all duration-300 shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
