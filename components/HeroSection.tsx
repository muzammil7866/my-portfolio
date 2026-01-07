"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative pt-20 pb-20 lg:pt-32 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center lg:text-left z-10"
                    >
                        <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                            <Terminal className="w-4 h-4 mr-2" />
                            AI Engineer | Gen AI | NLP | RAG Systems
                        </div>

                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Empowering Innovation with <br />
                            <span className="text-primary">AI-Powered Solutions</span>
                        </h1>

                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            I am a <strong>4× Gold Medalist</strong> and AI Engineer with 3+ years of experience specializing in designing intelligent systems, from LLMs to Recommender Systems. I automate pipelines and enable data-powered decision-making.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20" asChild>
                                <Link href="/projects">
                                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all border-primary/20" asChild>
                                <Link href="/resume.pdf" target="_blank">
                                    <Download className="ml-2 h-4 w-4" /> Download Resume
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 relative z-10 w-full max-w-[500px]"
                    >
                        <div className="relative aspect-square">
                            {/* Abstract decorative blobs */}
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

                            {/* Main Image Container */}
                            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm aspect-[4/5]">
                                <Image
                                    src="/profile.jpg"
                                    alt="Profile Picture"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Gradient Mesh */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
            </div>
        </section>
    );
}
