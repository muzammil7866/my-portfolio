export const SKILLS = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "FastAPI",
    "React",
    "Next.js",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "LangChain",
    "OpenAI API",
    "AWS",
];

export const PROJECTS = [
    {
        title: "RAG-based QA System",
        description:
            "A sophisticated Question Answering system building using LangChain and OpenAI. It ingests PDF documents, creates embeddings, and provides accurate answers with source citations.",
        tags: ["Python", "LangChain", "OpenAI", "Pinecone"],
        githubUrl: "https://github.com",
        demoUrl: "/demo",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "ML Model Deployment",
        description:
            "End-to-end deployment of a Computer Vision model using FastAPI and Docker. Optimizes inference time and provides a RESTful API for consumption.",
        tags: ["Python", "FastAPI", "Docker", "PyTorch"],
        githubUrl: "https://github.com",
        demoUrl: "https://example.com",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Recommendation Engine",
        description:
            "Collaborative filtering recommendation system for e-commerce products. Built with Scikit-learn and deployed on AWS Lambda.",
        tags: ["Python", "Scikit-learn", "AWS", "Serverless"],
        githubUrl: "https://github.com",
        image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Portfolio Website",
        description:
            "Modern, responsive portfolio website built with Next.js 14 and Tailwind CSS. Features dark mode, clean typography, and SEO optimization.",
        tags: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com",
        demoUrl: "/",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    },
];
