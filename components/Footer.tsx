import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} AI Engineer. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <Link
                            href="https://github.com/muzammil7866"
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/muzammilbinsohail/"
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Twitter className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
