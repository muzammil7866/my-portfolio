"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }

        setStatus("submitting");

        try {
            const response = await fetch("https://formspree.io/f/mojvgaqk", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" }); // Clear form
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="container px-4 mx-auto py-16">
            <SectionHeader
                title="Get In Touch"
                subtitle="Have a project in mind or want to discuss AI? I'd love to hear from you."
                align="center"
                className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="prose dark:prose-invert">
                        <h3>Let&apos;s talk.</h3>
                        <p className="text-muted-foreground">
                            I&apos;m currently open to new opportunities and interesting projects.
                            Whether you need help with an ML pipeline, a full-stack MVP, or just want to say hi, feel free to reach out.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="flex items-center gap-4 p-6">
                                <Mail className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a href="mailto:muzammilsohail1718@gmail.com" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all">muzammilsohail1718@gmail.com</a>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex items-center gap-4 p-6">
                                <Phone className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <a href="tel:+923004848190" className="text-muted-foreground hover:text-primary transition-colors">+92 300 484 8190</a>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex items-center gap-4 p-6">
                                <Linkedin className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-medium">LinkedIn</p>
                                    <Link href="https://linkedin.com/in/muzammilbinsohail/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Connect on LinkedIn</Link>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex items-center gap-4 p-6">
                                <MapPin className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-medium">Location</p>
                                    <span className="text-muted-foreground">Lahore, Punjab, Pakistan</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-8 p-6 bg-secondary/30 rounded-2xl text-center">
                        <p className="font-medium mb-4">Connect on Socials</p>
                        <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                            <Link href="https://github.com/muzammil7866" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</Link>
                            <Link href="https://wa.me/923004848190" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">WhatsApp</Link>
                            <Link href="https://www.instagram.com/muzammilsohail6/" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">Instagram</Link>
                            <Link href="https://www.tiktok.com/@muzammil.sohail39" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">TikTok</Link>
                            <Link href="https://www.youtube.com/@muzammilbinsohail" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">YouTube</Link>
                            <Link href="https://linktr.ee/muzammilsohail" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">Linktree</Link>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                    {status === "success" ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold">Message Sent!</h3>
                            <p className="text-muted-foreground">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                            <Button variant="outline" onClick={() => setStatus("idle")}>Send Another</Button>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSendMessage}>
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Your Name</label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    disabled={status === "submitting"}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Your Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    disabled={status === "submitting"}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                <textarea
                                    id="message"
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    disabled={status === "submitting"}
                                ></textarea>
                            </div>
                            {status === "error" && (
                                <div className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-900/10 p-2 rounded">
                                    Something went wrong. Please try again or email directly.
                                </div>
                            )}
                            <Button className="w-full" type="submit" disabled={status === "submitting"}>
                                {status === "submitting" ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
