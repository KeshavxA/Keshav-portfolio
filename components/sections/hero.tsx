"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/data/portfolio";

export function Hero() {
    const { personal } = portfolioData;

    return (
        <section className="relative flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-black px-6 pt-20 text-white md:pt-32">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse" />
                <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 backdrop-blur-xl glow-primary"
                >
                    <Sparkles className="h-4 w-4 animate-spin-slow" />
                    <span>{personal.specialization}</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 text-7xl font-black tracking-tighter sm:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40"
                >
                    Hi I'm Keshav,<br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-500 bg-clip-text text-transparent">
                        Software Engineer
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl font-medium tracking-tight"
                >
                    Building high-performance digital products at the intersection of robust architecture and seamless user experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
                >
                    <Button variant="primary" href="#projects">
                        Explore Work
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" href="/keshav-sharma-resume.pdf" download="Keshav_Sharma_Resume.pdf">
                        Get Profile
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-24 grid grid-cols-1 gap-12 border-t border-zinc-900 pt-20 sm:grid-cols-3"
                >
                    {[
                        { icon: <TrendingUp />, title: "Precision UX", desc: "Complex data flow optimization for fintech.", color: "emerald" },
                        { icon: <Cpu />, title: "Logic Engines", desc: "Real-time state orchestration & scale.", color: "indigo" },
                        { icon: <Sparkles />, title: "Elite Craft", desc: "Pixel-perfect, high-stakes visual design.", color: "emerald" }
                    ].map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-4 sm:items-start text-left group">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-${feature.color}-500/10 text-${feature.color}-400 transition-transform group-hover:-translate-y-2`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-zinc-200 tracking-tight">{feature.title}</h3>
                            <p className="max-w-[200px] text-sm text-zinc-500 leading-relaxed font-medium">{feature.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`, backgroundSize: `24px 24px` }} />
        </section>
    );
}
