import AboutHero from "@/components/about/AboutHero";
import StatsBar from "@/components/home/StatsBar";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutJourney from "@/components/about/AboutJourney";
import AboutDestinations from "@/components/about/AboutDestinations";
import AboutOffices from "@/components/about/AboutOffices";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | Abroadify",
  description:
    "Learn about Abroadify — a premier study-abroad consultancy helping students turn academic aspirations into reality.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsBar />
      <AboutWhoWeAre />
      <AboutMission />
      <AboutValues />
      <AboutJourney />
      <AboutDestinations />
      {/* <AboutOffices /> */}
      <AboutCTA />
    </>
  );
}