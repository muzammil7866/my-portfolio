"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
}

export function SectionHeader({
    title,
    subtitle,
    className,
    align = "left",
}: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cn(
                "space-y-2 mb-12",
                align === "center" ? "text-center" : "text-left",
                className
            )}
        >
            <motion.h2 
                initial={{ opacity: 0, x: align === "center" ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground text-lg max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    );
}
