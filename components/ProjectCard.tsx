import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// I'll implement a simple Badge component inside here or create a separate one. 
// Let's create a separate Badge component quickly or just inline styles for now to keep file count low? 
// Plan said UI/Button.tsx, UI/Card.tsx. Plan did not explicitly say Badge. 
// I'll create a simple inline badge or a Badge component in UI if needed. 
// Let's create `components/ui/badge.tsx` afterwards, or simpler, just use formatted spans.
// Reusable components are better. I'll stick to <span> with classes for now to be minimal.

interface Project {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    demoUrl?: string;
    image?: string; // Optional image
}

interface ProjectCardProps {
    project: Project;
    className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <Card className={cn("flex flex-col h-full hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 overflow-hidden group", className)}>
            <div className="relative w-full h-48 bg-muted overflow-hidden">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary/50 text-muted-foreground">
                        <span className="text-sm">No Image</span>
                    </div>
                )}
            </div>
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <CardDescription className="text-base">
                    {project.description}
                </CardDescription>
            </CardContent>
            <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                    </Link>
                </Button>
                {project.demoUrl && (
                    <Button size="sm" asChild>
                        <Link href={project.demoUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
