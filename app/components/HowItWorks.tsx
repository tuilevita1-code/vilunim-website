const steps = [
  {
    number: "01",
    heading: "We connect your Xero",
    body: "We get read access to your Xero account and connect it to the automation system. Nothing new for you to learn — your workflow stays exactly the same.",
  },
  {
    number: "02",
    heading: "We build your system",
    body: "We configure your reminder sequences, late fee rules, SMS templates, and branding. Every detail is tailored to your business.",
  },
  {
    number: "03",
    heading: "It runs on autopilot",
    body: "Every invoice is tracked and followed up automatically. You focus on the work. We handle the rest.",
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
          <h2
            id="how-it-works-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-midnight leading-snug"
          >
            Set up in an afternoon. Runs forever.
          </h2>
          <p className="mt-4 text-base text-midnight/60 leading-relaxed">
            We handle all the technical work. You just give us Xero access and
            answer a few questions about how your business operates.
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
