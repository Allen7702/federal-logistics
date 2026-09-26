"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

const serviceOptions = [
  "Customs Clearing & Port Operations",
  ...services.filter((s) => s.slug !== "customs-clearing").map((s) => s.title),
  "General Supplies & Procurement",
  "Other / Not sure yet",
];

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border border-steel-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-steel-400 focus:border-navy-800";
const label = "block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-steel-600";

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [startedAt] = useState(() => Date.now());

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, elapsedMs: Date.now() - startedAt }),
      });
      const body = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !body.ok) throw new Error(body.error ?? "Request failed");
      setStatus("sent");
      setMessage(
        "Thank you — your enquiry has been received. Our team will respond with a quotation shortly.",
      );
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error && err.message !== "Failed to fetch"
          ? err.message
          : "We could not send your enquiry. Please call or email us directly and we will pick it up straight away.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="space-y-5">
      {/* Honeypot — real visitors never see or fill this. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company-website">Company website</label>
        <input id="company-website" name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Full name / Company *
          </label>
          <input id="name" name="name" required className={`${field} mt-2`} placeholder="Jina / Kampuni" />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`${field} mt-2`}
            placeholder="you@company.co.tz"
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={`${field} mt-2`}
            placeholder="+255 ..."
          />
        </div>
        <div>
          <label className={label} htmlFor="service">
            Service required *
          </label>
          <select id="service" name="service" required defaultValue="" className={`${field} mt-2`}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!compact && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="origin">
              Origin
            </label>
            <input
              id="origin"
              name="origin"
              className={`${field} mt-2`}
              placeholder="e.g. Dar es Salaam Port"
            />
          </div>
          <div>
            <label className={label} htmlFor="destination">
              Destination
            </label>
            <input
              id="destination"
              name="destination"
              className={`${field} mt-2`}
              placeholder="e.g. Lusaka, Zambia"
            />
          </div>
        </div>
      )}

      <div>
        <label className={label} htmlFor="cargo">
          Cargo / procurement description *
        </label>
        <textarea
          id="cargo"
          name="cargo"
          required
          rows={compact ? 3 : 4}
          className={`${field} mt-2 resize-y`}
          placeholder="Commodity, quantity, weight, container type, permits already held…"
        />
      </div>

      {!compact && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="timeline">
              Preferred timeline
            </label>
            <input
              id="timeline"
              name="timeline"
              className={`${field} mt-2`}
              placeholder="e.g. vessel arriving next week"
            />
          </div>
          <div>
            <label className={label} htmlFor="extra">
              Additional message
            </label>
            <input id="extra" name="extra" className={`${field} mt-2`} placeholder="Anything else" />
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 bg-ember-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-ember-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request a Quote"}
        {status !== "sending" && <span aria-hidden>→</span>}
      </button>

      {status === "sent" || status === "error" ? (
        <p
          role="status"
          className={`border-l-2 py-2 pl-4 text-sm ${
            status === "sent"
              ? "border-ember-500 text-navy-800"
              : "border-red-500 text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
