import React from "react";
import { FadeIn } from "./FadeIn";
import { GlassCard } from "./GlassCard";
import { Code2, Smartphone, MonitorSmartphone, Database } from "lucide-react";

const SKILLS = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Building fast, native-feeling apps for iOS and Android using React Native and Expo.",
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend Web Engineering",
    description: "Creating responsive, interactive web applications with React, Next.js, and TypeScript.",
  },
  {
    icon: Code2,
    title: "UI/UX Architecture",
    description: "Translating complex designs into pixel-perfect, scalable component libraries.",
  },
  {
    icon: Database,
    title: "Full-Stack Integration",
    description: "Connecting seamless frontends with robust backend APIs, Firebase, and Supabase.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <FadeIn delay={0.1}>
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed">
            I am a dedicated software engineer with a deep passion for the mobile and frontend ecosystem. I bridge the gap between design and engineering, ensuring that every digital product I build is not only highly functional but also a joy to use.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <FadeIn key={index} delay={0.1 * index}>
              <GlassCard className="p-8 h-full flex flex-col transition-all hover:bg-white/10 group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 text-indigo-300 group-hover:scale-110 group-hover:bg-indigo-500/30 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
                <p className="text-white/60 leading-relaxed flex-grow">
                  {skill.description}
                </p>
              </GlassCard>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
