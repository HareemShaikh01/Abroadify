"use client";

import { useEffect, useRef, useState } from "react";
import { UserCheck, Scale, SearchCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserCheck,
    title: "We start with you",
    text: "Your grades, budget, target country and career goals come first — the university list follows from there, not the other way around.",
  },
  {
    number: "02",
    icon: Scale,
    title: "We balance the shortlist",
    text: "A healthy mix of ambitious, solid and safe choices — so you have real options when offers come back.",
  },
  {
    number: "03",
    icon: SearchCheck,
    title: "We check the fit",
    text: "Entry requirements, English tests, intakes and costs — confirmed against each university before you apply.",
  },
];

export default function UniversitiesShortlist() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0f1e4d] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c9ac]">
              How We Shortlist
            </span>
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
            The right university is
            <span className="block">matched, not guessed.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                style={{ transitionDelay: `${index * 130}ms` }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#75c9ac]/30 hover:bg-white/[0.08] hover:shadow-xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {/* Big faded number */}
                <span className="pointer-events-none absolute -right-2 -top-4 font-serif text-[110px] font-bold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-[#75c9ac]/10">
                  {step.number}
                </span>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#75c9ac]/15 transition-all duration-300 group-hover:bg-[#75c9ac] group-hover:rotate-3">
                    <Icon className="h-5 w-5 text-[#75c9ac] transition-colors duration-300 group-hover:text-[#0f1e4d]" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {step.text}
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