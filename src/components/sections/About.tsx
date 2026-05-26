import { motion } from 'framer-motion';
import { Check, Code2, Cpu, Palette } from 'lucide-react';
import { profile } from '../../data/profile';
import TrustCard from '../TrustCard';

const cards = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Componentes pequeños, tipados y reutilizables. TypeScript estricto en todo.',
  },
  {
    icon: Palette,
    title: 'Diseño detallado',
    desc: 'Cuido la jerarquía, el espaciado y la microinteracción. Pixel-perfect.',
  },
  {
    icon: Cpu,
    title: 'Rendimiento',
    desc: 'Lazy loading, code splitting y métricas Lighthouse altas por defecto.',
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-violet">
            Sobre mí
          </p>
          <h2 className="section-title mt-3">
            Construyo <span className="text-gradient">productos digitales</span> que la gente disfruta usar
          </h2>
          <p className="section-sub">{profile.bio}</p>

          <ul className="mt-8 space-y-3">
            {profile.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-3 text-white/80"
              >
                <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet">
                  <Check size={12} />
                </span>
                <span>{h}</span>
              </motion.li>
            ))}
          </ul>

          {/* Triple card row */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card group p-4"
              >
                <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan transition group-hover:scale-110">
                  <c.icon size={18} />
                </div>
                <h3 className="font-display text-sm font-semibold">{c.title}</h3>
                <p className="mt-1 text-xs text-white/60">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TrustCard del lado derecho */}
        <TrustCard />
      </div>
    </section>
  );
}
