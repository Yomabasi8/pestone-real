import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 pb-6 mt-20 sm:px-6 lg:px-8">
      <div className="bg-brand-dark rounded-3xl overflow-hidden">

        {/* Top: 3-column info grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 px-8 sm:px-12 py-10 sm:py-12">

          {/* Left: Icon + Contact — full width on mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="relative w-10 h-10">
              <Image
                src="/Images/logo-icon-pestone.png"
                alt="Pestone Signature icon"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-sm text-white">Shoot us an email</span>
              <a
                href="mailto:pestonesignature@gmail.com"
                className="font-sans text-sm font-bold text-white hover:text-brand-orange transition-colors duration-200"
              >
                pestonesignature@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-sm text-white">Call us</span>
              <a
                href="tel:+2349130426840"
                className="font-sans text-sm font-bold text-white hover:text-brand-orange transition-colors duration-200"
              >
                +234 913 042 6840
              </a>
            </div>
          </div>

          {/* Middle: Navigation */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-sm text-white">Navigation</span>
            <div className="flex flex-col gap-3">
              {["Home", "Properties", "About"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : item === "About" ? "/about" : `#${item.toLowerCase()}`}
                  className="font-sans text-base font-bold text-white hover:text-brand-orange transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Socials */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-sm text-white">Socials</span>
            <div className="flex flex-col gap-3">
              {["Instagram", "Facebook", "LinkedIn"].map((platform) => (
                <a
                  key={platform}
                  href={platform === "Instagram" ? "https://www.instagram.com/realtorgeeoflagos?igsh=bWhld2M1MzAyNDg1" : "#"}
                  target={platform === "Instagram" ? "_blank" : undefined}
                  rel={platform === "Instagram" ? "noopener noreferrer" : undefined}
                  className="font-sans text-base font-bold text-white hover:text-brand-orange transition-colors duration-200"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mx-8 sm:mx-12 border-t border-white/10" />

        {/* Bottom: Large watermark logo */}
        <div className="px-8 sm:px-12 pt-4 sm:pt-8 pb-6 sm:pb-10 opacity-[0.13]">
          <div className="relative w-full h-44 sm:h-52 lg:h-60">
            <Image
              src="/Images/footer-logo.png"
              alt="Pestone Signature"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>

      </div>
    </footer>
  );
}
