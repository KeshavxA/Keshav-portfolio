"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline" | "glass";
    className?: string;
    download?: string;
}

export function Button({ children, href, onClick, variant = "primary", className = "", download }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 text-sm font-bold uppercase tracking-widest transition-all focus:outline-none";

    const variants = {
        primary: "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400 hover:scale-[1.03] active:scale-[0.97]",
        secondary: "bg-white text-black hover:bg-zinc-200 hover:scale-[1.03] active:scale-[0.97]",
        outline: "border border-zinc-800 bg-zinc-900/50 text-white hover:bg-zinc-800 hover:scale-[1.03] active:scale-[0.97] backdrop-blur-md",
        glass: "bg-white/10 text-white border border-white/5 backdrop-blur-xl hover:bg-white/20 hover:scale-[1.03] active:scale-[0.97]"
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        if (download) {
            return (
                <motion.a href={href} download={download} className={combinedStyles}>
                    {children}
                </motion.a>
            );
        }
        return (
            <Link href={href}>
                <motion.span className={combinedStyles}>
                    {children}
                </motion.span>
            </Link>
        );
    }

    return (
        <motion.button onClick={onClick} className={combinedStyles}>
            {children}
        </motion.button>
    );
}
