"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    iso: "au",
    name: "Australia",
    blurb:
      "Home to nearly 700,000 international students, one of the world's most sought-after study destinations.",
    href: "/australia",
  },
  {
    iso: "gb",
    name: "United Kingdom",
    blurb:
      "Over 400,000 overseas students enrol each year, home to some of the world's top-ranked universities.",
    href: "/uk",
  },
  {
    iso: "us",
    name: "United States",
    blurb:
      "Home to the Ivy League and some of the most prestigious, highly regarded universities on earth.",
    href: "/usa",
  },
  {
    iso: "ca",
    name: "Canada",
    blurb:
      "Consistently ranked among the best study destinations for post-graduation employment and long-term return.",
    href: "/canada",
  },
  {
    iso: "de",
    name: "Germany",
    blurb:
      "Strong post-study employment prospects and a reputation for rigorous, career-focused education.",
    href: "/germany",
  },
  {
    iso: "ie",
    name: "Ireland",
    blurb:
      "Europe's fastest-growing study destination — home to Google, Meta, Pfizer and world-class universities.",
    href: "/ireland",
  },
  {
    iso: "eu",
    name: "Europe",
    blurb:
      "World-class education, affordable tuition and Schengen access — from Germany to Netherlands to Italy.",
    href: "/europe",
  },
  {
    iso: "my",
    name: "Malaysia",
    blurb:
      "A popular choice for affordable tuition, a well-regarded education system and rich cultural diversity.",
    href: "/malaysia",
  },
  {
    iso: "ae",
    name: "Dubai",
    blurb:
      "World-class universities set against a backdrop of vibrant, cosmopolitan city life in the Middle East.",
    href: "/dubai",
  },
  {
    iso: "fr",
    name: "France",
    blurb:
      "Centuries of cultural heritage meet cutting-edge education, alongside the language, art and cuisine.",
    href: "/france",
  },
  {
    iso: "cy",
    name: "Cyprus",
    blurb:
      "Mediterranean charm, affordable tuition and a genuinely welcoming environment for international students.",
    href: "/cyprus",
  },
  {
    iso: "fi",
    name: "Finland",
    blurb:
      "A Nordic education system known for quality, innovation and calm, well-resourced campuses.",
    href: "/finland",
  },
];

const loopedDestinations = [...destinations, ...destinations];

export default function DestinationsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let frameId: number;

    const step = () => {
      if (!isPaused) {
        track.scrollLeft += 0.6;

        const singleSetWidth = track.scrollWidth / 2;

        if (track.scrollLeft >= singleSetWidth) {
          track.scrollLeft -= singleSetWidth;
        }
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  const pause = () => {
    setIsPaused(true);

    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }
  };

  const scheduleResume = () => {
    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }

    resumeTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) {
        clearTimeout(resumeTimeout.current);
      }
    };
  }, []);

  return (
    <section id="destinationsSection" className="bg-[#eef5ec] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
              Where students go
            </span>
            <span className="h-[2px] w-8 bg-[#75c9ac]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0f1e4d] sm:text-4xl">
            Twelve countries. One process that doesn&apos;t change.
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Wherever your target campus sits on the map, the way we work with
            you stays the same.
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        onMouseEnter={pause}
        onMouseLeave={scheduleResume}
        onTouchStart={pause}
        onTouchEnd={scheduleResume}
        onPointerDown={pause}
        onPointerUp={scheduleResume}
        className="mt-12 flex cursor-grab gap-5 overflow-x-auto px-6 active:cursor-grabbing sm:mt-14 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopedDestinations.map((dest, index) => (
          <Link
            key={`${dest.iso}-${index}`}
            href={dest.href}
            className="group w-64 shrink-0 rounded-2xl border border-[#0f1e4d]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#75c9ac]/50 hover:shadow-lg"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#0f1e4d]/10">
              <Image
                src={`https://flagcdn.com/w80/${dest.iso}.png`}
                alt={`${dest.name} flag`}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>

            <h3 className="mt-4 font-bold text-[#0f1e4d]">{dest.name}</h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {dest.blurb}
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0f1e4d] transition-all duration-300 group-hover:gap-2 group-hover:text-[#75c9ac]">
              Explore {dest.name}
              <span>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}