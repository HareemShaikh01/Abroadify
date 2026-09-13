"use client";

import { useEffect, useRef, useState } from "react";
import type { Destination } from "@/lib/destinations-data";

export default function DestinationFields({ data }: { data: Destination }) {
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
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
              Popular Fields
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0f1e4d] sm:text-4xl">
            What Pakistani students usually study there.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            These are the fields we place the most students into — but they are
            a starting point, not a menu. If your subject is not here, ask.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {data.fields.map((field, index) => (
            <span
              key={field}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`inline-flex items-center gap-2 rounded-full border border-[#0f1e4d]/10 bg-white px-4 py-2 text-xs font-medium text-[#0f1e4d] shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-[#75c9ac] hover:bg-[#0f1e4d] hover:text-white hover:shadow-md sm:text-sm ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#75c9ac]" />
              {field}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}