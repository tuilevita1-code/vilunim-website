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
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    heading: "Automated reminders",
    body: "Email and SMS sent at exactly the right time — before the due date, on the due date, and at intervals after. No manual follow-up required.",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    heading: "Automatic late fees",
    body: "Applied automatically at 14 days overdue. Clients pay faster when there are real consequences — and you don't have to be the one enforcing them.",
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
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
    heading: "Custom branded messages",
    body: "Every reminder looks like it came from your business — your logo, your tone, your name. Professional and consistent without any extra effort.",
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    heading: "Full dashboard",
    body: "See exactly who owes what, where they are in the sequence, and how fast you're getting paid — all in one place.",
  },
];

export default function Solution() {
  return (
    <section className="bg-midnight" aria-labelledby="solution-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <h2
            id="solution-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-cream leading-snug"
          >
            We fix the follow-up problem. Permanently.
          </h2>
          <p className="mt-4 text-base text-cream/60 leading-relaxed">
            Vilunim connects your Xero account to a powerful automation system
            that handles every invoice follow-up — automatically. The moment an
            invoice is issued, the system takes over.
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
