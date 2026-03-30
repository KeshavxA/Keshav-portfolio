"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Cpu } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 pt-20 text-white md:pt-32">
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden pointer-events-none">
                <div className="absolute -top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
                <div className="absolute top-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-md"
                >
                    <Sparkles className="h-4 w-4" />
                    <span>Specializing in High-Performance Fintech</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl"
                >
                    The Gold Standard of{" "}
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-indigo-400 bg-clip-text text-transparent">
                        Financial Visualization
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
                >
                    I engineer data-intensive, high-stakes fintech interfaces that prioritize precision, performance, and elite aesthetics.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <a href="#projects" className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-8 font-semibold text-black transition-all hover:bg-zinc-100 sm:w-auto">
                        View Projects
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full duration-1000" />
                    </a>

                    <a href="/keshav-sharma-resume.pdf" download="Keshav_Sharma_Resume.pdf" className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 px-8 font-semibold text-white backdrop-blur-md transition-all hover:bg-zinc-800 sm:w-auto">
                        Download Resume
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20 grid grid-cols-1 gap-8 border-t border-zinc-900 pt-16 sm:grid-cols-3"
                >
                    <div className="flex flex-col items-center gap-3 sm:items-start text-left">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                            <TrendingUp className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-200">Data-Driven UX</h3>
                        <p className="max-w-xs text-sm text-zinc-500">Optimizing user flows for complex financial environments and real-time visualization.</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 sm:items-start text-left">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                            <Cpu className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-200">High Performance</h3>
                        <p className="max-w-xs text-sm text-zinc-500">Building lighting-fast interfaces using modern frameworks like Next.js and Tailwind.</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 sm:items-start text-left">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                            <Sparkles className="h-4 w-4" />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-200">Premium Aesthetics</h3>
                        <p className="max-w-xs text-sm text-zinc-500">Creating sleek, dark-themed designs that scream elite production quality.</p>
                    </div>
                </motion.div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`, backgroundSize: `24px 24px` }} />
        </section>
    );
}
