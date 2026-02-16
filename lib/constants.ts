export const SKILLS = [
    "Python",
    "SQL",
    "C++",
    "FastAPI",
    "Flask",
    "LangChain",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "OpenAI API",
    "Hugging Face",
    "RAG",
    "AWS",
    "Docker",
    "GitHub Actions",
    "MLflow",
    "Apache Airflow",
    "Celery",
    "Redis",
];

export const PROJECTS = [
    {
        title: "Suspicious Behavior Detection System",
        description:
            "Real-time surveillance system utilizing 3D ResNet-18 and Multiple Instance Learning (MIL) to detect anomalies in the UCF-Crime dataset with SOTA temporal localization accuracy.",
        tags: ["Python", "PyTorch", "3D CNNs", "MIL", "Computer Vision"],
        githubUrl: "https://github.com/muzammil7866",
        demoUrl: "#", // No live demo URL provided
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop", // Cyber/Security placeholder
    },
    {
        title: "End-to-End MLOps Pipeline",
        description:
            "Automated ML lifecycle platform using DVC for data versioning, MLflow for tracking, and GitHub Actions for CI/CD. Orchestrates ETL DAGs with Airflow and deploys FastAPI services on AWS EC2.",
        tags: ["AWS", "Airflow", "FastAPI", "Docker", "MLflow", "DVC"],
        githubUrl: "https://github.com/muzammil7866",
        demoUrl: "#",
        image: "https://images.unsplash.com/photo-1667372393119-c81c0cda0a29?q=80&w=600&auto=format&fit=crop", // Cloud/DevOps placeholder
    },
    {
        title: "Context-Aware Multimodal Recommender",
        description:
            "Hybrid RAG engine fusing user preferences with live OpenWeatherMap API data using FAISS vector search. Fine-tuned transformer models serve dynamic lifestyle recommendations.",
        tags: ["Python", "RAG", "FAISS", "Transformers", "OpenAI"],
        githubUrl: "https://github.com/muzammil7866",
        demoUrl: "#",
        image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?q=80&w=600&auto=format&fit=crop", // AI placeholder
    },
    {
        title: "Multimodal Cancer Diagnostic System",
        description:
            "Fusion framework classifying cancer types using SHAP and LIME for interpretability. Implements cross-modal attention mechanisms to correlate unstructured medical text with genomic sequences.",
        tags: ["Python", "XAI", "SHAP", "LIME", "Medical AI"],
        githubUrl: "https://github.com/muzammil7866",
        demoUrl: "#",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop", // Medical placeholder
    },
];
