"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Construction, Terminal } from "lucide-react";

const memes = [
  "/memes/loading.gif",
  "/memes/catTyping.gif",
  "/memes/monkeyLaptop.gif",
  "/memes/skeletonWaiting.gif",
];

export default function UnderDevelopment() {
  return (
    <section className="section-shell flex min-h-screen items-center justify-center py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="glass-panel w-full max-w-4xl rounded-xl p-8 text-center"
      >
        <Construction className="mx-auto h-10 w-10 text-green-300" />
        <h1 className="font-display mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">Page Under Development</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-300">
          We are building this section with the same software-first quality used in our production projects.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {memes.map((src) => (
            <div key={src} className="overflow-hidden rounded-lg border border-green-500/20">
              <Image src={src} alt="development meme" width={500} height={260} className="h-36 w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-green-500/25 bg-black/55 px-4 py-2 font-code text-xs text-green-300">
          <Terminal className="h-4 w-4" />
          shipping soon...
        </div>

        <div className="mt-7">
          <Link
            href="/"
            className="inline-flex rounded-lg bg-green-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-green-400"
          >
            Back Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
