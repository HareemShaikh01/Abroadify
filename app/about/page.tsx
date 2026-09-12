import SectionHeading from "@/components/common/SectionHeading";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <SectionHeading title="About Us" description="Learn more about our mission and vision." />
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          We are dedicated to helping students achieve their dreams of studying abroad.
          Our experienced team provides personalized guidance and support throughout the entire process.
        </p>
      </div>
    </div>
  );
}
