"use client";
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
    <div className="max-w-xl mx-auto bg-zinc-800 rounded-lg p-8 shadow-md mt-8">
      <h1 className="text-3xl font-russo-one mb-4 text-yellow-300">
        Contact Me
      </h1>
      <p className="text-zinc-300 mb-6">
        Want to work together or just say hi? Fill out the form below and
        I&apos;ll get back to you soon.
      </p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="p-3 rounded bg-zinc-900 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="p-3 rounded bg-zinc-900 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="p-3 rounded bg-zinc-900 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          name="message"
          placeholder="Your Message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-yellow-400 text-zinc-900 font-bold py-3 rounded hover:bg-yellow-300 transition-all disabled:opacity-60"
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
    </div>
  );
}
