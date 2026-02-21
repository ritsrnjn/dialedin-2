import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PrivacyContent from "@/components/company/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | DialedIn Solutions",
  description: "Privacy policy for DialedIn Solutions.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        breadcrumbs={[
          { label: "Company", href: "/company" },
          { label: "Privacy Policy", href: "/company/privacy" },
        ]}
      />
      <PrivacyContent />
    </main>
  );
}
