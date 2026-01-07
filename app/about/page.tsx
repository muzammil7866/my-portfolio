"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container px-4 mx-auto py-16">
            <SectionHeader
                title="About Me"
                subtitle="AI Engineer | 3+ Years Technical Experience | 4× Gold Medalist"
                align="center"
                className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        I am an <strong>Artificial Intelligence Engineer</strong> with <strong>3+ years of technical experience</strong> and nearly 2 years of successful freelancing on platforms like Fiverr and Upwork. I specialize in <strong>designing intelligent systems</strong>, automating pipelines, and enabling data-powered decision-making across diverse domains.
                    </p>
                    <p>
                        My academic excellence (<strong>4× Gold Medals, 2× Dean’s List</strong>) is complemented by multiple certifications in AI, Machine Learning, and Data Science.
                    </p>
                    <p>
                        Beyond technical expertise, I bring <strong>7+ years of combined technical and leadership experience</strong>, including mentoring teams and driving projects to successful outcomes. Recognized for productivity and precision (top 5% global typist, 89 WPM), I thrive under pressure while maintaining clarity and quality.
                    </p>

                    <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 mt-8">
                        <h3 className="text-xl font-bold text-foreground mb-2">My Mission</h3>
                        <p className="italic">
                            "To contribute to forward-thinking organizations by delivering impactful AI solutions, fostering collaboration, and staying at the forefront of innovation."
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-bold">Unlocking Value with AI</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    <span>Languages: Python, NumPy, Pandas, Scikit-learn</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    <span>Deep Learning: TensorFlow, PyTorch, LangChain</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    <span>Ops & Tools: Docker, Git, MLflow, FastAPI</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    <span>Cloud: AWS, GCP, Azure</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-secondary/50 text-center">
                            <div className="text-3xl font-bold text-primary mb-1">4x</div>
                            <div className="text-sm text-muted-foreground">Gold Medalist</div>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/50 text-center">
                            <div className="text-3xl font-bold text-primary mb-1">200+</div>
                            <div className="text-sm text-muted-foreground">Projects Delivered</div>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/50 text-center">
                            <div className="text-3xl font-bold text-primary mb-1">89</div>
                            <div className="text-sm text-muted-foreground">WPM (Top 5%)</div>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/50 text-center">
                            <div className="text-3xl font-bold text-primary mb-1">3+</div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-center">
                        <Button asChild size="lg" className="rounded-full w-full">
                            <Link href="/contact">Let&apos;s Innovate Together</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
