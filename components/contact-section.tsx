import { Mail } from "lucide-react";

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
  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(79,70,229,0.22)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500/20 via-slate-950 to-emerald-400/10 p-8 sm:p-12">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
              <Mail className="h-7 w-7 text-indigo-200" strokeWidth={1.8} />
            </div>
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
              Partnerships
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Build a strategic digital partnership with DC Ventures.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Looking to onboard DC Ventures to your network or launch a joint
              venture? Let&apos;s connect.
            </p>
            <a
              href="mailto:contact@dcventures.io"
              className="mt-10 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              contact@dcventures.io
            </a>
          </div>
        </div>

        <form className="grid gap-5 p-8 sm:p-12">
          {fields.map((field) => (
            <label key={field.id} htmlFor={field.id} className="grid gap-2">
              <span className="text-sm font-medium text-zinc-200">
                {field.label}
              </span>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-indigo-300/70 focus:bg-white/[0.09]"
              />
            </label>
          ))}

          <label htmlFor="message" className="grid gap-2">
            <span className="text-sm font-medium text-zinc-200">Message</span>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your network, brand, or partnership opportunity."
              className="resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-indigo-300/70 focus:bg-white/[0.09]"
            />
          </label>

          <button
            type="submit"
            className="mt-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-100 hover:shadow-[0_24px_80px_rgba(79,70,229,0.22)]"
          >
            Submit Partnership Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
