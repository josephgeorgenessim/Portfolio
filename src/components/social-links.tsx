import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

// Social media links
const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    url: "https://linkedin.com/in/josephnessim",
    color: "#0077B5",
    username: "@josephnessim",
    description: "Connect with me professionally",
  },
  {
    id: 2,
    name: "GitHub",
    icon: <Github className="w-6 h-6" />,
    url: "https://github.com/josephgeorgenessim",
    color: "#333",
    username: "@josephnessim",
    description: "Check out my code repositories",
  },
  {
    id: 3,
    name: "Email",
    icon: <Mail className="w-6 h-6" />,
    url: "mailto:joseph.nessim@example.com",
    color: "#EA4335",
    username: "joseph.nessim@example.com",
    description: "Send me an email",
  },
  {
    id: 4,
    name: "Portfolio",
    icon: <ExternalLink className="w-6 h-6" />,
    url: "#",
    color: "#6366F1",
    username: "josephgeorge.dev",
    description: "My personal website",
  },
];

export default function SocialLinks() {
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">With Me</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Feel free to reach out to me on any of these platforms. I'm always open to new connections and opportunities.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target={link.name !== "Portfolio" ? "_blank" : "_self"}
                rel="noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5, x: 0 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center p-6 bg-background rounded-lg shadow-md border border-muted-foreground/10 hover:shadow-lg transition-shadow"
              >
                <div 
                  className="mr-5 p-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: `${link.color}20` }}
                >
                  <span style={{ color: link.color }}>{link.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{link.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {link.username}
                  </p>
                </div>
                <div className="ml-auto">
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}