// Personal Information
export const personalInfo = {
  name: "Athira P B",
  title: "Future-Ready Engineer & Creative Technologist",
  tagline: "Building the future with code, creativity, and innovation",
  bio: "Computer Engineering student passionate about technology, innovation, and creative problem-solving. I specialize in full-stack development, AI/ML, and creating immersive digital experiences that push the boundaries of what's possible.",
  email: "athira@example.com",
  location: "India",
  avatar: "/images/avatar.svg",
  social: {
    github: "https://github.com/athira",
    linkedin: "https://linkedin.com/in/athira",
    twitter: "https://twitter.com/athira",
    instagram: "https://instagram.com/athira"
  }
}

// Skills Data
export const skills = {
  categories: [
    {
      title: "Frontend Development",
      icon: "Globe",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 85 },
        { name: "Three.js", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: "Database",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 78 },
        { name: "Docker", level: 75 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "Brain",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "OpenCV", level: 75 },
        { name: "Scikit-learn", level: 82 },
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 90 }
      ]
    },
    {
      title: "Design & Creative",
      icon: "Palette",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "Photoshop", level: 70 },
        { name: "Blender", level: 65 },
        { name: "After Effects", level: 60 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "Wrench",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 65 },
        { name: "Git", level: 90 },
        { name: "Linux", level: 80 },
        { name: "Vercel", level: 88 }
      ]
    },
    {
      title: "Programming Languages",
      icon: "Code",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "Python", level: 90 },
        { name: "C++", level: 75 },
        { name: "Java", level: 70 },
        { name: "Rust", level: 60 }
      ]
    }
  ],
  additionalTechnologies: [
    "Redux", "Zustand", "React Query", "Webpack", "Vite", "ESLint", "Prettier",
    "Jest", "Cypress", "Playwright", "Storybook", "Chromatic", "Netlify", "Railway",
    "Supabase", "Firebase", "Prisma", "Drizzle", "tRPC", "Socket.io", "WebRTC",
    "WebGL", "GSAP", "Lottie", "Chart.js", "D3.js", "Mapbox", "Stripe", "PayPal",
    "OAuth", "JWT", "Bcrypt", "Helmet", "CORS", "Rate Limiting", "Redis", "Elasticsearch"
  ]
}

// Projects Data
export const projects = [
  {
    id: 1,
    title: "AI-Powered Portfolio",
    description: "A futuristic portfolio website with AI-driven animations and interactive elements.",
    image: "/images/project1.svg",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/athira/ai-portfolio",
    live: "https://athira-portfolio.vercel.app",
    featured: true,
    category: "Web Development"
  },
  {
    id: 2,
    title: "Neural Network Visualizer",
    description: "Interactive 3D visualization of neural networks with real-time training data.",
    image: "/images/project2.svg",
    technologies: ["React", "Three.js", "Python", "TensorFlow"],
    github: "https://github.com/athira/neural-viz",
    live: "https://neural-viz.vercel.app",
    featured: true,
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Quantum Computing Simulator",
    description: "Web-based quantum circuit simulator with educational interface.",
    image: "/images/project3.svg",
    technologies: ["Vue.js", "WebGL", "Python", "Qiskit"],
    github: "https://github.com/athira/quantum-sim",
    live: "https://quantum-sim.vercel.app",
    featured: false,
    category: "Research"
  }
]

// Education Data
export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Engineering",
    institution: "Indian Institute of Technology",
    year: "2021 - 2025",
    grade: "9.2 CGPA",
    description: "Specialized in AI/ML, Computer Vision, and Full-Stack Development"
  },
  {
    degree: "Higher Secondary",
    field: "Science (PCM)",
    institution: "Delhi Public School",
    year: "2019 - 2021",
    grade: "95.2%",
    description: "Mathematics, Physics, Chemistry with Computer Science"
  }
]

// Experience Data
export const experience = [
  {
    title: "Full-Stack Developer Intern",
    company: "TechCorp Solutions",
    duration: "Jun 2024 - Aug 2024",
    description: "Developed responsive web applications using React and Node.js. Implemented real-time features and optimized database queries.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
  },
  {
    title: "AI Research Assistant",
    company: "University Research Lab",
    duration: "Jan 2024 - Present",
    description: "Working on computer vision projects and neural network optimization. Published research on efficient model architectures.",
    technologies: ["Python", "TensorFlow", "OpenCV", "PyTorch"]
  }
]

// Stats Data
export const stats = [
  { label: "Projects Completed", value: "25+", icon: "🚀" },
  { label: "GitHub Repositories", value: "50+", icon: "📚" },
  { label: "Lines of Code", value: "100K+", icon: "💻" },
  { label: "Coffee Consumed", value: "∞", icon: "☕" }
]

// Interests Data
export const interests = [
  { name: "Artificial Intelligence", icon: "🤖" },
  { name: "Quantum Computing", icon: "⚛️" },
  { name: "Space Technology", icon: "🚀" },
  { name: "Cybersecurity", icon: "🔒" },
  { name: "Game Development", icon: "🎮" },
  { name: "Photography", icon: "📸" },
  { name: "Machine Learning", icon: "🧠" },
  { name: "Blockchain Technology", icon: "⛓️" },
  { name: "Cloud Computing", icon: "☁️" },
  { name: "Data Science", icon: "📊" }
]

// GitHub Stats (mock data - replace with real API calls)
export const githubStats = {
  totalRepos: 52,
  totalStars: 234,
  totalCommits: 1247,
  totalPRs: 89,
  languages: [
    { name: "TypeScript", percentage: 35, color: "#3178c6" },
    { name: "JavaScript", percentage: 28, color: "#f7df1e" },
    { name: "Python", percentage: 20, color: "#3776ab" },
    { name: "CSS", percentage: 12, color: "#1572b6" },
    { name: "Other", percentage: 5, color: "#6b7280" }
  ]
}

// Contact Information
export const contactInfo = {
  email: "athira@example.com",
  phone: "+91 9876543210",
  location: "Mumbai, India",
  availability: "Available for freelance and full-time opportunities",
  preferredContact: "email"
}

// Testimonials Data
export const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Research Supervisor",
    company: "IIT Research Lab",
    content: "Athira's innovative approach to AI research and exceptional coding skills make her a standout student. Her work on neural network optimization has been groundbreaking.",
    avatar: "/images/testimonial1.svg"
  },
  {
    name: "Raj Patel",
    role: "Senior Developer",
    company: "TechCorp Solutions",
    content: "Working with Athira was a pleasure. She quickly adapted to our tech stack and delivered high-quality code. Her problem-solving abilities are impressive.",
    avatar: "/images/testimonial2.svg"
  }
]

// Blog Posts Data
export const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build web applications.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["AI", "Web Development", "Future Tech"],
    image: "/images/blog1.svg",
    slug: "future-of-ai-web-development"
  },
  {
    id: 2,
    title: "Building Responsive UIs with Framer Motion",
    excerpt: "A comprehensive guide to creating smooth, performant animations in React applications.",
    date: "2024-01-08",
    readTime: "8 min read",
    tags: ["React", "Animation", "UI/UX"],
    image: "/images/blog2.svg",
    slug: "responsive-uis-framer-motion"
  }
]