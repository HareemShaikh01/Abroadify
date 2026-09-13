"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#0f1e4d]">
      {/* Glow effects */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#75c9ac]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#75c9ac]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:px-10 md:py-28">
        {/* Breadcrumb */}
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
          Home &nbsp;›&nbsp; Contact Us
        </p>

        {/* Eyebrow */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-[#75c9ac]" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c9ac]">
            Get In Touch
          </span>
          <span className="h-[2px] w-8 bg-[#75c9ac]" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          Let&apos;s map your
          <span className="block">route abroad.</span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
          Whether you know exactly where you&apos;re headed or you&apos;re just
          starting to explore, we&apos;re here to help. Reach out — your first
          conversation is free, with no obligation.
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#contact-form"
            className="group inline-flex items-center gap-2 rounded-full bg-[#75c9ac] px-6 py-3 text-sm font-semibold text-[#0f1e4d] transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            Get in Touch
          </Link>

          <a
            href="tel:+92 321 3200274"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-[#75c9ac] hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            Call +92 321 3200274
          </a>
        </div>
      </div>
    </section>
  );
}