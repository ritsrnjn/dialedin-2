import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServicesList from "@/components/services/ServicesList";
import CTA from "@/components/landing/CTA";

export const metadata: Metadata = {
  title: "Services | DialedIn Solutions",
  description:
    "Full-spectrum software engineering services — from AI and web development to enterprise solutions and scalable architecture.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        badge="Our Services"
        title="Full-Spectrum Engineering"
        subtitle="From concept to deployment, we deliver end-to-end software solutions across every layer of the stack."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />
      <ServicesList />
      <CTA />
    </main>
  );
}
