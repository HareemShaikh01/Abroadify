"use client";

import { useEffect, useRef, useState } from "react";
import { UserRound, Layers, Star } from "lucide-react";

const values = [
  {
    number: "01",
    icon: UserRound,
    title: "A personalised approach",
    text: "No two students share a budget, profile or target country — so no two counselling plans look the same.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Comprehensive support",
    text: "University selection, applications, visa guidance and travel — a wide range of services under one roof, not passed between agents.",
  },
  {
    number: "03",
    icon: Star,
    title: "A commitment to excellence",
    text: "Excellence isn't just a goal for us — it's the standard, delivered through exceptional service and outstanding outcomes.",
  },
];

export default function AboutValues() {
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
    <section ref={sectionRef} className="bg-[#eef5ec] pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
              Our Values
            </span>
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0f1e4d] sm:text-4xl">
            The standards we&apos;re measured against.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.number}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`group relative overflow-hidden rounded-3xl border border-[#0f1e4d]/10 bg-white p-7 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {/* Big faded number */}
                <span className="pointer-events-none absolute -right-2 -top-6 font-serif text-[110px] font-bold leading-none text-[#0f1e4d]/[0.04] transition-colors duration-500 group-hover:text-[#75c9ac]/15">
                  {value.number}
                </span>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#75c9ac]/15 transition-all duration-300 group-hover:bg-[#0f1e4d] group-hover:rotate-3">
                    <Icon className="h-5 w-5 text-[#0f1e4d] transition-colors duration-300 group-hover:text-[#75c9ac]" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#0f1e4d]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {value.text}
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