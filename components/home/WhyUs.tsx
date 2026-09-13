import { Star, LineChart, User } from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Star,
    title: "Experience",
    description:
      "Years spent inside admissions offices and visa counters give our consultants a working knowledge you can actually lean on — not a script.",
  },
  {
    number: "02",
    icon: LineChart,
    title: "Proven track record",
    description:
      "Our results speak through the students we've placed — a personalised approach, applied consistently, file after file.",
  },
  {
    number: "03",
    icon: User,
    title: "Client-centric approach",
    description:
      "Your goals set the agenda. We prioritise your needs and preferences over any single university or country target.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#eef5ec] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-8 bg-[#5fc8a1]" />
            <span className="text-xs font-bold tracking-widest text-[#3fa885]">
              WHY ABROADIFY
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-[#0f1e4d] md:text-4xl">
            Three things every client actually notices.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.number}
                className="relative overflow-hidden rounded-2xl border border-[#0f1e4d]/10 bg-white p-8"
              >
                <span className="absolute right-4 top-2 select-none text-6xl font-bold text-[#0f1e4d]/5">
                  {reason.number}
                </span>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f1e4d]">
                  <Icon className="h-6 w-6 text-[#5fc8a1]" />
                </div>

                <h3 className="relative mt-5 text-lg font-bold text-[#0f1e4d]">
                  {reason.title}
                </h3>
                <p className="relative mt-2 text-sm text-gray-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}