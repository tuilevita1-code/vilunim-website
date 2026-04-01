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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    heading: "You finish the job. They don't pay.",
    body: "You've done the work, sent the invoice, and now you're waiting. Days turn into weeks. The silence is costing you.",
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
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
        />
      </svg>
    ),
    heading: "Chasing invoices is killing your time.",
    body: "Every follow-up is another call, another email, another awkward conversation. You're running a trades business, not a debt collection agency.",
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
    heading: "Late payments are costing you more than you think.",
    body: "Cash stuck in unpaid invoices means you can't pay suppliers, take on new jobs, or grow. The problem compounds every month you let it slide.",
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
            Sound familiar?
          </h2>
          <p className="mt-4 text-base text-midnight/60 leading-relaxed">
            Late payment is the number one cash flow problem for NZ trade
            businesses. And most businesses handle it the same broken way —
            manually, awkwardly, and too late.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.heading}
              className="flex flex-col gap-4 p-6 rounded-xl bg-white shadow-sm border border-midnight/8"
            >
              <div className="text-forest">{p.icon}</div>
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
