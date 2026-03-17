"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ProjectsSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafId = useRef<number | null>(null);

  const scrollByCard = (direction: "left" | "right"): void => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-project-card]");
    const cardWidth = card ? card.offsetWidth : 360;
    const gap = 24;
    const delta = (cardWidth + gap) * (direction === "left" ? -1 : 1);
    scroller.scrollBy({ left: delta, behavior: "smooth" });
  };

  const updateActiveCard = (): void => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const scrollerRect = scroller.getBoundingClientRect();
    const centerX = scrollerRect.left + scrollerRect.width / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - centerX);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    updateActiveCard();
    const handleResize = (): void => updateActiveCard();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "Nova Commerce",
      description:
        "Multi-store ecommerce platform with real-time inventory, headless checkout, and custom analytics.",
      tags: ["Ecommerce", "Next.js", "Stripe", "PostgreSQL"],
      image: "/screenshot/lux.png",
    },
    {
      title: "Arcflow Ops",
      description:
        "Internal operations suite that automates approvals, task routing, and vendor onboarding.",
      tags: ["Internal System", "React", "Node", "Workflow"],
      image: "/screenshot/eshemeta.png",
    },
    {
      title: "Pulse Mobile",
      description:
        "Cross-platform mobile app for fitness studios with booking, messaging, and subscription management.",
      tags: ["Mobile App", "React Native", "Payments", "CRM"],
      image: "/screenshot/subs.png",
    },
    {
      title: "Atlas Analytics",
      description:
        "Customer analytics dashboard with cohort tracking, segmentation, and export-ready reports.",
      tags: ["SaaS", "Data Viz", "TypeScript", "D3"],
      image: "/screenshot/beli.png",
    },
  ];

  return (
    <section
      id="projects"
      className="relative  py-20 md:py-24 bg-linear-to-b from-black via-zinc-900 to-white/30"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.25),rgba(56,189,248,0)_60%)] blur-2xl" />
        <div className="absolute -bottom-32 right-[-120px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.22),rgba(129,140,248,0)_60%)] blur-2xl" />
      </div>

      <div className="section-shell relative">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Selected Work
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Projects we’ve delivered for modern teams
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            A mix of websites, internal systems, and apps built to launch fast
            and scale cleanly.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            className="hidden lg:flex absolute left-0 top-1/2 z-10 -translate-y-1/2 items-center justify-center h-12 w-12 rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition hover:border-white/30"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            className="hidden lg:flex absolute right-0 top-1/2 z-10 -translate-y-1/2 items-center justify-center h-12 w-12 rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition hover:border-white/30"
            aria-label="Scroll right"
          >
            →
          </button>

          <div
            ref={scrollerRef}
            onScroll={() => {
              if (rafId.current) return;
              rafId.current = window.requestAnimationFrame(() => {
                updateActiveCard();
                rafId.current = null;
              });
            }}
            className="flex gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="w-[8vw] shrink-0" aria-hidden="true" />
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                data-project-card
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`glass-panel group w-[86vw] max-w-2xl min-h-[320px] snap-center rounded-2xl border border-white/10 p-8 transition-all duration-300 ease-out hover:border-white/25 ${
                  index === activeIndex
                    ? "lg:w-[92vw] lg:max-w-3xl lg:min-h-[380px] lg:scale-[1.03] opacity-100 ring-1 ring-white/15 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)]"
                    : "opacity-85"
                }`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
              >
                <div className="relative mb-6 h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:h-56">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 768px, 86vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5" />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
            <div className="w-[8vw] shrink-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
