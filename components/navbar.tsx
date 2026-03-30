"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 50],
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
    );

    const borderBottom = useTransform(
        scrollY,
        [0, 50],
        ["rgba(39, 39, 42, 0)", "rgba(39, 39, 42, 0.4)"]
    );

    useEffect(() => {
        const updateScrolled = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", updateScrolled);
        return () => window.removeEventListener("scroll", updateScrolled);
    }, []);

    return (
        <motion.nav
            style={{ backgroundColor, borderBottom: `1px solid ${isScrolled ? "rgba(255, 255, 255, 0.08)" : "transparent"}` }}
            className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center px-6 transition-all duration-500 backdrop-blur-xl"
        >
            <div className="container mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="flex items-center gap-3 text-xl font-bold tracking-tighter text-white group">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-transform group-hover:rotate-12">
                        <Sparkles className="h-5 w-5" />
                    </div>
                    <span className="tracking-widest text-sm font-black uppercase">Keshav<span className="text-emerald-500">.</span>Dev</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {["Projects", "Experience", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                        >
                            {item}
                        </Link>
                    ))}
                    <a
                        href="/keshav-sharma-resume.pdf"
                        download="Keshav_Sharma_Resume.pdf"
                        className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
                    >
                        Resume
                    </a>
                </div>

            </div>
        </motion.nav>
    );
}
