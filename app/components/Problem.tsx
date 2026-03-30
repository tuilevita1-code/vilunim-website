const problems = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
        />
      </svg>
    ),
    stat: "62%",
    heading: "Calls go unanswered",
    body: "Most tradies miss more than half their incoming calls while on the tools. Every ring you can't answer is a potential customer choosing someone else.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    stat: "80%",
    heading: "Callers don't leave a message",
    body: "When a caller hits voicemail, most hang up and ring your competitor instead. You never even know the job existed.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    stat: "$50k+",
    heading: "A receptionist costs too much",
    body: "A full-time receptionist runs $50,000+ per year — far too expensive for most trade businesses. So the phone keeps going unanswered.",
  },
];

export default function Problem() {
  return (
    <section className="bg-cream" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <h2
            id="problem-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-midnight leading-snug"
          >
            You&rsquo;re too busy working to answer the phone — but unanswered
            phones cost you money.
          </h2>
          <p className="mt-4 text-base text-midnight/60 leading-relaxed">
            It&rsquo;s not your fault. You&rsquo;re on the tools doing the job.
            But every call you miss is a job someone else booked.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.heading}
              className="flex flex-col gap-4 p-6 rounded-xl bg-white shadow-sm border border-midnight/8"
            >
              <div className="text-forest">{p.icon}</div>
              <p className="font-serif text-4xl font-bold text-midnight">
                {p.stat}
              </p>
              <div>
                <h3 className="font-semibold text-midnight text-base">
                  {p.heading}
                </h3>
                <p className="mt-2 text-sm text-midnight/60 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
