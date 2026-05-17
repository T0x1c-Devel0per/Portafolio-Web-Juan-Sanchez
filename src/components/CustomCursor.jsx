import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const haloRef = useRef(null);
  const targetRef = useRef({ x: -100, y: -100 });
  const haloRefPosition = useRef({ x: -100, y: -100 });
  const frameRef = useRef(0);
  const enabledRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const render = () => {
      const target = targetRef.current;
      const halo = haloRefPosition.current;

      halo.x += (target.x - halo.x) * 0.18;
      halo.y += (target.y - halo.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${halo.x}px, ${halo.y}px, 0) translate(-50%, -50%)`;
      }

      frameRef.current = window.requestAnimationFrame(render);
    };

    const move = (event) => {
      if (event.pointerType === 'touch') return;

      targetRef.current = { x: event.clientX, y: event.clientY };

      if (!enabledRef.current) {
        enabledRef.current = true;
        haloRefPosition.current = { x: event.clientX, y: event.clientY };
        setEnabled(true);
        document.body.classList.add('has-custom-cursor');
        frameRef.current = window.requestAnimationFrame(render);
      }
    };

    const over = (event) => {
      setActive(Boolean(event.target.closest('a, button, input, textarea, .magnetic')));
    };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('mouseover', over);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <span ref={dotRef} className="cursor-dot" />
      <span ref={haloRef} className={`cursor-halo ${active ? 'is-active' : ''}`} />
    </>
  );
}
