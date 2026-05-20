import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '@components/Section.jsx';
import { educationItems, experienceItems } from '@services/portfolioData.js';

export default function Trajectory() {
  return (
    <Section
      id="trayectoria"
      eyebrow="CV resumido"
      title="Formación y experiencia conectadas con trabajo real."
      className="trajectory-section"
    >
      <div className="trajectory-grid">
        <TimelineColumn
          icon={<BriefcaseBusiness size={20} />}
          title="Experiencia laboral"
          items={experienceItems}
          renderItem={(item) => (
            <>
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <strong>
                {item.company} · {item.type}
              </strong>
              <p>{item.description}</p>
            </>
          )}
        />

        <TimelineColumn
          icon={<GraduationCap size={20} />}
          title="Formación"
          items={educationItems}
          renderItem={(item) => (
            <>
              <span>{item.level}</span>
              <h3>{item.title}</h3>
              <strong>{item.institution}</strong>
              <p>
                {item.status} · {item.location}
              </p>
            </>
          )}
        />
      </div>
    </Section>
  );
}

function TimelineColumn({ icon, title, items, renderItem }) {
  return (
    <article className="timeline-column glass-card">
      <div className="timeline-heading">
        {icon}
        <h3>{title}</h3>
      </div>

      <div className="timeline-list">
        {items.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={`${title}-${item.title ?? item.period}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.38, delay: index * 0.06, ease: 'easeOut' }}
          >
            {renderItem(item)}
          </motion.div>
        ))}
      </div>
    </article>
  );
}
