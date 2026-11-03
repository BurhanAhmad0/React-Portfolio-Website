// Single source of truth for portfolio content. Every claim here comes from Burhan's resume,
// his GitHub repositories (README, package.json, commit history) or the previous site.
import ghizerImg from "../assets/ghizer-inn.webp";

export const SITE = {
  name: "Burhan Ahmad",
  url: "https://burhanahmad.netlify.app",
  role: "Full-Stack Web Developer",
  email: "ahmadburhan3829@gmail.com",
  location: "Pakistan",
};

// Phone number comes from the resume. wa.me needs digits only, with country code and no "+".
const WHATSAPP_NUMBER = "923288120830";
export const whatsappUrl = (text = "Hi Burhan, I found your portfolio and would like to discuss a project.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
export const mailtoUrl = (subject = "Project inquiry", body = "") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

export const LINKS = {
  github: "https://github.com/BurhanAhmad0",
  linkedin: "https://www.linkedin.com/in/burhan-developer/",
  fiverr: "https://www.fiverr.com/ahmadburhan153/be-your-react-js-node-js-developer-and-integrate-apis-to-website-applications",
  resume: "/resume/Burhan%20ahmad.pdf",
};

export const NAV = [
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const SERVICES = [
  {
    title: "Business website development",
    text: "A clear, professional website for your business: who you are, what you offer, and an easy way for customers to reach you.",
    points: ["Mobile-responsive layouts", "Clear business information and contact flow", "Built with React or plain HTML and Tailwind CSS"],
  },
  {
    title: "Website redesign and improvement",
    text: "Already have a website that feels dated, breaks on phones or is hard to use? I can improve it without starting from zero.",
    points: ["Responsive design fixes", "UI and UX improvements", "Performance and usability clean-up"],
  },
  {
    title: "Functionality and bug fixing",
    text: "Something on your site not working? I can fix it or add the missing piece.",
    points: ["Front-end fixes", "API integration", "Forms and interactive features, plus basic back-end improvements"],
  },
  {
    title: "Custom web applications",
    text: "When a template will not do, I build the interface, the API and the database together.",
    points: ["React interfaces", "Node.js and Express APIs", "MongoDB, user accounts and payments"],
  },
];

export const PROJECT_TYPES = [
  "New business website",
  "Redesign or improve my current website",
  "Fix a bug or add a feature",
  "Custom web application",
  "Not sure yet",
];

// `status` is shown on every case study so personal work is never mistaken for paid client work.
export const PROJECTS = [
  {
    id: "exclusive",
    layout: "wide",
    title: "Exclusive",
    category: "E-commerce web app",
    status: "Personal project",
    image: "https://res.cloudinary.com/dqu9qfaol/image/upload/v1758362186/projectImg3_cgpvsf.png",
    imageAlt: "Screenshot of the Exclusive online store",
    goal: "Show how a small online shop can let customers browse products, pay online and see their past orders.",
    built: [
      "Product catalog with search and filtering",
      "Shopping cart with quantity management",
      "Registration and login using JWT in HTTP-only cookies",
      "Stripe payments and order history",
    ],
    contribution: "Designed and built the whole application on my own: interface, API and database.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe"],
    live: "https://exclusivebazaar.vercel.app/",
    repo: "https://github.com/BurhanAhmad0/React-Ecom-Website",
  },
  {
    id: "ghizer-inn",
    layout: "left",
    title: "Ghizer Inn",
    category: "Hotel website",
    status: "Front-end build, in progress",
    image: ghizerImg,
    imageAlt: "Photograph of Ghizer Inn hotel in Ghizer, Gilgit-Baltistan, with mountains behind",
    goal: "Present a hotel and restaurant in Ghizer, Gilgit-Baltistan: where it is, what is included and which rooms it offers.",
    built: [
      "Single-page responsive layout: hero, about, amenities and rooms",
      "Room showcase with photography",
      "Sections for services, guest testimonials and contact",
    ],
    contribution: "Built the layout and front end myself with HTML and Tailwind CSS. Online booking and final copy are not done yet.",
    tech: ["HTML", "Tailwind CSS"],
    live: null,
    repo: "https://github.com/BurhanAhmad0/Ghizer-INN",
  },
  {
    id: "socially",
    layout: "right",
    title: "Socially",
    category: "Social platform",
    status: "Personal project",
    image: "https://res.cloudinary.com/dqu9qfaol/image/upload/v1758362186/projectImg2_uequxy.png",
    imageAlt: "Screenshot of the Socially social media app",
    goal: "Build a place where people can share posts and talk to each other instantly.",
    built: [
      "Sign-up and login with JWT authentication",
      "Social feed with photo and media sharing",
      "Real-time chat and notifications with Socket.IO",
    ],
    contribution: "Built the interface, the API and the real-time layer on my own.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO"],
    live: "https://sociallyconnectapp.vercel.app/",
    repo: "https://github.com/BurhanAhmad0/Socially",
  },
  {
    id: "todopy",
    layout: "left",
    title: "ToDoPy",
    category: "Task management app",
    status: "Personal project",
    image: "https://res.cloudinary.com/dqu9qfaol/image/upload/v1758361788/projectImg1_n6iopp.png",
    imageAlt: "Screenshot of the ToDoPy task management app",
    goal: "Give each user a private, simple place to plan and track their tasks.",
    built: [
      "Add, edit, delete and complete tasks",
      "User accounts with JWT and protected routes",
      "REST API with MongoDB storage and a responsive layout",
    ],
    contribution: "Built the front end, API and database myself.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    live: "https://todopyapp.vercel.app/",
    repo: "https://github.com/BurhanAhmad0/ToDoPy",
  },
];

export const PROCESS = [
  { step: "Understand", text: "We talk about your business, your customers and what the website needs to do." },
  { step: "Plan", text: "I define the scope, deliverables and timeline so we agree before any work starts." },
  { step: "Build", text: "I develop the site or feature, test it on phone and desktop, and show you progress." },
  { step: "Deliver", text: "I deploy it, check that everything works live, and hand it over to you." },
];

export const FACTS = [
  ["Based in", "Pakistan"],
  ["Freelancing since", "January 2023"],
  ["Studying", "BS Computer Science, University of Central Punjab (2023–2027)"],
  ["Works with", "JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS, Git"],
  ["Languages", "English, Urdu, Punjabi"],
];
