"use client";

import { useEffect, useRef, useState } from "react";
import type { Destination } from "@/lib/destinations-data";

export default function DestinationWhy({ data }: { data: Destination }) {
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
    <section id="why" ref={sectionRef} className="bg-[#eef5ec] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
              Why {data.name}
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0f1e4d] sm:text-4xl">
            Why students choose {data.name}.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {data.why.map((item, index) => (
            <div
              key={item.number}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`group relative overflow-hidden rounded-3xl border border-[#0f1e4d]/10 bg-white p-7 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="pointer-events-none absolute -right-2 -top-4 font-serif text-[100px] font-bold leading-none text-[#0f1e4d]/[0.05] transition-colors duration-500 group-hover:text-[#75c9ac]/15">
                {item.number}
              </span>

              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#75c9ac]/15 transition-all duration-300 group-hover:bg-[#0f1e4d]">
                  <span className="text-xs font-bold text-[#0f1e4d] transition-colors duration-300 group-hover:text-[#75c9ac]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold leading-snug text-[#0f1e4d] sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}