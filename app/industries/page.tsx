import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import IndustriesList from "@/components/industries/IndustriesList";
import CTA from "@/components/landing/CTA";

export const metadata: Metadata = {
  title: "Industries | DialedIn Solutions",
  description:
    "We build specialized software for laboratory, healthcare, fitness, fintech, and real estate industries.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        badge="Industries We Serve"
        title="Domain Expertise That Delivers"
        subtitle="Deep knowledge across verticals means we understand your challenges before writing a single line of code."
        breadcrumbs={[{ label: "Industries", href: "/industries" }]}
      />
      <IndustriesList />
      <CTA />
    </main>
  );
}
