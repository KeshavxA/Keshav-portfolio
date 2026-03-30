"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Terminal, Activity } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 50],
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.85)"]
    );

    useEffect(() => {
        const updateScrolled = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", updateScrolled);
        return () => window.removeEventListener("scroll", updateScrolled);
    }, []);

    return (
        <motion.nav
            style={{ backgroundColor, borderBottom: `1px solid ${isScrolled ? "rgba(255, 255, 255, 0.08)" : "transparent"}` }}
            className="fixed top-0 left-0 right-0 z-[100] flex h-24 items-center px-10 transition-all duration-500 backdrop-blur-2xl"
        >
            <div className="container mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="flex items-center gap-4 text-xl font-bold tracking-tighter text-white group relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all group-hover:rotate-12 group-hover:scale-110">
                        <Terminal className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="tracking-[0.4em] text-[10px] font-black uppercase text-emerald-400 opacity-60">Protagonist</span>
                        <span className="tracking-[0.2em] text-sm font-black uppercase text-white">Keshav<span className="text-emerald-500">.</span>Dev</span>
                    </div>
                </Link>

                <div className="hidden items-center gap-12 lg:flex">
                    {["Projects", "Experience", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="group relative flex flex-col items-center gap-1"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-emerald-400 transition-colors">{item}</span>
                            <div className="h-0.5 w-0 bg-emerald-500 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 border-l border-zinc-800 pl-12">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-900 group">
                            <Activity className="h-3 w-3 text-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Online</span>
                        </div>
                        <Button variant="secondary" href="/keshav-sharma-resume.pdf" download="Keshav_Sharma_Resume.pdf" className="rounded-xl px-5 py-2.5 h-auto text-[10px] tracking-[0.2em] shadow-none border border-white/10">
                            Resume
                        </Button>
                    </div>
                </div>

                <div className="lg:hidden">
                    <Button variant="glass" className="p-3 h-12 w-12 rounded-2xl">
                        <Terminal className="h-5 w-5" />
                    </Button>
                </div>

            </div>
        </motion.nav>
    );
}
