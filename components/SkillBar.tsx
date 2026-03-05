"use client";

import { motion } from "framer-motion";

interface SkillItem {
    name: string;
    level: number; // 0-100
}

export function SkillBar({ skill, delay = 0 }: { skill: SkillItem; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="space-y-2"
        >
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                />
            </div>
        </motion.div>
    );
}
