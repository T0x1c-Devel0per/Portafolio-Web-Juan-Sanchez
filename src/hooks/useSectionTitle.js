import { useEffect } from 'react';

const sectionTitles = {
  inicio: 'Juan Pablo Sánchez Rodríguez | Programador Full Stack',
  historia: 'Perfil | Juan Pablo Sánchez Rodríguez',
  trayectoria: 'Trayectoria | Formación y experiencia',
  proyectos: 'Proyectos | Aplicaciones web y datos',
  skills: 'Skills | Frontend, backend y bases de datos',
  asistente: 'Asistente CV | Pregúntale al chatbot',
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
