import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import AnimatedTitle from "./AnimatedTitle";
import {
  FaReact,
  FaLayerGroup,
  FaCubes,
  FaBolt,
  FaPalette,
  FaNodeJs,
  FaPython,
  FaCogs,
  FaProjectDiagram,
  FaDatabase,
  FaBrain,
  FaFire,
  FaLink,
  FaRobot,
  FaShapes,
  FaAws,
  FaDocker,
  FaCube,
  FaCloud,
  FaServer,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const categories = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#4fc3f7",
    techs: [
      {
        name: "React",
        icon: FaReact,
        desc: "Component-driven UIs at any scale",
      },
      {
        name: "Next.js",
        icon: FaLayerGroup,
        desc: "Full-stack React with SSR & edge",
      },
      {
        name: "Three.js",
        icon: FaCubes,
        desc: "3D graphics rendered in the browser",
      },
      { name: "GSAP", icon: FaBolt, desc: "Pro-grade animation engine" },
      {
        name: "Tailwind",
        icon: FaPalette,
        desc: "Utility-first styling system",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#a78bfa",
    techs: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        desc: "High-throughput server runtime",
      },
      {
        name: "Python",
        icon: FaPython,
        desc: "Data, ML, and API services",
      },
      { name: "Rust", icon: FaCogs, desc: "Systems-level speed & safety" },
      {
        name: "GraphQL",
        icon: FaProjectDiagram,
        desc: "Flexible, typed API layer",
      },
      {
        name: "PostgreSQL",
        icon: FaDatabase,
        desc: "Reliable relational data store",
      },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    color: "#ffd54f",
    techs: [
      {
        name: "TensorFlow",
        icon: FaBrain,
        desc: "Neural network training & inference",
      },
      {
        name: "PyTorch",
        icon: FaFire,
        desc: "Research-grade deep learning",
      },
      {
        name: "LangChain",
        icon: FaLink,
        desc: "LLM orchestration pipelines",
      },
      { name: "OpenAI", icon: FaRobot, desc: "GPT & embedding integrations" },
      {
        name: "Pinecone",
        icon: FaShapes,
        desc: "Vector database for AI memory",
      },
    ],
  },
  {
    id: "infra",
    label: "Infrastructure",
    color: "#80cbc4",
    techs: [
      { name: "AWS", icon: FaAws, desc: "Cloud compute & managed services" },
      {
        name: "Docker",
        icon: FaDocker,
        desc: "Containerised deployments",
      },
      {
        name: "Kubernetes",
        icon: FaCube,
        desc: "Orchestration at scale",
      },
      {
        name: "Vercel",
        icon: FaCloud,
        desc: "Zero-config edge deployments",
      },
      { name: "Redis", icon: FaServer, desc: "In-memory caching & pub/sub" },
    ],
  },
];

const allTechs = categories.flatMap((c) =>
  c.techs.map((t) => ({ ...t, color: c.color })),
);
const row1 = allTechs.slice(0, 10);
const row2 = allTechs.slice(10);

// ─── Marquee Item ─────────────────────────────────────────────────────────────
const MarqueeItem = ({ tech }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = tech.icon;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-shrink-0 flex flex-col items-center justify-center gap-3 px-8 py-6 rounded-2xl mx-3 cursor-default select-none"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${tech.color}22, ${tech.color}08)`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? tech.color + "55" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 0 28px ${tech.color}25` : "none",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        minWidth: "130px",
      }}
    >
      <span
        style={{
          fontSize: "2.8rem",
          lineHeight: 1,
          display: "block",
          filter: hovered ? `drop-shadow(0 0 14px ${tech.color})` : "none",
          transform: hovered ? "scale(1.18) translateY(-3px)" : "scale(1)",
          transition: "filter 0.3s, transform 0.3s",
        }}
      >
        <Icon />
      </span>
      <span
        className="font-general text-[9px] uppercase tracking-[0.25em]"
        style={{
          color: hovered ? tech.color : "rgba(255,255,255,0.45)",
          transition: "color 0.3s",
        }}
      >
        {tech.name}
      </span>
    </div>
  );
};

