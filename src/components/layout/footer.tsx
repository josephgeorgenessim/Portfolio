import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-muted-foreground/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Joseph George Nessim. All rights reserved.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}