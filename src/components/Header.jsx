import { owner } from '@services/portfolioData.js';
import { useActiveSection } from '@hooks/useActiveSection.js';

const nav = [
  ['Historia', 'historia'],
  ['Proyectos', 'proyectos'],
  ['Skills', 'skills'],
  ['Contacto', 'contacto']
];
const sectionIds = ['inicio', ...nav.map(([, id]) => id)];

export default function Header() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <span>JP</span>
        <small>{owner.location}</small>
      </a>
      <nav aria-label="Navegación principal">
        {nav.map(([label, id]) => (
          <a className={activeSection === id ? 'is-active' : ''} key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
