"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimatedStat } from "@/components/AnimatedStats";
import Link from "next/link";
import { Calendar, MapPin, Building2, GraduationCap, Trophy, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="container px-4 mx-auto py-16 space-y-24">
            {/* Introduction Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <SectionHeader
                    title="About Me"
                    subtitle="Founding AI Engineer | Top-Ranked AI Student"
                    align="center"
                    className="mb-16"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                    >
                        <p>
                            I bridge the gap between academic research and production-grade software. Currently completing my BS in AI as the <strong>Top-Ranked Student (Rank 1/Cohort, 4x Gold Medalist)</strong>, I simultaneously serve as the Founding AI Engineer at Entracloud.
                        </p>
                        <p>
                            My focus is on <strong>Engineering, not just Modeling</strong>. While I have a deep grasp of algorithms (3D CNNs, Transformers, MIL), my core strength lies in building the infrastructure to serve them—wrapping models in FastAPI, orchestrating pipelines with Airflow, and deploying on AWS.
                        </p>
                        <p>
                            I have spent the last few years moving beyond "making it work" to "making it scale." As I approach graduation (2026), I am looking for a challenging AI Engineering role where I can solve complex problems and ship code that matters.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 bg-primary/5 rounded-2xl border border-primary/10 mt-8"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-2">My Mission</h3>
                            <p className="italic">
                                "To build scalable, production-ready AI systems that solve real-world problems, ensuring that intelligence is not just theoretical but impactful."
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <AnimatedStat value={4} suffix="x" label="Gold Medals" />
                            <AnimatedStat value={1} label="Rank in Cohort" />
                            <AnimatedStat value={200} suffix="+" label="AI Solutions Delivered" />
                            <AnimatedStat value={40} suffix="%" label="Latency Reduction" />
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="pt-4 flex justify-center"
                        >
                            <Button asChild size="lg" className="rounded-full w-full">
                                <Link href="/contact">Let&apos;s Innovate Together</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Experience Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <SectionHeader
                    title="Experience"
                    subtitle="My professional journey in the AI industry."
                    className="mb-12"
                />
                <div className="grid gap-6">
                    {/* Experience Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card>
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <CardTitle className="text-xl">Founding AI Engineer</CardTitle>
                                    <CardDescription className="text-base font-medium text-primary mt-1">
                                        Entracloud
                                    </CardDescription>
                                </div>
                                <div className="text-sm text-muted-foreground flex flex-col md:flex-row gap-2 md:gap-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Jul 2024 -- Present</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Faisalabad, Pakistan</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Architected production-grade AI systems, wrapping ML models in FastAPI services for seamless cloud integration.</li>
                                <li>Optimized inference infrastructure, reducing latency by 40% for real-time user applications.</li>
                                <li>Led the translation of business requirements into technical AI specifications and scalable software solutions.</li>
                            </ul>
                        </CardContent>
                    </Card>
                    </motion.div>

                    {/* Experience Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                    <Card>
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <CardTitle className="text-xl">Teaching Assistant</CardTitle>
                                    <CardDescription className="text-base font-medium text-primary mt-1">
                                        FAST (NUCES)
                                    </CardDescription>
                                </div>
                                <div className="text-sm text-muted-foreground flex flex-col md:flex-row gap-2 md:gap-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Jan 2025 -- Jan 2026</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Faisalabad, Pakistan</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Assisted in teaching Deep Learning, Programming for AI, and Database Systems to 100+ undergraduates.</li>
                                <li>Mentored students on software engineering best practices, including API design, Dockerization, and Git workflows.</li>
                            </ul>
                        </CardContent>
                    </Card>
                    </motion.div>

                    {/* Experience Item 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                    <Card>
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <CardTitle className="text-xl">NLP Intern</CardTitle>
                                    <CardDescription className="text-base font-medium text-primary mt-1">
                                        Elevvo Pathways
                                    </CardDescription>
                                </div>
                                <div className="text-sm text-muted-foreground flex flex-col md:flex-row gap-2 md:gap-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Jul 2025 -- Aug 2025</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Remote</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Developed an NLP text classification pipeline using Python and Scikit-learn to categorize unstructured text data.</li>
                                <li>Implemented data preprocessing techniques (tokenization, lemmatization) to improve model inference accuracy.</li>
                            </ul>
                        </CardContent>
                    </Card>
                    </motion.div>

                    {/* Experience Item 4 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                    <Card>
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <CardTitle className="text-xl">AI Solutions Engineer</CardTitle>
                                    <CardDescription className="text-base font-medium text-primary mt-1">
                                        Moonbridge Systems
                                    </CardDescription>
                                </div>
                                <div className="text-sm text-muted-foreground flex flex-col md:flex-row gap-2 md:gap-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Nov 2023 -- Jun 2024</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Remote</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li><strong>Delivered 200+ AI solutions</strong> for global clients, serving as the lead engineer for high-volume agency accounts.</li>
                                <li>Developed custom RAG pipelines and chatbot agents using LangChain and OpenAI, maintaining a 5-star success rate.</li>
                                <li>Managed full lifecycle deployment of AI microservices, handling client requirements from concept to production.</li>
                            </ul>
                        </CardContent>
                    </Card>
                    </motion.div>
                </div>
            </motion.section>

            {/* Education & Achievements Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
                {/* Education */}
                <section>
                    <SectionHeader title="Education" subtitle="Academic background." className="mb-8" />
                    <Card>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div>
                                    <CardTitle className="text-lg">Bachelor of Science in Artificial Intelligence</CardTitle>
                                    <CardDescription className="text-base mt-1">
                                        FAST - National University of Computer & Emerging Sciences
                                    </CardDescription>
                                </div>
                                <GraduationCap className="h-8 w-8 text-primary/50" />
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" /> 2022 -- Present
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">CGPA:</span> 3.39 / 4.00 (Ranked 1st in Cohort)
                                </div>
                                <div className="p-3 bg-secondary/50 rounded-lg text-sm">
                                    <strong>Honors:</strong> 4× Gold Medals, 1× Silver Medal, 3× Dean&apos;s List
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Achievements */}
                <section>
                    <SectionHeader title="Achievements" subtitle="Recognition and certifications." className="mb-8" />
                    <Card className="h-full">
                        <CardContent className="pt-6">
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex gap-3">
                                    <Trophy className="w-5 h-5 text-yellow-500 shrink-0" />
                                    <span>
                                        <strong>AWS Cloud Solutions Architect Track:</strong> Completed comprehensive 5-course certification series on cloud infrastructure.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <Trophy className="w-5 h-5 text-yellow-500 shrink-0" />
                                    <span>
                                        <strong>Reply AI Coding Contest:</strong> Secured <strong>Top 29% Global Rank</strong> in an algorithmic problem solving challenge.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <Award className="w-5 h-5 text-primary shrink-0" />
                                    <span>
                                        <strong>Technical Certifications:</strong> Generative AI & LLMs (Duke Univ), Advanced SQL, Flask, Prompt Engineering.
                                    </span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>
            </motion.div>

            {/* Certifications Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <SectionHeader 
                    title="Certifications" 
                    subtitle="Core AI and infrastructure credentials, focused on production-grade engineering."
                    className="mb-12" 
                />
                <div className="grid gap-6">
                    {/* Certification 1 - GenAI - How LLMs Work */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        viewport={{ once: true }}
                    >
                    <Card>
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex-1">
                                    <CardTitle className="text-lg">GenAI - How LLMs Work</CardTitle>
                                    <CardDescription className="text-base text-primary mt-2">
                                        Duke University
                                    </CardDescription>
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center gap-1 whitespace-nowrap">
                                    <Calendar className="w-4 h-4" /> Dec 2024
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                                <strong>Credential ID:</strong> Q92AMX8SBD1Z
                            </p>
                            <p className="text-sm text-muted-foreground">
                                <strong>Skills:</strong> Generative AI · Large Language Models
                            </p>
                            <Link 
                                href="#" 
                                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                                title="Add credential URL"
                            >
                                View credential <ExternalLink className="w-4 h-4" />
                            </Link>
                        </CardContent>
                    </Card>
                    </motion.div>

                    {/* Certification 2 - Prompt Engineering */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                    <Card>
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex-1">
                                    <CardTitle className="text-lg">Prompt Engineering</CardTitle>
                                    <CardDescription className="text-base text-primary mt-2">
                                        freeCodeCamp
                                    </CardDescription>
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center gap-1 whitespace-nowrap">
                                    <Calendar className="w-4 h-4" /> Apr 2024
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                                <strong>Skills:</strong> Artificial Intelligence (AI) · Large Language Models (LLM) · Prompt Engineering
                            </p>
                            <Link 
                                href="#" 
                                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                                title="Add credential URL"
                            >
                                View credential <ExternalLink className="w-4 h-4" />
                            </Link>
                        </CardContent>
                    </Card>
                    </motion.div>

                    {/* Certification 3 - Creating Web App with Python and Flask */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                    <Card>
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex-1">
                                    <CardTitle className="text-lg">Creating Web App with Python and Flask</CardTitle>
                                    <CardDescription className="text-base text-primary mt-2">
                                        Coursera
                                    </CardDescription>
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center gap-1 whitespace-nowrap">
                                    <Calendar className="w-4 h-4" /> Aug 2023
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                                <strong>Credential ID:</strong> FDVK5863MFK8
                            </p>
                            <p className="text-sm text-muted-foreground">
                                <strong>Skills:</strong> Flask · Web Development · REST APIs · Python · Back-End Web Development
                            </p>
                            <Link 
                                href="#" 
                                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                                title="Add credential URL"
                            >
                                View credential <ExternalLink className="w-4 h-4" />
                            </Link>
                        </CardContent>
                    </Card>
                    </motion.div>

                    {/* Certification 4 - Relational Database and SQL */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                    <Card>
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex-1">
                                    <CardTitle className="text-lg">Relational Database and SQL</CardTitle>
                                    <CardDescription className="text-base text-primary mt-2">
                                        Coursera
                                    </CardDescription>
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center gap-1 whitespace-nowrap">
                                    <Calendar className="w-4 h-4" /> Aug 2023
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                                <strong>Credential ID:</strong> USXDWYK8CD5L
                            </p>
                            <p className="text-sm text-muted-foreground">
                                <strong>Skills:</strong> SQL · Relational Databases · Data Modeling · Database Design
                            </p>
                            <Link 
                                href="#" 
                                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                                title="Add credential URL"
                            >
                                View credential <ExternalLink className="w-4 h-4" />
                            </Link>
                        </CardContent>
                    </Card>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}
