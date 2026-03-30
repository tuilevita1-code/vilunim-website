const features = [
  "Custom Lydia setup for your business",
  "Unlimited calls answered, 24/7",
  "Lead summaries delivered after every call",
  "Urgent call routing and alerts",
  "Monthly check-in with our team",
  "Updates and improvements included",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-cream"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-forest text-sm font-semibold uppercase tracking-widest">
            Simple pricing
          </p>
          <h2
            id="pricing-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-midnight leading-snug"
          >
            One plan. Everything included.
          </h2>
          <p className="mt-4 text-base text-midnight/60 leading-relaxed">
            No hidden fees. No lock-in. Cancel anytime with 30 days&rsquo;
            notice.
          </p>
        </div>

        <div className="mt-12 max-w-md mx-auto">
          <div className="rounded-2xl bg-midnight p-8 shadow-xl">
            {/* Setup fee */}
            <div className="flex items-baseline justify-between pb-6 border-b border-white/10">
              <div>
                <p className="text-cream/50 text-sm">One-time setup</p>
                <p className="mt-1 font-serif text-4xl font-bold text-cream">
                  $1,200
                  <span className="text-lg font-normal text-cream/50 ml-1">
                    NZD
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-cream/50 text-sm">Then monthly</p>
                <p className="mt-1 font-serif text-4xl font-bold text-cream">
                  $797
                  <span className="text-lg font-normal text-cream/50 ml-1">
                    /mo
                  </span>
                </p>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-6 flex flex-col gap-3" role="list">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-forest shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-cream/80">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://calendly.com"
              className="mt-8 flex items-center justify-center h-12 w-full rounded-lg bg-forest text-cream text-base font-medium hover:bg-forest/80 transition-colors duration-200 cursor-pointer"
              aria-label="Get started with Vilunim"
            >
              Get Started
            </a>
            <p className="mt-3 text-center text-xs text-cream/40">
              Cancel anytime. No lock-in contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
