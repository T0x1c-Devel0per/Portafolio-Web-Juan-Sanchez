import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion.js';

export default function Section({ id, eyebrow, title, children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id={id} ref={ref} className={`section-shell ${className}`}>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="section-inner"
      >
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </motion.div>
    </section>
  );
}
