import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type Cert = {
  id: string;
  title: string;
  issuer: string;
  issued?: string;
  skills?: string[];
};

const sampleCerts: Cert[] = [
  {
    id: "c1",
    title: "GenAI - How LLMs Work",
    issuer: "Duke University",
    issued: "Dec 2024",
    skills: ["Generative AI", "LLMs"],
  },
  {
    id: "c2",
    title: "Prompt Engineering",
    issuer: "freeCodeCamp",
    issued: "Apr 2024",
    skills: ["Prompt Engineering", "LLMs"],
  },
  {
    id: "c3",
    title: "Creating Web App with Python and Flask",
    issuer: "Coursera",
    issued: "Aug 2023",
    skills: ["Flask", "REST APIs"],
  },
];

export function Certifications({ items = sampleCerts }: { items?: Cert[] }) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Certifications</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">Verified courses and credentials.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-4">
            {items.map((c) => (
              <li key={c.id} className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{c.title}</div>
                      <div className="text-sm text-muted-foreground">{c.issuer} • {c.issued}</div>
                    </div>
                  </div>

                  {c.skills && (
                    <div className="text-sm text-muted-foreground mt-2">Skills: {c.skills.join(" · ")}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default Certifications;
