const testimonials = [
  {
    id: 1,
    text: "They helped me with property that matched exactly what I wanted",
    name: "Client Feedback",
    stars: 5,
  },
  {
    id: 2,
    text: "Professional and very responsive. They made the entire process smooth",
    name: "Client Feedback",
    stars: 5,
  },
  {
    id: 3,
    text: "Great customer service and quality property options. Highly recommended",
    name: "Client Feedback",
    stars: 5,
  },
  {
    id: 4,
    text: "They helped me with property that matched exactly what I wanted",
    name: "Client Feedback",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ text, name, stars }: { text: string; name: string; stars: number }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
      <p className="font-sans text-base sm:text-lg leading-relaxed tracking-[-1px] flex-1" style={{ color: "#626262" }}>
        {text}
      </p>
      <div className="flex flex-col items-end gap-1">
        <span className="font-alatsi text-base font-normal text-brand-black-dark">{name}</span>
        <Stars count={stars} />
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="flex flex-col gap-8">

        {/* Top row: title + featured card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <h2 className="font-alatsi text-5xl sm:text-6xl lg:text-[64px] font-normal leading-[1.05] tracking-tight text-brand-black-dark">
            What Our <br />Customers Say
          </h2>
          <div className="lg:pt-2">
            <TestimonialCard {...testimonials[0]} />
          </div>
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.slice(1).map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>

      </div>
    </section>
  );
}
