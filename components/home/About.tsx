"use client";

import { useEffect, useRef, useState } from "react";
import { UserRound, Layers, Star, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: UserRound,
    title: "Student-first counselling",
    description:
      "We understand each student's academic background, goals and budget before recommending universities or study destinations.",
  },
  {
    icon: Layers,
    title: "Complete study abroad support",
    description:
      "From university selection and applications to visa processing and pre-departure guidance, we manage the journey from start to finish.",
  },
  {
    icon: Star,
    title: "Recruitment with the right fit",
    description:
      "We connect students with suitable universities and help institutions reach motivated students who are ready to study abroad.",
  },
];

export default function About() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-3 my-4 overflow-hidden rounded-[28px] bg-[#eef5ec] sm:mx-5 sm:my-5"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-10 md:grid-cols-2 md:gap-12 md:px-14 md:py-18 lg:px-16">

        {/* LEFT */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#75c9ac]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
              About Abroadify
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-[#0f1e4d] sm:text-4xl lg:text-[44px]">
            Your journey to studying abroad starts with the right guidance.
          </h2>

          {/* Content */}
          <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-7 text-gray-600 sm:text-base">
            <p>
              Abroadify is a student recruitment agency and study abroad
              consultancy helping students find the right universities,
              courses and destinations for their future.
            </p>

            <p>
              We take care of the process beyond simply submitting an
              application. From counselling and university selection to
              applications, visa guidance and pre-departure support, our team
              stays with students throughout their journey.
            </p>
          </div>

          {/* Quote */}
          <div className="relative mt-7 overflow-hidden rounded-2xl bg-white/75 p-5 shadow-sm">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#75c9ac]" />

            <div className="flex gap-3">
              <span className="font-serif text-4xl leading-none text-[#75c9ac]">
                “
              </span>

              <blockquote className="pt-1 text-sm font-medium leading-6 text-[#0f1e4d]">
                The right university is more than a destination — it is a
                decision that can shape a student's future.
              </blockquote>
            </div>
          </div>
        </div>

        {/* RIGHT — FEATURE CARDS */}
        <div className="flex flex-col justify-center gap-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
                className={`group relative overflow-hidden rounded-2xl border border-[#0f1e4d]/10 bg-white p-5 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                {/* Hover layer */}
                <div className="absolute inset-0 -translate-x-full bg-[#75c9ac]/[0.06] transition-transform duration-500 group-hover:translate-x-0" />

                <div className="relative flex gap-4">
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0f1e4d] transition-all duration-300 group-hover:bg-[#75c9ac] group-hover:rotate-3">
                    <Icon className="h-5 w-5 text-[#75c9ac] transition-colors duration-300 group-hover:text-[#0f1e4d]" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold leading-6 text-[#0f1e4d]">
                        {feature.title}
                      </h3>

                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#75c9ac]" />
                    </div>

                    <p className="mt-1.5 text-sm leading-6 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}