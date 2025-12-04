"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function ContactSection() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const handleSubmit = () =>{
    if(name && email && message){
      alert("Message sent successfully");
    }
  }


  const text = "Contact Us";
  return (
    <section id="contact" className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="mb-16"
        >
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
          <div className="w-16 h-1 bg-black mb-4"></div>
          <p className="text-gray-600 max-w-xl">
            Have a project in mind? Let's work together and build something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" ref={ref}>
          {/* Contact Details */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.a 
              variants={fadeIn}
              href="mailto:da16gi@gmail.com"
              className="group"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <p className="font-semibold text-gray-800 mb-1">Email</p>
              <p className="text-gray-600">da16gi@gmail.com</p>
              <div className="w-0 h-px bg-black group-hover:w-full transition-all duration-300"></div>
            </motion.a>

           <motion.a
              href="tel:+25194502123"
              variants={fadeIn}
              className="group block cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10, delay: 0.1 }}
            >
              <p className="font-semibold text-gray-800 mb-1">Phone</p>
              <p className="text-gray-600">+251 945 02123</p>
              <div className="w-0 h-px bg-black group-hover:w-full transition-all duration-300"></div>
            </motion.a>

            <motion.div 
              variants={fadeIn}
              className="group"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10, delay: 0.2 }}
            >
              <p className="font-semibold text-gray-800 mb-1">Location</p>
              <p className="text-gray-600">Mekelle, Ethiopia</p>
              <div className="w-0 h-px bg-black group-hover:w-full transition-all duration-300"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1108.8821078909923!2d39.472066886234906!3d13.489190529545247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166afd2901e34831%3A0x6fa0fb95db292b0!2sSelam%20Pension!5e1!3m2!1sen!2set!4v1764784602812!5m2!1sen!2set"
              width="600"
              height="450"
              loading="lazy"
              style={{ border: 0 }}
              className="w-full h-64 rounded-xl"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

             </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border text-gray-700 border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-black transition-all duration-200"
                  placeholder="Your name"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border text-gray-700 border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-black transition-all duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border text-gray-700 border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-black transition-all duration-200"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-md hover:shadow-lg cursor-pointer hero hover:scale-105 hover:rotate-3 hover:border hover:border-black hover:z-10 hover:bg-white hover:text-black transition-all duration-300"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
