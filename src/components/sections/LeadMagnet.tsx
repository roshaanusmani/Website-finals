"use client";

import { useState, type FormEvent } from "react";
import { leadMagnet } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/layout/WaveDivider";

interface FormState {
  name: string;
  phone: string;
  email: string;
  propertyAddress: string;
  propertyType: string;
  numberOfUnits: string;
  currentlyTenanted: "" | "yes" | "no";
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  propertyAddress: "",
  propertyType: "",
  numberOfUnits: "",
  currentlyTenanted: "",
};

const inputClass =
  "w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none";

export function LeadMagnet() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <>
      <WaveDivider variant="dark-to-light" />
      <section id="lead-form" className="bg-cream section-padding scroll-mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeader
                eyebrow={leadMagnet.eyebrow}
                title={leadMagnet.title}
                titleAccent={leadMagnet.titleAccent}
                description={leadMagnet.copy}
              />
              <p className="mt-6 rounded-xl border border-gold/30 bg-gold/10 px-5 py-4 text-sm font-medium text-navy">
                {leadMagnet.offer}
              </p>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
              {status === "success" ? (
                <div className="py-8 text-center">
                  <p className="font-serif text-2xl text-navy">Thank you!</p>
                  <p className="mt-3 text-sm text-charcoal/80">
                    We received your request and will be in touch shortly to schedule your free
                    rent-ready review.
                  </p>
                  <button
                    type="button"
                    className="mt-6 text-sm font-semibold text-gold hover:underline"
                    onClick={() => setStatus("idle")}
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className={inputClass}
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium text-navy">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        className={inputClass}
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={inputClass}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="propertyAddress"
                      className="mb-1 block text-sm font-medium text-navy"
                    >
                      Property Address or City *
                    </label>
                    <input
                      id="propertyAddress"
                      type="text"
                      required
                      className={inputClass}
                      value={form.propertyAddress}
                      onChange={(e) => update("propertyAddress", e.target.value)}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="propertyType"
                        className="mb-1 block text-sm font-medium text-navy"
                      >
                        Property Type *
                      </label>
                      <select
                        id="propertyType"
                        required
                        className={inputClass}
                        value={form.propertyType}
                        onChange={(e) => update("propertyType", e.target.value)}
                      >
                        <option value="">Select type</option>
                        {leadMagnet.propertyTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="numberOfUnits"
                        className="mb-1 block text-sm font-medium text-navy"
                      >
                        Number of Units *
                      </label>
                      <input
                        id="numberOfUnits"
                        type="text"
                        required
                        placeholder="e.g. 1"
                        className={inputClass}
                        value={form.numberOfUnits}
                        onChange={(e) => update("numberOfUnits", e.target.value)}
                      />
                    </div>
                  </div>

                  <fieldset>
                    <legend className="mb-2 text-sm font-medium text-navy">
                      Are you currently tenanted? *
                    </legend>
                    <div className="flex gap-6">
                      {(["yes", "no"] as const).map((value) => (
                        <label key={value} className="flex items-center gap-2 text-sm text-charcoal">
                          <input
                            type="radio"
                            name="currentlyTenanted"
                            value={value}
                            required
                            checked={form.currentlyTenanted === value}
                            onChange={() => update("currentlyTenanted", value)}
                            className="accent-gold"
                          />
                          {value === "yes" ? "Yes" : "No"}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {status === "error" && errorMessage && (
                    <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full justify-center"
                    showArrow={false}
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : leadMagnet.ctaButton}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
