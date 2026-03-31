import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);
  const statsRef = useRef(null);

  useGSAP(() => {
    // Original clip-path reveal (kept)
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // 3D parallax depth on the image as you scroll past
    gsap.to(imgRef.current, {
      scale: 1.12,
      ease: "none",
      scrollTrigger: {
        trigger: "#clip",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Stats count-up + stagger entrance
    gsap.from(".about-stat", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Subtext reveal with clip
    gsap.from(".about-subtext", {
      clipPath: "inset(0 100% 0 0)",
      duration: 1.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-subtext",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="text-sm  md:text-[10px]">Welcome to SPDY-Softwares</p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> sma<b>rtest</b> so<b>ftwa</b>re <b>syst</b>ems"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext" style={{ clipPath: "inset(0 0% 0 0)" }}>
          <p>We Make Ideas into Fully functional systems</p>
          <p className="text-gray-500">
            SPDY unites every technologies from countless tech-stacks and
            platforms, both digital and physical, into a unified system.
          </p>
        </div>

        {/* Stats row */}
        <div ref={statsRef} className="flex gap-12 mt-8">
          {[
            { num: "50+", label: "Projects Shipped" },
            { num: "12+", label: "Tech Stacks" },
            { num: "99%", label: "Client Satisfaction" },
          ].map((s) => (
            <div
              key={s.label}
              className="about-stat flex flex-col items-center gap-1"
            >
              <span className="special-font font-zentry font-black text-3xl text-black">
                <b>{s.num}</b>
              </span>
              <span className="font-general text-[9px] uppercase tracking-widest text-gray-500">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            ref={imgRef}
            src="img/webs.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
