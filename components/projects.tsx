import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react"; // import the icon
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A complete online shopping system with admin dashboard and payment integration.",
      img: "/screenshot/eshemeta.png",
      link: "https://eshemeta.vercel.app",
    },
    {
      title: "Hotel Website",
      desc: "a modern, complete hotel website with smooth animations and styles.",
      img: "/screenshot/beli.png",
      link: "https://spdyhotel.vercel.app",
    },
    {
      title:"Hotel Website",
      desc: "a modern, complete hotel website with smooth animations and styles.",
      img: "/screenshot/lux.png",
      link: "https://luxuryhotel.vercel.app",
    },
    {
      title:"Subscription Tracker",
      desc: "A subscription tracking system for businesses to manage their subscriptions.",
      img: "/screenshot/subs.png",
      link: "https://substrackk.vercel.app",
    },
  ];

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
      ease: "easeOut",
    },
  },
  hover: {
    y: -15,
    scale: 1.1,
      rotateX: 3,
      rotateY: 3,
      rotateZ: 5,
      zIndex: 20,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      mass: 0.3
    }
  },
  exit: {
    y: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    zIndex: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 0.4
    }
  }
};

  const text = "Our Projects";

  return (
    <section id="projects" className="py-24">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={item} className="text-center mb-16">
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
      </h2><div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Explore our portfolio of successful projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-100"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                transformOrigin: 'center center',
                position: 'relative',
                zIndex: 1,
              }}
              whileHover="hover"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hero">{project.title}</h3>
                <p className="text-gray-700">{project.desc}</p>

                 <Link href={project.link} target="_blank">
                <button className="mt-4 inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black hover:border hover:border-black hover:scale-105 hover:rotate-3 transition-all duration-300 cursor-pointer hero">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
