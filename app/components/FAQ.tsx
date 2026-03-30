"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does Lydia sound like a real person?",
    answer:
      "Yes. Lydia uses advanced voice AI trained to sound professional and conversational. She responds naturally, handles pauses, and adapts to how the caller speaks. The vast majority of callers don't realise they're speaking with an AI.",
  },
  {
    question: "How long does setup take?",
    answer:
      "We have Lydia live for your business within 48 hours of signing up. We handle all the configuration — you just need to answer a few questions about your trade and how you like to work. No technical knowledge required.",
  },
  {
    question: "What happens if a call is urgent?",
    answer:
      "You decide what counts as urgent — an emergency plumbing job, a power outage, anything that can't wait. Lydia identifies these situations and sends you an immediate alert so you can follow up straight away.",
  },
  {
    question: "Do I need any special equipment?",
    answer:
      "No. Lydia works with your existing phone number — there's nothing to install and no new hardware to buy. We redirect calls through Lydia at the network level, completely seamlessly.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no lock-in contracts. If you decide Vilunim isn't right for your business, cancel with 30 days' notice and we'll wind everything down cleanly. We're confident you won't want to.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-forest text-sm font-semibold uppercase tracking-widest">
            Common questions
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-midnight leading-snug"
          >
            Everything you need to know.
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
