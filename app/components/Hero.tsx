import { CALENDLY_URL } from "../lib/constants";

export default function Hero() {
  return (
    <section className="bg-midnight min-h-svh flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight tracking-tight">
            The work is done.
            <br />
            The money should follow.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-cream/70 leading-relaxed max-w-xl">
            We build automated cash flow systems for NZ trade businesses. Stop
            chasing invoices. Start getting paid.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-forest text-cream text-base font-medium hover:bg-forest/80 transition-colors duration-200"
              aria-label="Book a free demo"
            >
              Book a Free Demo
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-cream/30 text-cream text-base font-medium hover:border-cream/60 hover:bg-white/5 transition-colors duration-200"
            >
              See How It Works
            </a>
          </div>
          <p className="mt-6 text-sm text-cream/40">
            No lock-in. Free 15-minute demo. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
