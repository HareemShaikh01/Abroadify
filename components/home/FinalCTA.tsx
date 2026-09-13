import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="w-full overflow-hidden bg-[#75c9ac]">
      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:px-10 sm:py-20 md:py-24">

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#0f1e4d]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f1e4d]">
              Get Started
            </span>

            <span className="h-[2px] w-8 bg-[#0f1e4d]" />
          </div>

          {/* Heading */}
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#0f1e4d] sm:text-4xl md:text-5xl">
            Ready to turn your study-abroad plans into reality?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#0f1e4d]/70 sm:text-base">
            Not sure which country, university, or pathway is right for you?
            Talk to our counsellors and get clear guidance based on your
            goals, profile, and budget.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f1e4d] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0f1e4d] sm:w-auto"
            >
              Talk to a Counsellor
              <span aria-hidden="true">→</span>
            </Link>

            <a
              href="tel:03006693940"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#0f1e4d]/25 bg-white/70 px-7 py-3.5 text-sm font-semibold text-[#0f1e4d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
            >
              Call 0300 6693940
            </a>
          </div>

          {/* Reassurance */}
          <p className="mt-6 text-xs text-[#0f1e4d]/60">
            Free initial consultation · No obligation · Honest guidance
          </p>
        </div>
      </div>
    </section>
  );
}