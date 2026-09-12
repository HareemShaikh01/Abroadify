import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <SectionHeading title="Contact Us" description="Have questions? We'd love to hear from you." centered />
      <form className="flex flex-col gap-6 mt-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input type="text" id="name" className="h-12 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input type="email" id="email" className="h-12 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea id="message" rows={5} className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent p-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help?"></textarea>
        </div>
        <Button type="button" className="w-full">Send Message</Button>
      </form>
    </div>
  );
}
