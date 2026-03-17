"use client";

import { motion } from "framer-motion";

export default function TechSection() {
  return (
    <section
      id="insights"
      className="py-20 md:py-24 bg-linear-to-b from-white/30 via-zinc-900 to-black"
    >
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-panel rounded-2xl p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Delivery Pulse
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white">
                24/7
              </div>
            </div>
            <div className="flex h-40 items-end gap-3">
              {["h-10", "h-16", "h-20", "h-24", "h-32", "h-28", "h-36"].map(
                (height, index) => (
                  <div
                    key={`bar-${height}-${index}`}
                    className={`w-full rounded-md border border-white/10 bg-white/75 ${height}`}
                  />
                ),
              )}
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.22em] text-zinc-500">
              Product velocity over time
            </p>
          </motion.article>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Product Updates
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Ship smarter, launch faster — full-stack delivery in sync
            </h2>
            <p className="mt-4 text-zinc-400">
              Design, build, and scale websites, systems, and apps with a team
              that integrates cleanly into your roadmap.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white">
                Web platforms
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white">
                Internal systems
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white">
                Mobile & SaaS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
