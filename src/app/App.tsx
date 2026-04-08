import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { BackgroundOrbs } from "./components/BackgroundOrbs";
import { Hero } from "./components/Hero";
import { Works } from "./components/Works";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  // Smooth scroll logic for standard anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f25] text-white selection:bg-indigo-500/30 selection:text-white font-sans overflow-x-hidden relative flex flex-col items-center">
      <BackgroundOrbs />
      <Navbar />
      
      <main className="w-full flex-grow flex flex-col relative">
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
