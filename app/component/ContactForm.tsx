"use client";

import { SERVICES } from "@/app/helper/servicesData";
import { ConfettiButton } from "@/components/ui/confetti";
import { Mail, MessageSquare, Phone, User } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="w-full h-full rounded-3xl border border-primary-color/15 bg-white p-6 shadow-md md:p-8">
      <div className="mb-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-primary-color/60">
          Project Enquiry
        </p>
        <h2 className="text-2xl font-bold uppercase text-primary-color md:text-3xl">
          Send Us Your Requirement
        </h2>
        <p className="text-sm leading-relaxed text-primary-color/75">
          Fill in the form below. We will review your project type and guide you
          to the right service or workflow stage.
        </p>
      </div>

      <form
        className="flex w-full flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="flex flex-col gap-2 text-sm font-medium text-primary-color">
          <span className="inline-flex items-center gap-2">
            <User className="h-4 w-4 text-primary-color/60" />
            Name
          </span>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="h-11 rounded-xl border border-primary-color/20 bg-secondary-color/40 px-4 text-sm text-primary-color placeholder:text-primary-color/40 focus:border-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color/25"
          />
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-2 text-sm font-medium text-primary-color">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary-color/60" />
              Email
            </span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="h-11 rounded-xl border border-primary-color/20 bg-secondary-color/40 px-4 text-sm text-primary-color placeholder:text-primary-color/40 focus:border-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color/25"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-primary-color">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary-color/60" />
              Phone
            </span>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 ..."
              className="h-11 rounded-xl border border-primary-color/20 bg-secondary-color/40 px-4 text-sm text-primary-color placeholder:text-primary-color/40 focus:border-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color/25"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-primary-color">
          Service of Interest
          <select
            name="service"
            defaultValue=""
            className="h-11 rounded-xl border border-primary-color/20 bg-secondary-color/40 px-4 text-sm text-primary-color focus:border-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color/25"
          >
            <option value="" disabled>
              Select a service (optional)
            </option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.pageTitle}
              </option>
            ))}
            <option value="general">General enquiry / Not sure yet</option>
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-primary-color">
          <span className="inline-flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary-color/60" />
            Message
          </span>
          <textarea
            name="message"
            required
            placeholder="Tell us about your plot, building, location, and what you want to achieve..."
            className="min-h-36 resize-y rounded-xl border border-primary-color/20 bg-secondary-color/40 px-4 py-3 text-sm text-primary-color placeholder:text-primary-color/40 focus:border-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color/25"
          />
        </label>

        <ConfettiButton
          type="submit"
          className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-xl border-2 border-primary-color bg-primary-color px-5 text-sm font-semibold text-secondary-color transition-colors duration-300 hover:bg-secondary-color hover:text-primary-color"
        >
          Send Message
        </ConfettiButton>
      </form>
    </section>
  );
};

export default ContactForm;
