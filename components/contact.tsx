"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="security" className="py-20 md:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Platform Security</p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Effortless security across all platforms
            </h2>
            <p className="mt-4 text-zinc-400">
              Native integrations with every major stack keep you secure, compliant, and resilient without the noise.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="orbit">
              <div className="orbit-core" />
            </div>
          </motion.div>
        </div>

        <div id="testimonials" className="mt-20 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-2xl p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Trusted by Teams</p>
            <h3 className="font-display mt-4 text-2xl font-semibold text-white">Loved by users</h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              “SPDY has completely transformed the way we manage incidents. The response workflows are clean, and the
              analytics help us resolve threats before they grow.”
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
              <span className="h-10 w-10 rounded-full bg-white/10" />
              <div>
                <p className="text-white">Sena Abuter</p>
                <p className="text-zinc-500">Security Ops Lead</p>
              </div>
            </div>
          </motion.div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Customer Love</p>
            <h3 className="font-display mt-4 text-3xl font-semibold text-white">Trusted by teams, loved by users</h3>
            <p className="mt-4 text-zinc-400">
              Teams trust us with their most important systems. We deliver confidence, clarity, and outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
