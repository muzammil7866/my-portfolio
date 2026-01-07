import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsPage() {
    return (
        <div className="container px-4 mx-auto py-16">
            <SectionHeader
                title="All Projects"
                subtitle="A complete list of my technical projects, featuring AI models, full-stack apps, and data systems."
                align="center"
                className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
}
