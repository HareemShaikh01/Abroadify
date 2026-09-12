import About from "@/components/home/About";
import DestinationsCarousel from "@/components/home/DestinationsCarousel";
import Hero from "@/components/home/Hero";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import StatsBar from "@/components/home/StatsBar";
import TestPrep from "@/components/home/TestPrep";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar/>
      <About/>
      <ProcessTimeline/>
      <DestinationsCarousel/>
      <TestPrep/>
    </main>
  );
}