"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Insights", href: "#insights" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="section-shell max-w-5xl flex items-center justify-around gap-4 py-4">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="SPDY logo"
            width={70}
            height={70}
            priority
          />
          <span className="font-code text-3xl font-semibold tracking-wide text-zinc-300 hover:text-zinc-100">
            SPDY
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <a
            href="#cta"
            className=" font-body rounded-full border border-white/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/40"
          >
            Register Now
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="rounded-lg border border-white/20 p-2 text-zinc-200 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="section-shell pb-4 md:hidden">
          <div className="glass-panel rounded-xl p-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-300"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#cta"
                className="mt-2 rounded-full border border-white/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
