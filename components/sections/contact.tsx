"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, ArrowUpRight, Copy, Check, CalendarDays } from "lucide-react";
import { portfolioData } from "@/lib/data/portfolio";

export function Contact() {
    const { personal } = portfolioData;

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(personal.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
                    <motion.button
                        onClick={handleCopy}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-1 items-center justify-between gap-4 sm:gap-6 rounded-[3rem] border border-white/5 bg-zinc-900/30 p-6 sm:p-10 backdrop-blur-3xl hover:bg-zinc-900 transition-all hover:border-emerald-500/20 group text-left w-full overflow-hidden"
                    >
                        <div className="flex items-center gap-4 sm:gap-6 min-w-0 flex-1">
                            <div className={`flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-3xl ${copied ? 'bg-emerald-500 text-black' : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black'} transition-all`}>
                                {copied ? <Check className="h-6 w-6 sm:h-8 sm:w-8" /> : <Mail className="h-6 w-6 sm:h-8 sm:w-8" />}
                            </div>
                            <div className="text-left min-w-0 flex-1">
                                <p className="text-emerald-500 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] mb-1">
                                    {copied ? "Copied!" : "Direct Mail"}
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg font-black text-white tracking-tight truncate block w-full">{personal.email}</p>
                            </div>
                        </div>
                        <div className="shrink-0 ml-2">
                            {copied ? (
                                <Check className="h-6 w-6 text-emerald-500 shrink-0" />
                            ) : (
                                <Copy className="h-6 w-6 text-zinc-700 group-hover:text-white transition-all transform group-hover:scale-110 shrink-0" />
                            )}
                        </div>
                    </motion.button>

                    <motion.a
                        href="https://calendly.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-1 items-center justify-between gap-4 sm:gap-6 rounded-[3rem] border border-white/5 bg-zinc-900/30 p-6 sm:p-10 backdrop-blur-3xl hover:bg-zinc-900 transition-all hover:border-indigo-500/20 group text-left w-full overflow-hidden"
                    >
                        <div className="flex items-center gap-4 sm:gap-6 min-w-0 flex-1">
                            <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-3xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <CalendarDays className="h-6 w-6 sm:h-8 sm:w-8" />
                            </div>
                            <div className="text-left min-w-0 flex-1">
                                <p className="text-indigo-500 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] mb-1">Schedule</p>
                                <p className="text-sm sm:text-base lg:text-lg font-black text-white tracking-tight truncate block w-full">Book a 15-min chat</p>
                            </div>
                        </div>
                        <ArrowUpRight className="h-6 w-6 text-zinc-700 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 ml-2" />
                    </motion.a>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-row gap-6 justify-center mt-12"
                >
                    <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-20 w-20 items-center justify-center rounded-[2rem] border border-white/5 bg-zinc-900/30 backdrop-blur-3xl hover:bg-zinc-900 transition-all hover:border-indigo-500/20 group"
                    >
                        <Linkedin className="h-8 w-8 text-zinc-600 group-hover:text-indigo-400 transition-all group-hover:scale-110" />
                    </a>
                    <a
                        href={personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-20 w-20 items-center justify-center rounded-[2rem] border border-white/5 bg-zinc-900/30 backdrop-blur-3xl hover:bg-zinc-900 transition-all hover:border-white/20 group"
                    >
                        <Github className="h-8 w-8 text-zinc-600 group-hover:text-white transition-all group-hover:scale-110" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
