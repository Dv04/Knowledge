import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Publication from './components/Publication';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function CurrentHomepage() {
  return (
    <main>
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Publication />
      <Skills />
      <Contact />
    </main>
  );
}
