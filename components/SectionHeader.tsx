import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
}

export function SectionHeader({
    title,
    subtitle,
    className,
    align = "left",
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "space-y-2 mb-12",
                align === "center" ? "text-center" : "text-left",
                className
            )}
        >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
