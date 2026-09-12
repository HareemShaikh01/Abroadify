"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/destinations", label: "Destinations" },
  { href: "/universities", label: "Universities" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f1e4d] font-roboto">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <div className="transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
            <Image
              src="/abroadify-logo.png"
              alt="Abroadify"
              width={50}
              height={40}
              priority
            />
          </div>

          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-white">
              Abroadify
            </span>

            <span className="text-xs font-bold text-gray-300 transition-colors duration-300 group-hover:text-[#75c9ac]">
              Empower your dreams
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`group relative block py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#75c9ac]"
                      : "text-gray-300 hover:text-[#75c9ac]"
                  }`}
                >
                  {link.label}

                  {/* Animated mint underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#75c9ac] transition-all duration-300 ease-out ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="group relative hidden overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f1e4d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#75c9ac] hover:shadow-[0_8px_25px_rgba(117,201,172,0.25)] md:inline-block"
        >
          <span className="relative z-10">
            Free Consultation
          </span>

          {/* Mint hover sweep */}
          <span className="absolute inset-0 -translate-x-full bg-[#75c9ac] transition-transform duration-500 ease-out group-hover:translate-x-0" />
        </Link>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="group flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span className="h-0.5 w-6 rounded-full bg-white transition-all duration-300 group-hover:w-5 group-hover:bg-[#75c9ac]" />
          <span className="h-0.5 w-6 rounded-full bg-white transition-all duration-300 group-hover:bg-[#75c9ac]" />
          <span className="h-0.5 w-6 rounded-full bg-white transition-all duration-300 group-hover:w-4 group-hover:bg-[#75c9ac]" />
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-all duration-500 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 max-w-[80%] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* SIDEBAR HEADER */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div
            className={`flex items-center gap-2 transition-all duration-500 ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-0"
            }`}
          >
            <Image
              src="/abroadify-logo.png"
              alt="Abroadify"
              width={40}
              height={32}
            />

            <span className="flex flex-col leading-tight">
              <span className="text-base font-bold text-gray-900">
                Abroadify
              </span>

              <span className="text-[11px] font-bold text-gray-500">
                Empower your dreams
              </span>
            </span>
          </div>

          {/* CLOSE */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="group flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#75c9ac]/10"
          >
            <span className="text-2xl leading-none text-gray-600 transition-all duration-300 group-hover:rotate-90 group-hover:text-[#75c9ac]">
              &times;
            </span>
          </button>
        </div>

        {/* MOBILE LINKS */}
        <ul className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <li
                key={link.href}
                className={`transition-all duration-500 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen
                    ? `${100 + index * 60}ms`
                    : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  className={`group flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#75c9ac]/10 text-[#0f1e4d]"
                      : "text-gray-700 hover:bg-[#75c9ac]/10 hover:pl-5 hover:text-[#0f1e4d]"
                  }`}
                >
                  <span>{link.label}</span>

                  <span
                    className={`transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-[#75c9ac] opacity-100"
                        : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:text-[#75c9ac] group-hover:opacity-100"
                    }`}
                  >
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* MOBILE CTA */}
        <div
          className={`px-6 transition-all duration-500 ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
          style={{
            transitionDelay: isOpen ? "450ms" : "0ms",
          }}
        >
          <Link
            href="/contact"
            className="group relative block w-full overflow-hidden rounded-full bg-[#0f1e4d] px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#75c9ac] hover:text-[#0f1e4d] hover:shadow-[0_8px_25px_rgba(117,201,172,0.25)]"
          >
            <span className="relative z-10">
              Free Consultation
            </span>

            <span className="absolute inset-0 -translate-x-full bg-[#75c9ac] transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </div>

        {/* Bottom accent */}
        <div
          className={`absolute bottom-8 left-6 text-xs font-medium text-gray-300 transition-all duration-700 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: isOpen ? "600ms" : "0ms",
          }}
        >
          <span className="text-[#75c9ac]">✦</span> Empower your dreams
        </div>
      </aside>
    </header>
  );
}