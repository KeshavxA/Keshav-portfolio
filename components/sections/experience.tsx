"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data/portfolio";

export function Experience() {
    return (
        <section id="experience" className="bg-black pt-64 pb-64 px-6 relative border-t border-white/[0.05]">
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-emerald-500/[0.03] to-transparent pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="flex flex-col items-center mb-40 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-6 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-500 font-black tracking-[0.5em] uppercase text-[10px]"
                    >
                        Timeline
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-7xl sm:text-8xl font-black text-white text-center tracking-tighter"
                    >
                        Professional <br /> <span className="text-emerald-500 shadow-emerald-500/20 shadow-2xl">Impact</span>
                    </motion.h2>
                </div>

                <div className="relative space-y-32 before:absolute before:left-[11px] before:top-4 before:h-[calc(100%-20px)] before:w-px before:bg-gradient-to-b before:from-emerald-500 before:via-zinc-800 before:to-transparent">
                    {portfolioData.experience.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative pl-16 group"
                        >
                            <div className="absolute left-0 top-3 h-[24px] w-[24px] rounded-full border-4 border-black bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:scale-125 transition-transform" />

                            <div className="flex flex-col lg:flex-row justify-between mb-8 gap-4">
                                <div className="space-y-1">
                                    <h3 className="text-3xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors uppercase">{exp.title}</h3>
                                    <p className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-1 text-zinc-400 font-bold tracking-widest text-xs">{exp.company}</p>
                                </div>
                                <div className="flex flex-col items-start lg:items-end gap-1">
                                    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] font-mono leading-none">{exp.period}</p>
                                    <div className="h-1 w-12 bg-emerald-500/30 rounded-full" />
                                </div>
                            </div>

                            <ul className="text-zinc-400 space-y-6 text-base tracking-tight leading-relaxed max-w-3xl">
                                {exp.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex gap-4 group/li">
                                        <div className="mt-[10px] h-1.5 w-1.5 rounded-full bg-emerald-500/20 group-hover/li:bg-emerald-500 transition-colors shrink-0" />
                                        <p className="font-medium group-hover/li:text-zinc-200 transition-colors">{bullet}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {["Dashboard Architect", "React Specialist", "Tailwind 4 Ready", "Unit Metrics Focus"].map((tag, tIdx) => (
                                    <div key={tIdx} className="py-2.5 px-4 rounded-xl bg-white/[0.02] border border-white/5 text-[9px] font-black uppercase tracking-widest text-zinc-600 text-center">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
