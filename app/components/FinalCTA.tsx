import { CALENDLY_URL } from "../lib/constants";

export default function FinalCTA() {
  return (
    <section className="bg-midnight" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <h2
          id="final-cta-heading"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight"
        >
          Ready to stop chasing?
        </h2>
        <p className="mt-6 text-lg text-cream/60 leading-relaxed max-w-xl mx-auto">
          Book a free 15-minute demo. We&rsquo;ll show you exactly how the
          system works for your business — no commitment, no pressure.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-forest text-cream text-base font-medium hover:bg-forest/80 transition-colors duration-200"
            aria-label="Book a free demo"
          >
            Book a Free Demo
          </a>
        </div>
        <p className="mt-6 text-sm text-cream/30">
          No commitment. No credit card. Just 15 minutes.
        </p>
      </div>
    </section>
  );
}
