import { useCallback, useState } from 'react';

export function useMouseTilt(max = 10) {
  const [style, setStyle] = useState({});

  const onMouseMove = useCallback(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      setStyle({
        transform: `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)`
      });
    },
    [max]
  );

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' });
  }, []);

  return { style, onMouseMove, onMouseLeave };
}
