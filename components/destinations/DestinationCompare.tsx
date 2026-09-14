"use client";

import Link from "next/link";
import { destinations } from "@/lib/destinations-data";
import type { Destination } from "@/lib/destinations-data";

export default function DestinationCompare({ data }: { data: Destination }) {
  const others = destinations.filter((d) => d.slug !== data.slug);

  return (
    <section className="bg-[#eef5ec] pb-16 sm:pb-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#75c9ac]" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
            Still Exploring
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#0f1e4d] sm:text-3xl">
          Compare {data.name} with our other destinations.
        </h2>

        <div className="mt-7 flex flex-wrap gap-3">
          {others.map((d) => (
            <Link
              key={d.slug}
              href={`/${d.slug}`}
              className="group inline-flex items-center gap-2 rounded-full border border-[#0f1e4d]/10 bg-white px-4 py-2 text-xs font-medium text-[#0f1e4d] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#75c9ac] hover:bg-[#0f1e4d] hover:text-white hover:shadow-md sm:text-sm"
            >
              <span className="text-base">{d.flag}</span>
              {d.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}