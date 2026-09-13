import type { Destination } from "@/lib/destinations-data";

export default function DestinationTrustBar({ data }: { data: Destination }) {
  return (
    <section className="border-y border-[#0f1e4d]/10 bg-[#eef5ec]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 px-6 py-5 sm:px-10 lg:grid-cols-4 lg:px-16">
        {data.trustBar.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center px-4 text-center ${
              index % 2 !== 0 ? "border-l border-[#0f1e4d]/10" : ""
            } ${index >= 2 ? "lg:border-l border-[#0f1e4d]/10" : ""}`}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#0f1e4d] sm:text-sm">
              {item.label}
            </p>
            <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}