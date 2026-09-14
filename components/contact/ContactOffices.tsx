"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const offices = [
  {
    tag: "Head Office",
    city: "Faisalabad",
    address: "AZ Mall Plaza, 4th Floor , Office No.02 Kohinoor, Faisalabad",
    phone: "+92321 3200274",
    phoneAlt: "+92321 3200274",
    email: "Info@abroadifyedu.com",
    mapLink: "https://maps.app.goo.gl/gp7wpD8XhuM8DoCYA?g_st=aw",
  },
];

// const socials = [
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Instagram, href: "#", label: "Instagram" },
//   { icon: Linkedin, href: "#", label: "LinkedIn" },
//   { icon: MessageCircle, href: "#", label: "WhatsApp" },
// ];

export default function ContactOffices() {
  return (
    <div className="space-y-6">
      {offices.map((office) => (
        <div
          key={office.city}
          className="group relative overflow-hidden rounded-3xl border border-[#0f1e4d]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
        >
          {/* Hover glow */}
          <div className="absolute inset-0 -translate-x-full bg-[#75c9ac]/[0.05] transition-transform duration-500 group-hover:translate-x-0" />

          <div className="relative">
            <span className="inline-block rounded-full bg-[#75c9ac]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0f1e4d]">
              {office.tag}
            </span>

            <h3 className="mt-4 text-2xl font-bold text-[#0f1e4d]">
              {office.city}
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#75c9ac]" />
                <span>{office.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#75c9ac]" />
                <span>
                  {office.phone} &nbsp;·&nbsp; {office.phoneAlt}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#75c9ac]" />
                <span>{office.email}</span>
              </div>
            </div>

            <a
              href={office.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f1e4d] transition-colors hover:text-[#75c9ac]"
            >
              View on map
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      ))}

      {/* Hours Card */}
      <div className="relative overflow-hidden rounded-3xl border border-[#0f1e4d]/10 bg-[#0f1e4d] p-6 shadow-sm sm:p-7">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#75c9ac]/15">
            <Clock className="h-5 w-5 text-[#75c9ac]" />
          </div>

          <div>
            <h3 className="font-bold text-white">Monday – Saturday</h3>
            <p className="mt-1 text-sm text-white/60">
              Visit us or call during office hours.
            </p>
          </div>
        </div>

        {/* Socials
        <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-[#75c9ac] hover:bg-[#75c9ac] hover:text-[#0f1e4d]"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}