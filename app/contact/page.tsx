import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Start a Project | DialedIn Solutions",
  description:
    "Tell us about your project. Book a free consultation and we'll map out the path from idea to launch.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        badge="Let's Talk"
        title="Start Your Project"
        subtitle="Tell us about what you're building. We'll get back to you within one business day."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <ContactForm />
    </main>
  );
}
