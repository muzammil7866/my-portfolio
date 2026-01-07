import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { PROJECTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Show only first 3 projects as featured
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <SkillsSection />

      <section className="py-24 container px-4 mx-auto">
        <div className="flex justify-between items-end mb-12">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Button variant="outline" asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Build Something Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            I&apos;m always looking for new challenges and opportunities to apply AI to real-world problems.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
