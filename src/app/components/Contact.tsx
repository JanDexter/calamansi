import React from "react";
import { FadeIn } from "./FadeIn";
import { GlassCard } from "./GlassCard";
import { Send, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto relative z-10">
      <FadeIn delay={0.1}>
        <GlassCard className="p-12 md:p-20 flex flex-col items-center text-center overflow-hidden relative">
          <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[150%] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-8 text-indigo-300 relative z-10 shadow-lg shadow-indigo-500/20">
            <Send className="w-8 h-8 ml-1" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight relative z-10">
            Let's work together
          </h2>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed relative z-10">
            Currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <a
            href="mailto:hello@example.com"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all overflow-hidden rounded-full z-10"
          >
            <div className="absolute inset-0 bg-indigo-500 hover:bg-indigo-400 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">Get in touch</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </GlassCard>
      </FadeIn>
    </section>
  );
}
