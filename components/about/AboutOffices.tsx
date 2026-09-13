"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const offices = [
  {
    city: "Faisalabad",
    tag: "Head Office",
    address: "P-10, Main Boulevard, Faisalabad, Pakistan",
    phone: "+92 300 0000000",
    email: "info@abroadify.com",
  },
  {
    city: "Lahore",
    tag: "Branch Office",
    address: "Office 201, MM Alam Road, Gulberg, Lahore",
    phone: "+92 42 0000000",
    email: "lahore@abroadify.com",
  },
];

export default function AboutOffices() {
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
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Heading */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
              Visit Us
            </span>
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0f1e4d] sm:text-4xl">
            Two offices, one standard.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Can&apos;t visit in person? Online IELTS/PTE classes and virtual
            consultations mean distance doesn&apos;t slow your file down.
          </p>
        </div>

        {/* Office Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offices.map((office, index) => (
            <div
              key={office.city}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group relative overflow-hidden rounded-3xl border border-[#0f1e4d]/10 bg-white p-8 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 -translate-x-full bg-[#75c9ac]/[0.06] transition-transform duration-500 group-hover:translate-x-0" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#75c9ac]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0f1e4d]">
                    {office.tag}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-[#0f1e4d]">
                  {office.city}
                </h3>

                <div className="mt-5 space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#75c9ac]" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-[#75c9ac]" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-[#75c9ac]" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}