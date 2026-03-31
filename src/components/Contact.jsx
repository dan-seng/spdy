import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import emailjs from "@emailjs/browser";

import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import {
  FaEnvelope,
  FaMicrophone,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ─── Floating 3D Orb ──────────────────────────────────────────────────────────
const FloatingOrb = ({ size, x, y, color, delay, duration }) => (
  <div
    className="contact-orb absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle at 30% 30%, ${color}55, ${color}11)`,
      border: `1px solid ${color}22`,
      animationDelay: delay,
      animationDuration: duration,
    }}
  />
);

// ─── Animated Input Field ─────────────────────────────────────────────────────
const ContactField = ({
  label,
  type = "text",
  placeholder,
  name,
  multiline,
}) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const lineRef = useRef(null);

  const handleFocus = () => {
    setFocused(true);
    gsap.to(lineRef.current, { scaleX: 1, duration: 0.4, ease: "power3.out" });
  };

  const handleBlur = (e) => {
    setFocused(false);
    setHasValue(e.target.value.length > 0);
    if (!e.target.value) {
      gsap.to(lineRef.current, { scaleX: 0, duration: 0.3, ease: "power3.in" });
    }
  };

  const baseClass =
    "w-full bg-transparent text-white font-robert-regular text-base outline-none placeholder-white/20 resize-none pt-6 pb-2";

  return (
    <div className="contact-field relative group">
      <label
        className={`contact-label absolute left-0 font-general text-[10px] uppercase tracking-[0.3em] transition-all duration-300 pointer-events-none ${
          focused || hasValue
            ? "top-0 text-[9px] opacity-100"
            : "top-6 opacity-40"
        }`}
        style={{ color: focused ? "#4fc3f7" : "rgba(255,255,255,0.5)" }}
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          name={name}
          rows={4}
          placeholder={focused ? placeholder : ""}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={baseClass}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={focused ? placeholder : ""}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={baseClass}
        />
      )}

      {/* Static bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
      {/* Animated active border */}
      <div
        ref={lineRef}
        className="absolute bottom-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, #4fc3f7, #a78bfa)",
          transformOrigin: "left",
          transform: "scaleX(0)",
        }}
      />
    </div>
  );
};

