import About from "@/components/home/About";
import DestinationsCarousel from "@/components/home/DestinationsCarousel";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import StatsBar from "@/components/home/StatsBar";
import Testimonials from "@/components/home/Testimonials";
import TestPrep from "@/components/home/TestPrep";
import WhyUs from "@/components/home/WhyUs";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar/>
      <About/>
      <ProcessTimeline/>
      <DestinationsCarousel/>
      <TestPrep/>
      <WhyUs/>
      <Testimonials/>
      <FAQ/>
      <FinalCTA/>
      {/* <Footer/> */}
    </main>
  );
}