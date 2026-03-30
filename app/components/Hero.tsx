export default function Hero() {
  return (
    <section className="bg-midnight">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-tight tracking-tight">
            Every Missed Call
            <br />
            Is a Job Lost.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-cream/70 leading-relaxed max-w-xl">
            Lydia is your AI voice receptionist — she answers every call 24/7,
            qualifies your leads, and delivers them straight to you. No missed
            calls. No lost jobs. No staff needed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/tuilevita1/30min"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-forest text-cream text-base font-medium hover:bg-forest/80 transition-colors duration-200 cursor-pointer"
              aria-label="Book your free 20-minute demo call"
            >
              Book a Free Demo
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-cream/30 text-cream text-base font-medium hover:border-cream/60 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
            >
              See How It Works
            </a>
          </div>
          <p className="mt-6 text-sm text-cream/40">
            No lock-in contracts. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
