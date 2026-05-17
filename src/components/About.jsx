import { motion } from 'framer-motion';
import Section from '@components/Section.jsx';
import avatar from '@assets/avatar-jp.png';
import { aboutActs, profileFacts } from '@services/portfolioData.js';

export default function About() {
  return (
    <Section id="historia" eyebrow="Historia corta" title="Empírico por elección. Preciso por oficio.">
      <div className="about-grid">
        <motion.div
          className="avatar-panel glass-card"
          initial={{ opacity: 0, rotateY: -10, y: 20 }}
          whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img src={avatar} alt="Avatar ilustrado de Juan Pablo Sánchez Rodríguez" loading="lazy" />
          <div className="portrait-meta">
            <span>Juan Pablo / Bogotá D.C.</span>
            <strong>Desarrollador full stack con mentalidad de producto y operación.</strong>
            <p>Puede aportar en frontend, backend, infraestructura Linux, ERP e IA aplicada dentro de equipos técnicos.</p>
          </div>
        </motion.div>

        <div className="acts-list">
          <div className="cv-facts">
            {profileFacts.map(([label, value]) => (
              <article key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </article>
            ))}
          </div>
          {aboutActs.map((act, index) => (
            <motion.article
              className="act-card"
              key={act.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.42, delay: index * 0.07, ease: 'easeOut' }}
            >
              <span>{act.label}</span>
              <h3>{act.title}</h3>
              <p>{act.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
