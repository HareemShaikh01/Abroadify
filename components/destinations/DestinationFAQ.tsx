"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Destination } from "@/lib/destinations-data";

export default function DestinationFAQ({ data }: { data: Destination }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#eef5ec] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
              Questions, Answered
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0f1e4d] sm:text-4xl">
            Studying in {data.name},
            <span className="block">honestly explained.</span>
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {data.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                style={{ transitionDelay: `${index * 80}ms` }}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-500 ${
                  isOpen ? "border-[#75c9ac] shadow-md" : "border-[#0f1e4d]/10"
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-semibold text-[#0f1e4d] sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#75c9ac] text-[#0f1e4d]"
                        : "bg-[#0f1e4d]/5 text-[#0f1e4d]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-gray-600 sm:px-6 sm:pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}