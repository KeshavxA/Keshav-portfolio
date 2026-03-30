"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, TrendingUp, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, MouseEvent } from "react";

const projects = [
    {
        title: "SpendCheck AI",
        description: "A data-intensive personal finance dashboard that achieved a 95+ Lighthouse performance score and 94% categorization accuracy via Gemini AI.",
        tech: ["Next.js", "Tailwind CSS", "Gemini AI", "Recharts"],
        role: "Lead Frontend Architect",
        caseStudy: {
            challenge: "Making complex financial datasets readable and highly reactive for millions of transactions.",
            solution: "Implemented an optimized React state architecture with high-performance Recharts visualizations.",
            result: "Delivered a fluid dashboard with sub-100ms interaction times and a 95+ performance rating."
        },
        github: "https://github.com/KeshavxA/SpendCheck",
        color: "from-blue-600/20 to-indigo-500/20",
        image: "/spendcheck.png"
    },
    {
        title: "veinsofDrop",
        description: "A real-time healthcare platform for blood donor matching, featuring deep analytics and automated response triggers.",
        tech: ["React", "TypeScript", "Node.js", "Express", "Zustand"],
        role: "Fullstack Engineer",
        caseStudy: {
            challenge: "Achieving zero-latency matching for emergency blood donations during critical spikes.",
            solution: "Built a high-performance matching engine and a lightning-fast React management dashboard.",
            result: "Successfully managed 100+ registered donors and saved 70+ lives through the platform."
        },
        link: "https://veinsofdrop.web.app/",
        github: "https://github.com/KeshavxA/veinsofDrop",
        color: "from-red-600/20 to-orange-500/20",
        image: "/veinsOfDrop.png"
    },
    {
        title: "VectorShift",
        description: "An elite automation workspace that drastically reduces development lifecycle times for enterprise-level workflows.",
        tech: ["Next.js", "Tailwind", "Python", "Automation Engine"],
        role: "Automation Engineer",
        caseStudy: {
            challenge: "Optimizing the engineering development cycle for data-heavy automation tasks.",
            solution: "Pioneered a modular frontend architecture to streamline complex workflow orchestration.",
            result: "Achieved an 82% reduction in lifecycle development time for enterprise use cases."
        },
        github: "https://github.com/KeshavxA/VectorShift-Automation",
        color: "from-emerald-600/20 to-teal-500/20",
        image: "/vectorshift.png"
    }
];

function ProjectCard({ project, idx }: { project: typeof projects[0], idx: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            onMouseMove={handleMouseMove}
            className="group relative flex flex-col rounded-3xl border border-white/5 bg-zinc-900/20 overflow-hidden backdrop-blur-xl transition-all hover:border-white/10 hover:bg-zinc-900/40"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.08), transparent 40%)`
                    ),
                }}
            />

            <div className={`absolute -top-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-br transition-all group-hover:scale-125 duration-700 opacity-10 blur-[100px] ${project.color}`} />

            <div className="p-8 pb-0 relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                        <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                        <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">{project.role}</p>
                    </div>
                    <div className="flex gap-3">
                        <a href={project.github} className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-all hover:bg-white/10">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href={project.link} className="h-10 w-10 flex items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:text-white hover:bg-emerald-500 transition-all">
                            <ArrowUpRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <p className="text-zinc-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                </p>

                <div className="space-y-4 mb-8">
                    <div className="group/item border-l-2 border-emerald-500/20 pl-4 py-1 transition-colors hover:border-emerald-500">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-500/60 mb-1">Challenge</p>
                        <p className="text-xs text-zinc-300 leading-relaxed">{project.caseStudy.challenge}</p>
                    </div>
                    <div className="group/item border-l-2 border-indigo-500/20 pl-4 py-1 transition-colors hover:border-indigo-500">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-500/60 mb-1">Solution</p>
                        <p className="text-xs text-zinc-300 leading-relaxed">{project.caseStudy.solution}</p>
                    </div>
                    <div className="group/item border-l-2 border-teal-500/20 pl-4 py-1 transition-colors hover:border-teal-500">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-teal-500/60 mb-1">Result</p>
                        <p className="text-xs text-zinc-300 font-medium leading-relaxed">{project.caseStudy.result}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-lg bg-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-wider border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-auto px-8 pb-0 flex items-end justify-center [perspective:2000px] relative z-10">
                <div className="relative w-full aspect-video rounded-t-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:[transform:rotateX(10deg)_scale(1.02)_translateY(-8px)]">
                    <Image
                        src={project.image}
                        alt={`${project.title} dashboard`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section className="bg-black pt-32 pb-64 px-6 relative" id="projects">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.05),transparent_50%)]" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col items-center mb-24 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-bold tracking-[0.2em] uppercase text-[10px]"
                    >
                        Success metrics
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl sm:text-6xl font-bold text-white text-center tracking-tight"
                    >
                        Elite Fintech <span className="text-zinc-500">Solutions</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-xl text-center text-zinc-500 text-lg"
                    >
                        Engineering scalable, data-intensive interfaces for high-stakes financial operations.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
