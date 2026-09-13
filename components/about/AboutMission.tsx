"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Heart } from "lucide-react";

const cards = [
  {
    icon: Target,
    label: "Our Mission",
    text: "To empower students to pursue their dreams of studying abroad by providing personalised guidance, expert advice and unparalleled support — making the process of studying overseas accessible, seamless and rewarding for every student, regardless of their background or circumstances.",
  },
  {
    icon: Heart,
    label: "Our Promise",
    text: "Applying to study abroad is one of the biggest decisions a family makes. So we never limit our counselling to a single conversation — we treat your file the way we would want ours handled: personally, honestly, and until it is genuinely finished.",
  },
];

export default function AboutMission() {
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
    <section ref={sectionRef} className="bg-[#eef5ec] py-16 sm:py-20">
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
              What Drives Us
            </span>
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0f1e4d] sm:text-4xl">
            Our mission and our promise.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`group relative overflow-hidden rounded-3xl border border-[#0f1e4d]/10 bg-white p-8 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl sm:p-10 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 -translate-x-full bg-[#75c9ac]/[0.06] transition-transform duration-500 group-hover:translate-x-0" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f1e4d] transition-all duration-300 group-hover:bg-[#75c9ac] group-hover:rotate-3">
                    <Icon className="h-5 w-5 text-[#75c9ac] transition-colors duration-300 group-hover:text-[#0f1e4d]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#0f1e4d]">
                    {card.label}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-gray-600">
                    {card.text}
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