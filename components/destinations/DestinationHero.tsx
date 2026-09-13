"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import type { Destination } from "@/lib/destinations-data";

export default function DestinationHero({ data }: { data: Destination }) {
  return (
    <section className="relative overflow-hidden bg-[#0f1e4d]">
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 animate-pulse rounded-full bg-[#75c9ac]/10 blur-[120px]" />
      <div
        className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 animate-pulse rounded-full bg-[#75c9ac]/10 blur-[120px]"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-24 lg:px-16">
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          {/* LEFT — Content */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Home &nbsp;›&nbsp; Study Destinations &nbsp;›&nbsp; {data.name}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-base">{data.flag}</span>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c9ac]">
                {data.code} · Study Destination
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              {data.heroHeadline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              {data.heroSubtext}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#75c9ac] px-6 py-3 text-sm font-semibold text-[#0f1e4d] transition-all duration-300 hover:bg-white hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                Free Consultation
              </Link>

              <Link
                href="#why"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-[#75c9ac] hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT — Info Card */}
          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#75c9ac]/15 blur-[60px]" />

              <div className="relative space-y-5">
                {data.trustBar.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex items-start justify-between gap-4 ${
                      index !== data.trustBar.length - 1
                        ? "border-b border-white/10 pb-5"
                        : ""
                    }`}
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#75c9ac]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs text-white/50">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}