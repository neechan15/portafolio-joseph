import { useEffect, useRef, useState } from 'react';

type Props = {
  rows?: number;
  className?: string;
  /** "soft" para partículas suaves dentro de una card; "wild" para fondo de héroe */
  intensity?: 'soft' | 'wild';
};

/**
 * Grid de partículas que reaccionan al puntero. Cuando no hay movimiento del
 * mouse durante un rato, retoma la animación automática.
 * Inspirado en design2: ParticleHero, adaptado a la paleta cyan/violet/pink.
 */
export default function ParticleField({
  rows = 14,
  className = '',
  intensity = 'wild',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef<number>();
  const idleTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const autoTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [staticCursor, setStaticCursor] = useState({ x: 0, y: 0 });
  const [isAuto, setIsAuto] = useState(true);
  const [isIdleAnim, setIsIdleAnim] = useState(false);
  const startedAtRef = useRef(Date.now());
  const lastMoveRef = useRef(Date.now());

  const total = rows * rows;
  const dampX = intensity === 'wild' ? 200 : 80;
  const dampY = intensity === 'wild' ? 150 : 60;
  const moveScale = intensity === 'wild' ? 0.8 : 0.35;

  // Crear partículas en el DOM una sola vez
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    root.innerHTML = '';
    particlesRef.current = [];

    const center = Math.floor(rows / 2);

    for (let i = 0; i < total; i++) {
      const r = Math.floor(i / rows);
      const c = i % rows;
      const dist = Math.sqrt((r - center) ** 2 + (c - center) ** 2);

      const scale = Math.max(0.15, 1.2 - dist * 0.1);
      const opacity = Math.max(0.05, 1 - dist * 0.08);

      // Mezcla cyan → violet → pink según distancia
      const hue = Math.round(190 + dist * 12); // 190 (cyan) → 260+ (violet/pink)
      const lightness = Math.max(35, 75 - dist * 4);
      const glow = Math.max(0.4, 5 - dist * 0.4);

      const el = document.createElement('div');
      el.className = 'particle absolute rounded-full will-change-transform';
      el.style.cssText = `
        width: 0.35rem;
        height: 0.35rem;
        left: ${c * 1.6}rem;
        top: ${r * 1.6}rem;
        transform: scale(${scale});
        opacity: ${opacity};
        background: hsl(${hue}, 90%, ${lightness}%);
        box-shadow: 0 0 ${glow * 0.25}rem 0 hsl(${hue}, 90%, 60%);
        mix-blend-mode: screen;
        z-index: ${Math.round(total - dist * 5)};
        transition: transform 0.05s linear;
      `;

      root.appendChild(el);
      particlesRef.current.push(el);
    }
  }, [rows, total]);

  // Loop principal de animación
  useEffect(() => {
    const tick = () => {
      const t = (Date.now() - startedAtRef.current) * 0.001;

      if (isAuto) {
        const x = Math.sin(t * 0.3) * dampX + Math.sin(t * 0.17) * (dampX * 0.5);
        const y = Math.cos(t * 0.2) * dampY + Math.cos(t * 0.23) * (dampY * 0.55);
        setCursor({ x, y });
      } else if (isIdleAnim) {
        const since = Date.now() - lastMoveRef.current;
        if (since > 200) {
          const strength = Math.min((since - 200) / 1000, 1);
          const sx = Math.sin(t * 1.5) * 20 * strength;
          const sy = Math.cos(t * 1.2) * 16 * strength;
          setCursor({ x: staticCursor.x + sx, y: staticCursor.y + sy });
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isAuto, isIdleAnim, staticCursor, dampX, dampY]);

  // Aplica las posiciones a cada partícula con damping según distancia al centro
  useEffect(() => {
    const center = Math.floor(rows / 2);
    particlesRef.current.forEach((el, i) => {
      const r = Math.floor(i / rows);
      const c = i % rows;
      const dist = Math.sqrt((r - center) ** 2 + (c - center) ** 2);
      const scale = Math.max(0.15, 1.2 - dist * 0.1);
      const damp = Math.max(0.3, 1 - dist * 0.07);
      const delay = dist * 8;

      window.setTimeout(() => {
        const mx = cursor.x * damp;
        const my = cursor.y * damp;
        el.style.transform = `translate(${mx}px, ${my}px) scale(${scale})`;
        el.style.transition = `transform ${120 + dist * 18}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      }, delay);
    });
  }, [cursor, rows]);

  function onPointerMove(e: React.MouseEvent | React.TouchEvent) {
    const ev = 'touches' in e ? e.touches[0] : e;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const next = {
      x: (ev.clientX - centerX) * moveScale,
      y: (ev.clientY - centerY) * moveScale,
    };
    setCursor(next);
    setStaticCursor(next);
    setIsAuto(false);
    setIsIdleAnim(false);
    lastMoveRef.current = Date.now();

    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => setIsIdleAnim(true), 500);

    if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    autoTimerRef.current = setTimeout(() => {
      if (Date.now() - lastMoveRef.current >= 4000) {
        setIsAuto(true);
        setIsIdleAnim(false);
        startedAtRef.current = Date.now();
      }
    }, 4000);
  }

  return (
    <div
      ref={sectionRef}
      onMouseMove={onPointerMove}
      onTouchMove={onPointerMove}
      className={`relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={containerRef}
          className="relative"
          style={{ width: `${rows * 1.6}rem`, height: `${rows * 1.6}rem` }}
        />
      </div>
    </div>
  );
}
