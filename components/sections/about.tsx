"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data/portfolio";
import { Sparkles, GraduationCap, MapPin, BadgeCheck } from "lucide-react";

const SkillBadge = ({ skill, variant = "emerald" }: { skill: string, variant: string }) => (
    <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-white/10 transition-all hover:bg-zinc-900 px-6 group/skill">
        <div className={`h-2.5 w-2.5 rounded-full bg-${variant}-500/50 group-hover/skill:bg-${variant}-400 group-hover/skill:shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all`} />
        <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 group-hover/skill:text-zinc-200 transition-colors">{skill}</span>
    </div>
);

export function About() {
    const { education, skills } = portfolioData;

    return (
        <section id="about" className="bg-zinc-950 py-64 px-6 relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(16,185,129,0.03),transparent_100%)] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
                    <div className="space-y-16">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400"
                            >
                                Intelligence Network
                            </motion.div>
                            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-4 uppercase">Academic <br /> <span className="text-zinc-600">Foundation</span></h2>
                        </div>

                        <div className="space-y-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative rounded-[2rem] bg-gradient-to-br from-zinc-900 to-black p-10 border border-white/5 group overflow-hidden"
                            >
                                <div className="absolute -top-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-emerald-500/5 blur-[80px]" />
                                <div className="flex items-start gap-6 relative z-10">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/[0.03] text-emerald-400 border border-white/5">
                                        <GraduationCap className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2">{education.degree}</p>
                                        <h4 className="text-2xl font-black text-white tracking-tight leading-tight mb-3">
                                            {education.school}
                                        </h4>
                                        <p className="text-zinc-500 text-sm font-medium tracking-tight bg-zinc-950 inline-block px-3 py-1 rounded-lg border border-zinc-900">CGPA: {education.cgpa}</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-center gap-6 px-10"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-emerald-500/60 border border-zinc-800 animate-pulse">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-1">Current Intelligence</p>
                                    <p className="text-lg font-bold text-zinc-300 tracking-tight">{education.location}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-3xl font-black text-white tracking-tighter mb-8 uppercase flex items-center gap-4">
                                    <div className="h-6 w-1 bg-emerald-500 rounded-full" />
                                    Core Tech
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {skills.languages.map(skill => (
                                        <SkillBadge key={skill} skill={skill} variant="emerald" />
                                    ))}
                                    {skills.frameworks.map(skill => (
                                        <SkillBadge key={skill} skill={skill} variant="indigo" />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-black text-white tracking-tighter mb-8 uppercase flex items-center gap-4">
                                    <div className="h-6 w-1 bg-indigo-500 rounded-full" />
                                    Specialized
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {skills.specialized.map(skill => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all group/spec"
                                        >
                                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 group-hover/spec:bg-emerald-500 group-hover/spec:text-black transition-all">
                                                <BadgeCheck className="h-4 w-4" />
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover/spec:text-white transition-colors">{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
