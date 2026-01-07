"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";

export default function DemoPage() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleRun = () => {
        if (!input) return;
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setOutput(`Analysis for "${input}":\n\nSentiment: Positive (0.98)\nKeywords: AI, Future, Technology\n\nThis is a simulated response from the AI model.`);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="container px-4 mx-auto py-16 max-w-3xl">
            <SectionHeader
                title="Live AI Demo"
                subtitle="Test my latest NLP model in real-time. (Currently running in Mock Mode)"
                align="center"
                className="mb-12"
            />

            <div className="grid gap-8 p-6 border rounded-xl bg-card shadow-sm">
                <div className="space-y-4">
                    <label className="text-sm font-medium">Input Text</label>
                    <textarea
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Type something here to analyze..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>

                <div className="flex justify-end">
                    <Button onClick={handleRun} disabled={isLoading || !input}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                <Sparkles className="mr-2 h-4 w-4" />
                                Analyze Text
                            </>
                        )}
                    </Button>
                </div>

                {output && (
                    <div className="space-y-2 pt-4 border-t">
                        <label className="text-sm font-medium">Model Output</label>
                        <div className="p-4 rounded-md bg-muted/50 font-mono text-sm whitespace-pre-wrap border border-border">
                            {output}
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-12 text-center text-sm text-muted-foreground">
                <p>
                    Architecture: This demo acts as a frontend for a FastAPI backend serving a PyTorch model.
                    <br />
                    Connect your API endpoint in <code>app/demo/page.tsx</code> to go live.
                </p>
            </div>
        </div>
    );
}
