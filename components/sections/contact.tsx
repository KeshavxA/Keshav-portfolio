"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/lib/data/portfolio";

export function Contact() {
    const { personal } = portfolioData;

    return (
        <section id="contact" className="bg-black py-64 relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />

            <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center">
                <div className="mb-24 flex flex-col items-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500 text-black shadow-[0_0_40px_rgba(16,185,129,0.3)] animate-pulse"
                    >
                        <Send className="h-8 w-8" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-7xl sm:text-8xl lg:text-9xl font-black text-white text-center tracking-tighter leading-none mb-4 uppercase"
                    >
                        Initiate <br /> <span className="text-zinc-600">Contact</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl text-center text-zinc-500 text-2xl font-medium tracking-tight mt-4"
                    >
                        Ready to elevate your project with high-performance visualization? Reach out via established channels.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-8 md:flex-row justify-center items-stretch md:items-center">
                    <motion.a
                        href={`mailto:${personal.email}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-1 items-center justify-between gap-10 rounded-[3rem] border border-white/5 bg-zinc-900/30 p-10 backdrop-blur-3xl hover:bg-zinc-900 transition-all hover:border-emerald-500/20 group"
                    >
                        <div className="flex items-center gap-6">
                            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                <Mail className="h-8 w-8" />
                            </div>
                            <div className="text-left">
                                <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em] mb-1">Direct Mail</p>
                                <p className="text-base font-black text-white tracking-tight">{personal.email}</p>
                            </div>
                        </div>
                        <ArrowUpRight className="h-8 w-8 text-zinc-700 group-hover:text-white transition-all transform group-hover:translate-x-2 group-hover:-translate-y-2 shrink-0 md:inline" />
                    </motion.a>

                    <div className="flex flex-row gap-8 justify-center">
                        <motion.a
                            href={personal.linkedin}
                            target="_blank"
                            className="flex h-32 w-32 items-center justify-center rounded-[3rem] border border-white/5 bg-zinc-900/30 backdrop-blur-3xl hover:bg-zinc-900 transition-all hover:border-indigo-500/20 group"
                        >
                            <Linkedin className="h-10 w-10 text-zinc-600 group-hover:text-indigo-400 transition-all group-hover:scale-110" />
                        </motion.a>
                        <motion.a
                            href={personal.github}
                            target="_blank"
                            className="flex h-32 w-32 items-center justify-center rounded-[3rem] border border-white/5 bg-zinc-900/30 backdrop-blur-3xl hover:bg-zinc-900 transition-all hover:border-white/20 group"
                        >
                            <Github className="h-10 w-10 text-zinc-600 group-hover:text-white transition-all group-hover:scale-110" />
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
