"use client";

import { useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";
import type { Destination } from "@/lib/destinations-data";

export default function DestinationNote({ data }: { data: Destination }) {
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
    <section ref={sectionRef} className="bg-[#0f1e4d] pb-16 sm:pb-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <div
          className={`relative overflow-hidden rounded-2xl border border-[#75c9ac]/30 bg-[#75c9ac]/[0.06] p-6 backdrop-blur transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-[#75c9ac]" />

          <div className="flex gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#75c9ac]/15">
              <Info className="h-4 w-4 text-[#75c9ac]" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#75c9ac]">
                One thing worth knowing about {data.name}
              </p>
              <p className="mt-2 text-sm leading-7 text-white/70">
                {data.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}