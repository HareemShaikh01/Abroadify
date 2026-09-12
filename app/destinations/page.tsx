import SectionHeading from "@/components/common/SectionHeading";

export default function DestinationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <SectionHeading title="Popular Destinations" description="Explore the best countries for international students." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-[4/3] rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-end">
            <h3 className="text-xl font-bold">Destination {i}</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2">Explore opportunities</p>
          </div>
        ))}
      </div>
    </div>
  );
}
