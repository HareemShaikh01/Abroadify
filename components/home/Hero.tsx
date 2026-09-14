import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#eef5ec] font-outfit">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-10 py-14 sm:px-14 md:flex-row md:px-20 md:py-20 lg:px-24">

        {/* LEFT — CONTENT */}
        <div className="w-full md:w-[45%] md:pr-6 lg:pr-10">
          <div className="text-center md:text-left">

            {/* Eyebrow */}
            <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-[#75c9ac]" />

              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0f1e4d]">
                Trusted Visa Consultancy
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#0f1e4d] sm:text-4xl lg:text-[46px]">
              Student Recruitment Agency & Study Abroad Consultants
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
              Empower your dreams — Abroadify pairs every student with the
              right university, a clean visa file, and a counsellor who stays
              on the case from day one to departure.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">

              {/* Primary Button */}
              <Link
                href="/contact#contactSection"
                className="group relative overflow-hidden rounded-full bg-[#0f1e4d] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(15,30,77,0.2)]"
              >
                <span className="relative z-10">
                  Free Consultation
                </span>

                {/* Mint hover animation */}
                <span className="absolute inset-0 -translate-x-full bg-[#75c9ac] transition-transform duration-500 ease-out group-hover:translate-x-0" />
              </Link>

              {/* Secondary Button */}
              <Link
                href="#destinationsSection"
                className="rounded-full border border-[#0f1e4d] px-6 py-3 text-sm font-semibold text-[#0f1e4d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f1e4d] hover:text-white hover:shadow-[0_8px_25px_rgba(15,30,77,0.12)]"
              >
                Explore Destinations
              </Link>

            </div>
          </div>
        </div>

        {/* RIGHT — HERO IMAGE */}
        <div className="relative mt-10 h-64 w-full md:mt-0 md:h-[400px] md:w-[55%] lg:h-[440px]">
          <Image
            src="/herosection.png"
            alt="Students planning to study abroad"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}