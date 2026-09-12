"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Students Guided" },
  { value: 20, suffix: "+", label: "University Partners" },
  { value: 10, suffix: "+", label: "Study Destinations" },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-3 my-4 overflow-hidden rounded-[24px] bg-[#0f1e4d] px-6 py-8 sm:mx-5 sm:my-5 sm:px-10"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-4 text-center md:px-6 ${
              index !== 0 ? "border-l border-white/25" : ""
            }`}
          >
            <AnimatedNumber
              value={stat.value}
              suffix={stat.suffix}
              start={startCounting}
            />

            <p className="mt-1 text-sm text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 1400;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth easing
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <p className="text-3xl font-bold text-white">
      {count}
      {suffix}
    </p>
  );
}