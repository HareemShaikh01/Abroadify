"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

export default function UniversitiesDisclaimer() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#eef5ec] pb-16 sm:pb-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div
          className={`relative overflow-hidden rounded-3xl border border-[#0f1e4d]/10 bg-white p-8 shadow-sm transition-all duration-700 ease-out sm:p-12 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Decorative corner glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#75c9ac]/10 blur-[80px]" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#75c9ac]/15">
                <Sparkles className="h-5 w-5 text-[#75c9ac]" />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
                This list is a starting point, not a limit
              </span>
            </div>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              The universities shown here are among the most sought-after in
              each destination — but they are far from everything we can apply
              to. Your ideal university depends on your grades, budget and
              goals, and often it is a strong institution most students have
              never heard of.{" "}
              <span className="font-semibold text-[#0f1e4d]">
                Bring us your profile and we will build a shortlist around you.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}