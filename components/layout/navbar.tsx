"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Terminal, Activity, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

    return (
        <>
            <motion.nav
                style={{ backgroundColor, borderBottom: `1px solid ${isScrolled || isMenuOpen ? "rgba(255, 255, 255, 0.08)" : "transparent"}` }}
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
                        {navItems.slice(1).map((item) => (
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
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600"></span>
                            </div>
                            <Button variant="secondary" href="/keshav-sharma-resume.pdf" download="Keshav_Sharma_Resume.pdf" className="rounded-xl px-5 py-2.5 h-auto text-[10px] tracking-[0.2em] shadow-none border border-white/10">
                                Resume
                            </Button>
                        </div>
                    </div>

                    <div className="lg:hidden flex items-center gap-4">
                        <Button
                            variant="glass"
                            className="h-10 px-4 rounded-xl text-[10px] font-black tracking-widest uppercase border border-white/10"
                            href="/keshav-sharma-resume.pdf"
                            download="Keshav_Sharma_Resume.pdf"
                        >
                            Resume
                        </Button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2.5 h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white"
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-20 left-4 right-4 z-[99] rounded-[2rem] border border-white/10 bg-zinc-950/95 p-8 pb-12 backdrop-blur-3xl lg:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navItems.map((item, idx) => (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="group flex flex-col items-center gap-2"
                                >
                                    <span className={`text-[12px] font-bold uppercase tracking-[0.4em] transition-colors ${item === "Home" ? "text-emerald-500" : "text-zinc-500 group-hover:text-emerald-400"}`}>
                                        {item}
                                    </span>
                                    {item === "Home" && (
                                        <div className="h-0.5 w-8 bg-emerald-500" />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
