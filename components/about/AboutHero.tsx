"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0f1e4d]">
      {/* Glow effects */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#75c9ac]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#75c9ac]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 md:py-28">
        {/* Breadcrumb */}
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
          Home &nbsp;›&nbsp; About Us
        </p>

        {/* Eyebrow */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-[#75c9ac]" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c9ac]">
            About Abroadify
          </span>
          <span className="h-[2px] w-8 bg-[#75c9ac]" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          Every dream matters
          <span className="block">— and we mean it.</span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
          We are a student recruitment agency and study-abroad consultancy
          helping students turn academic aspirations into boarding passes —
          with honest counselling, and support that doesn&apos;t end at the airport.
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact#contactSection"
            className="group inline-flex items-center gap-2 rounded-full bg-[#75c9ac] px-6 py-3 text-sm font-semibold text-[#0f1e4d] transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            <Phone className="h-4 w-4" />
            Free Consultation
          </Link>

          <Link
            href="#who-we-are"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-[#75c9ac] hover:bg-white/10"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}