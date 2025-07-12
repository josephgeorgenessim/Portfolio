"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Rocket } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces with attention to detail."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated developer with 1 year of experience building web applications. 
            I love turning ideas into reality through code and creating solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-primary mx-auto">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started my development journey at Benha University, Faculty of Computer Science, where I discovered my passion for creating 
                digital solutions. With 1 year of professional experience, I focus on delivering high-quality, user-centered applications 
                using modern technologies and best practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical writing and mentoring.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">Benha University, Faculty of Computer Science</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Experience</h4>
                <p className="text-sm text-muted-foreground">1 Year in Full-Stack Development</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Focus</h4>
                <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, Node.js</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}