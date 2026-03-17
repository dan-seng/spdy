import { motion } from "framer-motion";

import {
  SiAngular,
  SiDocker,
  SiExpress,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRust,
  SiSvelte,
  SiTerraform,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const logos = [
  { label: "TypeScript", Icon: SiTypescript },
  { label: "React", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "Vue", Icon: SiVuedotjs },
  { label: "Angular", Icon: SiAngular },
  { label: "Svelte", Icon: SiSvelte },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "Express", Icon: SiExpress },
  { label: "NestJS", Icon: SiNestjs },
  { label: "Python", Icon: SiPython },
  { label: "Go", Icon: SiGo },
  { label: "Rust", Icon: SiRust },
  { label: "HTML", Icon: SiHtml5 },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "Tailwind", Icon: SiTailwindcss },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "MongoDB", Icon: SiMongodb },
  { label: "Docker", Icon: SiDocker },
  { label: "Kubernetes", Icon: SiKubernetes },
  { label: "Linux", Icon: SiLinux },
  //{ label: "AWS", Icon: SiAwsamplify },
  { label: "Terraform", Icon: SiTerraform },
  { label: "GitHub", Icon: SiGithub },
];
const stats = [
  { value: "12+", label: "Languages supported" },
  { value: "10+", label: "Frameworks ready" },
  { value: "80+", label: "Tool integrations" },
  { value: "99.95%", label: "Build uptime" },
  { value: "100%", label: "Quality" },
];

export default function Techs() {
  const mid = Math.ceil(logos.length / 2);
  const firstLine = logos.slice(0, mid);
  const secondLine = logos.slice(mid);
  return (
    <section
      id="techs"
      className="bg-linear-to-b from-black via-zinc-900 to-white/30"
    >
      <div className="section-shell ">
        <div className="mb-12 mt-20">
          <h2 className="font-display text-center mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Programming languages, frameworks, and tools we support
          </h2>
          <p className="mt-4 text-zinc-400 font-code">
            From frontend to infra, plug into modern stacks across web, data,
            and cloud with consistent workflows.
          </p>
        </div>
      </div>
      <div className="sace-y-6">
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-left gap-4 mb-10">
            {[...firstLine, ...firstLine].map((logo, idx) => (
              <span
                key={logo.label + idx}
                className="logo-pill rounded-full px-6 py-3 text-sm uppercase tracking-[0.24em] inline-flex items-center gap-3"
              >
                <logo.Icon className="h-20 w-20 " aria-hidden="true" />
                {logo.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Second line - scroll right */}
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll-right gap-4">
          {[...secondLine, ...secondLine].map((logo, idx) => (
            <span
              key={logo.label + "-2-" + idx}
              className="logo-pill rounded-full px-6 py-3 text-sm uppercase tracking-[0.24em] inline-flex items-center gap-3"
            >
              <logo.Icon className="h-20 w-20" aria-hidden="true" />
              {logo.label}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-5">
        {stats.map((stat, index) => (
          <motion.article
            key={`${stat.label}-${index}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel rounded-xl p-5"
          >
            <p className="text-2xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
              {stat.label}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
