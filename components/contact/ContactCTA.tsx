"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0f1e4d]">
      {/* Glow effects */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#75c9ac]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#75c9ac]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 md:py-24">
        <div className="flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-[#75c9ac]" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c9ac]">
            Still Deciding?
          </span>
          <span className="h-[2px] w-8 bg-[#75c9ac]" />
        </div>

        <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Prefer to just talk it through?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60">
          Skip the form — call us or drop a WhatsApp message, and a counsellor
          will help you figure out your next step. Your first conversation is
          free.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/923213200274"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#75c9ac] px-6 py-3 text-sm font-semibold text-[#0f1e4d] transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Message on WhatsApp
          </a>

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