// ─── Infinite Marquee Row ─────────────────────────────────────────────────────
const MarqueeRow = ({ items, direction = "left", speed = 32 }) => {
  const trackRef = useRef(null);
  const animRef = useRef(null);

  useGSAP(() => {
    const el = trackRef.current;
    const w = el.scrollWidth / 2;

    gsap.set(el, { x: direction === "left" ? 0 : -w });

    animRef.current = gsap.to(el, {
      x: direction === "left" ? -w : 0,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    const pause = () => animRef.current.pause();
    const resume = () => animRef.current.resume();
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    return () => {
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  });

  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div ref={trackRef} className="flex w-max py-3">
        {doubled.map((tech, i) => (
          <MarqueeItem key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

// ─── Tech Pill ────────────────────────────────────────────────────────────────
const TechPill = ({ tech, color, index }) => {
  const [hovered, setHovered] = useState(false);
  const pillRef = useRef(null);
  const fromLeft = index % 2 === 0;
  const Icon = tech.icon;

  return (
    <div
      ref={pillRef}
      className={`fw-pill fw-pill-${fromLeft ? "left" : "right"} relative cursor-default overflow-hidden rounded-xl p-5 flex flex-col gap-3`}
      onMouseEnter={() => {
        setHovered(true);
        gsap.to(pillRef.current, {
          y: -6,
          scale: 1.04,
          duration: 0.25,
          ease: "power2.out",
        });
      }}
      onMouseLeave={() => {
        setHovered(false);
        gsap.to(pillRef.current, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "elastic.out(1,0.5)",
        });
      }}
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${color}20, ${color}08)`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? color + "50" : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered ? `0 8px 32px ${color}22` : "none",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Large icon */}
      <span
        style={{
          fontSize: "2.6rem",
          lineHeight: 1,
          display: "block",
          filter: hovered ? `drop-shadow(0 0 10px ${color})` : "none",
          transform: hovered ? "scale(1.12)" : "scale(1)",
          transition: "filter 0.3s, transform 0.3s",
        }}
      >
        <Icon />
      </span>

      <span
        className="font-zentry font-black text-sm uppercase tracking-wide"
        style={{
          color: hovered ? "#fff" : "rgba(255,255,255,0.75)",
          transition: "color 0.3s",
        }}
      >
        {tech.name}
      </span>

      <span
        className="font-general text-[9px] uppercase tracking-wider leading-relaxed"
        style={{
          color: color + "aa",
          maxHeight: hovered ? "48px" : "0px",
          opacity: hovered ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.25s ease",
        }}
      >
        {tech.desc}
      </span>

      <div
        className="absolute top-0 right-0 w-14 h-14 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${color}45, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
    </div>
  );
};

// ─── Category Tab ─────────────────────────────────────────────────────────────
const CategoryTab = ({ cat, isActive, onClick }) => (
  <button
    onClick={onClick}
    className="relative font-general text-[10px] uppercase tracking-[0.3em] pb-3 transition-colors duration-300 whitespace-nowrap"
    style={{ color: isActive ? cat.color : "rgba(255,255,255,0.35)" }}
  >
    {cat.label}
    <span
      className="absolute bottom-0 left-0 h-px w-full origin-left"
      style={{
        background: cat.color,
        transform: isActive ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    />
  </button>
);

// ─── Main Section ─────────────────────────────────────────────────────────────
const Frameworks = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [activeId, setActiveId] = useState("frontend");
  const active = categories.find((c) => c.id === activeId);

  const handleTabClick = (id) => {
    gsap.to(gridRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => {
        setActiveId(id);
        gsap.to(gridRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.from(".fw-pill-left", {
          x: -55,
          opacity: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power3.out",
        });
        gsap.from(".fw-pill-right", {
          x: 55,
          opacity: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });
  };

  useGSAP(() => {
    // Heading — from left
    gsap.from(".fw-heading", {
      x: -70,
      opacity: 0,
      duration: 1.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    // Tabs — from right
    gsap.from(".fw-tab", {
      x: 50,
      opacity: 0,
      stagger: 0.08,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    // Pills — alternating left & right
    gsap.from(".fw-pill-left", {
      x: -65,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".fw-pill-right", {
      x: 65,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    });

    // Marquee rows — from their respective sides
    gsap.from(".fw-marquee-row-1", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".fw-marquee-wrap",
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".fw-marquee-row-2", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".fw-marquee-wrap",
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });

    // Stats — alternating
    gsap.from(".fw-stat-left", {
      x: -55,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".fw-stats",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".fw-stat-right", {
      x: 55,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".fw-stats",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Ghost bg text parallax
    gsap.to(".fw-bg-text", {
      x: -130,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  return (
    <section
      id="frameworks"
      ref={sectionRef}
      className="relative w-screen bg-black text-blue-50 py-32 overflow-hidden"
    >
      {/* Ghost bg text */}
      <div
        className="fw-bg-text pointer-events-none absolute top-1/3 whitespace-nowrap select-none"
        style={{ left: "2%" }}
      >
        <span
          className="special-font font-zentry font-black uppercase"
          style={{
            fontSize: "clamp(5rem, 18vw, 14rem)",
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-0.04em",
          }}
        >
          <b>Tech · Stack · Tools ·</b>
        </span>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-10">
        {/* Heading */}
        <div className="fw-heading mb-16">
          <p className="font-general text-[10px] uppercase tracking-[0.4em] text-white/40 mb-6">
            Our Toolkit
          </p>
          <AnimatedTitle
            title="B<b>u</b>ilt with the <br /> b<b>es</b>t in cl<b>a</b>ss"
            containerClass="!text-white text-left items-start"
          />
          <p className="font-robert-regular text-white/50 text-sm mt-6 max-w-md">
            We pick the right tool for every job — no dogma, no bloat. Just the
            fastest path from idea to production-grade system.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 sm:gap-10 mb-10 border-b border-white/10 overflow-x-auto pb-px">
          {categories.map((cat) => (
            <div key={cat.id} className="fw-tab flex-shrink-0">
              <CategoryTab
                cat={cat}
                isActive={activeId === cat.id}
                onClick={() => handleTabClick(cat.id)}
              />
            </div>
          ))}
        </div>

        {/* Pills grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-24"
        >
          {active.techs.map((tech, i) => (
            <TechPill
              key={tech.name}
              tech={tech}
              color={active.color}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* ── 3D Infinite Marquee ── */}
      <div
        className="fw-marquee-wrap relative mb-24"
        style={{ perspective: "900px", perspectiveOrigin: "50% 50%" }}
      >
        <div
          style={{ transform: "rotateX(7deg)", transformStyle: "preserve-3d" }}
        >
          <div className="fw-marquee-row-1 mb-4">
            <MarqueeRow items={row1} direction="left" speed={36} />
          </div>
          <div className="fw-marquee-row-2">
            <MarqueeRow items={row2} direction="right" speed={28} />
          </div>
        </div>

        {/* Depth fades top/bottom */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-12"
          style={{
            background: "linear-gradient(to bottom, black, transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-12"
          style={{ background: "linear-gradient(to top, black, transparent)" }}
        />
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <div className="fw-stats grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-16">
          {[
            { num: "20+", label: "Technologies mastered" },
            { num: "4", label: "Core disciplines" },
            { num: "50+", label: "Projects delivered" },
            { num: "∞", label: "Scalability ceiling" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`fw-stat-${i % 2 === 0 ? "left" : "right"} bg-black px-8 py-7 flex flex-col gap-2 group hover:bg-white/[0.04] transition-colors duration-300`}
            >
              <span className="special-font font-zentry font-black text-4xl text-white">
                <b>{s.num}</b>
              </span>
              <span className="font-general text-[9px] uppercase tracking-widest text-white/45 group-hover:text-white/70 transition-colors duration-300">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="fw-heading flex items-center gap-4">
          <span className="font-general text-[10px] uppercase tracking-[0.3em] text-white/40">
            Need a custom stack?
          </span>
          <a
            href="#contact"
            className="group flex items-center gap-2 font-general text-[10px] uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors duration-300"
          >
            Let's talk
            <TiLocationArrow className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Frameworks;
