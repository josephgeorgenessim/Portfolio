import { motion } from "framer-motion";
import { FileTextIcon, DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function CVSection() {
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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Resume</span>
            </h2>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground mb-8 max-w-lg mx-auto"
          >
            Download my resume to learn more about my skills, experience, and education.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="bg-background p-8 rounded-lg shadow-md inline-block">
              <div className="mb-6">
                <div className="w-16 h-20 bg-muted relative mx-auto mb-4">
                  <div className="absolute top-0 right-0 w-5 h-5 bg-muted transform translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                  <FileTextIcon className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Joseph_Nessim_CV.pdf</h3>
                <p className="text-sm text-muted-foreground">Updated: July 2023</p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white shadow-md shadow-blue-500/20"
                  size="lg"
                >
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2">Looking for Opportunities</h3>
            <p className="text-muted-foreground">
              Currently open to full-time positions and freelance projects.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}