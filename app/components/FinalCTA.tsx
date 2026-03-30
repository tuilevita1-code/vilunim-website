export default function FinalCTA() {
  return (
    <section className="bg-midnight" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <h2
          id="final-cta-heading"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-cream leading-tight"
        >
          Ready to stop missing jobs?
        </h2>
        <p className="mt-6 text-lg text-cream/60 leading-relaxed max-w-xl mx-auto">
          Book a free 20-minute demo and hear Lydia in action. We&rsquo;ll talk
          through your business, build Lydia around how you work, and walk you
          through exactly what&rsquo;s involved — no fixed packages, no lock-in.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/tuilevita1/30min"
            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-forest text-cream text-base font-medium hover:bg-forest/80 transition-colors duration-200 cursor-pointer"
            aria-label="Book your free 20-minute demo call"
          >
            Book Your Free Demo
          </a>
        </div>
        <p className="mt-6 text-sm text-cream/30">
          No commitment. No credit card. Just 20 minutes.
        </p>
      </div>
    </section>
  );
}
