import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Joseph George</h3>
            <p className="text-muted-foreground">
              Full-stack developer passionate about creating amazing web experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="block text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2">
              <Link href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Get in Touch
              </Link>
              <Link href="mailto:josephgeorgenessim@gmail.com" className="block text-muted-foreground hover:text-foreground transition-colors">
                josephgeorgenessim@gmail.com
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/joseph-george-nessim/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="mailto:josephgeorgenessim@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Joseph George. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}