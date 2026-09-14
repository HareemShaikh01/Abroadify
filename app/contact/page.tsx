import ContactHero from "@/components/contact/ContactHero";
import ContactQuickBar from "@/components/contact/ContactQuickBar";
import ContactForm from "@/components/contact/ContactForm";
import ContactOffices from "@/components/contact/ContactOffices";
import ContactMap from "@/components/contact/ContactMap";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Contact Us | Abroadify",
  description:
    "Get in touch with Abroadify — your first study abroad consultation is free, with no obligation.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactQuickBar />

      {/* Form + Offices Section */}
      <section id="contactSection" className="bg-[#eef5ec] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
            {/* Form — 3/5 */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Offices — 2/5 */}
            <div className="lg:col-span-2">
              <ContactOffices />
            </div>
          </div>
        </div>
      </section>

      <ContactMap />
      <ContactCTA />
    </>
  );
}