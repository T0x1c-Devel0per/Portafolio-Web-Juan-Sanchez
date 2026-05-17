import CustomCursor from '@components/CustomCursor.jsx';
import Header from '@components/Header.jsx';
import Hero from '@components/Hero.jsx';
import About from '@components/About.jsx';
import Projects from '@components/Projects.jsx';
import Skills from '@components/Skills.jsx';
import Contact from '@components/Contact.jsx';
import ScrollProgress from '@components/ScrollProgress.jsx';
import { useSectionTitle } from '@hooks/useSectionTitle.js';

export default function App() {
  useSectionTitle();

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
