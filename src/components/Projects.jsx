import Section from '@components/Section.jsx';
import ProjectCard from '@components/ProjectCard.jsx';
import { projects } from '@services/portfolioData.js';

export default function Projects() {
  return (
    <Section id="proyectos" eyebrow="Evidencia técnica" title="Casos reales en formato problema, solución y resultado.">
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
