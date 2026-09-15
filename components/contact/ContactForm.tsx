"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const destinations = [
  "Australia",
  "United Kingdom",
  "United States",
  "Canada",
  "Germany",
  "Malaysia",
  "Dubai",
  "France",
  "Cyprus",
  "Finland",
  "Not sure yet",
];

const services = [
  "Free Counselling",
  "University Selection",
  "Visa Guidance",
  "Scholarship Guidance",
  "IELTS / PTE Prep",
  "Pre-Departure Support",
];

const qualifications = [
  "Matric / O-Levels",
  "Intermediate / A-Levels",
  "Bachelor's",
  "Master's",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      city: formData.get("city"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      destination: formData.get("destination"),
      service: formData.get("service"),
      qualification: formData.get("qualification"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact-form"
      className="rounded-3xl border border-[#0f1e4d]/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
    >
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-8 bg-[#75c9ac]" />
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f1e4d]">
          Send us a message
        </span>
      </div>

      <h2 className="mt-4 text-2xl font-bold text-[#0f1e4d] sm:text-3xl">
        Fill in the form and a counsellor will get back to you.
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        The more you tell us, the better we can help.
      </p>

      {submitted ? (
        <div className="mt-8 flex flex-col items-center rounded-2xl border border-[#75c9ac]/30 bg-[#75c9ac]/10 px-6 py-10 text-center">
          <CheckCircle2 className="h-12 w-12 text-[#75c9ac]" />

          <h3 className="mt-4 text-lg font-bold text-[#0f1e4d]">
            Thank you! Your message has been sent.
          </h3>

          <p className="mt-2 max-w-md text-sm text-gray-600">
            One of our counsellors will reach out to you shortly. For urgent
            queries, please call us directly.
          </p>

          <button
            onClick={() => {
              setSubmitted(false);
              setError("");
            }}
            className="mt-5 text-sm font-semibold text-[#0f1e4d] underline underline-offset-4 transition-colors hover:text-[#75c9ac]"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Full Name */}
          <Field label="Full Name" required>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-[#0f1e4d]/10 bg-[#eef5ec]/50 px-4 py-3 text-sm text-[#0f1e4d] outline-none transition-all placeholder:text-gray-400 focus:border-[#75c9ac] focus:bg-white focus:ring-2 focus:ring-[#75c9ac]/20"
            />
          </Field>

          {/* City + Email */}
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your City" required>
              <input
                name="city"
                type="text"
                required
                placeholder="Please enter your city"
                className="w-full rounded-xl border border-[#0f1e4d]/10 bg-[#eef5ec]/50 px-4 py-3 text-sm text-[#0f1e4d] outline-none transition-all placeholder:text-gray-400 focus:border-[#75c9ac] focus:bg-white focus:ring-2 focus:ring-[#75c9ac]/20"
              />
            </Field>

            <Field label="Email" required>
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-xl border border-[#0f1e4d]/10 bg-[#eef5ec]/50 px-4 py-3 text-sm text-[#0f1e4d] outline-none transition-all placeholder:text-gray-400 focus:border-[#75c9ac] focus:bg-white focus:ring-2 focus:ring-[#75c9ac]/20"
              />
            </Field>
          </div>

          {/* Phone */}
          <Field label="Phone Number" required>
            <input
              name="phone"
              type="tel"
              required
              placeholder="e.g. +92 300 1234567"
              className="w-full rounded-xl border border-[#0f1e4d]/10 bg-[#eef5ec]/50 px-4 py-3 text-sm text-[#0f1e4d] outline-none transition-all placeholder:text-gray-400 focus:border-[#75c9ac] focus:bg-white focus:ring-2 focus:ring-[#75c9ac]/20"
            />
          </Field>

          {/* Destination + Service */}
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Preferred Study Destination" required>
              <SelectField
                name="destination"
                options={destinations}
                placeholder="Select..."
              />
            </Field>

            <Field label="Service / Inquiry Type" required>
              <SelectField
                name="service"
                options={services}
                placeholder="Select..."
              />
            </Field>
          </div>

          {/* Qualification */}
          <Field label="Current Education / Qualification" required>
            <SelectField
              name="qualification"
              options={qualifications}
              placeholder="Select..."
            />
          </Field>

          {/* Message */}
          <Field label="Message / Additional Details" required>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell us more about your inquiry..."
              className="w-full resize-none rounded-xl border border-[#0f1e4d]/10 bg-[#eef5ec]/50 px-4 py-3 text-sm text-[#0f1e4d] outline-none transition-all placeholder:text-gray-400 focus:border-[#75c9ac] focus:bg-white focus:ring-2 focus:ring-[#75c9ac]/20"
            />
          </Field>

          {/* Error */}
          {error && (
            <p className="text-sm font-medium text-red-500">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="group inline-flex items-center gap-2 rounded-full bg-[#75c9ac] px-7 py-3.5 text-sm font-semibold text-[#0f1e4d] transition-all duration-300 hover:bg-[#0f1e4d] hover:text-[#75c9ac] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />

            {loading ? "Sending..." : "Submit Form"}
          </button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0f1e4d]">
        {label} {required && <span className="text-[#75c9ac]">*</span>}
      </label>

      {children}
    </div>
  );
}

function SelectField({
  name,
  options,
  placeholder,
}: {
  name: string;
  options: string[];
  placeholder: string;
}) {
  return (
    <select
      name={name}
      required
      defaultValue=""
      className="w-full appearance-none rounded-xl border border-[#0f1e4d]/10 bg-[#eef5ec]/50 px-4 py-3 text-sm text-[#0f1e4d] outline-none transition-all focus:border-[#75c9ac] focus:bg-white focus:ring-2 focus:ring-[#75c9ac]/20"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230f1e4d' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 1rem center",
        paddingRight: "2.5rem",
      }}
    >
      <option value="" disabled>
        {placeholder}
      </option>

      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

