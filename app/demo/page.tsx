"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Loader2, Search, Database, FileText, Brain, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Simulation Phases
type Phase = "idle" | "retrieving" | "graph" | "synthesizing" | "complete";

interface KnowledgeNode {
    id: string;
    label: string;
    type: "concept" | "entity" | "event";
    x: number;
    y: number;
}

interface KnowledgeEdge {
    source: string;
    target: string;
    label: string;
}

export default function DemoPage() {
    const [query, setQuery] = useState("");
    const [phase, setPhase] = useState<Phase>("idle");
    const [logs, setLogs] = useState<string[]>([]);
    const [streamedResponse, setStreamedResponse] = useState("");

    // Dynamic Mock Data
    const [graphData, setGraphData] = useState<{ nodes: KnowledgeNode[], edges: KnowledgeEdge[] }>({
        nodes: [
            { id: "1", label: "Transformer", type: "concept", x: 50, y: 50 },
            { id: "2", label: "Attention Mechanism", type: "concept", x: 150, y: 120 },
            { id: "3", label: "Google", type: "entity", x: 250, y: 40 },
            { id: "4", label: "2017", type: "event", x: 200, y: 200 },
            { id: "5", label: "BERT", type: "entity", x: 50, y: 180 },
        ],
        edges: [
            { source: "3", target: "1", label: "introduced" },
            { source: "1", target: "2", label: "uses" },
            { source: "3", target: "4", label: "published in" },
            { source: "5", target: "1", label: "based on" },
        ]
    });

    // Knowledge Base Simulation
    const KNOWLEDGE_BASE = {
        "transformer": {
            text: "Transformers, introduced in 'Attention Is All You Need' (2017), rely on self-attention mechanisms to process sequential data in parallel. This architecture eliminated recurrence/convolution, enabling massive scalability for LLMs like BERT and GPT.",
            nodes: [
                { id: "1", label: "Transformer", type: "concept", x: 50, y: 50 },
                { id: "2", label: "Self-Attention", type: "concept", x: 150, y: 120 },
                { id: "3", label: "Parallelization", type: "event", x: 250, y: 40 },
                { id: "4", label: "2017", type: "event", x: 200, y: 200 },
                { id: "5", label: "LLMs", type: "entity", x: 50, y: 180 },
            ] as KnowledgeNode[],
            edges: [
                { source: "1", target: "2", label: "uses" },
                { source: "1", target: "3", label: "enables" },
                { source: "1", target: "4", label: "published" },
                { source: "5", target: "1", label: "based on" },
            ] as KnowledgeEdge[]
        },
        "rag": {
            text: "Retrieval-Augmented Generation (RAG) enhances LLMs by retrieving relevant documents from a vector database before generation. This reduces hallucinations and provides up-to-date knowledge without retraining the model.",
            nodes: [
                { id: "1", label: "User Query", type: "event", x: 50, y: 50 },
                { id: "2", label: "Vector DB", type: "entity", x: 150, y: 120 },
                { id: "3", label: "Context", type: "concept", x: 250, y: 40 },
                { id: "4", label: "LLM", type: "entity", x: 200, y: 200 },
                { id: "5", label: "Answer", type: "event", x: 50, y: 180 },
            ] as KnowledgeNode[],
            edges: [
                { source: "1", target: "2", label: "searches" },
                { source: "2", target: "3", label: "retrieves" },
                { source: "3", target: "4", label: "feeds" },
                { source: "4", target: "5", label: "generates" },
            ] as KnowledgeEdge[]
        },
        "cnn": {
            text: "Convolutional Neural Networks (CNNs) specialize in processing grid-like data such as images. They use convolutional layers to automatically detect spatial hierarchies of features, from edges to complex objects.",
            nodes: [
                { id: "1", label: "Input Image", type: "entity", x: 50, y: 50 },
                { id: "2", label: "Convolution", type: "concept", x: 150, y: 120 },
                { id: "3", label: "Feature Map", type: "concept", x: 250, y: 40 },
                { id: "4", label: "Pooling", type: "concept", x: 200, y: 200 },
                { id: "5", label: "Classification", type: "event", x: 50, y: 180 },
            ] as KnowledgeNode[],
            edges: [
                { source: "1", target: "2", label: "passes through" },
                { source: "2", target: "3", label: "creates" },
                { source: "3", target: "4", label: "downsamples" },
                { source: "4", target: "5", label: "predicts" },
            ] as KnowledgeEdge[]
        },
        "default": {
            text: "Artificial Intelligence (AI) encompasses systems capable of performing tasks requiring human intelligence. Modern AI is dominated by Machine Learning (ML) and Deep Learning (DL), driving advancements in vision, language, and robotics.",
            nodes: [
                { id: "1", label: "Artificial Intelligence", type: "concept", x: 150, y: 50 },
                { id: "2", label: "Machine Learning", type: "concept", x: 50, y: 150 },
                { id: "3", label: "Deep Learning", type: "concept", x: 250, y: 150 },
                { id: "4", label: "Data", type: "entity", x: 150, y: 220 },
            ] as KnowledgeNode[],
            edges: [
                { source: "1", target: "2", label: "includes" },
                { source: "2", target: "3", label: "includes" },
                { source: "2", target: "4", label: "learns from" },
            ] as KnowledgeEdge[]
        }
    };

    const simulateProcess = () => {
        if (!query) return;
        setPhase("retrieving");
        setLogs([]);
        setStreamedResponse("");

        // Determine context based on keywords
        const lowerQuery = query.toLowerCase();
        let contextKey = "default";
        if (lowerQuery.includes("transformer") || lowerQuery.includes("attention") || lowerQuery.includes("bert") || lowerQuery.includes("gpt")) contextKey = "transformer";
        else if (lowerQuery.includes("rag") || lowerQuery.includes("retrieval") || lowerQuery.includes("vector")) contextKey = "rag";
        else if (lowerQuery.includes("cnn") || lowerQuery.includes("image") || lowerQuery.includes("vision")) contextKey = "cnn";

        const data = KNOWLEDGE_BASE[contextKey as keyof typeof KNOWLEDGE_BASE];

        // Phase 1: Retrieval
        addLog("Vector Search initiated...");
        setTimeout(() => addLog(`Embedding query: [${Math.random().toFixed(2)}, ${Math.random().toFixed(2)}, ... ]`), 500);
        setTimeout(() => addLog("Found relevant documents (Similarity > 0.85)"), 1200);

        // Phase 2: Graph Extraction
        setTimeout(() => {
            setPhase("graph");
            setGraphData({ nodes: data.nodes, edges: data.edges });
            addLog("Extracting entities & relations...");
        }, 2200);

        // Phase 3: Synthesis
        setTimeout(() => {
            setPhase("synthesizing");
            addLog("Synthesizing answer with Context Awareness...");
        }, 4500);

        // Phase 4: Streaming Response
        setTimeout(() => {
            streamAnswer(data.text);
        }, 5500);
    };

    const addLog = (msg: string) => {
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
    };

    const streamAnswer = (fullText: string) => {
        let i = 0;
        const interval = setInterval(() => {
            setStreamedResponse(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
                setPhase("complete");
                addLog("Process completed successfully.");
            }
        }, 30);
    };

    return (
        <div className="container px-4 mx-auto py-16 max-w-5xl">
            <SectionHeader
                title="Neural Knowledge Graph Explorer"
                subtitle="Live interactable RAG pipeline demonstrating Vector Search + Graph Extraction."
                align="center"
                className="mb-12"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Panel: Controls & Logs */}
                <div className="space-y-6">
                    <Card className="p-6 space-y-4 shadow-md bg-card/50 backdrop-blur">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Research Query</label>
                            <div className="flex gap-2">
                                <Input
                                    placeholder="e.g. How do Transformers work?"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    disabled={phase !== "idle" && phase !== "complete"}
                                />
                                <Button size="icon" onClick={simulateProcess} disabled={!query || (phase !== "idle" && phase !== "complete")}>
                                    {phase === "idle" || phase === "complete" ? <Search className="w-4 h-4" /> : <Loader2 className="w-4 h-4 animate-spin" />}
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Pipeline Status</label>
                            <div className="space-y-2 border rounded-lg p-2 md:p-4 bg-background/50 h-[300px] overflow-y-auto font-mono text-xs">
                                {logs.length === 0 && <span className="text-muted-foreground">Ready to process...</span>}
                                {logs.map((log, i) => (
                                    <div key={i} className="text-green-600 dark:text-green-400 border-b border-border/50 pb-1 last:border-0 last:pb-0">
                                        &gt; {log}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right Panel: Visualization & Output */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Visualizer Area */}
                    <Card className="h-[400px] relative overflow-hidden bg-slate-950 border-slate-800 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {phase === "idle" && (
                                <motion.div
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="text-center text-slate-500"
                                >
                                    <Database className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                    <p>Enter a query to visualize the RAG pipeline</p>
                                </motion.div>
                            )}

                            {phase === "retrieving" && (
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center flex-col"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                >
                                    <div className="flex gap-4">
                                        {[1, 2, 3].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ y: 50, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.2, type: "spring" }}
                                                className="w-24 h-32 bg-slate-800 border border-slate-700 rounded-md p-2 flex flex-col items-center justify-center space-y-2"
                                            >
                                                <FileText className="w-8 h-8 text-blue-400" />
                                                <div className="w-12 h-2 bg-slate-600 rounded"></div>
                                                <div className="w-16 h-2 bg-slate-600 rounded"></div>
                                                <span className="text-[10px] text-green-400">Score: 0.9{i}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <p className="mt-8 text-blue-400 font-mono animate-pulse">Retrieving Context Chunks...</p>
                                </motion.div>
                            )}

                            {(phase === "graph" || phase === "synthesizing" || phase === "complete") && (
                                <motion.div
                                    className="absolute inset-0 w-full h-full"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                >
                                    <svg className="w-full h-full">
                                        <defs>
                                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="20" refY="3.5" orient="auto">
                                                <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                                            </marker>
                                        </defs>
                                        {graphData.edges.map((edge, i) => {
                                            const start = graphData.nodes.find(n => n.id === edge.source)!;
                                            const end = graphData.nodes.find(n => n.id === edge.target)!;
                                            return (
                                                <motion.g key={i} initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: i * 0.5 }}>
                                                    <line
                                                        x1={start.x + 40} y1={start.y + 20}
                                                        x2={end.x + 40} y2={end.y + 20}
                                                        stroke="#475569" strokeWidth="2"
                                                        markerEnd="url(#arrowhead)"
                                                    />
                                                    <text x={(start.x + end.x) / 2 + 40} y={(start.y + end.y) / 2 + 10} fill="#94a3b8" fontSize="10" textAnchor="middle">{edge.label}</text>
                                                </motion.g>
                                            );
                                        })}
                                        {graphData.nodes.map((node, i) => (
                                            <motion.g
                                                key={node.id}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", delay: i * 0.2 }}
                                            >
                                                <circle cx={node.x + 40} cy={node.y + 20} r="25" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                                                <text x={node.x + 40} y={node.y + 60} fill="#e2e8f0" fontSize="12" textAnchor="middle">{node.label}</text>
                                                <Brain className="w-5 h-5 text-blue-400" x={node.x + 30} y={node.y + 10} />
                                            </motion.g>
                                        ))}
                                    </svg>
                                    <div className="absolute top-4 right-4 bg-slate-900/80 p-2 rounded text-xs text-slate-300 font-mono">
                                        Graph Density: 0.8<br />Nodes: {graphData.nodes.length}<br />Edges: {graphData.edges.length}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>

                    {/* Final Answer */}
                    <Card className="p-6 relative min-h-[150px]">
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <CheckCircle2 className={`w-5 h-5 text-green-500 ${phase !== "complete" && "opacity-20"}`} />
                            Generated Answer
                        </h3>
                        <div className="prose dark:prose-invert max-w-none">
                            {streamedResponse ? (
                                <p className="leading-relaxed">{streamedResponse}</p>
                            ) : (
                                <span className="text-muted-foreground italic">Waiting for pipeline completion...</span>
                            )}
                        </div>
                    </Card>
                </div>
            </div>

            <div className="mt-16 border-t pt-8">
                <h4 className="text-sm font-bold uppercase text-muted-foreground mb-4">System Architecture</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                    <div className="p-3 bg-secondary/20 rounded">Next.js Frontend</div>
                    <div className="p-3 bg-secondary/20 rounded">FastAPI Backend (Mock)</div>
                    <div className="p-3 bg-secondary/20 rounded">LangChain Graph</div>
                    <div className="p-3 bg-secondary/20 rounded">Neo4j Database</div>
                </div>
            </div>
        </div>
    );
}
