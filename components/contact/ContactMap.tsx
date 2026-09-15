"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";

export default function ContactMap() {
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
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Heading */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
              Find Us
            </span>
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0f1e4d] sm:text-4xl">
            Come say hello in person.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Visit our head office at Abroadify Consultants, Faisalabad — we&apos;d love
            to chat about your study abroad plans over a cup of chai.
          </p>
        </div>

        {/* Map Container */}
        <div
          className={`group relative mt-10 overflow-hidden rounded-3xl border border-[#0f1e4d]/10 bg-white shadow-lg transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Map iframe */}
          <iframe
            title="Abroadify Consultants — Faisalabad Office"
            src="https://www.google.com/maps?q=Abroadify+Consultants,+Faisalabad,+Pakistan&output=embed&z=17"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
          />

          {/* Overlay — Open in Google Maps */}
          <a
            href="https://www.google.com/maps/place/Abroadify+Consultants/@31.4135414,73.111073,17z/data=!3m1!4b1!4m6!3m5!1s0x392269fc1cfcc591:0xfcbf5c75832af1d7!8m2!3d31.4135368!4d73.1136479!16s%2Fg%2F11zj7b1gbb"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#0f1e4d] px-4 py-2.5 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#75c9ac] hover:text-[#0f1e4d] sm:bottom-5 sm:left-5 sm:text-sm"
          >
            <MapPin className="h-4 w-4" />
            Open in Google Maps
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}