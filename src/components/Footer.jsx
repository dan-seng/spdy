import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { href: "https://t.me/living_guy", icon: <FaTelegram />, label: "Telegram" },
  { href: "https://github.com/dan-seng", icon: <FaGithub />, label: "GitHub" },
  {
    href: "https://linkedin.com/in/danielgidey",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/251945012123",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
  },
  { href: "tel:+251945012123", icon: <FaPhone />, label: "Phone" },
];

const navLinks = [
  { label: "Works", href: "#works" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#privacy-policy" },
];

const Footer = () => {
  const footerRef = useRef(null);
  const bigTextRef = useRef(null);

  useGSAP(() => {
    // Big SPDY text parallax — drifts up as footer scrolls into view
    gsap.from(bigTextRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    // Top border line sweep
    gsap.from(".footer-top-line", {
      scaleX: 0,
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 95%",
      },
    });

    // Stagger nav links up
    gsap.from(".footer-nav-link", {
      y: 20,
      opacity: 0,
      stagger: 0.07,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Social icons pop in
    gsap.from(".footer-social", {
      scale: 0.5,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: "back.out(1.7)",
      immediateRender: false,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <footer
      ref={footerRef}
      className="relative w-screen bg-black text-blue-50 overflow-hidden pt-24 pb-8"
    >
      {/* Top divider line */}
      <div
        className="footer-top-line absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(79,195,247,0.3), rgba(167,139,250,0.3), transparent)",
          transformOrigin: "left",
        }}
      />

      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,195,247,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Giant SPDY wordmark ── */}
      <div ref={bigTextRef} className="relative overflow-hidden mb-16">
        <h2
          className="special-font font-zentry font-black text-center uppercase select-none leading-none"
          style={{
            fontSize: "clamp(4rem, 18vw, 14rem)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.04em",
          }}
        >
          <b>SPDY</b>
        </h2>

        {/* Tagline sitting over the wordmark */}
        <p className="font-general text-[10px] uppercase tracking-[0.5em] text-white/55 text-center absolute bottom-6 w-full">
          Full-Stack · AI-Powered · Smart Systems
        </p>
      </div>

      {/* ── Middle row: nav + social ── */}
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
          {/* Nav links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer-nav-link group relative font-general text-[10px] uppercase tracking-[0.25em] text-white/35 hover:text-white transition-colors duration-300"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-300/60 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="footer-social w-9 h-9 rounded-full border border-white/50 flex items-center justify-center text-2xl text-white/50 hover:text-yellow-200  shadow-inner hover:shadow-[0_0_15px_rgba(255,255,0,0.8)] hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-general text-[9px] uppercase tracking-widest text-white/60">
            © SPDY Softwares 2026. All rights reserved.
          </p>

          <a
            href="#hero"
            className="group flex items-center gap-2 font-general text-[9px] uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300"
          >
            Back to top
            <TiLocationArrow className="-rotate-90 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
