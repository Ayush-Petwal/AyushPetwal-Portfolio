import project1 from "../assets/projects/project.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const ABOUT_TEXT = `Hello👋 I am Ayush Petwal, a student at Graphic Era Hill University, Batch of 2025 , I am a dedicated and versatile full-stack developer and competitive programmer with a passion for creating efficient and user-friendly web applications. With 1/2 years of experience, I have worked with a variety of technologies, including React , NextJs , NodeJs , MongoDB , Typescript , Tailwind CSS etc. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of full-stack development, I enjoy my most of time in competitive programming and improve my Data Structure and Algorithm and Problem Solving Skills .`;

export const PROJECTS = [
  {
    title: "VisuAlgo",
    image: project1,
    description:
      "This project will create an interactive tool to visualize how sorting and pathfinding algorithms work. It will allow users to see these algorithms in action, step-by-step, fostering a deeper understanding of their logic and efficiency.",
    technologies: ["React", "Tailwind CSS", "Data Structure Algorithm"],
    github : "https://github.com/Ayush-Petwal/VisuAlgo",
    livelink : "https://visualgorithem.vercel.app/",
  },
  {
    title: "Expense Tracking System",
    image: project2,
    description:
      "This project will develop a web application for users to effectively manage their finances through expense tracking. It will leverage the MERN stack (MongoDB, Express, React, Node.js) to create a robust and user-friendly experience.",
    technologies: ["React", "NodeJs" , "ExpressJs" , "MongoDB"],
    github : "https://github.com/Ayush-Petwal/Expence-Tracking-System",
    livelink : "https://expencetrackingsystem.vercel.app/",
  },
  {
    title: "Let’s Meet",
    image: project3,
    description:
      "Let's Meet is a web-based video conferencing platform built with Next.js, inspired by popular tools like Zoom. It aims to provide a seamless and efficient way for users to connect and collaborate virtually.",
    technologies: ["NextJs", "Tailwind CSS" , "Shadcn"],
    github : "https://github.com/Ayush-Petwal/lets_meet/",
    livelink : "https://letsmeetayushpetwal.vercel.app/",
  },
  {
    title: " Wine Quality Prediction",
    image: project4,
    description:
      "This project aims to predict wine quality using machine learning by analyzing its chemical composition.",
    technologies: ["Python", "Machine Learning"],
    github : "https://github.com/Ayush-Petwal/Wine-Quality-Prediction",
    livelink : "https://github.com/Ayush-Petwal/Wine-Quality-Prediction",
  },
];

export const CONTACT = {
  address: "Dehradun , Uttrakhand , INDIA, 248008 ",
  email: "ayushpetwal003@gmail.com",
};
