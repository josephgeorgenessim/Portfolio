"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C++", "Python", "Java", "JavaScript", "HTML", "CSS", "SQL", "TypeScript"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Next.js (App Router)", "Redux", "Bootstrap", "Tailwind CSS", "SASS", "Shadcn/ui"]
    },
    {
      category: "Backend & Tools",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Refresh Tokens", "Git", "GitHub"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem-solving", "Communication", "Collaboration", "Time Management", "Adaptability", "Critical Thinking", "Leadership"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-center">{category.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="text-xs py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}