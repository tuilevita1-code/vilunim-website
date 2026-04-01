const testimonials = [
  {
    quote:
      "Had $40k sitting overdue. Within two weeks, $28k had come in. Wish I'd done it sooner.",
    name: "Mike T.",
    trade: "Commercial Builder, Auckland",
    initials: "MT",
  },
  {
    quote:
      "Used to spend Friday afternoons chasing invoices. Now I don't think about it. The system handles everything.",
    name: "Sarah L.",
    trade: "Electrical Contractor, Hamilton",
    initials: "SL",
  },
  {
    quote:
      "Setup took one afternoon. First automated reminder went out the same day.",
    name: "Dave R.",
    trade: "Plumbing Business, Tauranga",
    initials: "DR",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white" aria-labelledby="social-proof-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <h2
            id="social-proof-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-midnight leading-snug"
          >
            NZ trade businesses getting paid faster.
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
