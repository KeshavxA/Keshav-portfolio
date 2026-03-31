export const portfolioData = {
    personal: {
        name: "Keshav Sharma",
        role: "Frontend Developer",
        email: "keshavsharma904517@gmail.com",
        linkedin: "https://www.linkedin.com/in/keshav-sharma-b30a65262",
        github: "https://github.com/KeshavxA",
        specialization: "High-Performance Fintech & Real-Time Dashboards"
    },
    skills: {
        languages: ["React", "TypeScript", "JavaScript", "Angular", "React Flow", "Redux"],
        frameworks: ["Next.js", "Node.js", "Tailwind CSS"],
        specialized: ["Framer Motion", "Gemini AI", "Real-time Data", "B2B Dashboards", "Performance Optimization", "Postgres", "Zustand"]
    },
    projects: [
        {
            id: "spendcheck",
            title: "SpendCheck AI",
            description: "High-performance SaaS for personal finance automation with deep-learning categorization and real-time visualization.",
            metrics: [
                { label: "AI Accuracy", value: "94%", detail: "Transaction categorization with Gemini AI" },
                { label: "Performance", value: "95+", detail: "Lighthouse score through lazy loading" },
                { label: "Engagement", value: "+52%", detail: "Session time increase via Chart.js" }
            ],
            tech: ["React", "Tailwind", "Gemini AI", "Recharts"],
            github: "https://github.com/KeshavxA/SpendCheck",
            link: "https://spend-check-one.vercel.app/",
            image: "/spendcheck.png",
            color: "emerald"
        },
        {
            id: "veinsofdrop",
            title: "veinsofDrop",
            description: "Life-saving blood donor matching platform utilizing geolocation algorithms and real-time database syncing.",
            metrics: [
                { label: "Matching", value: "4m", detail: "Reduced connection time from 24h" },
                { label: "Accuracy", value: "+73%", detail: "Match rate via Haversine algorithm" },
                { label: "Scale", value: "12k+", detail: "Registered donors managed securely" }
            ],
            tech: ["React", "Firebase", "Zustand", "Geolocation"],
            github: "https://github.com/KeshavxA/veinsofDrop",
            link: "https://veinsofdrop.web.app/",
            image: "/veinsOfDrop.png",
            color: "red"
        },
        {
            id: "vectorshift",
            title: "VectorShift",
            description: "Enterprise automation workspace streamlining dev lifecycles via modular frontend architecture and live workflow orchestration.",
            metrics: [
                { label: "Efficiency", value: "82%", detail: "Reduction in traditional dev cycle time" },
                { label: "Automation", value: "Real-time", detail: "Workflow orchestration engine" },
                { label: "Security", value: "Enterprise", detail: "Data-heavy mission critical scale" }
            ],
            tech: ["Next.js", "TailwindCSS", "Python", "Workflows"],
            github: "https://github.com/KeshavxA/VectorShift-Automation",
            link: "https://vector-shift-automation-be6d.vercel.app/",
            image: "/vectorshift.png",
            color: "indigo"
        }
    ],
    experience: [
        {
            title: "Associate Software Engineer Intern",
            company: "CodeTikki",
            period: "Jan 2026 — Present",
            bullets: [
                "Architected data-intensive dashboard interfaces for enterprise environments.",
                "Optimized state management yielding a 40% engagement surge.",
                "Engineered pixel-perfect UI systems for strict fintech standards."
            ]
        }
    ],
    education: {
        degree: "Bachelor of Computer Applications",
        school: "College of Engineering Roorkee",
        cgpa: "8.1 / 10",
        location: "Roorkee, Uttarakhand, India"
    }
};
