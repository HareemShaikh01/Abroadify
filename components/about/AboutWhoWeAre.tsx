"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutWhoWeAre() {
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
    <section
      id="who-we-are"
      ref={sectionRef}
      className="mx-3 my-4 overflow-hidden rounded-[28px] bg-[#eef5ec] sm:mx-5 sm:my-5"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-10 md:grid-cols-2 md:gap-14 md:px-14 md:py-20 lg:px-16">
        {/* LEFT */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
              Who We Are
            </span>
          </div>

          <h2 className="mt-5 max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-[#0f1e4d] sm:text-4xl lg:text-[44px]">
            A premier study-abroad consultancy, built around the student.
          </h2>

          <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-7 text-gray-600 sm:text-base">
            <p>
              At Abroadify, we believe that every dream matters. As a premier
              study-abroad consultancy firm, we are dedicated to helping
              students turn their academic aspirations into reality.
            </p>
            <p>
              With a deep understanding of the challenges and opportunities in
              international education, we provide comprehensive guidance and
              support to students at every stage of their journey — from the
              first conversation about where to study, right through to the
              weeks after they land.
            </p>
            <p>
              We understand that every student is unique, with distinct
              academic goals and aspirations. That is why we offer personalised
              counselling and tailored solutions to meet the individual needs
              of each student.
            </p>
          </div>

          <p className="mt-6 text-sm italic font-medium text-[#0f1e4d]">
            &ldquo;At Abroadify, excellence is not just a goal — it&apos;s our standard.&rdquo;
          </p>
        </div>

        {/* RIGHT — Quote card */}
        <div className="flex items-center">
          <div
            className={`relative w-full overflow-hidden rounded-3xl bg-[#0f1e4d] p-8 shadow-xl transition-all duration-700 ease-out sm:p-10 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Decorative quote mark */}
            <span className="absolute right-6 top-2 font-serif text-[120px] leading-none text-[#75c9ac]/15">
              &ldquo;
            </span>

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#75c9ac]/15">
                <span className="font-serif text-3xl leading-none text-[#75c9ac]">
                  &ldquo;
                </span>
              </div>

              <p className="mt-6 text-lg font-medium leading-8 text-white sm:text-xl sm:leading-9">
                Whether it&apos;s higher education in a foreign country, a new
                academic adventure, or a lifelong ambition — we are here to
                support and champion the dreams of every student.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <span className="h-[2px] w-8 bg-[#75c9ac]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c9ac]">
                  Our Commitment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}