// ─── Main Contact Component ───────────────────────────────────────────────────
const Contact = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const frameRef = useRef(null);
  const glowRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  // ── 3D tilt on card ─────────────────────────────────────────────────────────
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(cardRef.current, {
      rotateY: xPos * 8,
      rotateX: -yPos * 8,
      transformPerspective: 1200,
      duration: 0.6,
      ease: "power2.out",
    });

    // Move glow follow cursor
    gsap.to(glowRef.current, {
      left: `${(xPos + 0.5) * 100}%`,
      top: `${(yPos + 0.5) * 100}%`,
      duration: 0.4,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    });
    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.3,
    });
  };

  const handleMouseEnter = () => {
    gsap.to(glowRef.current, { opacity: 1, duration: 0.3 });
  };

  // ── GSAP Scroll Animations ───────────────────────────────────────────────────
  useGSAP(() => {
    // 3D entrance: section rotates in from below on scroll
    gsap.from(cardRef.current, {
      rotateX: 25,
      y: 120,
      opacity: 0,
      transformPerspective: 1000,
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    // Form fields stagger in
    gsap.from(".contact-field", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Info blocks stagger from left
    gsap.from(".contact-info-item", {
      x: -40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Orbs float up on scroll
    gsap.from(".contact-orb", {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });

    // Horizontal scan line that sweeps across section
    gsap.fromTo(
      ".scan-line",
      { scaleX: 0, opacity: 0.6 },
      {
        scaleX: 1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );

    // Section label parallax
    gsap.to(".contact-bg-text", {
      y: -80,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Card subtle float on scroll scrub
    gsap.to(cardRef.current, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      alert("Email service is not configured yet.");
      return;
    }

    const formData = new FormData(e.target);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      gsap.to(formRef.current, {
        scale: 0.97,
        opacity: 0,
        duration: 0.3,
        onComplete: () => setSubmitted(true),
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-section relative min-h-screen w-screen bg-black py-32 overflow-hidden flex items-center"
    >
      {/* ── Background ghost text ─── */}
      <span className="contact-bg-text special-font font-zentry font-black absolute -bottom-10 left-1/2 -translate-x-1/2 text-[18vw] text-white/[0.025] uppercase whitespace-nowrap pointer-events-none select-none">
        Contact
      </span>

      {/* ── Scan line ─── */}
      <div
        className="scan-line absolute left-0 w-full h-px pointer-events-none"
        style={{
          top: "40%",
          background:
            "linear-gradient(90deg, transparent, #4fc3f7, transparent)",
          transformOrigin: "left",
        }}
      />

      {/* ── Floating orbs ─── */}
      <FloatingOrb
        size="300px"
        x="-80px"
        y="10%"
        color="#4fc3f7"
        delay="0s"
        duration="8s"
      />
      <FloatingOrb
        size="200px"
        x="75%"
        y="60%"
        color="#a78bfa"
        delay="2s"
        duration="11s"
      />
      <FloatingOrb
        size="120px"
        x="60%"
        y="5%"
        color="#ffd54f"
        delay="1s"
        duration="9s"
      />
      <FloatingOrb
        size="80px"
        x="30%"
        y="80%"
        color="#4fc3f7"
        delay="3s"
        duration="7s"
      />

      {/* ── Main Content ─── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-10">
        {/* Section label */}
        <p className="font-general text-[10px] uppercase tracking-[0.4em] text-white/30 text-center mb-6">
          Get in touch
        </p>

        <AnimatedTitle
          title="Let&#39;s <b>b</b>uild s<b>om</b>ething <br /> <b>ext</b>raordinary"
          containerClass="mb-16 !text-white text-center"
        />

        {/* ── 3D Card ─── */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className="contact-card relative rounded-2xl overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Cursor glow */}
          <div
            ref={glowRef}
            className="pointer-events-none absolute w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
            style={{
              background:
                "radial-gradient(circle, rgba(79,195,247,0.15) 0%, transparent 70%)",
              zIndex: 1,
            }}
          />

          {/* Card inner */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* LEFT: Info panel */}
            <div
              ref={infoRef}
              className="contact-info-panel relative p-10 lg:p-14 flex flex-col justify-between gap-12"
            >
              {/* Corner bracket decorations */}
              <div className="bracket-tl absolute top-4 left-4 w-6 h-6 border-t border-l border-white/20" />
              <div className="bracket-bl absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/20" />

              <div>
                <p className="font-general text-[10px] uppercase tracking-[0.3em] text-blue-300/70 mb-8">
                  SPDY Softwares
                </p>
                <p className="font-robert-regular text-white/50 text-sm leading-relaxed max-w-xs">
                  We engineer full-stack AI-powered systems with precision and
                  speed. Let's turn your vision into a fully functional product.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="contact-info-item flex items-start gap-4 group cursor-default">
                  <span className="font-general text-[9px] uppercase tracking-widest text-white/20 mt-1 w-16 flex-shrink-0">
                    <FaEnvelope size={25} />
                  </span>
                  <span className="font-robert-regular text-white/70 text-sm group-hover:text-white transition-colors duration-200">
                    <a href="mailto:da16gi@gmail.com">da16gi@gmail.com</a>
                  </span>
                </div>
                <div className="contact-info-item flex items-start gap-4 group cursor-default">
                  <span className="font-general text-[9px] uppercase tracking-widest text-white/20 mt-1 w-16 flex-shrink-0">
                    <FaTelegram size={25} />
                  </span>
                  <span className="font-robert-regular text-white/70 text-sm group-hover:text-white transition-colors duration-200">
                    <a href="t.me/living_guy">Dan</a>
                  </span>
                </div>
                <div className="contact-info-item flex items-start gap-4 group cursor-default">
                  <span className="font-general text-[9px] uppercase tracking-widest text-white/20 mt-1 w-16 flex-shrink-0">
                    <FaWhatsapp size={25} />
                  </span>
                  <span className="font-robert-regular text-white/70 text-sm group-hover:text-white transition-colors duration-200">
                    <a href="https://wa.me/251945012123">Daniel</a>
                  </span>
                </div>
                <div className="contact-info-item flex items-start gap-4 group cursor-default">
                  <span className="font-general text-[9px] uppercase tracking-widest text-white/20 mt-1 w-16 flex-shrink-0">
                    <FaPhone size={25} />
                  </span>
                  <span className="font-robert-regular text-white/70 text-sm group-hover:text-white transition-colors duration-200">
                    <a href="tel:+251945012123">+2519 450 12123</a>
                  </span>
                </div>
                <div className="contact-info-item flex items-start gap-4 group cursor-default">
                  <span className="font-general text-[9px] uppercase tracking-widest text-white/20 mt-1 w-16 flex-shrink-0">
                    <FaMicrophone size={25} />
                  </span>
                  <span className="font-robert-regular text-white/70 text-sm group-hover:text-white transition-colors duration-200 cursor-pointer">
                    With in 24 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-white/8" />

            {/* RIGHT: Form panel */}
            <div className="contact-form-panel relative p-10 lg:p-14">
              <div className="bracket-tr absolute top-4 right-4 w-6 h-6 border-t border-r border-white/20" />
              <div className="bracket-br absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/20" />

              {!submitted ? (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8 "
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <ContactField
                      label="Full Name"
                      name="name"
                      placeholder="Your name"
                    />
                    <ContactField
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                    />
                  </div>

                  <ContactField
                    label="Subject"
                    name="subject"
                    placeholder="What's this about?"
                  />
                  <ContactField
                    label="Message"
                    name="message"
                    placeholder="Tell us about your project..."
                    multiline
                  />

                  {/* Submit */}
                  <div className="flex items-center justify-between mt-2">
                    <p className="font-general text-[9px] uppercase tracking-widest text-white/50">
                      We reply within 24h
                    </p>
                    <button
                      type="submit"
                      className="contact-submit-btn group relative overflow-hidden rounded-full px-8 py-3 font-general text-xs uppercase tracking-[0.2em] text-black"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Send Message
                        <TiLocationArrow className="group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center h-full min-h-64 gap-6 text-center contact-success">
                  <div className="success-circle w-16 h-16 rounded-full border border-blue-300/30 flex items-center justify-center">
                    <TiLocationArrow className="text-blue-300 text-2xl rotate-[-45deg]" />
                  </div>
                  <h3 className="special-font font-zentry font-black text-3xl text-white">
                    <b>Mess</b>age <b>S</b>ent
                  </h3>
                  <p className="font-robert-regular text-white/40 text-sm max-w-xs">
                    We've received your message and will get back to you within
                    24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Orb float animation ── */
        .contact-orb {
          animation: orbFloat linear infinite;
          will-change: transform;
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          33%       { transform: translateY(-20px) scale(1.03); }
          66%       { transform: translateY(10px) scale(0.97); }
        }

        /* ── Card glass/border ── */
        .contact-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 0 0 1px rgba(79,195,247,0.05),
            0 40px 80px rgba(0,0,0,0.6),
            inset 0 1px 0 rgba(255,255,255,0.06);
          transition: box-shadow 0.4s ease;
        }
        .contact-card:hover {
          box-shadow:
            0 0 0 1px rgba(79,195,247,0.12),
            0 60px 120px rgba(0,0,0,0.7),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }

        /* ── Panel backgrounds ── */
        .contact-info-panel {
          background: rgba(255,255,255,0.02);
        }
        .contact-form-panel {
          background: rgba(0,0,0,0.2);
        }

        /* ── Submit button ── */
        .contact-submit-btn {
          background: linear-gradient(135deg, #4fc3f7, #a78bfa);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(79,195,247,0.35);
        }
        .contact-submit-btn:active {
          transform: translateY(0);
        }

        /* ── Success state ── */
        .contact-success {
          animation: fadeInUp 0.6s ease forwards;
        }
        .success-circle {
          animation: pulseGlow 2s ease infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(79,195,247,0); }
          50%       { box-shadow: 0 0 20px 4px rgba(79,195,247,0.2); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Input focus ring fix ── */
        .contact-field input:focus,
        .contact-field textarea:focus {
          caret-color: #4fc3f7;
        }
      `}</style>
    </section>
  );
};

export default Contact;
