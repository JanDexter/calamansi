import React from "react";
import { FadeIn } from "./FadeIn";
import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Finance Dashboard UI",
    description: "A comprehensive fintech dashboard featuring real-time data visualization, asset tracking, and intuitive navigation.",
    image: "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzU2NjU2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "Expo", "Recharts", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "SaaS Analytics Platform",
    description: "Web-based analytics interface built for speed and clarity. Incorporates complex grid layouts and dynamic theming.",
    image: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjB1aXxlbnwxfHx8fDE3NzU2NjU2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Storefront",
    description: "A modern ecommerce frontend focusing on conversion optimization, smooth transitions, and accessible components.",
    image: "https://images.unsplash.com/photo-1648134859177-66e35b61e106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwJTIwZnJvbnRlbmR8ZW58MXx8fHwxNzc1NjY1Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Zustand", "Stripe", "Radix UI"],
    github: "#",
    live: "#",
  },
];

export function Works() {
  return (
    <section id="works" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <FadeIn delay={0.1}>
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            A selection of my recent projects, combining elegant design with robust engineering.
          </p>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-12 md:gap-24">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <GlassCard className="w-full md:w-1/2 overflow-hidden aspect-video md:aspect-[4/3] group relative">
                <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </GlassCard>

              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:px-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-300 transition-colors"
                  >
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
