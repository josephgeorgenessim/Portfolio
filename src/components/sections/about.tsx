import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../theme/ThemeProvider";

// Define tech stack with icons
const techStack = [
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain",
    category: "backend",
    color: "#4DB33D"
  },
  {
    name: "Express",
    icon: "devicon-express-original",
    category: "backend",
    color: "#000000"
  },
  {
    name: "React",
    icon: "devicon-react-original",
    category: "frontend",
    color: "#61DAFB"
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain",
    category: "backend",
    color: "#68A063"
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    category: "language",
    color: "#F7DF1E"
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    category: "language",
    color: "#3178C6"
  },
  {
    name: "HTML5",
    icon: "devicon-html5-plain",
    category: "frontend",
    color: "#E34F26"
  },
  {
    name: "CSS3",
    icon: "devicon-css3-plain",
    category: "frontend",
    color: "#1572B6"
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-plain",
    category: "frontend",
    color: "#06B6D4"
  },
  {
    name: "Redux",
    icon: "devicon-redux-original",
    category: "frontend",
    color: "#764ABC"
  },
  {
    name: "Git",
    icon: "devicon-git-plain",
    category: "tools",
    color: "#F05032"
  },
  {
    name: "GitHub",
    icon: "devicon-github-original",
    category: "tools",
    color: "#181717"
  },
];

export default function About() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Me</span>
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-background rounded-lg p-6 md:p-8 shadow-md mb-10"
          >
            <p className="text-muted-foreground mb-4">
              Full-Stack Web Developer with strong experience building scalable and secure web and mobile applications using React, Next.js, Node.js, and Express. Proven ability to deliver production-ready systems, optimize performance, and design clean APIs.
            </p>

            <p className="text-muted-foreground mb-4">
              I'm passionate about backend architecture, DevOps practices, and system design, with a solid foundation in networking and cloud computing. Currently a 4th-year Computer Science student at Benha University, I'm constantly learning and exploring new technologies.
            </p>

            <p className="text-muted-foreground">
              I believe in writing clean, maintainable code and building applications with scalability in mind. Whether it's a dynamic dashboard or a complex portal, I focus on delivering seamless user experiences through the MERN stack and modern cloud solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Tech <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Stack</span>
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-12"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center"
              >
                <div className="bg-background p-4 rounded-full shadow-md mb-3 w-16 h-16 flex items-center justify-center">
                  <i
                    className={`${tech.icon} text-3xl`}
                    style={{ color: theme === 'dark' ? 'inherit' : tech.color }}
                  ></i>
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>


          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-background rounded-lg p-6 shadow-md">
              <div>
                <h3 className="text-xl font-semibold mb-2">Let's Work Together!</h3>
                <p className="text-muted-foreground">Interested in collaborating or have a project in mind?</p>
              </div>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-violet-500 text-white font-medium px-6 py-3 rounded-md text-center shadow-lg shadow-blue-500/20"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}