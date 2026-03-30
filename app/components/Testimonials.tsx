const testimonials = [
  {
    quote:
      "I used to miss four or five calls a week — just gone. Now Lydia handles every one and I ring the leads back when I knock off. Booked two jobs in the first week alone.",
    name: "James T.",
    trade: "Plumber, Auckland",
    initials: "JT",
  },
  {
    quote:
      "Set it up and basically forgot about it. The leads just show up on my phone. Best decision I've made for the business — worth every cent of that $800 a month.",
    name: "Craig M.",
    trade: "Electrician, Christchurch",
    initials: "CM",
  },
  {
    quote:
      "I was sceptical an AI would sound natural enough, but my customers can't tell the difference. Lydia's professional, asks the right stuff, and I get a proper summary every time.",
    name: "Sarah K.",
    trade: "Builder, Wellington",
    initials: "SK",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-forest text-sm font-semibold uppercase tracking-widest">
            Real results
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-midnight leading-snug"
          >
            Tradies across New Zealand are stopping missed calls.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-6 p-6 rounded-xl bg-cream/50 border border-midnight/8"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-forest"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm text-midnight/70 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-midnight flex items-center justify-center text-cream text-xs font-semibold shrink-0"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-midnight">
                    {t.name}
                  </p>
                  <p className="text-xs text-midnight/50">{t.trade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-midnight/40 text-center">
          * Names changed for privacy. Real customers, real results.
        </p>
      </div>
    </section>
  );
}
