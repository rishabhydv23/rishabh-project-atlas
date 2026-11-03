export const profile = {
  name: "Rishabh",
  title: "Full Stack Developer · Freelance Web Developer",
  location: "India",
  email: "rishabhyadavunnao@gmail.com",
  github: "https://github.com/rishabh-ydv23",
  linkedin: "https://linkedin.com/in/rishabh-ydv23",
  // Replace with a hosted resume PDF link when available.
  resume: "/resume.pdf",
};

export type Category = "Web App" | "E-Commerce" | "Full Stack" | "DevOps" | "Frontend";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  tech: string[];
  features?: string[];
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "smart-vaccine-system",
    name: "Smart Vaccine System",
    tagline: "VaxCare Portal — vaccination booking & healthcare management",
    description:
      "A full-stack vaccine management platform where users book vaccination appointments, consult doctors over chat and video, discover nearby hospitals with Google Maps directions, and download digital vaccination certificates. Includes an admin portal for managing the system.",
    category: "Full Stack",
    tech: ["JavaScript", "React", "Node.js", "Google Maps"],
    features: [
      "End-to-end vaccine booking flow",
      "Doctor consultation via chat & video",
      "Nearby hospitals with map directions",
      "Digital vaccination certificates",
      "Email-verified authentication",
      "Admin dashboard",
    ],
    image: "/projects/vaccine.jpg",
    github: "https://github.com/rishabh-ydv23/Smart-Vaccine-System",
    live: "https://vaxcare-portal-frontend.onrender.com",
    featured: true,
  },
  {
    slug: "justlputhings",
    name: "JustLPUThings",
    tagline: "Study notes and curated playlists for LPU students",
    description:
      "A university-focused platform that brings LPU course materials into one place — notes organised by subject, curated YouTube playlists for courses like Operating Systems, DAA and Mathematics, and links to the student community. Built for students, by students.",
    category: "Web App",
    tech: ["Next.js", "Web Platform"],
    features: [
      "Subject-wise study notes",
      "Curated video playlists per course",
      "Student sign-in",
      "Community channel integration",
    ],
    image: "/projects/justlputhings.jpg",
    live: "https://justlputhings.com",
    featured: true,
  },
  {
    slug: "forever-ecommerce",
    name: "Forever E-Commerce",
    tagline: "Full-stack clothing store with customer & admin modules",
    description:
      "A full-stack clothing e-commerce platform with product browsing, search, category filtering and size selection on the customer side, and product and order management on the admin side. Images are uploaded through Cloudinary and sessions are secured with JWT.",
    category: "E-Commerce",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Cloudinary"],
    features: [
      "Customer & admin modules",
      "Search, category filters, sizes",
      "Shopping cart & authentication",
      "Order management",
      "Admin product management",
      "Cloudinary image uploads",
    ],
    image: "/projects/forever.jpg",
    github: "https://github.com/rishabh-ydv23/Forever-Ecommerce-website",
    live: "https://ecommerce-website-green-six.vercel.app/",
    featured: true,
  },
  {
    slug: "chatnow",
    name: "ChatNow",
    tagline: "Real-time chat application",
    description: "A real-time chat app for sending and receiving messages instantly, with a clean, responsive interface.",
    category: "Full Stack",
    tech: ["JavaScript", "Node.js"],
    github: "https://github.com/rishabh-ydv23/chatNow",
    live: "https://chitchat-a0xm.onrender.com",
  },
  {
    slug: "ex-servicemen",
    name: "Ex-Servicemen Association",
    tagline: "Platform for Indian Armed Forces veterans",
    description:
      "A responsive platform for Army, Navy and Air Force veterans offering updates, notifications, event information and resources for ex-servicemen and their families.",
    category: "Web App",
    tech: ["TypeScript"],
    github: "https://github.com/rishabh-ydv23/Ex-Servicemen-Association",
    live: "https://ex-servicemen-frontend.onrender.com/",
  },
  {
    slug: "grievance-portal",
    name: "Grievance Portal",
    tagline: "Citizen grievance redressal system",
    description:
      "Lets citizens register complaints, track grievance status in real time and receive transparent updates from public authorities.",
    category: "Full Stack",
    tech: ["Laravel", "PHP", "Blade"],
    github: "https://github.com/rishabh-ydv23/GrievancePortal",
  },
  {
    slug: "track-expense",
    name: "Expense Tracker",
    tagline: "Personal income & expense management",
    description: "Record daily income and expenses, categorise transactions, track spending patterns and view summaries.",
    category: "Web App",
    tech: ["JavaScript"],
    github: "https://github.com/rishabh-ydv23/Track-Expense",
    live: "https://track-expense-1.onrender.com",
  },
  {
    slug: "snapscribe",
    name: "SnapScribe",
    tagline: "Image-to-text OCR web app",
    description: "Upload images containing printed text and extract editable digital text using OCR.",
    category: "Web App",
    tech: ["PHP", "OCR"],
    github: "https://github.com/rishabh-ydv23/SnapScribe",
  },
  {
    slug: "calculator-cicd",
    name: "Calculator CI/CD",
    tagline: "Automated Docker build & deploy pipeline",
    description:
      "GitHub Actions pipeline that builds and pushes a Docker image to Docker Hub, with Render pulling the latest image and redeploying on every push.",
    category: "DevOps",
    tech: ["Python", "Docker", "GitHub Actions", "Render"],
    github: "https://github.com/rishabh-ydv23/calculatorCi-Cd",
    live: "https://calculator-x5e6.onrender.com/",
  },
  {
    slug: "peopleview",
    name: "PeopleView",
    tagline: "Live user directory from a REST API",
    description:
      "Responsive page that fetches live user data from the RandomUser API, with search, nationality filter, loading states and card UI.",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/rishabh-ydv23/peopleView",
    live: "https://peopleview.vercel.app/",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "C++", "JavaScript", "TypeScript", "Java"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Angular", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "Django", "Laravel", "REST APIs"] },
  { group: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "SQL"] },
  { group: "Authentication", items: ["JWT", "OAuth 2.0"] },
  { group: "DevOps & Cloud", items: ["AWS EC2", "AWS S3", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Linux (RHEL)"] },
  { group: "Tools", items: ["Git", "GitHub", "Postman", "Linux CLI", "Bash"] },
  { group: "Core CS", items: ["DSA", "OOP", "DBMS", "Operating Systems", "SDLC", "Basic System Design"] },
];

export const achievements = [
  { value: "350+", label: "DSA problems solved across LeetCode and GeeksforGeeks" },
  { value: "5★", label: "C++ rating on HackerRank" },
  { value: "4★", label: "SQL and Python ratings on HackerRank" },
];

export const certificates: { name: string; issuer: string; url?: string }[] = [
  { name: "Red Hat System Administration I (RH124)", issuer: "Red Hat" },
  { name: "Full Stack Web Development — React & Node.js", issuer: "CPE, Lovely Professional University" },
  { name: "Full Stack Web Development", issuer: "Apna College" },
];

export const services = [
  { title: "Business Websites", body: "Fast, polished sites that represent your brand and convert visitors." },
  { title: "Full Stack Web Apps", body: "End-to-end products — interface, API and database designed together." },
  { title: "E-Commerce Stores", body: "Catalogues, carts, checkout flows and admin panels built to scale." },
  { title: "Admin Dashboards", body: "Internal tools that make managing data and operations simple." },
  { title: "APIs & Backend", body: "REST APIs, authentication and database architecture done right." },
  { title: "Redesign & Maintenance", body: "Modernise an existing site and keep it healthy over time." },
];

export const doors = [
  { title: "Full Stack Apps", body: "Healthcare portals, dashboards and products, frontend to database.", href: "#work" },
  { title: "E-Commerce", body: "Stores with carts, admin panels, payments-ready flows.", href: "#work" },
  { title: "Backend & APIs", body: "Node.js and Express services with secure auth.", href: "#experience" },
  { title: "DevOps", body: "Docker, CI/CD pipelines and deployments.", href: "#experience" },
  { title: "Freelance", body: "From first sketch to launch for founders and businesses.", href: "#services" },
];

export const timeline = [
  { when: "Now", title: "Freelance full stack developer", where: "Remote · India", points: ["Building web products for businesses and founders, from first sketch to launch."] },
  { when: "Projects", title: "Smart Vaccine System, Forever & JustLPUThings", where: "Personal & community builds", points: ["Booking flows, e-commerce stores and a student study platform, shipped end to end."] },
  { when: "2023 — 2027", title: "B.Tech, Computer Science & Engineering", where: "Lovely Professional University", points: ["Data structures, operating systems and databases: where it all started."] },
];
