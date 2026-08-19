import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Focus from './components/Focus';
import AreasOfFocus from './components/AreasOfFocus';
import LearningJourney from './components/LearningJourney';
import Experience from './components/Experience';
import Vision from './components/Vision';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <AreasOfFocus />
        <LearningJourney />
        <Experience />
        <Vision />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
