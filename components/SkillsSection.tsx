import { SectionHeader } from "@/components/SectionHeader";
import { SKILLS, SKILL_PROFICIENCY } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";
import { SkillBar } from "./SkillBar";
import { motion } from "framer-motion";

export function SkillsSection() {
    // Featured skills with proficiency levels (sorted by proficiency, top 6)
    const featuredSkills = Object.entries(SKILL_PROFICIENCY)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 6)
        .map(([name, level]) => ({ name, level }));

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container px-4 mx-auto">
                <SectionHeader
                    title="Technical Skills"
                    subtitle="A comprehensive toolkit for building end-to-end AI solutions."
                    align="center"
                    className="mb-16"
                />

                {/* Featured Skills with Proficiency Sliders */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-20 p-8 bg-background/50 rounded-2xl border border-border/50 backdrop-blur-sm"
                >
                    <h3 className="text-lg font-semibold mb-8 text-center">Core Expertise Areas</h3>
                    <div className="space-y-6">
                        {featuredSkills.map((skill, idx) => (
                            <SkillBar key={skill.name} skill={skill} delay={idx * 0.1} />
                        ))}
                    </div>
                </motion.div>

                {/* Full Skills Grid */}
                <div className="space-y-12 max-w-4xl mx-auto">
                    {Object.entries(SKILLS).map(([category, skills], categoryIdx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: categoryIdx * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <span className="bg-primary/10 w-8 h-1 rounded-full"></span>
                                {category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {skills.map((skill, skillIdx) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border shadow-sm hover:border-primary/50 transition-all hover:shadow-md cursor-pointer group"
                                    >
                                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm font-medium">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
