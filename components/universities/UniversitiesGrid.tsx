"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const countries = [
  {
    code: "AUS",
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    universities: [
      { short: "UM", name: "University of Melbourne" },
      { short: "US", name: "University of Sydney" },
      { short: "ANU", name: "Australian National University" },
      { short: "MU", name: "Monash University" },
      { short: "UQ", name: "University of Queensland" },
      { short: "UNSW", name: "University of New South Wales" },
      { short: "UA", name: "University of Adelaide" },
      { short: "UWA", name: "University of Western Australia" },
      { short: "UTS", name: "University of Technology Sydney" },
      { short: "DU", name: "Deakin University" },
      { short: "RMIT", name: "RMIT University" },
      { short: "MQ", name: "Macquarie University" },
    ],
  },
  {
    code: "UK",
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    universities: [
      { short: "UO", name: "University of Oxford" },
      { short: "UC", name: "University of Cambridge" },
      { short: "ICL", name: "Imperial College London" },
      { short: "UCL", name: "University College London" },
      { short: "UM", name: "University of Manchester" },
      { short: "UE", name: "University of Edinburgh" },
      { short: "KCL", name: "King's College London" },
      { short: "UB", name: "University of Birmingham" },
      { short: "UL", name: "University of Leeds" },
      { short: "UG", name: "University of Glasgow" },
      { short: "UW", name: "University of Warwick" },
      { short: "CU", name: "Coventry University" },
    ],
  },
  {
    code: "USA",
    name: "United States",
    slug: "usa",
    flag: "🇺🇸",
    universities: [
      { short: "HU", name: "Harvard University" },
      { short: "SU", name: "Stanford University" },
      { short: "MIT", name: "Massachusetts Institute of Technology" },
      { short: "UCB", name: "University of California, Berkeley" },
      { short: "CU", name: "Columbia University" },
      { short: "UCh", name: "University of Chicago" },
      { short: "Corn", name: "Cornell University" },
      { short: "NYU", name: "New York University" },
      { short: "UM", name: "University of Michigan" },
      { short: "ASU", name: "Arizona State University" },
      { short: "PU", name: "Purdue University" },
      { short: "UTA", name: "University of Texas at Austin" },
    ],
  },
  {
    code: "CAN",
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    universities: [
      { short: "UT", name: "University of Toronto" },
      { short: "UBC", name: "University of British Columbia" },
      { short: "MU", name: "McGill University" },
      { short: "UA", name: "University of Alberta" },
      { short: "UW", name: "University of Waterloo" },
      { short: "MU", name: "McMaster University" },
      { short: "UM", name: "University of Montreal" },
      { short: "WU", name: "Western University" },
      { short: "UO", name: "University of Ottawa" },
      { short: "SFU", name: "Simon Fraser University" },
      { short: "CU", name: "Concordia University" },
      { short: "YU", name: "York University" },
    ],
  },
  {
    code: "GER",
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    universities: [
      { short: "TUM", name: "Technical University of Munich" },
      { short: "LMU", name: "LMU Munich" },
      { short: "HU", name: "Heidelberg University" },
      { short: "HUB", name: "Humboldt University of Berlin" },
      { short: "RWTH", name: "RWTH Aachen University" },
      { short: "UF", name: "University of Freiburg" },
      { short: "TUB", name: "Technical University of Berlin" },
      { short: "US", name: "University of Stuttgart" },
      { short: "UB", name: "University of Bonn" },
      { short: "KIT", name: "Karlsruhe Institute of Technology" },
    ],
  },
  {
    code: "MYS",
    name: "Malaysia",
    slug: "malaysia",
    flag: "🇲🇾",
    universities: [
      { short: "UM", name: "University of Malaya" },
      { short: "USM", name: "Universiti Sains Malaysia" },
      { short: "UKM", name: "Universiti Kebangsaan Malaysia" },
      { short: "UPM", name: "Universiti Putra Malaysia" },
      { short: "TU", name: "Taylor's University" },
      { short: "MUM", name: "Monash University Malaysia" },
      { short: "SU", name: "Sunway University" },
      { short: "UCSI", name: "UCSI University" },
      { short: "UTM", name: "Universiti Teknologi Malaysia" },
    ],
  },
  {
    code: "UAE",
    name: "Dubai / UAE",
    slug: "dubai",
    flag: "🇦🇪",
    universities: [
      { short: "UAEU", name: "United Arab Emirates University" },
      { short: "UWD", name: "University of Wollongong in Dubai" },
      { short: "HWD", name: "Heriot-Watt University Dubai" },
      { short: "MUD", name: "Middlesex University Dubai" },
      { short: "AUD", name: "American University in Dubai" },
      { short: "BPD", name: "BITS Pilani Dubai" },
      { short: "UBD", name: "University of Birmingham Dubai" },
      { short: "Amity", name: "Amity University Dubai" },
    ],
  },
  {
    code: "FR",
    name: "France",
    slug: "france",
    flag: "🇫🇷",
    universities: [
      { short: "SU", name: "Sorbonne University" },
      { short: "PSL", name: "PSL University" },
      { short: "SP", name: "Sciences Po" },
      { short: "EP", name: "École Polytechnique" },
      { short: "UPS", name: "University of Paris-Saclay" },
      { short: "HEC", name: "HEC Paris" },
      { short: "INSEAD", name: "INSEAD" },
      { short: "GAU", name: "Grenoble Alpes University" },
    ],
  },
  {
    code: "CY",
    name: "Cyprus",
    slug: "cyprus",
    flag: "🇨🇾",
    universities: [
      { short: "UC", name: "University of Cyprus" },
      { short: "CUT", name: "Cyprus University of Technology" },
      { short: "UN", name: "University of Nicosia" },
      { short: "EUC", name: "European University Cyprus" },
      { short: "FU", name: "Frederick University" },
      { short: "CIU", name: "Cyprus International University" },
      { short: "EMU", name: "Eastern Mediterranean University" },
      { short: "NEU", name: "Near East University" },
    ],
  },
  {
    code: "FIN",
    name: "Finland",
    slug: "finland",
    flag: "🇫🇮",
    universities: [
      { short: "UH", name: "University of Helsinki" },
      { short: "AU", name: "Aalto University" },
      { short: "UT", name: "University of Turku" },
      { short: "UO", name: "University of Oulu" },
      { short: "TU", name: "Tampere University" },
      { short: "UJ", name: "University of Jyväskylä" },
      { short: "LUT", name: "LUT University" },
      { short: "UEF", name: "University of Eastern Finland" },
    ],
  },
];

