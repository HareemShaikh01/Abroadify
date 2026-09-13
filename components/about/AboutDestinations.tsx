"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const destinations = [
  { name: "Australia", slug: "australia" },
  { name: "United Kingdom", slug: "uk" },
  { name: "United States", slug: "usa" },
  { name: "Canada", slug: "canada" },
  { name: "Germany", slug: "germany" },
  { name: "Malaysia", slug: "malaysia" },
  { name: "Dubai", slug: "dubai" },
  { name: "France", slug: "france" },
  { name: "Cyprus", slug: "cyprus" },
  { name: "Finland", slug: "finland" },
];

export default function AboutDestinations() {
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
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
              Where We Send Students
            </span>
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0f1e4d] sm:text-4xl">
            Ten destinations, one honest process.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Wherever your target campus sits on the map, the way we work with
            you stays the same.
          </p>
        </div>

        {/* Chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {destinations.map((destination, index) => (
            <Link
              key={destination.slug}
              href={`/${destination.slug}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`group inline-flex items-center gap-2 rounded-full border border-[#0f1e4d]/10 bg-white px-5 py-2.5 text-sm font-medium text-[#0f1e4d] shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-[#75c9ac] hover:bg-[#0f1e4d] hover:text-white hover:shadow-md ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#75c9ac] transition-colors duration-300 group-hover:bg-[#75c9ac]" />
              {destination.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}