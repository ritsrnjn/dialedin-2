import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AboutContent from "@/components/company/AboutContent";
import CTA from "@/components/landing/CTA";

export const metadata: Metadata = {
  title: "About | DialedIn Solutions",
  description:
    "We're a team of engineers, architects, and builders obsessed with crafting software that works.",
};

export default function CompanyPage() {
  return (
    <main>
      <PageHero
        badge="About Us"
        title="Engineers Who Build What Matters"
        subtitle="We're not a staffing agency. We're a focused engineering team that embeds with your organization to ship real products."
        breadcrumbs={[{ label: "Company", href: "/company" }]}
      />
      <AboutContent />
      <CTA />
    </main>
  );
}
