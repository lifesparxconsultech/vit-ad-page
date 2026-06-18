"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { User, MapPin, Mail, ShieldCheck, Lock, Loader2, ArrowRight } from "lucide-react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz13RKtIwV4Nm0lt-tIosYJciCay5xX8N3aJT-hyYtPWY5w-2coAn_4JpYgdOAde7KsMQ/exec";

const phoneRegex = /^[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormData {
  fullName: string;
  phone: string;
  city: string;
  email: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  city?: string;
  email?: string;
}

export default function HeroForm() {
  const router = useRouter();

  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    city: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phone: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate(): boolean {
    const e: FormErrors = {};
    if (form.fullName.trim().length < 2) e.fullName = "Full name is required.";
    if (!phoneRegex.test(form.phone)) e.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!form.city.trim()) e.city = "City is required.";
    if (!emailRegex.test(form.email)) e.email = "Enter a valid email address.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setStatus("loading");
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          fullName: form.fullName,
          phone: form.phone,
          city: form.city,
          email: form.email,
          source: "Hero Form",
        }),
      });
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

return (
  <div id="lead-form" className="relative mx-auto w-full max-w-4xl scroll-mt-24">

    <div className="rounded-3xl bg-navy-900 p-8 shadow-2xl">
      <h2 className="text-2xl font-bold text-white">
        Get A Free Career Counselling Session
      </h2>

      <p className="mt-2 text-sm leading-relaxed text-white/60">
        EduCollege is an independent counseling platform and is not
        affiliated with VIT.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="text-[11px] font-semibold uppercase tracking-wider text-white/60"
          >
            Full Name
          </label>

          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-ink-700 placeholder:text-slate-500 outline-none transition-colors focus:ring-2 focus:border-transparent ${
                errors.fullName
                  ? "border-red-400 focus:ring-red-400"
                  : "border-transparent focus:ring-gold-500"
              }`}
            />
          </div>

          {errors.fullName && (
            <p className="text-xs text-red-300">{errors.fullName}</p>
          )}
        </div>

        {/* Mobile */}
        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="text-[11px] font-semibold uppercase tracking-wider text-white/60"
          >
            Mobile Number
          </label>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
              +91
            </span>

            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={form.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className={`w-full rounded-xl border bg-white py-3 pl-12 pr-4 text-sm text-ink-700 placeholder:text-slate-500 outline-none transition-colors focus:ring-2 focus:border-transparent ${
                errors.phone
                  ? "border-red-400 focus:ring-red-400"
                  : "border-transparent focus:ring-gold-500"
              }`}
            />
          </div>

          {errors.phone && (
            <p className="text-xs text-red-300">{errors.phone}</p>
          )}
        </div>

        {/* City */}
        <div className="space-y-1.5">
          <label
            htmlFor="city"
            className="text-[11px] font-semibold uppercase tracking-wider text-white/60"
          >
            City
          </label>

          <div className="relative">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              id="city"
              name="city"
              type="text"
              value={form.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className={`w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-ink-700 placeholder:text-slate-500 outline-none transition-colors focus:ring-2 focus:border-transparent ${
                errors.city
                  ? "border-red-400 focus:ring-red-400"
                  : "border-transparent focus:ring-gold-500"
              }`}
            />
          </div>

          {errors.city && (
            <p className="text-xs text-red-300">{errors.city}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-[11px] font-semibold uppercase tracking-wider text-white/60"
          >
            Email Address
          </label>

          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-ink-700 placeholder:text-slate-500 outline-none transition-colors focus:ring-2 focus:border-transparent ${
                errors.email
                  ? "border-red-400 focus:ring-red-400"
                  : "border-transparent focus:ring-gold-500"
              }`}
            />
          </div>

          {errors.email && (
            <p className="text-xs text-red-300">{errors.email}</p>
          )}
        </div>

        {/* Trust Section */}
        <div className="space-y-2 pt-2 md:col-span-2">
          <p className="flex items-center gap-2 text-sm font-medium text-white/75">
            <ShieldCheck className="h-4 w-4 text-gold-500" />
            Only a certified mentor will assist you
          </p>

          <p className="text-xs leading-relaxed text-white/50">
            I authorize a representative to contact me via phone and/or
            email. This will override registry on DND/NDNC.
          </p>
        </div>

        {status === "error" && (
          <div className="md:col-span-2">
            <p className="text-center text-sm font-medium text-red-300">
              Something went wrong. Please try again.
            </p>
          </div>
        )}

        {/* Submit */}
        <div className="space-y-4 md:col-span-2">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 py-4 text-sm font-bold uppercase tracking-wide text-navy-900 shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Talk To A Counsellor
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <Lock className="h-4 w-4 text-gold-400" />
            <p className="text-xs font-semibold text-white/70">
              Your data is 100% secure. No spam ever.
            </p>
          </div>

          <p className="text-center text-xs leading-relaxed text-white/40">
            By clicking, you agree to our privacy policy and to receive
            program updates.
          </p>
        </div>
      </div>
    </div>
  </div>
);
}