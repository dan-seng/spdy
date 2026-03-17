"use client";

import { motion } from "framer-motion";
import CodeCards from "./CodeCards";
import Techs from "./Techs";

export default function HeroSection() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36 bg-linear-to-b from-black via-zinc-900 to-white/30"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.35),rgba(99,102,241,0)_60%)] blur-2xl" />
        <div className="absolute -bottom-48 right-[-140px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.3),rgba(56,189,248,0)_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      </div>
      <div className="section-shell">
        <div className="flex flex-col gap-12 items-center ">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h1
              className="font-display max-w-6xl text-center mt-5 text-6xl leading-[0.98] tracking-tight 
                bg-linear-to-b from-white via-zinc-200 to-white/40 
                bg-clip-text text-transparent 
                sm:text-7xl lg:text-8xl"
            >
              Build products people love.
            </h1>
            <p className=" mt-6 text-center max-w-6xl leading-relaxed text-zinc-300 font-code">
              We design and develop modern websites, internal systems, and
              high-performance apps for teams that ship fast.
            </p>

            <div className="mt-14 flex flex-wrap gap-3 items-center justify-center">
              <a
                href="#cta"
                className="rounded-full bg-white px-6 py-5 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200"
              >
                Download For Free
              </a>
              <a
                href="#insights"
                className="rounded-full border border-white/20 px-6 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/40"
              >
                See Insights
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.25em] text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                Websites & platforms
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                Systems & automation
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
                Mobile & web apps
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
