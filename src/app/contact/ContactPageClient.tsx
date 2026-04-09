"use client";

import { useState, FormEvent, useEffect } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
const AD_SPEND_OPTIONS = [
  "Select range",
  "Under $5k/month",
  "$5k – $15k/month",
  "$15k – $30k/month",
  "$30k – $50k/month",
  "$50k+/month",
];

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("success=1")) {
      setSubmitted(true);
    }
  }, []);

  function validate(form: FormData): Record<string, string> {
    const e: Record<string, string> = {};
    if (!form.get("name")?.toString().trim()) e.name = "Name is required.";
    if (!form.get("email")?.toString().trim()) e.email = "Email is required.";
    const spend = form.get("spend")?.toString();
    if (!spend || spend === "Select range")
      e.spend = "Please select an ad spend range.";
    if (!form.get("message")?.toString().trim())
      e.message = "Message is required.";
    return e;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const err = validate(data);
    setErrors(err);
    setSubmitError(null);
    if (Object.keys(err).length > 0) return;

    try {
      const params = new URLSearchParams();
      for (const [key, value] of data.entries()) {
        if (typeof value === "string") params.append(key, value);
      }
      if (!params.has("form-name")) params.set("form-name", "contact");
      const response = await fetch("/_forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (response.status < 200 || response.status >= 300) throw new Error("Submission failed");
      setSubmitted(true);
      form.reset();
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full px-4 py-2.5 border border-neutral-200 rounded-xl bg-white text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-neutral-900/15 focus:border-neutral-400 outline-none transition-colors";

  const showSuccess = submitted;

  return (
    <>
      <Section className="pt-24 md:pt-32 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-neutral-900 leading-tight tracking-tight">
              Get in touch
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
            Book a free call or send us a message. We'll respond within 1–2
            business days.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="relative pb-24">
        <Container>
          <div className="rounded-xl border border-neutral-200/70 bg-white/75 backdrop-blur-sm p-8 md:p-12">
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  Direct contact
                </h2>
                <p className="text-neutral-600 text-sm">
                  Email: support@khanconsulting.co
                </p>
                <p className="mt-2 text-neutral-600 text-sm">
                  Phone: (405) 239-8122
                </p>
              </div>
              <div className="md:col-span-3">
                {showSuccess ? (
                  <div className="rounded-2xl md:rounded-3xl bg-neutral-50 border border-neutral-200/90 shadow-surface p-8 text-center">
                    <p className="text-lg font-medium text-neutral-900">
                      Sent. We will get back to you soon.
                    </p>
                    <p className="mt-2 text-neutral-600 text-sm">
                      We typically respond within 1–2 business days.
                    </p>
                  </div>
                ) : null}
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  action="/_forms.html"
                  onSubmit={handleSubmit}
                  className={`space-y-5 ${showSuccess ? "hidden" : ""}`}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={inputClass}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-300">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-300">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className={inputClass}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Website
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      className={inputClass}
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="spend"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Monthly ad spend range *
                    </label>
                    <select
                      id="spend"
                      name="spend"
                      required
                      className={inputClass}
                      aria-invalid={!!errors.spend}
                    >
                      {AD_SPEND_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-neutral-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.spend && (
                      <p className="mt-1 text-sm text-red-300">
                        {errors.spend}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={inputClass + " resize-y min-h-[100px]"}
                      placeholder="Tell us about your goals and current setup..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-300">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  {submitError && (
                    <p className="text-sm text-red-300">{submitError}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 rounded-2xl font-semibold bg-neutral-900 border border-neutral-900 text-white hover:bg-neutral-800 hover:border-neutral-800 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export function ContactPageFallback() {
  return (
    <>
      <Section className="pt-24 md:pt-32 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900">
              Get in touch
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
              Book a free call or send us a message. We&apos;ll respond within 1–2
              business days.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="relative pb-24">
        <Container>
          <div className="rounded-xl border border-neutral-200/70 bg-white/75 backdrop-blur-sm p-8 md:p-12">
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  Direct contact
                </h2>
                <p className="text-neutral-600 text-sm">
                  Email: support@khanconsulting.co
                </p>
                <p className="mt-2 text-neutral-600 text-sm">
                  Phone: (405) 239-8122
                </p>
              </div>
              <div className="md:col-span-3 flex items-center justify-center min-h-[200px]">
                <p className="text-neutral-500">Loading...</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
