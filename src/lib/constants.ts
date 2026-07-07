export const siteConfig = {
  name: "Aman Maan",
  title: "Aman Maan | Software Developer",
  description:
    "Software Developer specializing in ASP.NET Core, Angular, Azure, and scalable enterprise SaaS applications.",
  url: "https://amanmaan.dev",
  ogImage: "https://amanmaan.dev/og.png",
  links: {
    github: "https://github.com/Aman0505-max",
    linkedin: "https://linkedin.com/in/aman-maan-b11854277",
    email: "maan.amanmaan@gmail.com",
    phone: "(+91) 8077781257",
  },
  navItems: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};

export const personalInfo = {
  name: "Aman Maan",
  tagline: "Software Developer",
  location: "Gurugram, Bengaluru",
  email: "maan.amanmaan@gmail.com",
  phone: "(+91) 8077781257",
  summary:
    "Software Developer with hands-on experience in ASP.NET Core, C#, Angular, TypeScript, REST API development, SQL, Microservices architecture, and Microsoft Azure. Skilled in building and debugging enterprise SaaS applications, resolving production issues, optimizing backend performance, and collaborating in Agile/Scrum teams to deliver scalable software solutions.",
  education: {
    degree: "B.Tech in Information Technology",
    school: "VIT, Vellore",
    gpa: "7.38",
    year: "2021–2025",
  },
};

export const roles = [
  "Software Developer",
  "Backend Engineer",
  "Full Stack Developer",
  "Problem Solver",
];

export const experiences = [
  {
    id: 1,
    title: "Software Developer",
    company: "Symplr",
    location: "Bengaluru, India",
    startDate: "October 2025",
    endDate: "Present",
    isCurrent: true,
    description: "Building enterprise SaaS applications for Talent Management.",
    highlights: [
      "Developed and maintained backend microservices for the Talent Management module using ASP.NET Core, C#, and Node.js, supporting 10K+ daily active users",
      "Built responsive, accessible UI components with Angular and TypeScript, streamlining recruiter workflows and reducing candidate screening time by 20%",
      "Designed, developed, and integrated 15+ RESTful API endpoints, enabling seamless frontend-backend communication across the platform",
      "Debugged and resolved 30+ production issues, optimized SQL queries, and reduced average API response time by 25%, collaborating cross-functionally in an Agile/Scrum environment with QA and product teams",
    ],
    technologies: ["ASP.NET Core", "C#", "Angular", "TypeScript", "Node.js", "SQL", "REST APIs"],
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "Horizon Industrial Parks",
    location: "Gurgaon, India",
    startDate: "October 2023",
    endDate: "October 2023",
    isCurrent: false,
    description: "Built data analytics dashboards and analyzed IoT telemetry data.",
    highlights: [
      "Built interactive Power BI dashboards tracking 50+ network performance APIs, enabling faster root-cause analysis",
      "Analyzed IoT device telemetry data using SQL and Python, identified anomaly trends, and improved infrastructure reliability by 15%",
      "Documented monitoring processes and network configurations to support operational knowledge transfer",
    ],
    technologies: ["Power BI", "SQL", "Python", "IoT"],
  },
];

export const projects = [
  {
    title: "DeepFake Audio Detection",
    slug: "deepfake-audio-detection",
    description:
      "Built a deep learning model (CNN + BiLSTM) to detect AI-generated synthetic speech from audio samples. Achieved 94.2% classification accuracy.",
    longDescription:
      "Built a deep learning model (CNN + BiLSTM) to detect AI-generated synthetic speech from audio samples. Extracted Mel-spectrogram audio features using Librosa and trained the model on the ASVspoof 2021 dataset. Achieved 94.2% classification accuracy distinguishing real vs. deepfake audio clips. Deployed the model as a Flask REST API supporting real-time audio upload and prediction.",
    technologies: ["Python", "TensorFlow", "Librosa", "Flask", "CNN", "BiLSTM"],
    category: "ai-ml",
    featured: true,
    metrics: { accuracy: "94.2%", dataset: "ASVspoof 2021", type: "CNN + BiLSTM" },
  },
  {
    title: "Real-Time Collaborative Code Editor",
    slug: "collaborative-code-editor",
    description:
      "Built a browser-based IDE with operational transformation for real-time multi-user code editing. Containerized with Docker and deployed to AWS.",
    longDescription:
      "Built a browser-based IDE with operational transformation for real-time multi-user code editing. Implemented WebSocket synchronization with cursor presence, JWT authentication, and room-based collaboration. Containerized the application with Docker and deployed it via a CI/CD pipeline to AWS EC2. Used Redis for session management and ephemeral document state storage.",
    technologies: ["Node.js", "React", "Socket.io", "Redis", "Docker", "AWS"],
    category: "fullstack",
    featured: true,
    metrics: { realtime: "WebSocket", auth: "JWT", infra: "Docker + AWS" },
  },
  {
    title: "Symplr Talent Management",
    slug: "symplr-talent-management",
    description:
      "Enterprise SaaS module supporting 10K+ daily active users with microservices architecture.",
    longDescription:
      "Developed and maintained backend microservices for the Talent Management module. Built 15+ RESTful API endpoints, resolved 30+ production issues, and reduced API response time by 25%.",
    technologies: ["ASP.NET Core", "C#", "Angular", "TypeScript", "SQL"],
    category: "enterprise",
    featured: true,
    metrics: { users: "10K+ daily", apis: "15+ endpoints", improvement: "25% faster" },
  },
];

export const skills = {
  languages: [
    { name: "Python", proficiency: 90 },
    { name: "SQL", proficiency: 88 },
    { name: "JavaScript", proficiency: 85 },
    { name: "TypeScript", proficiency: 82 },
    { name: "C#", proficiency: 80 },
  ],
  frameworks: [
    { name: "ASP.NET Core", proficiency: 85 },
    { name: "Angular", proficiency: 82 },
    { name: "React", proficiency: 80 },
    { name: "Node.js", proficiency: 78 },
    { name: "REST APIs", proficiency: 88 },
  ],
  cloud: [
    { name: "Git", proficiency: 90 },
    { name: "Docker", proficiency: 78 },
    { name: "AWS", proficiency: 75 },
    { name: "Microsoft Azure", proficiency: 72 },
    { name: "CI/CD", proficiency: 76 },
    { name: "Power BI", proficiency: 70 },
  ],
  concepts: [
    { name: "Microservices", proficiency: 82 },
    { name: "DSA", proficiency: 80 },
    { name: "OOPs", proficiency: 88 },
    { name: "DBMS", proficiency: 85 },
    { name: "Agile/Scrum", proficiency: 80 },
  ],
};

export const technologies = [
  "ASP.NET Core",
  "Angular",
  "React",
  "TypeScript",
  "Python",
  "Docker",
  "AWS",
  "SQL",
  "C#",
  "Node.js",
];
