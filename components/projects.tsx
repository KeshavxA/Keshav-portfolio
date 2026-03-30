"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

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

export function Projects() {
    return (
        <section className="bg-black py-24 px-6 relative" id="projects">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-emerald-400 font-semibold tracking-wider uppercase text-sm"
                    >
                        Proof of Work
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-bold text-white text-center"
                    >
                        Flagship Fintech Solutions
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-2xl text-center text-zinc-400"
                    >
                        Engineering scalable, data-intensive applications for high-stakes financial operations.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * idx }}
                            className="group relative flex flex-col rounded-3xl border border-zinc-800 bg-zinc-900/30 overflow-hidden backdrop-blur-sm transition-all hover:border-zinc-700/50 hover:bg-zinc-900/50"
                        >
                            <div className={`absolute -top-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-br transition-all group-hover:scale-125 duration-700 opacity-20 blur-[80px] ${project.color}`} />

                            <div className="p-8 pb-0">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                        <p className="text-emerald-400 text-sm font-medium">{project.role}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-zinc-500 hover:text-white transition-colors">
                                            <Github className="h-5 w-5" />
                                        </a>
                                        <a href={project.link} className="text-zinc-500 hover:text-white transition-colors">
                                            <ExternalLink className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-zinc-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="border-l-2 border-emerald-500/30 pl-4 py-1">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 mb-1">Challenge</p>
                                        <p className="text-xs text-zinc-300">{project.caseStudy.challenge}</p>
                                    </div>
                                    <div className="border-l-2 border-indigo-500/30 pl-4 py-1">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 mb-1">Solution</p>
                                        <p className="text-xs text-zinc-300">{project.caseStudy.solution}</p>
                                    </div>
                                    <div className="border-l-2 border-teal-500/30 pl-4 py-1">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-teal-500 mb-1">Result</p>
                                        <p className="text-xs text-zinc-300 font-medium">{project.caseStudy.result}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-300 text-xs font-medium border border-zinc-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto px-8 pb-0 flex items-end justify-center perspective-[2000px]">
                                <div className="relative w-full aspect-video rounded-t-xl overflow-hidden border border-zinc-800 shadow-2xl transition-transform duration-700 group-hover:rotate-x-12 group-hover:scale-105">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} dashboard`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Zap className="h-6 w-6 text-emerald-500 fill-emerald-500/20" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
