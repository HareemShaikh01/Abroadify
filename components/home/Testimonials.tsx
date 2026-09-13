"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our daughter's Canada file was flawless — every document ready on time, no last-minute panic before the visa interview.",
    initial: "A",
    name: "Parent of a Study-Abroad Student",
    role: "Client",
  },
  {
    quote:
      "They didn't just file my visa paperwork — they actually prepped me for the interview questions. That made all the difference.",
    initial: "S",
    name: "BSc Student, placed in the UK",
    role: "Client",
  },
  {
    quote:
      "From the first call to the day I landed, someone always knew exactly where my file stood. Never once felt like a number.",
    initial: "H",
    name: "MSc Student, placed in Germany",
    role: "Client",
  },
  {
    quote:
      "The mock interview sessions alone were worth it. I walked into my actual visa interview knowing exactly what to expect.",
    initial: "F",
    name: "Parent of a Study-Abroad Student",
    role: "Client",
  },
  {
    quote:
      "They pushed back when a country I wanted wasn't the right fit for my budget — and they were right to.",
    initial: "R",
    name: "Undergraduate Student, placed in Malaysia",
    role: "Client",
  },
  {
    quote:
      "Scholarship guidance alone saved us more than the consultancy fee. That conversation should've been the first thing they told us about.",
    initial: "N",
    name: "Parent of a Study-Abroad Student",
    role: "Client",
  },
];

// Group testimonials into pairs (slides)
const slides: (typeof testimonials)[] = [];
for (let i = 0; i < testimonials.length; i += 2) {
  slides.push(testimonials.slice(i, i + 2));
}

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="bg-[#0f1e4d] py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-8 bg-[#5fc8a1]" />
            <span className="text-xs font-bold tracking-widest text-[#5fc8a1]">
              CLIENT WORD
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            What families tell us after the boarding pass.
          </h2>
        </div>

        <div className="relative mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: "translateX(-" + activeSlide * 100 + "%)" }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="grid w-full shrink-0 gap-6 md:grid-cols-2"
              >
                {slide.map((t, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-8"
                  >
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-4 w-4 fill-[#5fc8a1] text-[#5fc8a1]"
                        />
                      ))}
                    </div>
                    <p className="mt-4 italic text-white">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3fa885] font-bold text-white">
                        {t.initial}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">
                          {t.name}
                        </p>
                        <p className="text-xs text-gray-400">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              aria-label={"Go to slide " + (index + 1)}
              className={
                "h-2.5 rounded-full transition-all " +
                (index === activeSlide
                  ? "w-6 bg-[#5fc8a1]"
                  : "w-2.5 bg-white/20 hover:bg-white/40")
              }
            />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Illustrative testimonials — replace with verified student reviews
          before launch.
        </p>
      </div>
    </section>
  );
}