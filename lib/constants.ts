export const SKILLS = {
    "Languages": [
        "Python",
        "C++",
        "SQL",
    ],
    "AI & Frameworks": [
        "PyTorch",
        "TensorFlow",
        "LangChain",
        "Hugging Face",
        "OpenAI API",
        "RAG",
    ],
    "MLOps & Tools": [
        "MLflow",
        "Apache Airflow",
        "DVC",
        "Docker",
        "GitHub Actions",
    ],
    "Backend & Cloud": [
        "FastAPI",
        "Flask",
        "AWS",
        "Redis",
        "Celery",
    ],
};

// Skill proficiency levels for animated sliders
export const SKILL_PROFICIENCY = {
    "Python": 95,
    "PyTorch": 92,
    "FastAPI": 90,
    "AWS": 88,
    "Docker": 87,
    "LangChain": 85,
    "TensorFlow": 85,
    "SQL": 80,
    "Airflow": 80,
    "Flask": 78,
    "C++": 75,
    "Redis": 72,
};

export const PROJECTS = [
    {
        title: "Suspicious Behavior Detection System",
        description:
            "Real-time surveillance system utilizing 3D ResNet-18 and Multiple Instance Learning (MIL) to detect anomalies in the UCF-Crime dataset with SOTA temporal localization accuracy.",
        tags: ["Python", "PyTorch", "3D CNNs", "MIL", "Computer Vision"],
        githubUrl: "https://github.com/muzammil7866",
        demoUrl: "#", // No live demo URL provided
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop", // Cyber/Security placeholder
        isRefactoring: true,
    },
    {
        title: "End-to-End MLOps Pipeline",
        description:
            "Automated ML lifecycle platform using DVC for data versioning, MLflow for tracking, and GitHub Actions for CI/CD. Orchestrates ETL DAGs with Airflow and deploys FastAPI services on AWS EC2.",
        tags: ["AWS", "Airflow", "FastAPI", "Docker", "MLflow", "DVC"],
        githubUrl: "https://github.com/muzammil7866",
        demoUrl: "#",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop", // Code/Tech placeholder
        isRefactoring: true,
    },
    {
        title: "Context-Aware Multimodal Recommender",
        description:
            "Hybrid RAG engine fusing user preferences with live OpenWeatherMap API data using FAISS vector search. Fine-tuned transformer models serve dynamic lifestyle recommendations.",
        tags: ["Python", "RAG", "FAISS", "Transformers", "OpenAI"],
        githubUrl: "https://github.com/muzammil7866",
        demoUrl: "#",
        image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?q=80&w=600&auto=format&fit=crop", // AI placeholder
        isRefactoring: true,
    },
    {
        title: "Multimodal Cancer Diagnostic System",
        description:
            "Fusion framework classifying cancer types using SHAP and LIME for interpretability. Implements cross-modal attention mechanisms to correlate unstructured medical text with genomic sequences.",
        tags: ["Python", "XAI", "SHAP", "LIME", "Medical AI"],
        githubUrl: "https://github.com/muzammil7866",
        demoUrl: "#",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop", // Medical placeholder
        isRefactoring: true,
    },
];

export const TESTIMONIALS = [
    {
        rank: 1,
        title: "Modern AI Stack Proof",
        quote:
            "I worked with Muzammil on a weather-based clothing and activities recommendation system during our Applied Recommendation Systems course. He excelled in fine-tuning multiple LLMs, integrating RAG, and implementing FAISS for efficient search. Muzammil's technical skills and collaborative approach make him highly suited for roles in AI and machine learning.",
        author: "Project Collaborator",
        role: "Applied Recommendation Systems",
    },
    {
        rank: 2,
        title: "Hard Metric Endorsement",
        quote:
            "I have taught a course on Object Oriented Programming to Muzammil. Through the course, I realized that his understanding extends beyond theory, as he consistently integrates OOP into practical problem-solving and software development tasks, showcasing both clarity in design and efficiency in execution. Some of his key qualities are diligence, focus, and commitment. I can safely place him in the bracket of the top 10% students of my teaching span. I confidently recommend him for computing jobs in general with good wishes to a brighter future.",
        author: "Hafiz Saud Arshad, Ph.D. Researcher",
        role: "FAST-NUCES",
    },
    {
        rank: 3,
        title: "Real-World Execution Review",
        quote:
            "Working with Muzammil was an absolute pleasure. He's a true professional with deep technical expertise. I needed a highly specific assembly language project done, and Muzammil not only delivered exactly what I wanted but also provided valuable insights to improve the final product. The communication throughout the project was clean and he was quick to respond to any questions I had.",
        author: "Independent Client",
        role: "Technical Consulting",
    },
    {
        rank: 4,
        title: "Framework Mastery and HoD Backing",
        quote:
            "Muzammil has built a strong profile in Programming for AI, working with libraries and frameworks such as NumPy, Pandas, scikit-learn, TensorFlow, and OpenCV. He has applied these tools in tasks ranging from data analysis and web scraping to building and training machine learning models, showing both versatility and depth. His ability to bridge programming with applied AI solutions highlights his potential as a capable and impactful AI Engineer.",
        author: "Dr. Muhammad Fayyaz, Associate Professor and HoD (CS)",
        role: "FAST-NUCES",
    },
    {
        rank: 5,
        title: "Core Foundation Endorsement",
        quote:
            "Muzammil has developed a solid foundation in Mathematics for Artificial Intelligence, mastering key areas such as linear algebra, probability, statistics, and calculus that are essential for modern AI. He complements this mathematical strength with strong programming skills and the ability to apply advanced AI concepts in practice. His capability to connect theory with implementation allows him to design, train, and optimize intelligent systems with both precision and efficiency. This balance of analytical rigor and practical problem-solving highlights his potential to excel as an AI Engineer in both research and industry.",
        author: "Dr. Mushtaq Ahmad, Associate Professor and HoD",
        role: "FAST-NUCES",
    },
];
