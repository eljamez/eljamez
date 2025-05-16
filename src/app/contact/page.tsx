"use client";
import PageHeader from "@/components/PageHeader";
import PageSubheader from "@/components/PageSubheader";
import { useState } from "react";

// Contact page for sending messages via Resend
export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error" | "loading">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      console.log("form", form);
      // POST to API route that sends email via Resend
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      console.log("res", res);
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col gap-8 min-h-[73vh] pb-10">
      {/* Summary Section */}
      <section className="flex flex-col gap-4 items-center justify-center mt-10">
        <PageHeader title="Contact" />
        <div className="flex gap-2 items-center">
          <PageSubheader title="email me:" />
          <a
            href="mailto:eljamez@gmail.com"
            className="text-2xl hover:underline"
          >
            eljamez@gmail.com
          </a>
        </div>
      </section>
      <section className="flex flex-col w-full gap-4 items-center justify-center">
        <form
          className="flex flex-col gap-4 w-full sm:w-1/2"
          onSubmit={handleSubmit}
        >
          <input
            className="p-3 rounded bg-zinc-900 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="p-3 rounded bg-zinc-900 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="p-3 rounded bg-zinc-900 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            name="message"
            placeholder="Your Message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-secondary hover:scale-105 transition-all text-zinc-900 font-bold py-3 rounded hover:bg-secondary transition-all disabled:opacity-60"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status === "success" && (
          <p className="mt-4 text-green-400 font-bold">
            Thank you! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400 font-bold">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </section>
    </div>
  );
}
