"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function UniversitiesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0f1e4d]">
      {/* Animated glow effects */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 animate-pulse rounded-full bg-[#75c9ac]/10 blur-[120px]" />
      <div
        className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 animate-pulse rounded-full bg-[#75c9ac]/10 blur-[120px]"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Decorative floating graduation caps */}
      <GraduationCap
        className="pointer-events-none absolute left-[8%] top-[20%] hidden h-10 w-10 animate-bounce text-[#75c9ac]/20 md:block"
        style={{ animationDuration: "4s" }}
      />
      <GraduationCap
        className="pointer-events-none absolute right-[10%] top-[30%] hidden h-8 w-8 animate-bounce text-[#75c9ac]/20 md:block"
        style={{ animationDuration: "5s", animationDelay: "1s" }}
      />
      <GraduationCap
        className="pointer-events-none absolute bottom-[15%] left-[15%] hidden h-7 w-7 animate-bounce text-[#75c9ac]/15 md:block"
        style={{ animationDuration: "6s", animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 md:py-28">
        {/* Breadcrumb */}
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
          Home &nbsp;›&nbsp; Universities
        </p>

        {/* Eyebrow */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-[#75c9ac]" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c9ac]">
            Where We Place Students
          </span>
          <span className="h-[2px] w-8 bg-[#75c9ac]" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          Universities across
          <span className="block">
            ten countries, <span className="text-[#75c9ac]">one honest process.</span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
          From the Ivy League to Europe&apos;s technical powerhouses, we help
          students apply to leading universities worldwide. Browse by
          destination below — and remember, this is a starting point, not the
          full list.
        </p>

        {/* CTA */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#universities-grid"
            className="group inline-flex items-center gap-2 rounded-full bg-[#75c9ac] px-6 py-3 text-sm font-semibold text-[#0f1e4d] transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            Browse Universities
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact#contactSection"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-[#75c9ac] hover:bg-white/10"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}