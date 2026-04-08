import React from "react";
import { GlassCard } from "./GlassCard";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 px-4 pointer-events-none">
      <div className="max-w-3xl w-full flex items-center justify-between">
        <div className="pointer-events-auto">
          <a href="#" className="text-xl font-bold tracking-tight text-white/90 mix-blend-plus-lighter">
            YN.
          </a>
        </div>
        
        <GlassCard className="pointer-events-auto rounded-full px-6 py-2.5 flex items-center gap-6">
          <a href="#about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            About
          </a>
          <a href="#works" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Works
          </a>
          <a href="#contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Contact
          </a>
        </GlassCard>
      </div>
    </header>
  );
}
