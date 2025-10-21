import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <ParticlesBackground />
      <ScrollProgressIndicator />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <BackToTop />
    </div>
  );
}

export default App;
