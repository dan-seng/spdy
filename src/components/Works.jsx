import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Neural OS",
    category: "AI / Full-Stack",
    description:
      "An AI-powered operating system interface with real-time decision routing and adaptive UI layers.",
    tech: ["Next.js", "Python", "TensorFlow", "WebGL"],
    color: "#4fc3f7",
    video: "videos/hero-1.mp4",
    number: "01",
  },
  {
    id: 2,
    title: "FluxCommerce",
    category: "E-Commerce / Systems",
    description:
      "A fully autonomous commerce engine with predictive restocking, live analytics, and zero-latency checkout.",
    tech: ["React", "Node.js", "Redis", "Stripe"],
    color: "#ffd54f",
    video: "videos/hero-2.mp4",
    number: "02",
  },
  {
    id: 3,
    title: "SynthGrid",
    category: "Data / Visualization",
    description:
      "Real-time infrastructure monitoring dashboard rendering millions of data points across distributed nodes.",
    tech: ["Three.js", "Rust", "WebSockets", "D3"],
    color: "#ce93d8",
    video: "videos/hero-3.mp4",
    number: "03",
  },
  {
    id: 4,
    title: "OrbitalCMS",
    category: "CMS / Platform",
    description:
      "Headless CMS with orbital content graph architecture — every piece of content gravitates intelligently.",
    tech: ["GraphQL", "Sanity", "Next.js", "Vercel"],
    color: "#80cbc4",
    video: "videos/hero-4.mp4",
    number: "04",
  },
];

