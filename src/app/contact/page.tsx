import type { Metadata } from "next";
import { ContactPageView } from "@/components/contact/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Wano Projects — share your name, mobile, email, message, and selected service for architecture, structure, construction, or renovation support.",
  openGraph: {
    title: `Contact | ${site.name}`,
    description: "Start a project enquiry with Wano Projects.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactPageView />
    </main>
  );
}
