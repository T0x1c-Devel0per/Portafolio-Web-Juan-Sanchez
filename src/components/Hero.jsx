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
          Madrid, Cundinamarca / aplicaciones web / bases de datos
        </motion.p>
        <motion.div className="availability-pill" variants={heroItem} transition={{ duration: 0.42, ease: 'easeOut' }}>
          <span />
          Disponible para procesos con empresas, startups y equipos de producto.
        </motion.div>
        <motion.h1 variants={heroItem} transition={{ duration: 0.52, ease: 'easeOut' }}>
          {owner.name}
        </motion.h1>
        <motion.p className="hero-tagline" variants={heroItem} transition={{ duration: 0.42, ease: 'easeOut' }}>
          {owner.tagline}
        </motion.p>
        <motion.p className="hero-text" variants={heroItem} transition={{ duration: 0.42, ease: 'easeOut' }}>
          Construye y mantiene aplicaciones web: interfaces, backend, bases de datos y APIs REST. También aporta en
          gestión de software, soporte técnico y mejora continua de procesos.
        </motion.p>
        <motion.div className="hero-actions" variants={heroItem} transition={{ duration: 0.42, ease: 'easeOut' }}>
          <a className="button button-primary magnetic" href="#proyectos">
            Ver proyectos <ArrowDownRight size={18} />
          </a>
          <a className="button button-ghost magnetic" href="#contacto">
            Hablemos <MessageCircle size={18} />
          </a>
        </motion.div>
        <motion.p className="network-hint" variants={heroItem} transition={{ duration: 0.42, ease: 'easeOut' }}>
          <MousePointer2 size={14} />
          Pasa el cursor por la red para explorar habilidades clave.
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