// ─── Single Project Card ───────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const lineRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) videoRef.current.play();

    gsap.to(lineRef.current, {
      scaleX: 1,
      duration: 0.6,
      ease: "power3.out",
    });
    gsap.to(cardRef.current.querySelector(".project-number"), {
      color: project.color,
      duration: 0.3,
    });
    gsap.to(cardRef.current.querySelector(".project-arrow"), {
      x: 6,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    gsap.to(lineRef.current, {
      scaleX: 0,
      duration: 0.4,
      ease: "power3.in",
    });
    gsap.to(cardRef.current.querySelector(".project-number"), {
      color: "#ffffff22",
      duration: 0.3,
    });
    gsap.to(cardRef.current.querySelector(".project-arrow"), {
      x: 0,
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`project-card project-card-${index}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ "--accent": project.color }}
    >
      {/* Large background number */}
      <span className="project-number">{project.number}</span>

      {/* Left: text content */}
      <div className="project-info">
        <p
          className="project-category font-general text-[10px] uppercase tracking-[0.3em] mb-3"
          style={{ color: project.color }}
        >
          {project.category}
        </p>

        <h3 className="project-title special-font font-zentry font-black uppercase">
          <b>{project.title}</b>
        </h3>

        <p className="project-desc font-robert-regular text-sm text-blue-50/60 mt-4 max-w-sm">
          {project.description}
        </p>

        <div className="project-tech mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="tech-tag font-general text-[9px] uppercase tracking-widest"
              style={{
                borderColor: project.color + "55",
                color: project.color + "cc",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <button className="project-cta mt-8 flex items-center gap-2 font-general text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-200">
          View Project
          <TiLocationArrow
            className="project-arrow opacity-0"
            style={{ color: project.color }}
          />
        </button>
      </div>

      {/* Right: video preview */}
      <div className="project-media">
        <div className="media-frame">
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className="media-video"
          />
          <div
            className="media-overlay"
            style={{
              background: `radial-gradient(ellipse at center, ${project.color}22 0%, #00000099 100%)`,
            }}
          />
        </div>
      </div>

      {/* Bottom border line with reveal animation */}
      <div className="project-border" />
      <div
        ref={lineRef}
        className="project-border-active"
        style={{ background: project.color }}
      />
    </div>
  );
};

// ─── Works Section ─────────────────────────────────────────────────────────────
const Works = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    // Staggered card entrance
    gsap.from(".project-card", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-list",
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Clip-path reveal on the heading tag line
    gsap.from(".works-tagline", {
      clipPath: "inset(0 100% 0 0)",
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    // Parallax drift on the section label
    gsap.to(".works-label", {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section
      id="works"
      ref={sectionRef}
      className="works-section relative min-h-screen w-screen bg-black py-32 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="works-grid-bg absolute inset-0 pointer-events-none" />

      {/* Section label */}
      <p className="works-label font-general absolute top-12 right-8 text-[10px] uppercase tracking-[0.4em] text-white/20">
        Selected Work
      </p>

      {/* Heading block */}
      <div
        ref={headingRef}
        className="relative mb-20 flex flex-col items-center gap-5 px-5"
      >
        <AnimatedTitle
          title="<b>W</b>orks that <br /> sp<b>ea</b>k for <b>them</b>selves"
          containerClass="mt-5 !text-white/75 text-center"
        />
        <p
          className="works-tagline font-robert-regular text-sm text-white/40 max-w-md text-center mt-2"
          style={{ clipPath: "inset(0 0% 0 0)" }}
        >
          From concept to deployment — systems engineered with precision,
          intelligence, and speed.
        </p>
      </div>

      {/* Project list */}
      <div className="projects-list relative mx-auto max-w-6xl px-5 sm:px-10 flex flex-col gap-0">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-24 flex justify-center">
        <button className="works-cta-btn font-general text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-3 group">
          <span className="works-cta-line" />
          All Projects
          <TiLocationArrow className="group-hover:translate-x-1 transition-transform duration-200" />
          <span className="works-cta-line" />
        </button>
      </div>

      <style>{`
        .works-section {
          font-family: inherit;
        }

        /* Subtle dot-grid bg */
        .works-grid-bg {
          background-image:
            radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }

        /* ── Card ── */
        .project-card {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 3rem 0;
          cursor: pointer;
          overflow: hidden;
        }

        /* bottom divider lines */
        .project-border,
        .project-border-active {
          position: absolute;
          bottom: 0; left: 0;
          height: 1px;
          width: 100%;
        }
        .project-border { background: rgba(255,255,255,0.08); }
        .project-border-active { transform-origin: left; transform: scaleX(0); }

        /* Ghosted huge number */
        .project-number {
          position: absolute;
          right: 0; top: 50%;
          transform: translateY(-60%);
          font-family: 'zentry', sans-serif;
          font-size: clamp(6rem, 14vw, 11rem);
          font-weight: 900;
          color: rgba(255,255,255,0.04);
          letter-spacing: -0.05em;
          pointer-events: none;
          user-select: none;
          transition: color 0.3s;
          z-index: 0;
        }

        .project-info {
          position: relative;
          z-index: 2;
          flex: 1;
          max-width: 520px;
        }

        .project-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: 1;
          color: #fff;
          letter-spacing: -0.02em;
        }

        /* Tech pill tags */
        .tech-tag {
          padding: 4px 10px;
          border: 1px solid;
          border-radius: 2px;
          background: transparent;
        }

        /* ── Media ── */
        .project-media {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          width: clamp(180px, 22vw, 320px);
          aspect-ratio: 16/10;
          overflow: hidden;
          border-radius: 4px;
          opacity: 0;
          transform: scale(0.92) translateX(12px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .project-card:hover .project-media {
          opacity: 1;
          transform: scale(1) translateX(0);
        }

        .media-frame {
          width: 100%; height: 100%;
          position: relative;
          clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
        }
        .media-video {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .media-overlay {
          position: absolute; inset: 0;
          mix-blend-mode: multiply;
        }

        /* ── CTA ── */
        .works-cta-line {
          display: block;
          width: 40px; height: 1px;
          background: currentColor;
          opacity: 0.3;
          transition: width 0.3s, opacity 0.3s;
        }
        .works-cta-btn:hover .works-cta-line {
          width: 60px; opacity: 0.8;
        }

        /* Responsive stacking */
        @media (max-width: 640px) {
          .project-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .project-media {
            width: 100%;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Works;
