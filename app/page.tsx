import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SlaStrip } from "@/components/sla-strip";
import { Services } from "@/components/services";
import { AgentsDemo } from "@/components/agents-demo";
import { Process } from "@/components/process";
import { Work } from "@/components/work";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { StatusFooter } from "@/components/status-footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <SlaStrip />
        <Services />
        <AgentsDemo />
        <Process />
        <Work />
        <Team />
        <Contact />
      </main>
      <StatusFooter />
    </>
  );
}
