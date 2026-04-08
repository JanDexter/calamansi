import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { GlassCard } from "./GlassCard";

const SOCIALS = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 max-w-4xl mx-auto text-center z-10 relative">
      <FadeIn delay={0.1}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-200 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300">Your Name Here</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          A mobile & frontend developer crafting beautiful, high-performance digital experiences with a focus on seamless interactions and pixel-perfect UI.
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {SOCIALS.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="group relative inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full group-hover:bg-white/10 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]" />
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{social.label}</span>
              </a>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
