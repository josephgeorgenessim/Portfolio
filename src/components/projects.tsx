import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

// Project data - includes frontend, full-stack, and backend-only projects
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
    image: "/assets/projects/ecommerce_1.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
    ],
    liveLink: "https://e-commerce-sepia-three-89.vercel.app/",
    githubLink: "https://github.com/josephgeorgenessim/E-Commerce",
  },
  {
    id: 2,
    title: "To-Do List App",
    description:
      "A simple and secure to-do list application built with React for the frontend and Node.js for the backend. Features user authentication with JWT, allowing users to manage their personal tasks.",
    image: "/assets/projects/todolist.png",
    technologies: [
      "React",
      "Node.js",
      "JWT",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
    ],
    liveLink: "https://example.com/todolist",
    githubLink: "https://github.com/josephgeorgenessim/todo-list",
  },
  {
    id: 3,
    title: "RESTful API - E-commerce",
    description:
      "A secure RESTful API built with Node.js and Express. Features user authentication with JWT, role-based access control, and full CRUD operations for tasks and users.",
    image: "", 
    technologies: [
      "Node.js",
      "Express",
      "JWT",
      "MongoDB",
      "Mongoose",
      "Bcrypt",
    ],
    liveLink: "", 
    githubLink: "https://github.com/josephgeorgenessim/E-commerce_Backend",
  },
  {
    id: 4,
    title: "mobile-wallet",
    description:
      "A full-stack mobile wallet application with React Native and a Node.js backend. It features transaction management, user-specific data, and financial summaries.",
    image: "",
    technologies: [
      "React Native",
      "Node.js",
      "Express",
      "PostgreSQL",
      "TypeScript",
    ],
    liveLink: "",
    githubLink: "https://github.com/josephgeorgenessim/mobile-wallet",
  },
  {
    id: 5,
    title: "movie-app",
    description:
      "A responsive mobile app for browsing and searching movies, built with React Native, Expo, and TypeScript. It uses the TMDB API for data and Appwrite for backend services.",
    image: "",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "React Navigation",
      "NativeWind",
      "TMDB API",
      "Appwrite",
    ],
    liveLink: "",
    githubLink: "https://github.com/josephgeorgenessim/movie-app",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project reflects my skills and experience in full-stack development.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group border-muted-foreground/20">
                  {/* Project Image (with fallback) */}
                  <div className="relative overflow-hidden h-48">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="h-full"
                    >
                      <div
                        className="w-full h-full bg-muted flex items-center justify-center"
                        style={{
                          backgroundImage: project.image
                            ? `url(${project.image})`
                            : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        {!project.image && (
                          <span className="text-6xl opacity-50 group-hover:opacity-75 transition-opacity">
                            🖥️
                          </span>
                        )}
                      </div>

                      {/* Hover Action Buttons (only if links exist) */}
                      {(project.githubLink || project.liveLink) && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex gap-4">
                            {project.githubLink && (
                              <motion.a
                                href={project.githubLink.trim()}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-background text-foreground p-2 rounded-full"
                              >
                                <Github className="h-5 w-5" />
                              </motion.a>
                            )}
                            {project.liveLink && (
                              <motion.a
                                href={project.liveLink.trim()}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-background text-foreground p-2 rounded-full"
                              >
                                <ExternalLink className="h-5 w-5" />
                              </motion.a>
                            )}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="bg-muted">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Footer Links */}
                  <CardFooter>
                    <div className="flex gap-4">
                      {project.githubLink && (
                        <a
                          href={project.githubLink.trim()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm flex items-center text-muted-foreground hover:text-foreground"
                        >
                          <Github className="h-4 w-4 mr-1" /> Source
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink.trim()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm flex items-center text-muted-foreground hover:text-foreground"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                        </a>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA to GitHub */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <motion.a
              href="https://github.com/josephgeorgenessim"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              Visit My GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}