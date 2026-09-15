import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const studentServices = [
  "Career Counselling",
  "University Selection",
  "Application Assistance",
  "Visa Guidance",
  "IELTS / PTE Preparation",
];

const destinations = [
  { label: "Australia", href: "/australia" },
  { label: "United Kingdom", href: "/uk" },
  { label: "United States", href: "/us" },
  { label: "Canada", href: "/canada" },
  { label: "Germany", href: "/germany" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Universities", href: "/universities" },
  { label: "Destinations", href: "/#destinationsSection" },
  { label: "Contact Us", href: "/contact#contactSection" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1e4d]">

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">

        {/* ==================== MAIN FOOTER ==================== */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] lg:py-16">

          {/* ==================== BRAND ==================== */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/abroadify-logo.png"
                alt="Abroadify Consultants"
                width={48}
                height={42}
                className="object-contain"
              />

              <div className="leading-tight">
                <div className="text-lg font-bold tracking-tight text-white">
                  Abroadify
                </div>

                <div className="text-[11px] text-white/40">
                  Empower your dreams
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
              Study abroad consultancy and student recruitment agency
              connecting ambitious students with leading universities
              worldwide.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-2">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#75c9ac] hover:bg-[#75c9ac] hover:text-[#0f1e4d]"
              >
                <FaFacebookF className="h-3.5 w-3.5" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#75c9ac] hover:bg-[#75c9ac] hover:text-[#0f1e4d]"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#75c9ac] hover:bg-[#75c9ac] hover:text-[#0f1e4d]"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>

            </div>
          </div>

          {/* ==================== FOR STUDENTS ==================== */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#75c9ac]">
              For Students
            </h3>

            <ul className="mt-5 space-y-3">
              {studentServices.map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/55">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ==================== DESTINATIONS ==================== */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#75c9ac]">
              Destinations
            </h3>

            <ul className="mt-5 space-y-3">
              {destinations.map((destination) => (
                <li key={destination.label}>
                  <Link
                    href={destination.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {destination.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/#destinationsSection"
                  className="inline-flex items-center gap-1 pt-1 text-sm font-medium text-[#75c9ac] transition-colors hover:text-[#8bd8be]"
                >
                  View all
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ==================== COMPANY ==================== */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#75c9ac]">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==================== GET IN TOUCH ==================== */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#75c9ac]">
              Get in Touch
            </h3>

            <div className="mt-5 space-y-4">

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#75c9ac]" />

                <span className="text-sm leading-5 text-white/50">
                  Az Plaza, Kohinoor,
                  <br />
                  4th Floor, Office No. 2
                </span>
              </div>

              {/* Phone */}
              <a
                href="tel:03213200274"
                className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#75c9ac]" />
                <span>0321 3200274</span>
              </a>

              <a
                href="tel:03090874274"
                className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#75c9ac]" />
                <span>0309 0874274</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@abroadifyedu.com"
                className="flex items-start gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#75c9ac]" />
                <span className="break-all">
                  info@abroadifyedu.com
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* ==================== UNIVERSITY CTA ==================== */}
        <div className="pb-10">
          <div className="flex flex-col gap-5 rounded-2xl bg-[#75c9ac]/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#75c9ac]">
                For Universities
              </p>

              <h3 className="mt-1.5 text-lg font-semibold text-white">
                Looking to recruit students from Pakistan?
              </h3>

              <p className="mt-1 text-sm text-white/50">
                Partner with Abroadify to connect with ambitious students.
              </p>
            </div>

            
            <a
              href={`mailto:info@abroadifyedu.com?subject=${encodeURIComponent(
                "University Partnership Inquiry"
              )}&body=${encodeURIComponent(
                "Hello Abroadify Team,\n\nI am interested in becoming a university partner with Abroadify Consultants.\n\nUniversity Name:\nContact Person:\nEmail:\n\nPartnership Details:\n\nThank you."
              )}`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#75c9ac] px-6 py-3 text-sm font-semibold text-[#0f1e4d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8bd8be]"
            >
              Become a Partner
              <ArrowUpRight className="h-4 w-4" />
            </a>
            


          </div>
        </div>

      </div>

      {/* ==================== COPYRIGHT ==================== */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center sm:px-10 lg:px-14">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Abroadify Consultants. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}