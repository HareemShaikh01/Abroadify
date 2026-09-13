"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What documents do I need to start my application?",
    answer:
      "A passport, your academic transcripts, an updated CV, and a rough idea of your target countries are enough to start. Your first counselling session narrows down exactly what else your chosen universities will need.",
  },
  {
    question: "How long does a student visa usually take to process?",
    answer:
      "It varies by country, but most take between four and twelve weeks once your file is complete. We build your timeline backwards from your intake date so there's no last-minute scramble.",
  },
  {
    question: "Do I need IELTS or PTE for every destination?",
    answer:
      "Most English-speaking destinations require one or the other, though some universities waive it under specific conditions. We'll confirm exactly what your target universities require before you book a test.",
  },
  {
    question: "Can Abroadify help me find a scholarship?",
    answer:
      "Yes — scholarship and funding guidance is part of our standard process, not an add-on. We flag relevant scholarships, bursaries and study loans as soon as we know your target universities.",
  },
  {
    question: "Do you only work with students, or also with universities directly?",
    answer:
      "Both. Alongside individual student counselling, we work as a student recruitment partner for universities abroad — which means we're plugged into current intake requirements and admission trends, not just going off published brochures.",
  },
  {
    question: "What happens if my visa application is refused?",
    answer:
      "We review the refusal reasons with you, address the gap, and refile where the case allows it. Because we handle the paperwork ourselves, we can usually pinpoint exactly what triggered the refusal.",
  },
  {
    question: "Is the first consultation free?",
    answer:
      "Yes, your first consultation is free and comes with no obligation to continue with us.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#eef5ec] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-8 bg-[#3fa885]" />
          <span className="text-xs font-bold tracking-widest text-[#3fa885]">
            QUESTIONS, ANSWERED
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0f1e4d] md:text-4xl">
          Everything you need to move with confidence.
        </h2>

        <div className="mt-10 flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#0f1e4d]/10 py-5">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-6 font-bold text-[#0f1e4d]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#3fa885]">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>

                <div
                  className={
                    "grid overflow-hidden transition-all duration-300 ease-in-out " +
                    (isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <p className="overflow-hidden text-sm text-gray-600">
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