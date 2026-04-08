import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 mt-20 relative z-10 flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 bg-[#0a0f25]/50 backdrop-blur-md">
      <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/50">
        <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
        <span className="hidden md:inline">•</span>
        <span>Built with React & Tailwind CSS</span>
      </div>

      <div className="flex items-center gap-6 mt-6 md:mt-0">
        <a href="#" className="text-white/50 hover:text-indigo-400 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="text-white/50 hover:text-indigo-400 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-white/50 hover:text-indigo-400 transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
