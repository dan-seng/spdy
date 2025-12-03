"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaInstagram, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/dan-seng", color: "hover:text-gray-200" },
  { icon: <FaXTwitter />, url: "https://twitter.com/", color: "hover:text-gray-200" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/danielgidey", color: "hover:text-blue-400" },
  { icon: <FaEnvelope />, url: "mailto:da16gi@gmail.com", color: "hover:text-green-400" },
  { icon: <FaInstagram />, url: "https://instagram.com/_dan_el", color: "hover:text-red-400" },
  { icon: <FaTelegram />, url: "https://t.me/living_guy", color: "hover:text-blue-400" },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   if(email){
    alert("Thanks for subscribing!")
    setEmail("")
   }else{  
   } 
  };


  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={footerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Info */}
          <motion.div variants={item} className="space-y-4">
            <h2 className="text-2xl font-bold hero">SPDY</h2>
            <p className="text-gray-400 hover:text-cyan-500 transition-all duration-300 hover:scale-105">
              Fast, modern, and reliable solutions for your business needs.
              We help you build amazing digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} text-xl transition-all duration-300 hover:scale-105`}
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold hero">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <a href={link.href} className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold hero">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                variants={item}
              >
                <FaMapMarkerAlt className="mt-1 mr-3 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">Mekelle, Ethiopia</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={item}
              >
                <FaEnvelope className="mr-3 text-gray-400" />
                <a href="mailto:da16gi@gmail.com" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">
                  da16gi@gmail.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={item}
              >
                <FaPhone className="mr-3 text-gray-400" />
                <a href="tel:+25194502123" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +251 945 02123
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold hero">Newsletter</h3>
            <p className="text-gray-400">Subscribe to get updates on our latest projects and services.</p>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 w-full bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-white/30 rounded-l-md"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-100 transition-colors duration-300 flex items-center"
                >
                  <FaPaperPlane className="mr-2" />
                  <span>Subscribe</span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} SPDY. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}