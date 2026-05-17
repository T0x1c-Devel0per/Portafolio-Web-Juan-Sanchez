import { useEffect } from 'react';

const sectionTitles = {
  inicio: 'Juan Pablo Sánchez Rodríguez | Full Stack Developer',
  historia: 'Historia | Juan Pablo Sánchez Rodríguez',
  proyectos: 'Proyectos | IA, APIs e Infraestructura',
  skills: 'Skills | Producto, Infraestructura e IA',
  contacto: 'Contacto | Hablemos'
};

export function useSectionTitle() {
  useEffect(() => {
    const sections = Object.keys(sectionTitles)
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries.find((entry) => entry.isIntersecting);
        if (active) document.title = sectionTitles[active.target.id];
      },
      { rootMargin: '-42% 0px -42% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
}
