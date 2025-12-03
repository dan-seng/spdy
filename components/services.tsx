'use client';

import { motion, Variants } from 'framer-motion';
import { FiGlobe, FiSmartphone, FiCode, FiDatabase, FiTrendingUp, FiServer } from 'react-icons/fi';

const services = [
  {
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies for optimal performance and user experience.',
    icon: <FiGlobe className="w-6 h-6" />,
    bgImage: 'https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png',
    link: '/web-development'
  },
  {
    title: 'Website Upgrade',
    description: 'Modernize your existing website with the latest features, improved performance, and better security.',
    icon: <FiTrendingUp className="w-6 h-6" />,
    bgImage: 'https://media.istockphoto.com/id/1476081293/photo/newsletter-blog-news-website-update-announcement.jpg?s=612x612&w=0&k=20&c=m0-4bOZBkj1c8IdDvHzyohdlEVhRahJgL5q8ayLITFs=',
    link: '/web-upgrade'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    icon: <FiSmartphone className="w-6 h-6" />,
    bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthvUNJFIGvwUme1yu6BDlihkewt6ZDARt0A&s',
    link: '/app-dev'
  },
  {
    title: 'API Development',
    description: 'Robust and scalable RESTful APIs to power your applications and services.',
    icon: <FiCode className="w-6 h-6" />,
    bgImage: 'https://binarychai.com/wp-content/uploads/2023/08/What-is-API-development-and-integration.jpg',
    link: '/api-dev'
  },
  {
    title: 'Database Solutions',
    description: 'Custom database design, optimization, and management for your applications.',
    icon: <FiDatabase className="w-6 h-6" />,
    bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeqa8DLE4oZK4z0E__nAjaUmm7ATGVzt1DQ&s',
    link: '/db-solutions'
  },
  {
    title: 'Backend Development',
    description: 'Powerful and scalable backend systems to support your applications.',
    icon: <FiServer className="w-6 h-6" />,
    bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLis2CeOF9yZ9Q9ejblUy93IUxzCJu8Or_w&s',
    link: '/backend-dev'
  },
];



export default function ServicesSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -30,
      scale: 1.1,
      rotateX: 3,
      rotateY: 3,
      rotateZ: 5,
      zIndex: 20,
      x: '0%',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.5
      }
    }
  };
  const text = "What We Offer";

  return (
    <section id="services" className="py-20">
      <div>
        <motion.div 
          className="backdrop-blur-sm bg-white p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
           <h2 className="text-4xl font-bold text-black mb-6 hero inline-block">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.5, color: "#000" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border"
        >
          {services.map((service, index) => (
           <motion.div
              key={index}
              variants={item}
              initial="show"
              whileHover="hover"
              className="group relative p-8 rounded-xl border border-gray-100 overflow-hidden hover:shadow-2xl transform-gpu transition-all duration-300"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                willChange: 'transform',
                boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
                transformOrigin: 'center center',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.3s ease-out'
           }}
          >
  {/* background image appears only on hover */}
  <motion.div
    className="absolute inset-0 rounded-xl bg-cover bg-center opacity-0 group-hover:opacity-100"
    style={{ backgroundImage: `url(${service.bgImage})` }}
    initial={{ scale: 1 }}
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.5 }
    }}
  ></motion.div>

  {/* overlay to keep text readable */}
  <div className="absolute inset-0 bg-black/25 pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  {/* card content */}
  <div className="relative z-10">
    <div className="w-14 h-14 mb-6 flex items-center justify-center bg-black text-white rounded-lg transition-transform duration-300 group-hover:scale-110">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-white transition-colors duration-300 hero">{service.title}</h3>
    <p className="text-gray-700 group-hover:text-gray-200 mb-6">{service.description}</p>
    <a href={service.link} className="relative after:absolute after:w-0 after:h-px after:left-0 after:-bottom-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
      Learn more
    </a>
    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  
  </div>
  </motion.div>

          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}