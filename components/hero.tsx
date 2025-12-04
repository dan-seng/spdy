'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

export default function HeroSection() {
  const controls = useAnimation();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Animate in when component mounts
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    });
  }, [controls]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      aria-labelledby="hero-heading"
      className="w-full bg-white pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section - Stacked on mobile */}
        <div className="flex justify-center mb-6 sm:mb-8 md:hidden">
          <div className="w-32 h-32">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
                y: [0, -2, 2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-full h-full"
            >
              <Image
                src="/images/logo.png"
                alt="SPDY"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          {/* Logo for desktop - positioned absolutely */}
          <div className="hidden md:block absolute right-5 top-1/10 -translate-y-1/2 w-60 h-60">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
                y: [0, -2, 2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-full h-full"
            >
              <Image
                src="/images/logo.png"
                alt="SPDY"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>



          <motion.h1 
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight cursor-default md:pr-36 hero"
       >
            {'We Build Fast & Modern'.split('').map((letter, index) => (
              <motion.span
                key={`text-${index}`}
                className="inline-block relative bg-clip-text text-transparent bg-linear-to-r from-black to-gray-600"
                initial={{ scale: 1 }}
                whileHover={{ 
                  scale: 1.4,
                  transition: { 
                    duration: 0.6, 
                    ease: [0.16, 1, 0.3, 1],
                    type: 'spring',
                    stiffness: 300,
                    damping: 15
                  }
                }}
                whileTap={{ 
                  scale: 0.9,
                  transition: { 
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
            {' '}
          
            <motion.span className="inline-block">
              {'Digital Products'.split('').map((letter, index) => (
                <motion.span
                  key={`gradient-${index}`}
                  className="inline-block relative bg-clip-text text-transparent bg-linear-to-r from-black to-gray-600"
                  initial={{ scale: 1 }}
                  whileHover={{ 
                  scale: 1.4,
                  transition: { 
                    duration: 0.6, 
                    ease: [0.16, 1, 0.3, 1],
                    type: 'spring',
                    stiffness: 300,
                    damping: 15
                  }
                }}
                whileTap={{ 
                  scale: 0.9,
                  transition: { 
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                 
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
              <motion.span
                className="inline-block relative text-gray-900"
                initial={{ scale: 1 }}
                whileHover={{ 
                  scale: 1.4,
                  transition: { 
                    duration: 0.4, 
                    ease: [0.16, 1, 0.3, 1],
                    type: 'spring',
                    stiffness: 300,
                    damping: 15
                  }
                }}
                whileTap={{ 
                  scale: 0.9,
                  transition: { 
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
              >
                .
              </motion.span>
            </motion.span>
          </motion.h1>
         <motion.div 
  className="overflow-hidden whitespace-nowrap mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0"
>
  <motion.p
    initial={{ x: 0 }}
    whileHover={{ x: "-100%" }} // move left on hover
    transition={{ duration: 15, ease: "linear" }} // smooth linear scroll
    className="inline-block hover:text-red-900 transition-colors duration-300"
  >
    SPDY helps businesses grow with high-quality websites, mobile apps,
    and complete digital systems — crafted with clean code and modern tools.
  </motion.p>
</motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center"
          >
            <button
              onClick={() => scrollTo('contact')}
              className="group relative overflow-hidden bg-linear-to-r from-black to-gray-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5 hover:text-red-600 hero w-full sm:w-auto"
              aria-label="Start a project with us"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Start a Project
                </span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            
            <button
              onClick={() => scrollTo('projects')}
              className="group relative overflow-hidden bg-white border-2 border-gray-200 text-gray-800 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300 hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 hover:text-red-600 hero w-full sm:w-auto"
              aria-label="View our portfolio"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  View Our Work
                </span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-black/5 to-black/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ delay: 0.4 }}
            className="mt-12 md:mt-16 relative "
          >
            <div className="absolute -inset-3 bg-linear-to-r from-blue-100 to-purple-100 rounded-2xl -z-10 blur-xl opacity-60"></div>
           <div className="relative rounded-sm overflow-hidden shadow-xl w-full h-[650px] ">
  {/* Image */}
  <Image
    src="/images/spdy.png"
    alt="Modern digital products built by SPDY Tech"
    width={1200}
    height={650}
    priority
    className="w-full h-full object-cover transition-opacity duration-500 hover:opacity-0"
    
  />

  {/* Video */}
  <video
    src="/videos/hero.webm"
    autoPlay
    muted
    loop
    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hover:opacity-100"
  />
</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
