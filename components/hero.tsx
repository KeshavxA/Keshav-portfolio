"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Cpu } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 pt-20 text-white md:pt-32">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse" />
                <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                >
                    <Sparkles className="h-4 w-4 animate-spin-slow" />
                    <span>Specializing in High-Performance Fintech</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
                >
                    The Gold Standard of <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-500 bg-clip-text text-transparent">
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
