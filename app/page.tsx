"use client";

import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectSlider } from "@/components/ProjectSlider";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PROJECTS, TESTIMONIALS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <SkillsSection />

      <section className="py-24 container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <SectionHeader
            title="Featured Projects"
            subtitle="A selection of my recent work in AI and Software Engineering."
            className="mb-0"
          />
          <Button variant="ghost" className="hidden sm:flex" asChild>
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <ProjectSlider projects={PROJECTS} itemsPerSlide={3} />

        <div className="mt-12 text-center sm:hidden">
          <Button variant="outline" asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <TestimonialsSection testimonials={TESTIMONIALS} />

      <section className="py-24 bg-secondary/30">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Build Something Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              I&apos;m always looking for new challenges and opportunities to apply AI to real-world problems.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
