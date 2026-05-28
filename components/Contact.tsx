import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative w-full min-h-[720px] flex items-center justify-center py-20">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Images/greenfield.jpg"
          alt="Green field background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Form card */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col gap-8">

          {/* Header */}
          <div className="flex flex-col gap-2">
            <h2 className="font-alatsi text-4xl sm:text-5xl font-normal text-brand-black-dark">
              Let&apos;s Get In Touch
            </h2>
            <p className="font-sans text-base text-stone-400 leading-relaxed">
              Ready to find your next property?<br />
              Let&apos;s help you get started. Reach out today and our team will respond promptly.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-6">

            {/* Row 1: Full Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-sans text-sm font-semibold text-brand-black-dark">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-brand-black-dark placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-sans text-sm font-semibold text-brand-black-dark">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder=""
                  className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-brand-black-dark placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="font-sans text-sm font-semibold text-brand-black-dark">
                Subject of Inquiry
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-brand-black-dark placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="font-sans text-sm font-semibold text-brand-black-dark">
                Message
              </label>
              <textarea
                rows={6}
                placeholder=""
                className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-brand-black-dark placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-brand-dark text-white text-sm font-semibold hover:bg-brand-orange transition-all duration-300 shadow-md hover:shadow-brand-orange/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Submit Form
            </button>

          </form>
        </div>
      </div>

    </section>
  );
}
