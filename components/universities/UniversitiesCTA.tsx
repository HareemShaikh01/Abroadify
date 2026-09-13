"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function UniversitiesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0f1e4d]">
      {/* Glow effects */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#75c9ac]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#75c9ac]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 md:py-24">
        <div className="flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-[#75c9ac]" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c9ac]">
            Get Started
          </span>
          <span className="h-[2px] w-8 bg-[#75c9ac]" />
        </div>

        <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Don&apos;t see your dream university?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60">
          These are just the best-known names. Tell us where you want to study
          and what you want to study — we will build a shortlist matched to
          your profile. At Abroadify, your dream is our priority.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#75c9ac] px-6 py-3 text-sm font-semibold text-[#0f1e4d] transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            <Phone className="h-4 w-4" />
            Ask Us
          </Link>

          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-[#75c9ac] hover:bg-white/10"
          >
            Explore Destinations
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}