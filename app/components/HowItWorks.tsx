const steps = [
  {
    number: "01",
    heading: "We set Lydia up for your business",
    body: "Tell us about your trade, your typical jobs, and how you like to work. We configure Lydia specifically for you and have her live within 48 hours.",
  },
  {
    number: "02",
    heading: "Lydia answers every call in your name",
    body: "Callers hear a professional receptionist representing your business. Lydia asks the right questions, collects the details, and handles the conversation naturally.",
  },
  {
    number: "03",
    heading: "You get the lead — ready to quote",
    body: "After every call, you receive a summary with the caller's name, job description, and contact number. Ring them back when you're ready.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-cream"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-forest text-sm font-semibold uppercase tracking-widest">
            Simple by design
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-midnight leading-snug"
          >
            Up and running in 48 hours.
          </h2>
          <p className="mt-4 text-base text-midnight/60 leading-relaxed">
            No technical setup. No new equipment. We handle everything.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <span className="font-serif text-6xl font-bold text-forest/30 leading-none">
                {step.number}
              </span>
              <div>
                <h3 className="font-semibold text-midnight text-lg leading-snug">
                  {step.heading}
                </h3>
                <p className="mt-2 text-sm text-midnight/60 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
