import UniversitiesHero from "@/components/universities/UniversitiesHero";
import UniversitiesStats from "@/components/universities/UniversitiesStats";
import UniversitiesGrid from "@/components/universities/UniversitiesGrid";
import UniversitiesDisclaimer from "@/components/universities/UniversitiesDisclaimer";
import UniversitiesShortlist from "@/components/universities/UniversitiesShortlist";
import UniversitiesCTA from "@/components/universities/UniversitiesCTA";

export const metadata = {
  title: "Universities | Abroadify",
  description:
    "Explore leading universities across 10 countries — Australia, UK, USA, Canada, Germany, Malaysia, Dubai, France, Cyprus, Finland.",
};

export default function UniversitiesPage() {
  return (
    <>
      <UniversitiesHero />
      <UniversitiesStats />
      <UniversitiesGrid />
      <UniversitiesDisclaimer />
      <UniversitiesShortlist />
      <UniversitiesCTA />
    </>
  );
}