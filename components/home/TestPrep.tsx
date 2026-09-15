"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const checklistItems = [
  "Build genuine exam awareness long before test day",
  "Practice-tested techniques for every section of the test",
  "One-to-one feedback focused on speaking and writing",
  "Full-length mock tests under real, timed conditions",
];

export default function TestPrep() {
  return (
    <section id="iletspte" className="bg-[#eef5ec] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-14">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#75c9ac]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
                Online Test Prep
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-[#0f1e4d] sm:text-4xl">
              Get closer to the band score your university is asking for.
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-gray-600 sm:text-base">
              Our two-month IELTS and PTE preparation course is built around one
              goal: making test day feel familiar. Every session mirrors the
              genuine exam format, so by the time you sit the real thing, you&apos;ve
              already done it a dozen times over.
            </p>

            <ul className="mt-7 space-y-3">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#75c9ac]/20">
                    <Check className="h-3 w-3 text-[#0f1e4d]" />
                  </span>
                  <span className="text-sm leading-6 text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact#contactSection"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0f1e4d] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#75c9ac] hover:text-[#0f1e4d] hover:shadow-lg"
            >
              Reserve My Seat
              <span>→</span>
            </Link>
          </div>

          {/* RIGHT — Info Card */}
          <div className="flex items-center">
            <div className="w-full overflow-hidden rounded-3xl border border-[#0f1e4d]/10 bg-white p-8 shadow-lg">
              <span className="inline-block rounded-full bg-[#75c9ac]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0f1e4d]">
                Remote
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#0f1e4d]">
                Online IELTS & PTE Classes
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                The same structured curriculum and instructor feedback,
                delivered live online for students who want quality preparation
                from anywhere they are.
              </p>

              <div className="mt-6 border-t border-[#0f1e4d]/10 pt-6">
                <p className="text-sm font-bold text-[#0f1e4d]">
                  Two months of focused preparation
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Live sessions · Practice tests · Personalised feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}