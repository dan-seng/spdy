"use client";

import { motion } from "framer-motion";
import { Construction, AlertTriangle, Timer, Code, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function UnderDevelopment() {
  const memes = [
    "/memes/loading.gif",
    "/memes/catTyping.gif",
    "/memes/monkeyLaptop.gif",
    "/memes/skeletonWaiting.gif",
  ];

  return (
    <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-4 mb-8">
          <Construction className="w-20 h-20" />
          <h1 className="text-4xl md:text-5xl font-black tracking-tight gech">
            This Page Is Under Development
          </h1>
        </div>

        <p className="text-gray-700 max-w-xl mx-auto text-sm md:text-lg mb-12">
          We're cooking something awesome for you. It's taking a little time...<br />
          Developers be like:
        </p>
      </motion.div>

      {/* Meme Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-3xl mx-auto">
        {memes.map((src, i) => (
        <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg w-30 h-30 mx-auto"
            >
            <Image
                src={src}
                alt="meme"
                width={140}
                height={140}
                className="object-cover w-full h-full"
            />
</motion.div>

        ))}
      </div>

      {/* Icons Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-8 justify-center mt-16 text-black"
      >
        <Timer className="w-10 h-10" />
        <Code className="w-10 h-10" />
        <Wrench className="w-10 h-10" />
        <AlertTriangle className="w-10 h-10" />
      </motion.div>

      <p className="mt-6 text-gray-600 text-lg">
        Hold tight — greatness is loading...
      </p>

      <motion.div
      initial={{ scale: 0.8, rotate: -5 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.1,
      }}
      className="inline-block"
    >
      <motion.button
        whileHover={{
          scale: 1.1,
          rotate: [0, -3, 3, -3, 3, 0],
          transition: { duration: 0.4 },
        }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        className="
          px-6 py-3 
          font-bold 
          rounded-xl 
          bg-yellow-300 
          text-black 
          border-2 border-black 
          shadow-[3px_3px_0px_black] 
          hover:shadow-[1px_1px_0px_black] 
          transition-all 
          duration-200
          text-lg
        "
      >
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" target="_blank">
          🚀 Click me Please 😂
        </Link>
      </motion.button>
    </motion.div>
    </section>
  );
}