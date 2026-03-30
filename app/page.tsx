import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black transition-colors duration-500 selection:bg-emerald-500/30 selection:text-emerald-300">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Projects />

        <section id="experience" className="bg-black pt-64 pb-64 px-6 relative border-t border-zinc-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
              <span className="h-px flex-1 bg-zinc-800"></span>
              Experience
              <span className="h-px flex-1 bg-zinc-800"></span>
            </h2>

            <div className="space-y-12">
              <div className="relative pl-8 border-l border-emerald-500/30">
                <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Associate Software Engineer Intern</h3>
                    <p className="text-emerald-400 font-medium tracking-wide text-sm">CodeTikki</p>
                  </div>
                  <p className="text-zinc-500 text-sm font-mono mt-1 sm:mt-0">Jan 2026 — present</p>
                </div>
                <ul className="text-zinc-400 space-y-3 list-disc list-inside text-sm leading-relaxed">
                  <li>Architected high-performance <span className="text-zinc-200">dashboard interfaces</span> for data-intensive enterprise environments.</li>
                  <li>Optimized frontend assets and state management, yielding a <span className="text-emerald-400 font-semibold">40% engagement surge</span> via tactical performance tuning.</li>
                  <li>Engineered reusable, pixel-perfect UI systems adhering to strict <span className="text-zinc-200">fintech accessibility</span> and logic standards.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-zinc-950 py-64 px-6 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Education & Location</h2>
                <div className="space-y-6">
                  <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                    <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Bachelor of Computer Applications</p>
                    <h4 className="text-lg font-bold text-white">College of Engineering Roorkee</h4>
                    <p className="text-zinc-400 text-sm mt-1">CGPA: 8.1 / 10</p>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400 px-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <p className="text-sm font-medium">Roorkee, Uttarakhand, India</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-white">Core Specializations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Languages/Core */}
                  <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-emerald-500/30 transition-all group">
                    <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">Languages & Core</h3>
                    <div className="flex flex-wrap gap-2">
                      {["TypeScript", "JavaScript", "Python", "SQL"].map(skill => (
                        <span key={skill} className="px-3 py-1.5 rounded-lg bg-zinc-800/50 text-xs font-medium text-zinc-300 border border-zinc-700/30 group-hover:border-emerald-500/20 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Frameworks */}
                  <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-emerald-500/30 transition-all group">
                    <h3 className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "React", "Node.js", "Tailwind CSS"].map(skill => (
                        <span key={skill} className="px-3 py-1.5 rounded-lg bg-zinc-800/50 text-xs font-medium text-zinc-300 border border-zinc-700/30 group-hover:border-indigo-500/20 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools / Modern Stack */}
                  <div className="sm:col-span-2 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-emerald-500/30 transition-all group">
                    <h3 className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">Modern Stack & Specialized</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                      {["Framer Motion", "Gemini AI", "Real-time Data", "B2B Dashboards", "Performance Optimization", "Postgres", "Redux", "Zustand"].map(skill => (
                        <div key={skill} className="flex items-center gap-2 p-3 rounded-xl bg-zinc-950/50 border border-zinc-800/50 group-hover:border-teal-500/20 transition-colors">
                          <div className="h-1.5 w-1.5 rounded-full bg-teal-500/50" />
                          <span className="text-xs font-medium text-zinc-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-black py-64 relative overflow-hidden mt-48">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`, backgroundSize: `24px 24px` }} />
          <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

          <div className="container relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8">
              Let's build something <br /> high-performance.
            </h2>
            <p className="relative z-30 text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
              Ready to take your Fintech platform to the next level? Say hello at <a href="mailto:keshavsharma904517@gmail.com?subject=Inquiry regarding Fintech Dashboard" className="relative z-50 inline-block font-bold text-emerald-400 cursor-pointer transition-all hover:text-emerald-300 hover:underline decoration-emerald-500/30 underline-offset-8">keshavsharma904517@gmail.com</a>
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/keshav-sharma-b30a65262" target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-300 transition-colors hover:text-white">LinkedIn</a>
              <a href="https://github.com/KeshavxA" target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-300 transition-colors hover:text-white">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 bg-black/50 py-12 px-6 text-center text-sm font-medium backdrop-blur-md">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Keshav Sharma — Engineer specializing in Fintech Dashboards.</p>
          <div className="flex gap-4">
            <span>Built with Next.js 16 & Tailwind 4</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

