import { owner, experienceItems, educationItems } from '@services/portfolioData.js';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import avatar from '@assets/avatar-jp.png';

export default function PrintableCV() {
  return (
    <div className="printable-cv" aria-hidden="true">
      {/* Header */}
      <header className="cv-header">
        <div className="cv-header-left">
          <img src={avatar} alt={owner.name} className="cv-avatar" />
          <div className="cv-header-title">
            <h1>{owner.name}</h1>
            <h2>{owner.role}</h2>
          </div>
        </div>
        <div className="cv-header-contact">
          <div><Phone size={13} /> {owner.phone}</div>
          <div><Mail size={13} /> {owner.email}</div>
          <div><MapPin size={13} /> {owner.location}</div>
          <div><Globe size={13} /> {owner.portfolio}</div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="cv-grid">
        {/* Left Column */}
        <div className="cv-col-left">
          {/* Perfil */}
          <section className="cv-section">
            <h3>Perfil Profesional</h3>
            <p className="cv-profile-text">
              Desarrollador Full Stack con más de 2 años de trayectoria, especializado en el diseño de arquitecturas web modernas, eficientes y seguras. Experto en construir interfaces frontend de alto rendimiento con React, Vite y Sass/SCSS, y servicios backend asíncronos y robustos en Node.js, Express y PHP. Altamente capacitado en la administración de servidores Linux (Ubuntu Server), bases de datos (MySQL, PostgreSQL y MongoDB) y automatización de procesos mediante n8n e integraciones con el ERP Odoo 18 SaaS. Destacada trayectoria creando chatbots conversacionales (voz y texto) de alta conversión mediante las APIs de WhatsApp Business, Meta e Instagram.
            </p>
          </section>

          {/* Experiencia */}
          <section className="cv-section">
            <h3>Experiencia Laboral</h3>
            <div className="cv-timeline">
              {experienceItems.map((item, index) => (
                <div key={index} className="cv-timeline-item">
                  <div className="cv-timeline-header">
                    <h4>{item.role}</h4>
                    <span className="cv-timeline-date">{item.period}</span>
                  </div>
                  <h5 className="cv-timeline-company">{item.company}</h5>
                  <p className="cv-timeline-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="cv-col-right">
          {/* Habilidades */}
          <section className="cv-section">
            <h3>Habilidades Clave</h3>
            <div className="cv-skill-groups">
              <div className="cv-skill-group">
                <h4>Frontend</h4>
                <ul>
                  <li>React / Vite</li>
                  <li>JavaScript (ES6+)</li>
                  <li>Sass / SCSS</li>
                  <li>HTML5 / CSS3</li>
                </ul>
              </div>
              <div className="cv-skill-group">
                <h4>Backend y Datos</h4>
                <ul>
                  <li>Node.js / Express</li>
                  <li>PHP</li>
                  <li>MySQL / PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>APIs REST / Webhooks</li>
                </ul>
              </div>
              <div className="cv-skill-group">
                <h4>DevOps y Automatización</h4>
                <ul>
                  <li>n8n (Orquestación)</li>
                  <li>Odoo 18 SaaS ERP</li>
                  <li>Linux Ubuntu Server</li>
                  <li>Chatbots Voz & Texto</li>
                  <li>WhatsApp Business API</li>
                  <li>Meta & Instagram APIs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Formación */}
          <section className="cv-section">
            <h3>Formación</h3>
            <div className="cv-education">
              {educationItems.slice(0, 3).map((item, index) => (
                <div key={index} className="cv-education-item">
                  <h4>{item.title}</h4>
                  <p>{item.institution}</p>
                  <span>{item.level} — {item.status}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
