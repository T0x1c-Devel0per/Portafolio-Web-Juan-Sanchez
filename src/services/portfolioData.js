export const owner = {
  name: 'Juan Pablo Sánchez Rodríguez',
  location: 'Bogotá D.C., Colombia',
  role: 'Full Stack Developer',
  tagline: 'Full Stack Developer · IA aplicada · Infraestructura que escala',
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/tu-usuario',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/tu-usuario'
};

export const heroSignals = [
  ['+5 años en industria', 'Trayectoria continua construyendo soluciones de software en distintos contextos.'],
  ['1 año certificado', 'Experiencia laboral certificada aplicando estas capacidades en entornos reales.'],
  ['Stack completo', 'React/Vite + Node.js + datos + despliegue Linux en un solo flujo.'],
  ['IA aplicada', 'Automatizaciones y asistentes orientados a operaciones reales, no a demo.']
];

export const aboutActs = [
  {
    label: 'Acto 01',
    title: 'Aprendió construyendo, iterando y corrigiendo en entorno real.',
    body:
      'Juan Pablo empezó como autodidacta: resolviendo problemas concretos con código, despliegues y pruebas reales. Lleva más de 5 años en la industria y luego formalizó esa base con certificaciones Full Stack en la Universidad Nacional de Colombia y Frontend en la Universidad de Antioquia.'
  },
  {
    label: 'Acto 02',
    title: 'Hoy conecta producto, backend, datos e infraestructura.',
    body:
      'Construye interfaces en React, servicios backend en Node.js, diseña APIs REST y trabaja con MySQL y MongoDB. También administra despliegues en Ubuntu, seguridad de endpoints y desarrollos en Odoo 18 SaaS.'
  },
  {
    label: 'Acto 03',
    title: 'Su foco es impacto operativo, no complejidad innecesaria.',
    body:
      'Tiene 1 año de experiencia laboral certificada en estas áreas y aplica IA para simplificar procesos y reducir fricción en equipos. Trabaja desde Bogotá con estándares globales.'
  }
];

export const profileFacts = [
  ['Ubicación', 'Bogotá D.C., Colombia'],
  ['Trayectoria', 'Más de 5 años en la industria de software'],
  ['Experiencia certificada', '1 año de experiencia laboral certificada'],
  ['Formación', 'Full Stack UNAL · Frontend UdeA'],
  ['Enfoque', 'React, Node.js, Linux, APIs e IA'],
  ['Perfil', 'Autodidacta certificado, mentalidad de producto']
];

export const projects = [
  {
    name: 'Asistente IA de Voz y Texto',
    stack: ['React', 'Node.js', 'Webhooks', 'IA aplicada'],
    problem: 'Atender consultas repetitivas sin saturar al equipo operativo.',
    solution: 'Asistente con voz y texto conectado por webhooks para responder y ejecutar acciones con contexto.',
    url: '#contacto',
    accent: 'IA aplicada',
    outcome: 'Reduce tiempos de respuesta y demuestra IA integrada a procesos reales.'
  },
  {
    name: 'API Gateway para Apps Node.js',
    stack: ['Node.js', 'Ubuntu', 'SSL', 'Rate limiting'],
    problem: 'Exposición de endpoints y configuraciones dispersas en producción.',
    solution: 'Gateway centralizado con SSL, control de tráfico y políticas de seguridad antes del backend.',
    url: '#contacto',
    accent: 'Infraestructura',
    outcome: 'Mejora estabilidad operativa y reduce superficie de ataque.'
  },
  {
    name: 'Módulo Operativo en Odoo 18 SaaS',
    stack: ['Odoo 18', 'Python', 'ERP', 'Automatizaciones'],
    problem: 'Procesos internos con doble digitación y poca trazabilidad.',
    solution: 'Módulo con reglas de negocio y automatizaciones para centralizar el flujo en Odoo.',
    url: '#contacto',
    accent: 'ERP',
    outcome: 'Aumenta control operativo y reduce errores manuales.'
  },
  {
    name: 'Dashboard Producto Full Stack',
    stack: ['Vite', 'React', 'MySQL', 'MongoDB'],
    problem: 'Datos de producto dispersos, difíciles de leer en tiempo de decisión.',
    solution: 'Dashboard full stack que integra datos transaccionales y eventos en una sola vista accionable.',
    url: '#contacto',
    accent: 'Producto',
    outcome: 'Acelera decisiones con información clara y centralizada.'
  }
];

export const skillClusters = [
  {
    name: 'Producto',
    context: 'Diseño y construcción de producto usable con arquitectura mantenible.',
    techs: [
      ['React/Vite', 'Interfaces rápidas y modulares enfocadas en experiencia de uso.'],
      ['Node.js', 'Servicios backend listos para evolucionar con el producto.'],
      ['APIs REST', 'Contratos claros para conectar frontend, backend y terceros.'],
      ['MySQL', 'Modelo relacional para consistencia y operaciones críticas.'],
      ['MongoDB', 'Modelo documental para flujos flexibles y iteración rápida.']
    ]
  },
  {
    name: 'Infraestructura',
    context: 'Operación en servidor y seguridad para sostener producto en producción.',
    techs: [
      ['Ubuntu Linux', 'Despliegue y administración estable de aplicaciones Node.js.'],
      ['SSL', 'Cifrado de tráfico para proteger información en tránsito.'],
      ['DDoS / Brute force', 'Mitigación de abuso antes de impactar la aplicación.'],
      ['SQL Injection', 'Defensa en validación y endpoints sensibles.'],
      ['Odoo 18 SaaS', 'Configuración y extensión ERP alineada a procesos reales.']
    ]
  },
  {
    name: 'IA & Automatización',
    context: 'Automatizaciones e IA aterrizadas a productividad operativa.',
    techs: [
      ['Chatbots voz/texto', 'Asistentes para soporte y tareas frecuentes de operación.'],
      ['Webhooks', 'Integración por eventos entre plataformas y procesos internos.'],
      ['Orquestación', 'Secuencias automáticas con control de reglas y estados.'],
      ['Claude Code', 'Aceleración de desarrollo con revisión técnica humana.'],
      ['Cursor / Copilot', 'Mayor velocidad de entrega sin perder calidad de código.']
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
