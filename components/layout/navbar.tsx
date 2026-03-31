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
            className="fixed top-0 left-0 right-0 z-[100] flex h-20 items-center px-6 transition-all duration-500 backdrop-blur-2xl lg:h-24 lg:px-10"
        >
            <div className="container mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="flex items-center gap-3 text-xl font-bold tracking-tighter text-white group relative shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all group-hover:rotate-12 group-hover:scale-110 lg:h-12 lg:w-12 lg:rounded-2xl">
                        <Terminal className="h-5 w-5 lg:h-6 lg:w-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="tracking-[0.2em] text-xs font-black uppercase text-white lg:text-sm">Keshav<span className="text-emerald-500"></span></span>
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

                <div className="lg:hidden flex items-center gap-4">
                    <Button variant="glass" className="h-10 px-4 rounded-xl text-[10px] tracking-widest uppercase border border-white/10" href="/keshav-sharma-resume.pdf" download="Keshav_Sharma_Resume.pdf">
                        Resume
                    </Button>
                    <Button variant="glass" className="p-2.5 h-10 w-10 rounded-xl border border-white/10">
                        <Terminal className="h-4 w-4" />
                    </Button>
                </div>

            </div>
        </motion.nav>
    );
}
