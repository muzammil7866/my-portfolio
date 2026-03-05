"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";

interface Project {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    demoUrl?: string;
    image?: string;
}

interface ProjectSliderProps {
    projects: Project[];
    itemsPerSlide?: number;
}

export function ProjectSlider({ projects, itemsPerSlide = 3 }: ProjectSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const totalSlides = Math.ceil(projects.length / itemsPerSlide);

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            zIndex: 0,
            x: dir < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + totalSlides) % totalSlides);
    };

    const displayedProjects = projects.slice(
        currentIndex * itemsPerSlide,
        (currentIndex + 1) * itemsPerSlide
    );

    // Auto-advance slides every 8 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 8000);
        return () => clearInterval(timer);
    }, [totalSlides]);

    return (
        <div className="space-y-6">
            <div className="relative">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {displayedProjects.map((project, idx) => (
                            <motion.div
                                key={`${currentIndex}-${idx}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(-1)}
                    className="rounded-full hover:border-primary"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <motion.button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            animate={{
                                width: i === currentIndex ? 32 : 8,
                            }}
                            transition={{ duration: 0.3 }}
                            className={`h-2 rounded-full cursor-pointer transition-colors ${
                                i === currentIndex ? "bg-primary" : "bg-muted-foreground"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(1)}
                    className="rounded-full hover:border-primary"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            {/* Slide Counter */}
            <div className="text-center text-sm text-muted-foreground">
                Slide {currentIndex + 1} of {totalSlides}
            </div>
        </div>
    );
}
