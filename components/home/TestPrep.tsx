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
    <section id="iletspte" className="bg-[#eef5ec] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 shrink-0 bg-[#75c9ac] sm:w-8" />

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0f1e4d] sm:text-xs sm:tracking-[0.18em]">
                IELTS & PTE Test Prep
              </span>
            </div>

            <h2 className="mt-4 max-w-xl text-2xl font-bold leading-[1.15] tracking-tight text-[#0f1e4d] sm:mt-5 sm:text-3xl md:text-4xl">
              Get closer to the band score your university is asking for.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-600 sm:mt-6 sm:text-[15px] sm:leading-7 md:text-base">
              Our two-month IELTS and PTE preparation course is built around
              one goal: making test day feel familiar. Join us online or
              in-person and prepare with structured lessons, realistic
              practice, and personalised instructor feedback.
            </p>

            <ul className="mt-6 space-y-3 sm:mt-7">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#75c9ac]/20">
                    <Check className="h-3 w-3 text-[#0f1e4d]" />
                  </span>

                  <span className="text-xs leading-5 text-gray-700 sm:text-sm sm:leading-6">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact#contactSection"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#0f1e4d] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#75c9ac] hover:text-[#0f1e4d] hover:shadow-lg sm:mt-8 sm:px-6 sm:text-sm"
            >
              Reserve My Seat
              <span>→</span>
            </Link>
          </div>

          {/* RIGHT — Class Information */}
          <div className="flex items-center">
            <div className="w-full overflow-hidden rounded-2xl border border-[#0f1e4d]/10 bg-white p-5 shadow-lg sm:rounded-3xl sm:p-7 lg:p-8">
              <span className="inline-block rounded-full bg-[#75c9ac]/15 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#0f1e4d] sm:text-[10px]">
                Flexible Learning
              </span>

              <h3 className="mt-3 text-xl font-bold text-[#0f1e4d] sm:mt-4 sm:text-2xl">
                Available Class Formats
              </h3>

              <p className="mt-3 text-xs leading-6 text-gray-600 sm:mt-4 sm:text-sm sm:leading-7">
                Choose the learning format that works best for you. Both
                options follow the same structured curriculum and include
                instructor guidance and personalised feedback.
              </p>

              {/* Class Cards */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2">
                {/* Online */}
                <div className="rounded-2xl bg-[#eef5ec] p-4 sm:p-5">
                  <p className="text-sm font-bold text-[#0f1e4d]">
                    Online Classes
                  </p>

                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    Live instructor-led sessions from wherever you are.
                  </p>

                  <p className="mt-3 text-[10px] font-semibold text-[#0f1e4d] sm:text-[11px]">
                    Live · Flexible · Remote
                  </p>
                </div>

                {/* In-Person */}
                <div className="rounded-2xl bg-[#0f1e4d] p-4 sm:p-5">
                  <p className="text-sm font-bold text-white">
                    In-Person Classes
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/70">
                    Attend face-to-face sessions with direct instructor
                    support.
                  </p>

                  <p className="mt-3 text-[10px] font-semibold text-[#75c9ac] sm:text-[11px]">
                    Face-to-face · Interactive · Guided
                  </p>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="mt-5 border-t border-[#0f1e4d]/10 pt-5 sm:mt-6 sm:pt-6">
                <p className="text-xs font-bold text-[#0f1e4d] sm:text-sm">
                  Two months of focused preparation
                </p>

                <p className="mt-1 text-[10px] leading-5 text-gray-500 sm:text-xs">
                  IELTS & PTE · Practice tests · Personalised feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}