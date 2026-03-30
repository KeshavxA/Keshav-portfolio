"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github, TrendingUp, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef, MouseEvent } from "react";
import { portfolioData } from "@/lib/data/portfolio";

function ProjectCard({ project, idx }: { project: typeof portfolioData.projects[0], idx: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            className="group relative flex flex-col rounded-[2.5rem] border border-white/5 bg-zinc-900/20 overflow-hidden backdrop-blur-3xl transition-all hover:border-white/10 hover:bg-zinc-900/40"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.1), transparent 40%)`
                    ),
                }}
            />

            <div className={`absolute -top-1/4 -right-1/4 h-1/2 w-1/2 rounded-full transition-all group-hover:scale-125 duration-1000 opacity-[0.08] blur-[120px] bg-${project.color}-500/20`} />

            <div className="p-10 pb-0 relative z-10">
                <div className="flex justify-between items-start mb-8">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-black text-white tracking-tighter">{project.title}</h3>
                        <div className="flex items-center gap-2">
                            <Zap className="h-3 w-3 text-emerald-500 fill-emerald-500/20" />
                            <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">Metrics Verified</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a href={project.github} className="h-11 w-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-all hover:bg-white/10">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href={project.link} className="h-11 w-11 flex items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:text-white hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                            <ArrowUpRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <p className="text-zinc-500 mb-10 leading-relaxed font-medium tracking-tight h-12 overflow-hidden text-ellipsis line-clamp-2">
                    {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 group/metric transition-colors hover:bg-white/[0.04]">
                            <div className="text-2xl font-black text-white mb-1 group-hover/metric:text-emerald-400">{metric.value}</div>
                            <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mb-1">{metric.label}</div>
                            <div className="text-[10px] text-zinc-600 line-clamp-1">{metric.detail}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2.5 mb-10">
                    {project.tech.map((tag) => (
                        <span key={tag} className="px-3.5 py-1 rounded-xl bg-zinc-800/40 text-zinc-400 text-[10px] font-black uppercase tracking-widest border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-auto px-10 pb-0 flex items-end justify-center [perspective:2000px] relative z-10 overflow-hidden rounded-t-[2.5rem]">
                <div className="relative w-full aspect-video rounded-t-3xl overflow-hidden border border-white/10 shadow-3xl transition-all duration-1000 group-hover:[transform:rotateX(8deg)_scale(1.05)_translateY(-12px)]">
                    <Image
                        src={project.image}
                        alt={`${project.title} dashboard`}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section className="bg-black pt-40 pb-64 px-6 relative" id="projects">
            <div className="absolute inset-x-0 bottom-0 h-[800px] bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.06),transparent_60%)] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col items-center mb-32 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-black tracking-[0.4em] uppercase text-[10px] glow-primary"
                    >
                        Intelligence Artifacts
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl sm:text-7xl font-black text-white text-center tracking-tighter"
                    >
                        Advanced <span className="text-zinc-600">Visuals</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-xl text-center text-zinc-500 text-xl font-medium"
                    >
                        Precision-engineered interfaces designed for mission-critical clarity.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {portfolioData.projects.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
