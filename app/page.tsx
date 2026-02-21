import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
