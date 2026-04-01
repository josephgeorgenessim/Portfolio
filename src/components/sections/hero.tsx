import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";
import { Button } from "../ui/button";

// Particle component for the animated background
function Particle({ index }: { index: number }) {
  const size = Math.random() * 3 + 1;
  const initialX = Math.random() * 100;
  const initialY = Math.random() * 100;
  const duration = Math.random() * 15 + 10;
  const delay = Math.random() * 5;
  
  return (
    <motion.div
      className="absolute bg-blue-500/30 dark:bg-blue-400/20 rounded-full z-0"
      style={{
        width: size,
        height: size,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
      }}
    />
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  
  // To avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Texts to be animated
  const name = "Joseph Nessim";
  const title = "Full-Stack Web Developer";
  
  // Scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section 
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen pb-10 overflow-hidden"
    >
      {/* Animated particles background */}
      {mounted && (
        <>
          {[...Array(20)].map((_, index) => (
            <Particle key={index} index={index} />
          ))}
        </>
      )}
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl mb-4 text-muted-foreground">Hello, I'm</p>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.4 + index * 0.08,
                }}
                className="inline-block"
              >
                {char === " " ? <span>&nbsp;</span> : char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + name.length * 0.08 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent font-medium">
              {title}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 + name.length * 0.08 }}
          >
            <p className="text-base md:text-lg mb-8 text-muted-foreground max-w-xl mx-auto">
              Full-Stack Web Developer with strong experience building scalable and secure web and mobile applications using React, Next.js, Node.js, and Express.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 + name.length * 0.08 }}
          >
            <Button 
              onClick={scrollToAbout}
              className="group"
              size="lg"
            >
              Learn More 
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="inline-block ml-2"
              >
                <ArrowDownIcon className="h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}