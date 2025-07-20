import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import CVSection from './components/cv-section';
import SocialLinks from './components/social-links';
import ContactForm from './components/contact-form';
import Footer from './components/footer';

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="joseph-portfolio-theme">
    <Toaster />
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <CVSection />
        <SocialLinks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;