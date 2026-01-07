import { SectionHeader } from "@/components/SectionHeader";
import { SKILLS } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export function SkillsSection() {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="container px-4 mx-auto">
                <SectionHeader
                    title="Technical Skills"
                    subtitle="A comprehensive toolkit for building end-to-end AI solutions."
                    align="center"
                    className="mb-16"
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {SKILLS.map((skill) => (
                        <div
                            key={skill}
                            className="flex items-center space-x-3 p-4 bg-background rounded-lg border border-border shadow-sm hover:border-primary/50 transition-colors"
                        >
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="font-medium">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
