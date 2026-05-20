export const owner = {
  name: 'Juan Pablo Sánchez Rodríguez',
  location: 'Madrid, Cundinamarca, Colombia',
  role: 'Programador Full Stack',
  tagline: 'Programador Full Stack · Aplicaciones web · Bases de datos',
  phone: '+57 314 445 7149',
  email: 'jpssanchez03@gmail.com',
  portfolio: 'https://juanpasanchez07.netlify.app/',
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/tu-usuario',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/tu-usuario'
};

export const heroSignals = [
  ['Más de 2 años', 'Experiencia laboral desarrollando soluciones web robustas para procesos operativos reales.'],
  ['Full Stack', 'Especialidad en frontend moderno, servicios backend escalables y modelado de datos.'],
  ['Teletrabajo / Híbrido', 'Interés en roles remotos o híbridos con disponibilidad para trasladarse.'],
  ['Soporte y DevOps', 'Administración de servidores Linux, bases de datos y flujos de automatización n8n y Odoo.']
];

export const aboutActs = [
  {
    label: 'Perfil profesional',
    title: 'Desarrollador Full Stack enfocado en escalabilidad, automatización y UI/UX.',
    body:
      'Diseño y desarrollo de interfaces web dinámicas de alto rendimiento con React, Vite y Sass/SCSS. En la capa backend, arquitectura de microservicios y APIs REST seguras con Node.js y Express. Gestión experta de bases de datos relacionales y NoSQL (MySQL, PostgreSQL y MongoDB), administración de servidores Linux (Ubuntu) e integraciones avanzadas de mensajería (WhatsApp, Meta e Instagram) y automatización de procesos mediante n8n y ERP Odoo 18 SaaS.'
  },
  {
    label: 'Forma de trabajo',
    title: 'Resolución de problemas complejos mediante automatización y criterio técnico.',
    body:
      'Capacidad analítica para el aislamiento y resolución eficiente de bugs, depuración de flujos asíncronos y optimización de consultas SQL. Implementación de soluciones que unifican aplicaciones, almacenamiento y entornos de producción seguros.'
  },
  {
    label: 'Mentalidad',
    title: 'Ingeniería de calidad, metodologías ágiles y evolución constante.',
    body:
      'Trabajo ágil bajo metodología Scrum con foco en la entrega continua de valor. Apasionado por la arquitectura limpia, la mantenibilidad del código y la adaptación acelerada a nuevas tecnologías, compartiendo conocimiento dentro del equipo.'
  }
];

export const profileFacts = [
  ['Ubicación', 'Madrid, Cundinamarca'],
  ['Edad', '24 años'],
  ['Estado civil', 'Soltero'],
  ['Nivel de estudio', 'Técnica Laboral'],
  ['Experiencia', 'Más de 2 años'],
  ['Disponibilidad', 'Traslado y teletrabajo']
];

export const projects = [
  {
    name: 'Gestión de Mantenimientos para Estaciones de Servicio',
    stack: ['React', 'Node.js', 'SQL', 'APIs REST'],
    problem: 'Los mantenimientos correctivos y preventivos necesitaban mejor control, consulta y seguimiento operativo.',
    solution: 'Aplicación web para registrar, consultar y administrar información de mantenimiento, apoyada en consultas SQL y servicios backend.',
    url: '#contacto',
    accent: 'Experiencia real',
    outcome: 'Centraliza información operativa y mejora el seguimiento de tareas técnicas.'
  },
  {
    name: 'API Gateway para Apps Node.js',
    stack: ['Node.js', 'Express', 'Ubuntu', 'SSL'],
    problem: 'Exposición de endpoints y configuraciones dispersas en producción.',
    solution: 'Gateway centralizado con SSL, control de tráfico y políticas de seguridad antes del backend.',
    url: '#contacto',
    accent: 'Infraestructura',
    outcome: 'Mejora estabilidad operativa y reduce superficie de ataque.'
  },
  {
    name: 'Dashboard Producto Full Stack',
    stack: ['Vite', 'React', 'MySQL', 'PostgreSQL'],
    problem: 'Datos operativos dispersos, difíciles de leer en tiempo de decisión.',
    solution: 'Dashboard full stack que integra datos transaccionales en una vista clara para consulta y análisis.',
    url: '#contacto',
    accent: 'Datos',
    outcome: 'Acelera decisiones con información clara y centralizada.'
  },
  {
    name: 'Asistente IA de Voz y Texto',
    stack: ['React', 'Node.js', 'Webhooks', 'IA aplicada'],
    problem: 'Atender consultas repetitivas sin saturar al equipo operativo.',
    solution: 'Asistente con voz y texto conectado por webhooks para responder y ejecutar acciones con contexto.',
    url: '#contacto',
    accent: 'IA aplicada',
    outcome: 'Reduce tiempos de respuesta y demuestra IA integrada a procesos reales.'
  }
];

