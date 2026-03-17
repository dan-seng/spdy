"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const nav = [
  { name: "Overview", href: "#overview" },
  { name: "Insights", href: "#insights" },
  { name: "Security", href: "#security" },
  { name: "FAQ", href: "#faq" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Cookies", href: "/cookies" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      return;
    }
    alert("Subscribed successfully.");
    setEmail("");
  };

  return (
    <footer className="border-t border-white/10 bg-black/80 py-16">
      <div className="section-shell space-y-16">
        <section id="faq" className="space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">FAQ</p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white">Frequently asked questions</h2>
            <p className="mt-3 text-zinc-400">Have another question? Reach out and we will respond in 24 hours.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "What is Xeltrix?",
              "How does Xeltrix protect my business?",
              "Is Xeltrix suitable for small teams?",
              "What kind of threats does Xeltrix prevent?",
              "Can Xeltrix integrate with our stack?",
              "How do I onboard my team?",
            ].map((question) => (
              <div key={question} className="faq-item rounded-xl px-5 py-4 text-sm text-zinc-300">
                {question}
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="cta-panel rounded-2xl px-8 py-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Growth</p>
          <h3 className="font-display mt-4 text-3xl font-semibold text-white">Sell smarter with the CRM built for growth</h3>
          <p className="mt-3 text-zinc-400">Manage leads, automate outreach, and close deals with intelligent workflows.</p>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-black">
            Get Free Trial
          </button>
        </section>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-semibold text-zinc-100">SPDY Labs</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-300">
              Secure product platform built for modern teams with unified intelligence, workflows, and response.
            </p>
            <div className="mt-4 flex gap-4 text-zinc-300">
              <a href="https://github.com/dan-seng" target="_blank" rel="noreferrer" className="transition hover:text-white">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/danielgidey" target="_blank" rel="noreferrer" className="transition hover:text-white">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/_dan_el" target="_blank" rel="noreferrer" className="transition hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://t.me/living_guy" target="_blank" rel="noreferrer" className="transition hover:text-white">
                <FaTelegram />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Sitemap</p>
            <div className="mt-3 flex flex-col gap-2">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-zinc-300 transition hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Newsletter</p>
            <p className="mt-3 text-sm text-zinc-300">Get updates about launches, tooling, and security notes.</p>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-white/30"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 text-xs text-zinc-500">
          © {new Date().getFullYear()} SPDY Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
