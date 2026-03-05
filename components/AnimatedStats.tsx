"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Stat {
    label: string;
    value: number;
    suffix?: string;
}

export function AnimatedStat({ value, suffix = "", label }: Stat) {
    const [displayValue, setDisplayValue] = useState(0);
    const nodeRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 2000;
                    const steps = 50;
                    const increment = value / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= value) {
                            setDisplayValue(value);
                            clearInterval(timer);
                        } else {
                            setDisplayValue(Math.floor(current));
                        }
                    }, duration / steps);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (nodeRef.current) {
            observer.observe(nodeRef.current);
        }

        return () => observer.disconnect();
    }, [value]);

    return (
        <motion.div
            ref={nodeRef}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 rounded-xl bg-secondary/50 text-center"
        >
            <div className="text-3xl font-bold text-primary mb-1">
                {displayValue}
                {suffix}
            </div>
            <div className="text-sm text-muted-foreground">{label}</div>
        </motion.div>
    );
}
