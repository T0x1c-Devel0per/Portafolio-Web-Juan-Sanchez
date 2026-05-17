import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, MessageCircle, MousePointer2 } from 'lucide-react';
import { heroSignals, owner } from '@services/portfolioData.js';

const NetworkScene = lazy(() => import('@scenes/NetworkScene.jsx'));
const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-visual">
        <Suspense fallback={<div className="scene-loader">Conectando nodos...</div>}>
          <NetworkScene />
        </Suspense>
      </div>

      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } }
        }}
      >
        <motion.p className="hero-kicker" variants={heroItem} transition={{ duration: 0.42, ease: 'easeOut' }}>
          Bogotá / sistemas conectados / IA práctica
        </motion.p>
        <motion.div className="availability-pill" variants={heroItem} transition={{ duration: 0.42, ease: 'easeOut' }}>
          <span />
          Abierto a oportunidades Full Stack, Frontend e IA aplicada.
        </motion.div>
        <motion.h1 variants={heroItem} transition={{ duration: 0.52, ease: 'easeOut' }}>
          {owner.name}
        </motion.h1>
        <motion.p className="hero-tagline" variants={heroItem} transition={{ duration: 0.42, ease: 'easeOut' }}>
          {owner.tagline}
        </motion.p>
        <motion.p className="hero-text" variants={heroItem} transition={{ duration: 0.42, ease: 'easeOut' }}>
          Perfil técnico con base práctica: construye interfaces, APIs, bases de datos, despliegues Linux y soluciones
          con IA aplicada. Empírico por elección, certificado para formalizar lo aprendido haciendo.
        </motion.p>
        <motion.div className="hero-actions" variants={heroItem} transition={{ duration: 0.42, ease: 'easeOut' }}>
          <a className="button button-primary magnetic" href="#proyectos">
            Ver experiencia <ArrowDownRight size={18} />
          </a>
          <a className="button button-ghost magnetic" href="#contacto">
            Contactar <MessageCircle size={18} />
          </a>
        </motion.div>
        <motion.p className="network-hint" variants={heroItem} transition={{ duration: 0.42, ease: 'easeOut' }}>
          <MousePointer2 size={14} />
          Pasa el cursor por la red para revisar habilidades técnicas.
        </motion.p>
        <motion.div className="hero-signals" variants={heroItem} transition={{ duration: 0.42, ease: 'easeOut' }}>
          {heroSignals.map(([metric, text]) => (
            <article key={metric}>
              <strong>{metric}</strong>
              <span>{text}</span>
            </article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
