import { motion } from 'framer-motion';
import Section from '@components/Section.jsx';
import { skillClusters } from '@services/portfolioData.js';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Mapa técnico" title="Tres mundos conectados en una misma cabeza.">
      <div className="clusters-grid">
        {skillClusters.map((cluster, clusterIndex) => (
          <motion.article
            className="cluster"
            key={cluster.name}
            initial={{ opacity: 0, y: 22, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.46, delay: clusterIndex * 0.08, ease: 'easeOut' }}
          >
            <div className="cluster-core">
              <span>{cluster.name}</span>
              <p>{cluster.context}</p>
            </div>

            <div className="constellation">
              {cluster.techs.map(([tech, context], index) => (
                <button className="tech-node magnetic" key={tech} style={{ '--index': index }} type="button">
                  {tech}
                  <span role="tooltip">{context}</span>
                </button>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
