import Hero from "@/components/landing/Hero";
import Partners from "@/components/landing/Partners";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import Stats from "@/components/landing/Stats";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Services />
      <Process />
      <Stats />
      <CTA />
    </main>
  );
}
