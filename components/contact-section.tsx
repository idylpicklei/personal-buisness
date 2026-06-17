"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionLabel } from "@/components/ui/section-label";

const fields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
  {
    id: "company",
    label: "Company / Network",
    type: "text",
    placeholder: "Organization name",
  },
  {
    id: "email",
    label: "Business Email",
    type: "email",
    placeholder: "name@company.com",
  },
];

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send message.");
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Thanks. Your inquiry has been sent.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send message. Please try again.",
      );
    }
  }

  return (
    <section id="contact" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to <span className="text-gradient">partner</span> with us?
          </h2>
        </div>

        <div className="gradient-border overflow-hidden rounded-[2rem] shadow-[0_32px_100px_rgba(79,70,229,0.15)] lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600/20 via-[#0a0f1a] to-emerald-600/10 p-8 sm:p-12">
            <div className="absolute inset-0 tech-grid-full opacity-30" />
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl animate-pulse-glow" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-500/10 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                <Mail className="h-7 w-7 text-indigo-200" strokeWidth={1.8} />
              </div>
              <p className="mt-10 font-mono text-xs uppercase tracking-[0.3em] text-indigo-300">
                Partnerships
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Build a strategic digital partnership with DC Ventures.
              </h3>
              <p className="mt-6 leading-8 text-zinc-400">
                Looking to onboard DC Ventures to your network or launch a joint
                venture? Let&apos;s connect.
              </p>
              <a
                href="mailto:contact@dcventures.io"
                className="group mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/[0.08]"
              >
                contact@dcventures.io
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <form
            action="/api/contact"
            className="grid gap-5 bg-[#0a0f1a]/40 p-8 backdrop-blur sm:p-12"
            method="post"
            onSubmit={handleSubmit}
          >
            {fields.map((field) => (
              <label key={field.id} htmlFor={field.id} className="grid gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  {field.label}
                </span>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  maxLength={field.id === "company" ? 160 : 200}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-400/50 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                />
              </label>
            ))}

            <label className="hidden" aria-hidden="true">
              Website
              <input
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>

            <label htmlFor="message" className="grid gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Message
              </span>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your network, brand, or partnership opportunity."
                required
                maxLength={3000}
                className="resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-400/50 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending Inquiry..."
                : "Submit Partnership Inquiry"}
            </button>

            {statusMessage ? (
              <p
                className={`rounded-xl border px-4 py-3 text-sm ${
                  status === "success"
                    ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                    : "border-red-400/20 bg-red-400/10 text-red-200"
                }`}
                role="status"
                aria-live="polite"
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
