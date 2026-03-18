"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

interface Testimonial {
    rank: number;
    title: string;
    quote: string;
    author: string;
    role: string;
}

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const testimonialVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir < 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (testimonials.length <= 1) return;

        const timer = setInterval(() => {
            paginate(1);
        }, 9000);

        return () => clearInterval(timer);
    }, [testimonials.length]);

    if (!testimonials.length) {
        return null;
    }

    const current = testimonials[currentIndex];

    return (
        <section className="py-24 bg-secondary/20">
            <div className="container px-4 mx-auto">
                <SectionHeader
                    title="What People Say"
                    subtitle="Top endorsements from collaborators, mentors, and clients that reflect my work across LLM systems, MLOps, and production-focused engineering."
                    align="center"
                />

                <div className="max-w-4xl mx-auto">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={testimonialVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.45, ease: "easeInOut" }}
                        >
                            <Card className="border-primary/15 shadow-lg">
                                <CardContent className="p-6 sm:p-10">
                                    <Quote className="h-8 w-8 text-primary/60 mb-4" />

                                    <blockquote className="text-base sm:text-lg leading-relaxed text-foreground">
                                        "{current.quote}"
                                    </blockquote>

                                    <div className="mt-8 pt-6 border-t border-border/60">
                                        <p className="font-semibold text-foreground">{current.author}</p>
                                        <p className="text-sm text-muted-foreground">{current.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    <div className="mt-8 flex items-center justify-between gap-4">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => paginate(-1)}
                            className="rounded-full"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {testimonials.map((item, index) => (
                                <button
                                    key={item.rank}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all ${
                                        index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/50"
                                    }`}
                                    aria-label={`Go to ranked testimonial ${item.rank}`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => paginate(1)}
                            className="rounded-full"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
