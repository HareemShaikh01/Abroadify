"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";

const items = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+92 321 3200274",
    href: "tel:+92 321 3200274",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "Info@abroadifyedu.com",
    href: "mailto:Info@abroadifyedu.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us directly",
    href: "https://wa.me/923213200274",
  },
];

export default function ContactQuickBar() {
  return (
    <section className="mx-3 my-4 overflow-hidden rounded-[24px] bg-[#0f1e4d] sm:mx-5 sm:my-5">
      <div className="mx-auto grid max-w-6xl gap-px md:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group flex items-center gap-4 px-6 py-5 transition-all duration-300 hover:bg-white/[0.03] sm:px-8 ${
                index !== 0 ? "md:border-l border-white/10" : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#75c9ac]/15 transition-all duration-300 group-hover:bg-[#75c9ac] group-hover:rotate-3">
                <Icon className="h-5 w-5 text-[#75c9ac] transition-colors duration-300 group-hover:text-[#0f1e4d]" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#75c9ac]">
                  {item.label}
                </p>
                <p className="mt-1 truncate text-sm font-medium text-white transition-colors duration-300 group-hover:text-[#75c9ac]">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}