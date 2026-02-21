import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CareersContent from "@/components/company/CareersContent";

export const metadata: Metadata = {
  title: "Careers | DialedIn Solutions",
  description:
    "Join our team of engineers building software that matters. Remote-first, high-impact work.",
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        badge="Careers"
        title="Build With Us"
        subtitle="We're always looking for exceptional engineers who want to work on challenging, meaningful projects."
        breadcrumbs={[
          { label: "Company", href: "/company" },
          { label: "Careers", href: "/company/careers" },
        ]}
      />
      <CareersContent />
    </main>
  );
}
