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
                IELTS & PTE Test Prep
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-[#0f1e4d] sm:text-4xl">
              Get closer to the band score your university is asking for.
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-gray-600 sm:text-base">
              Our two-month IELTS and PTE preparation course is built around
              one goal: making test day feel familiar. Join us online or
              in-person and prepare with structured lessons, realistic
              practice, and personalised instructor feedback.
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

          {/* RIGHT — Class Information */}
          <div className="flex items-center">
            <div className="w-full overflow-hidden rounded-3xl border border-[#0f1e4d]/10 bg-white p-8 shadow-lg">
              <span className="inline-block rounded-full bg-[#75c9ac]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0f1e4d]">
                Flexible Learning
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#0f1e4d]">
                Available Class Formats
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Choose the learning format that works best for you. Both
                options follow the same structured curriculum and include
                instructor guidance and personalised feedback.
              </p>

              {/* Class Cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {/* Online */}
                <div className="rounded-2xl bg-[#eef5ec] p-5">
                  <p className="text-sm font-bold text-[#0f1e4d]">
                    Online Classes
                  </p>

                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    Live instructor-led sessions from wherever you are.
                  </p>

                  <p className="mt-3 text-[11px] font-semibold text-[#0f1e4d]">
                    Live · Flexible · Remote
                  </p>
                </div>

                {/* In-Person */}
                <div className="rounded-2xl bg-[#0f1e4d] p-5">
                  <p className="text-sm font-bold text-white">
                    In-Person Classes
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/70">
                    Attend face-to-face sessions with direct instructor
                    support.
                  </p>

                  <p className="mt-3 text-[11px] font-semibold text-[#75c9ac]">
                    Face-to-face · Interactive · Guided
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-[#0f1e4d]/10 pt-6">
                <p className="text-sm font-bold text-[#0f1e4d]">
                  Two months of focused preparation
                </p>

                <p className="mt-1 text-xs text-gray-500">
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