export default function UniversitiesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCountry, setActiveCountry] = useState<string>("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredCountries =
    activeCountry === "all"
      ? countries
      : countries.filter((c) => c.slug === activeCountry);

  return (
    <section
      id="universities-grid"
      ref={sectionRef}
      className="bg-[#eef5ec] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Filter Tabs */}
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0 [&::-webkit-scrollbar]:hidden">
            {/* All tab */}
            <button
              onClick={() => setActiveCountry("all")}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                activeCountry === "all"
                  ? "bg-[#75c9ac] text-[#0f1e4d] shadow-md"
                  : "border border-[#0f1e4d]/10 bg-white text-[#0f1e4d] hover:border-[#75c9ac] hover:bg-[#75c9ac]/10"
              }`}
            >
              All
            </button>

            {countries.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveCountry(c.slug)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  activeCountry === c.slug
                    ? "bg-[#75c9ac] text-[#0f1e4d] shadow-md"
                    : "border border-[#0f1e4d]/10 bg-white text-[#0f1e4d] hover:border-[#75c9ac] hover:bg-[#75c9ac]/10"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Country Cards */}
        <div className="space-y-6">
          {filteredCountries.map((country, index) => (
            <div
              key={country.code}
              id={`country-${country.slug}`}
              style={{
                transitionDelay: `${Math.min(index * 80, 500)}ms`,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-[#0f1e4d]/10 bg-white p-6 shadow-sm transition-all duration-700 ease-out hover:shadow-lg sm:p-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-[#75c9ac]/[0.03] transition-transform duration-700 group-hover:translate-x-0" />

              {/* Header */}
              <div className="relative mb-6 flex items-center justify-between gap-4 border-b border-[#0f1e4d]/10 pb-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-[#75c9ac]/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0f1e4d]">
                    <span className="text-base">{country.flag}</span>
                    {country.code}
                  </span>

                  <h3 className="text-lg font-bold text-[#0f1e4d] sm:text-xl">
                    {country.name}
                  </h3>
                </div>

                <Link
                  href={`/${country.slug}`}
                  className="group/link inline-flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0f1e4d] transition-all duration-300 hover:text-[#75c9ac] sm:text-sm"
                >
                  <span className="hidden sm:inline">
                    Explore {country.name}
                  </span>
                  <span className="sm:hidden">Explore</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>

              {/* Universities Grid — 3 columns (NON-CLICKABLE) */}
              <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {country.universities.map((uni) => (
                  <div
                    key={uni.name}
                    className="flex items-center gap-3 rounded-xl border border-[#0f1e4d]/10 bg-[#eef5ec]/40 px-3 py-2.5"
                  >
                    <span className="flex h-8 w-9 shrink-0 items-center justify-center rounded-md bg-[#0f1e4d] text-[10px] font-bold text-[#75c9ac]">
                      {uni.short}
                    </span>

                    <span className="line-clamp-2 text-xs font-medium leading-tight text-[#0f1e4d] sm:text-[13px]">
                      {uni.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom — Explore Country */}
              <Link
                href={`/${country.slug}`}
                className="relative mt-6 flex items-center justify-between border-t border-[#0f1e4d]/10 pt-5 transition-all duration-300"
              >
                <span className="text-sm font-bold text-[#0f1e4d] transition-colors duration-300 group-hover:text-[#75c9ac]">
                  Explore {country.name}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0f1e4d] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}