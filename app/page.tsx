import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Navbar } from "@/components/layout/navbar";
import { Experience } from "@/components/sections/experience";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black transition-colors duration-500 selection:bg-emerald-500/30 selection:text-emerald-300">
      <div className="bg-grain" />

      <Navbar />

      <main className="flex flex-col relative z-10 w-full overflow-x-hidden">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />

        <footer className="border-t border-zinc-900 bg-black py-20 px-10 text-center backdrop-blur-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

          <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between gap-10">
            <div className="flex flex-col items-center gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-500 mb-2">
                <span className="text-[10px] font-black tracking-widest text-emerald-500">Keshav Sharma</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-10 text-zinc-600">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] leading-relaxed">© {new Date().getFullYear()} Keshav Sharma — Architecting High-Performance Intelligence.</p>
              <div className="h-px w-20 bg-zinc-900 hidden sm:block" />
              <div className="flex gap-10 items-center justify-center font-black tracking-[0.3em] uppercase text-[9px] text-zinc-700">
                <span>Framework: Next.js 16</span>
                <span>Design: Tailwind 4</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-800">
              {["Performance-First", "Data-Ready", "B2B-Optimized", "Enterprise-Grade"].map(label => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
