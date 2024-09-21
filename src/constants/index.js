import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  linkedin,
  doordash,
  nielsen,
  kubernetes,
  python,
  golang,
  postgres,
  java,
  gitlab,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const links = [
  {
    title: "LinkedIn",
    icon: linkedin,
  },
  {
    title: "Resume",
    icon: mobile,
  },
  {
    title: "GitHub",
    icon: github,
  },
  {
    title: "More To Come",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "gitlab",
    icon: gitlab,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "DoorDash",
    icon: doordash,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [],
  },
  {
    title: "Software Engineer",
    company_name: "Nielsen",
    icon: nielsen,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Sep 2024",
    points: [
      "Platform Tools DevOps Team",
      "The Platform team provides services that power most of Nielsen's workloads. Each service operates at very high scale (PB's of data, millions of jobs, etc).",
      "Developed multiple services from the ground up, taking them from 0 to 1. Most notably, leading the development of Platform's next-gen Platform as a Service (PaaS) application and building an internal generative AI chatbot that later became the company's ChatGPT replacement.",
      "Automated builds + deployments and managed these services in the cloud with tools such as: CI/CD pipelines, Docker, Kubernetes, Helm, and AWS.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Nielsen",
    icon: nielsen,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Aug 2021",
    points: [
      "Platform Tools DevOps Team",
      "Developed and implemented an algorithm to determine optimal times to scale server resources. Estimated to save the team over $200,000 annually.",
      "Developed an Apache Airflow plugin to allow users to self-restart their Airflow webservers running in Kubernetes.",
      "Developed a React view to display the most accessed schemas and tables in the data lake.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, links };
