import type { Metadata } from "next";
import { ContactPageView } from "@/components/contact/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Wano Projects in Avadi, Chennai and Sivaganga — email, phone, and enquiry form for architecture, structure, construction, or renovation.",
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
