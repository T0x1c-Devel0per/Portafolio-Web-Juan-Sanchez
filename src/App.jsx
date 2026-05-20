import CustomCursor from '@components/CustomCursor.jsx';
import Header from '@components/Header.jsx';
import Hero from '@components/Hero.jsx';
import About from '@components/About.jsx';
import Trajectory from '@components/Trajectory.jsx';
import Projects from '@components/Projects.jsx';
import Skills from '@components/Skills.jsx';
import CvChat from '@components/CvChat.jsx';
import Contact from '@components/Contact.jsx';
import PrintableCV from '@components/PrintableCV.jsx';
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
        <Trajectory />
        <Projects />
        <Skills />
        <CvChat />
        <Contact />
      </main>
      <PrintableCV />
    </>
  );
}
