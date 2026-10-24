// Single source of truth for portfolio content.
// Every entry here comes from Burhan's resume (public/resume), his GitHub profile,
// or the previous version of this site. Edit this file to change site content.

export const SITE = {
  name: "Burhan Ahmad",
  url: "https://burhanahmad.netlify.app",
  role: "Full Stack Developer",
  email: "ahmadburhan3829@gmail.com",
  location: "Pakistan",
};

export const LINKS = {
  github: "https://github.com/BurhanAhmad0",
  // NOTE: three different LinkedIn URLs appear across the owner's sources; confirm which is correct.
  linkedin: "https://www.linkedin.com/in/burhan-developer/",
  fiverr:
    "https://www.fiverr.com/ahmadburhan153/be-your-react-js-node-js-developer-and-integrate-apis-to-website-applications",
  resume: "/resume/Burhan%20ahmad.pdf",
};

export const NAV = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export const SKILLS = [
  {
    group: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Responsive design"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Socket.IO (real-time)", "JWT authentication"],
  },
  { group: "Databases", items: ["MongoDB", "Mongoose", "Appwrite"] },
  { group: "Tools & deployment", items: ["Git & GitHub", "Vite", "Docker", "Vercel", "Netlify"] },
];

export const PROJECTS = [
  {
    id: "todopy",
    title: "ToDoPy",
    kind: "Task management app",
    image:
      "https://res.cloudinary.com/dqu9qfaol/image/upload/v1758361788/projectImg1_n6iopp.png",
    imageAlt: "Screenshot of the ToDoPy task management app",
    summary:
      "A full-stack to-do and productivity app with user accounts, so each person's tasks are stored and protected behind a login.",
    features: [
      "Add, edit, delete and complete tasks",
      "JWT authentication with protected routes",
      "REST API backed by MongoDB",
      "Responsive layout",
    ],
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://todopyapp.vercel.app/",
    repo: "https://github.com/BurhanAhmad0/ToDoPy",
  },
  {
    id: "socially",
    title: "Socially",
    kind: "Social media platform",
    image:
      "https://res.cloudinary.com/dqu9qfaol/image/upload/v1758362186/projectImg2_uequxy.png",
    imageAlt: "Screenshot of the Socially social media app",
    summary:
      "A MERN social platform where users sign in, share posts and chat with each other in real time.",
    features: ["User authentication", "Post sharing", "Real-time chat with Socket.IO"],
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    live: "https://sociallyconnectapp.vercel.app/",
    repo: null, // add the verified repository URL here when confirmed
  },
  {
    id: "exclusive",
    title: "Exclusive",
    kind: "E-commerce prototype",
    image:
      "https://res.cloudinary.com/dqu9qfaol/image/upload/v1758362186/projectImg3_cgpvsf.png",
    imageAlt: "Screenshot of the Exclusive e-commerce demo store",
    summary:
      "A demo online store built on the MERN stack to practise the core shopping flow end to end.",
    features: ["Product listings", "Shopping cart", "Checkout flow"],
    tags: ["React", "Node.js", "MongoDB"],
    live: "https://exclusivebazaar.vercel.app/",
    repo: null, // add the verified repository URL here when confirmed
  },
];

export const EXPERIENCE = [
  {
    title: "Freelance web developer",
    org: "Self-employed",
    period: "Jan 2023 – Present",
    points: [
      "Design and build responsive websites for local businesses.",
      "Develop full-stack MERN applications with authentication and real-time features.",
      "Handle delivery end to end: branding, deployment and client communication.",
    ],
  },
  {
    title: "Self-directed learning",
    org: "Personal projects",
    period: "Feb 2022 – Present",
    points: [
      "Completed a 30-day WebSockets challenge: real-time chat, live notifications and multiplayer features.",
      "Completed a 30-day challenge to deepen React skills.",
    ],
  },
];

export const EDUCATION = [
  {
    title: "BS Computer Science",
    org: "University of Central Punjab",
    period: "Sep 2023 – Sep 2027 (expected)",
  },
  {
    title: "Intermediate in Computer Science (ICS)",
    org: "Punjab Group of Colleges",
    period: "May 2020 – May 2022",
  },
];
