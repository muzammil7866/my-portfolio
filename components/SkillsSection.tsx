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
                <div className="space-y-12 max-w-4xl mx-auto">
                    {Object.entries(SKILLS).map(([category, skills]) => (
                        <div key={category}>
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <span className="bg-primary/10 w-8 h-1 rounded-full"></span>
                                {category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border shadow-sm hover:border-primary/50 transition-all hover:shadow-md"
                                    >
                                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                        <span className="text-sm font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