export const skillClusters = [
  {
    name: 'Desarrollo Frontend',
    context: 'Construcción de interfaces de usuario altamente interactivas, modulares y optimizadas a nivel de UX/UI.',
    techs: [
      ['React / Vite', 'Creación de componentes modulares, hooks avanzados y gestión de estado asíncrono eficiente.'],
      ['JavaScript (ES6+)', 'Programación asíncrona avanzada, manipulación del DOM y consumo eficiente de APIs REST.'],
      ['HTML5 / CSS3', 'Diseño web adaptable (Responsive Design), estructuras semánticas y maquetación de alto nivel.'],
      ['Sass / SCSS', 'Arquitectura CSS modular y anidada utilizando variables, mixins y preprocesamiento avanzado.']
    ]
  },
  {
    name: 'Desarrollo Backend y Datos',
    context: 'Arquitectura del lado del servidor, diseño de flujos seguros y persistencia de datos relacionales y NoSQL.',
    techs: [
      ['Node.js / Express', 'Desarrollo de servicios backend de alto rendimiento, middlewares avanzados y APIs RESTful.'],
      ['PHP', 'Desarrollo y refactorización eficiente de scripts y lógicas de negocio del lado servidor.'],
      ['MySQL / PostgreSQL', 'Modelado relacional de datos, normalización, optimización de índices y consultas SQL de alta complejidad.'],
      ['MongoDB', 'Modelado NoSQL de alta escalabilidad, esquemas flexibles y consultas avanzadas basadas en pipelines de agregación.'],
      ['APIs REST', 'Definición de contratos y endpoints limpios, webhooks e integraciones con pasarelas de datos.']
    ]
  },
  {
    name: 'Integraciones y DevOps',
    context: 'Automatización de procesos de negocio, infraestructura en la nube e IA conversacional multicanal.',
    techs: [
      ['Bots conversacionales (Meta)', 'Creación, entrenamiento y gestión de asistentes de voz y texto con WhatsApp Business, Meta e Instagram.'],
      ['Automatizaciones (n8n)', 'Orquestación de flujos de trabajo inteligentes, webhooks e integraciones automáticas entre sistemas.'],
      ['ERP Odoo 18 SaaS', 'Conexión y sincronización de aplicaciones empresariales, bases de datos y flujos de ERP.'],
      ['Servidores Linux (Ubuntu)', 'Administración, configuración, despliegue y mantenimiento preventivo en entornos de servidor.'],
      ['Metodología Scrum', 'Gestión ágil de proyectos, Sprint planning, revisiones continuas y enfoque en la entrega de valor.']
    ]
  }
];

export const educationItems = [
  {
    title: 'Técnico en Diseño Gráfico',
    level: 'Técnico Laboral',
    institution: 'Servicio Nacional de Aprendizaje - SENA, sede Bogotá',
    status: 'Graduado',
    location: 'Colombia'
  },
  {
    title: 'Desarrollador de Aplicaciones Web - Gestor de Bases de Datos',
    level: 'Técnico Laboral',
    institution: 'Instituto Nacional de Aprendizaje - INCAP',
    status: 'Graduado',
    location: 'Colombia'
  },
  {
    title: 'Programación Full Stack',
    level: 'Diplomado',
    institution: 'Universidad Nacional de Colombia - UNAL / Universidad de Antioquia - UdeA',
    status: 'Graduado',
    location: 'Colombia'
  },
  {
    title: 'Programación Front-End',
    level: 'Diplomado',
    institution: 'Universidad de Antioquia - UdeA',
    status: 'Graduado',
    location: 'Colombia'
  }
];

export const experienceItems = [
  {
    period: 'Diciembre 2022 - Julio 2023',
    role: 'Programador Full Stack en prácticas',
    company: 'INSEPET',
    type: 'Practicante desarrollador',
    description:
      'Prácticas profesionales enfocadas en el desarrollo de aplicaciones web para la gestión de mantenimientos correctivos y preventivos en estaciones de servicio, apoyo en la administración del servidor de la empresa y gestión de consultas SQL.'
  },
  {
    period: '2024 - 2025',
    role: 'Programador Full Stack',
    company: 'ICEE ELECTRONICS',
    type: 'Desarrollador',
    description:
      'Diseño, desarrollo e implementación de plataformas web avanzadas orientadas a optimizar la visualización y comercialización de servicios para sistemas de Punto de Venta (POS). Creación de interfaces dinámicas y de alto impacto visual con enfoque en UI/UX, integrando APIs robustas para mejorar la conversión de clientes y la presentación interactiva del catálogo de servicios.'
  },
  {
    period: 'Abril 2025 - Actualidad',
    role: 'Programador Full Stack',
    company: 'WONDERTECH',
    type: 'Desarrollador',
    description:
      'Administración y configuración de servidores Linux (Ubuntu Server). Diseño y desarrollo de integraciones avanzadas y sincronización de aplicaciones con el ERP Odoo 18 SaaS. Creación y optimización de flujos de trabajo automatizados mediante n8n, y diseño de soluciones eficientes de automatización de procesos de negocio. Creación, entrenamiento y administración de chatbots conversacionales (voz y texto) integrados con WhatsApp Business API, Meta e Instagram. Gestión, administración y optimización de bases de datos relacionales y no relacionales utilizando MySQL y MongoDB.'
  }
];

export const projectSuggestions = [
  'Aplicación web para control de mantenimientos correctivos y preventivos.',
  'Dashboard full stack para consultar métricas operativas con bases SQL.',
  'API REST pública de demostración con documentación y validación server-side.',
  'Plantilla de despliegue seguro para apps Node.js en Ubuntu con SSL y rate limiting.',
  'Asistente comercial con IA integrado a formularios, CRM o ERP mediante webhooks.'
];
