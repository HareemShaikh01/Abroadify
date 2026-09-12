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
    <section className="mx-3 my-4 overflow-hidden rounded-[28px] bg-[#eef5ec] sm:mx-5 sm:my-5 lg:mx-7 lg:my-6">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-10 md:grid-cols-2 md:gap-16 md:px-14 md:py-16 lg:px-16">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#75c9ac]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
              Online Test Prep
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0f1e4d] md:text-4xl">
            Get closer to the band score your university is asking for.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Our two-month online IELTS and PTE preparation course is built
            around one goal: making test day feel familiar. Every session
            mirrors the genuine exam format, so by the time you sit the real
            thing, you&apos;ve already done it a dozen times over.
          </p>

          <ul className="mt-7 space-y-4">
            {checklistItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#75c9ac]">
                  <Check
                    className="h-3 w-3 text-[#0f1e4d]"
                    strokeWidth={3}
                  />
                </span>

                <span className="text-sm leading-6 text-gray-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="https://wa.me/923213200274"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#0f1e4d] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#75c9ac] hover:text-[#0f1e4d]"
          >
            Reserve My Seat
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center">
          <div className="rounded-2xl border border-[#0f1e4d]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#75c9ac]/50 hover:shadow-md">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#75c9ac]">
              Remote
            </span>

            <h3 className="mt-3 text-xl font-bold text-[#0f1e4d]">
              Online IELTS & PTE Classes
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              The same structured curriculum and instructor feedback, delivered
              live online for students who want quality preparation from
              wherever they are.
            </p>

            <div className="mt-6 border-t border-[#0f1e4d]/10 pt-5">
              <p className="text-sm font-semibold text-[#0f1e4d]">
                Two months of focused preparation
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Live sessions · Practice tests · Personalised feedback
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}