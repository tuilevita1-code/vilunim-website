const capabilities = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    heading: "Answers every call, 24/7",
    body: "Lydia picks up in seconds — day, night, weekend, public holiday. Configured around your hours, your services, and how you prefer to be contacted.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    heading: "Asks the right questions for your trade",
    body: "We train Lydia on your specific services — what to ask a plumbing job versus a building job. No generic scripts. She sounds like she works for you.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    heading: "Delivers leads the way you want them",
    body: "After every call you get a clean summary — name, job details, contact number — delivered however works best for you. Ready to ring back when you're free.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    heading: "Routes urgent calls your way",
    body: "You define what urgent means for your business. Lydia flags those calls and escalates them the way you want — so the jobs that can't wait never slip through.",
  },
];

export default function Solution() {
  return (
    <section className="bg-midnight" aria-labelledby="solution-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-forest text-sm font-semibold uppercase tracking-widest">
            Meet Lydia
          </p>
          <h2
            id="solution-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-cream leading-snug"
          >
            Built around your business, not a template.
          </h2>
          <p className="mt-4 text-base text-cream/60 leading-relaxed">
            Every Lydia is configured specifically for your trade, your
            services, and the way you work. She speaks in your voice — and asks
            exactly the right questions for the jobs you do.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.heading}
              className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="shrink-0 mt-0.5 text-forest">{cap.icon}</div>
              <div>
                <h3 className="font-semibold text-cream text-base">
                  {cap.heading}
                </h3>
                <p className="mt-2 text-sm text-cream/60 leading-relaxed">
                  {cap.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
