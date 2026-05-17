export const owner = {
  name: 'Juan Pablo Sánchez Rodríguez',
  location: 'Bogotá D.C., Colombia',
  role: 'Full Stack Developer',
  tagline: 'Full Stack Developer · IA aplicada · Infraestructura que escala',
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/tu-usuario',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/tu-usuario'
};

export const heroSignals = [
  ['Full Stack', 'Frontend, backend, bases de datos y despliegue.'],
  ['IA aplicada', 'Automatización y asistentes útiles para operación.'],
  ['Bogotá -> global', 'Trabajo remoto o híbrido con estándares de equipo.']
];

export const aboutActs = [
  {
    label: 'Acto 01',
    title: 'Aprendió rompiendo cosas, no memorizando slides.',
    body:
      'Juan Pablo empezó como empiezan los perfiles realmente curiosos: probando, fallando, volviendo a levantar el servidor y entendiendo qué pasó. Después formalizó ese camino con certificaciones Full Stack de la Universidad Nacional de Colombia y Frontend de la Universidad de Antioquia.'
  },
  {
    label: 'Acto 02',
    title: 'Hoy conecta producto, backend e infraestructura.',
    body:
      'Construye frontends en React, APIs en Node.js, bases de datos relacionales y no relacionales, despliegues en Ubuntu, módulos para Odoo 18 SaaS y flujos donde la IA responde con voz, texto o automatizaciones útiles.'
  },
  {
    label: 'Acto 03',
    title: 'La tecnología tiene que aliviar carga humana.',
    body:
      'Su brújula no es usar la herramienta más brillante, sino la que resuelve el problema con menos fricción. Vive en Bogotá, trabaja con estándares globales y defiende una IA que acompaña a las personas, no que las borra del mapa.'
  }
];

export const profileFacts = [
  ['Ubicación', 'Bogotá D.C., Colombia'],
  ['Formación', 'Full Stack UNAL · Frontend UdeA'],
  ['Enfoque', 'React, Node.js, Linux, APIs e IA'],
  ['Perfil', 'Autodidacta certificado, orientado a producto']
];

export const projects = [
  {
    name: 'Asistente IA de Voz y Texto',
    stack: ['React', 'Node.js', 'Webhooks', 'IA aplicada'],
    problem:
      'Automatiza respuestas operativas con conversación natural, manteniendo contexto entre voz, texto y acciones externas.',
    url: '#contacto',
    accent: 'IA',
    outcome: 'Demuestra criterio para integrar IA a flujos reales de negocio.'
  },
  {
    name: 'API Gateway para Apps Node.js',
    stack: ['Node.js', 'Ubuntu', 'SSL', 'Rate limiting'],
    problem:
      'Centraliza endpoints, certificados y protección contra fuerza bruta, DDoS y tráfico sospechoso antes de tocar la app.',
    url: '#contacto',
    accent: 'Infra',
    outcome: 'Muestra dominio de despliegue, seguridad y operación backend.'
  },
  {
    name: 'Módulo Operativo en Odoo 18 SaaS',
    stack: ['Odoo 18', 'Python', 'ERP', 'Automatizaciones'],
    problem:
      'Convierte procesos manuales en flujos trazables dentro del ERP, con reglas de negocio claras y menos doble digitación.',
    url: '#contacto',
    accent: 'ERP',
    outcome: 'Evidencia capacidad para entender procesos internos y ERP.'
  },
  {
    name: 'Dashboard Producto Full Stack',
    stack: ['Vite', 'React', 'MySQL', 'MongoDB'],
    problem:
      'Une indicadores de producto y datos transaccionales en una interfaz rápida, legible y lista para tomar decisiones.',
    url: '#contacto',
    accent: 'Full',
    outcome: 'Refuerza experiencia construyendo producto de punta a punta.'
  }
];

export const skillClusters = [
  {
    name: 'Producto',
    context: 'Interfaces, APIs y decisiones que sí le importan al usuario.',
    techs: [
      ['React/Vite', 'Frontend rápido, modular y mantenible.'],
      ['Node.js', 'Backends claros para productos reales.'],
      ['APIs REST', 'Diseño, construcción e integración de servicios.'],
      ['MySQL', 'Datos relacionales para operaciones consistentes.'],
      ['MongoDB', 'Modelos flexibles para productos que cambian.']
    ]
  },
  {
    name: 'Infraestructura',
    context: 'Servidores, despliegues y seguridad para que la app no viva en modo demo.',
    techs: [
      ['Ubuntu Linux', 'Administración y despliegue de apps Node.js.'],
      ['SSL', 'Certificados y tráfico seguro en producción.'],
      ['DDoS / Brute force', 'Capas de protección antes del backend.'],
      ['SQL Injection', 'Validación y defensa de endpoints críticos.'],
      ['Odoo 18 SaaS', 'Configuración y módulos sobre procesos ERP.']
    ]
  },
  {
    name: 'IA & Automatización',
    context: 'IA aplicada a tareas concretas, no a humo de laboratorio.',
    techs: [
      ['Chatbots voz/texto', 'Asistentes que conversan y ejecutan.'],
      ['Webhooks', 'Eventos que conectan herramientas sin fricción.'],
      ['Orquestación', 'Flujos automáticos con intención de producto.'],
      ['Claude Code', 'Desarrollo asistido con criterio técnico.'],
      ['Cursor / Copilot', 'Velocidad sin soltar revisión humana.']
    ]
  }
];

export const projectSuggestions = [
  'Asistente comercial con IA que responda por voz y texto, integrado a CRM/ERP mediante webhooks.',
  'Plantilla de despliegue seguro para apps Node.js en Ubuntu con SSL, rate limiting y monitoreo base.',
  'Módulo Odoo 18 SaaS para automatizar solicitudes internas, aprobaciones y trazabilidad.',
  'Dashboard full stack para mezclar métricas operativas en MySQL con eventos flexibles en MongoDB.',
  'API REST pública de demostración con documentación, autenticación y protección contra abuso.'
];
