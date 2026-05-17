import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMouseTilt } from '@hooks/useMouseTilt.js';

export default function ProjectCard({ project }) {
  const tilt = useMouseTilt(8);

  return (
    <motion.article
      className="project-card glass-card magnetic"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.42, ease: 'easeOut' }}
      {...tilt}
      style={tilt.style}
    >
      <div className="project-topline">
        <span>{project.accent}</span>
        <a href={project.url} aria-label={`Ver ${project.name}`}>
          <ExternalLink size={18} />
        </a>
      </div>
      <h3>{project.name}</h3>
      <div className="project-flow">
        <p>
          <strong>Problema:</strong> {project.problem}
        </p>
        <p>
          <strong>Solucion:</strong> {project.solution}
        </p>
      </div>
      <div className="project-outcome">
        <span>Resultado</span>
        <strong>{project.outcome}</strong>
      </div>
      <ul>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.article>
  );
}
