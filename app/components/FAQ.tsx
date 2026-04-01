"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need to switch accounting software?",
    answer:
      "No. We work with your existing Xero account. Nothing changes on your end — your invoicing workflow stays exactly the same. We simply connect to Xero and layer the automation on top.",
  },
  {
    question: "How long does setup take?",
    answer:
      "One afternoon. We handle everything — you just give us Xero access and we build the whole system. Your first automated reminder can go out the same day.",
  },
  {
    question: "What if a client disputes a charge?",
    answer:
      "The system pauses automatically when a dispute is flagged. You stay in control at all times — no automated messages will go out on a disputed invoice without your approval.",
  },
  {
    question: "Is there an ongoing software cost?",
    answer:
      "Yes — around $67 NZD/month paid directly to the software provider. That covers up to 150 invoices per month. This is separate from Vilunim's setup and service fee.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no lock-in. Cancel anytime and we'll wind the system down cleanly. We're confident you won't want to once the cash starts flowing faster.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-cream" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-midnight leading-snug"
          >
            Common questions
          </h2>
        </div>

        <div className="mt-12 max-w-2xl mx-auto divide-y divide-midnight/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-5 text-left gap-4 cursor-pointer group"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base font-semibold text-midnight group-hover:text-forest transition-colors duration-200">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-midnight/40">
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <p className="pb-5 text-sm text-midnight/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
