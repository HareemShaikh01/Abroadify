import SectionHeading from "@/components/common/SectionHeading";

export default function UniversitiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <SectionHeading title="Top Universities" description="Find the right institution for your academic goals." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-zinc-200 dark:bg-zinc-800 shrink-0"></div>
            <div>
              <h3 className="text-lg font-bold">University {i}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Location, Country</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
