import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './components/theme/ThemeProvider';
import Navbar from './components/layout/navbar';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Projects from './components/sections/projects';
import CVSection from './components/sections/cv-section';
import SocialLinks from './components/layout/social-links';
import ContactForm from './components/sections/contact-form';
import Footer from './components/layout/footer';

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