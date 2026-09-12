"use client";

import { useEffect, useRef, useState } from "react";
import {
    MessageCircle,
    FileText,
    GraduationCap,
    ShieldCheck,
    Award,
    Plane,
    Luggage,
    Headphones,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Counselling",
        tag: "Stage One",
        description:
            "An honest conversation about your academic profile, goals, budget and preferred destinations before we recommend a path.",
        icon: MessageCircle,
    },
    {
        number: "02",
        title: "Admission Guidance",
        tag: "Application",
        description:
            "We help you prepare a strong application, from documents and personal statements to the details that make your profile stand out.",
        icon: FileText,
    },
    {
        number: "03",
        title: "University Selection",
        tag: "Shortlist",
        description:
            "We shortlist universities and programmes that match your academic profile, budget, career goals and preferred destination.",
        icon: GraduationCap,
    },
    {
        number: "04",
        title: "Visa Application Assistance",
        tag: "Visa",
        description:
            "From forms and financial documents to supporting evidence, we help you prepare a complete and well-organised visa file.",
        icon: ShieldCheck,
    },
    {
        number: "05",
        title: "Scholarship Guidance",
        tag: "Funding",
        description:
            "We guide you through relevant scholarships, bursaries and funding opportunities that can make studying abroad more affordable.",
        icon: Award,
    },
    {
        number: "06",
        title: "Pre-Departure Orientation",
        tag: "Briefing",
        description:
            "Before you leave, we prepare you for accommodation, academics, culture, travel and everyday life in your new destination.",
        icon: Plane,
    },
    {
        number: "07",
        title: "Travel Assistance",
        tag: "Departure",
        description:
            "We help you plan your departure around your visa, university intake and travel dates so everything is ready when you fly.",
        icon: Luggage,
    },
    {
        number: "08",
        title: "Post-Departure Support",
        tag: "Arrival",
        description:
            "Our relationship doesn't end at the airport. We remain available as you settle into your new university and country.",
        icon: Headphones,
    },
];

export default function ProcessTimeline() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#0f1e4d]"
        >
            <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 md:py-20">

                {/* HEADER */}
                <div
                    className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                        }`}
                >
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-[2px] w-8 bg-[#75c9ac]" />

                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#75c9ac]">
                            How we work
                        </span>

                        <span className="h-[2px] w-8 bg-[#75c9ac]" />
                    </div>

                    <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                        From your first consultation
                        <span className="block">to your first day abroad.</span>
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                        A clear, structured process designed to make your study abroad
                        journey simpler — with the right guidance at every stage.
                    </p>
                </div>

                {/* PROCESS */}
                <div className="relative mt-14">

                    {/* Timeline line */}
                    <div className="absolute left-[23px] top-6 bottom-6 w-px bg-white/10 sm:left-[27px]" />

                    {/* Animated progress line */}
                    <div
                        className={`absolute left-[23px] top-6 w-px bg-[#75c9ac] transition-all duration-[1800ms] ease-out sm:left-[27px] ${isVisible ? "h-[calc(100%-48px)]" : "h-0"
                            }`}
                    />

                    <div className="space-y-4">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.number}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                    }}
                                    className={`group relative flex gap-5 transition-all duration-700 ease-out sm:gap-6 ${isVisible
                                            ? "translate-x-0 opacity-100"
                                            : "translate-x-8 opacity-0"
                                        }`}
                                >
                                    {/* NUMBER */}
                                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#75c9ac]/40 bg-[#0f1e4d] shadow-[0_0_0_6px_#0f1e4d] transition-all duration-300 group-hover:border-[#75c9ac] group-hover:bg-[#75c9ac] sm:h-14 sm:w-14">
                                        <span className="text-xs font-bold text-[#75c9ac] transition-colors duration-300 group-hover:text-[#0f1e4d] sm:text-sm">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* CARD */}
                                    <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#75c9ac]/30 group-hover:bg-white/[0.08] group-hover:shadow-lg sm:p-6">
                                        <div className="flex items-start gap-4">

                                            {/* ICON */}
                                            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#75c9ac]/10 sm:flex">
                                                <Icon className="h-5 w-5 text-[#75c9ac]" />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                {/* Title + tag */}
                                                <div className="flex flex-wrap items-center gap-2.5">
                                                    <h3 className="font-bold text-white">
                                                        {step.title}
                                                    </h3>

                                                    <span className="rounded-full border border-[#75c9ac]/25 bg-[#75c9ac]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#75c9ac]">
                                                        {step.tag}
                                                    </span>
                                                </div>

                                                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}