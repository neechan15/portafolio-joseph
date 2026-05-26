import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Code2,
  Server,
  Wrench,
  Sliders,
  ChevronRight,
} from 'lucide-react';
import { skillCategories } from '../../data/skills';

// =========================================
// 1. CONFIG
// =========================================

type CategoryId = 'Frontend' | 'Backend' | 'Herramientas';

const CATEGORY_META: Record<
  CategoryId,
  {
    label: string;
    icon: typeof Code2;
    gradient: string; // gradient para el glow
    ring: string;     // borde del anillo
    bar: string;      // color de la barra de skill
    bgRadial: string; // gradiente radial del fondo
  }
> = {
  Frontend: {
    label: 'Frontend',
    icon: Code2,
    gradient: 'from-accent-cyan to-blue-700',
    ring: 'border-accent-cyan/40',
    bar: 'from-accent-cyan to-blue-500',
    bgRadial:
      'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.18), transparent 55%)',
  },
  Backend: {
    label: 'Backend',
    icon: Server,
    gradient: 'from-accent-violet to-purple-800',
    ring: 'border-accent-violet/40',
    bar: 'from-accent-violet to-purple-500',
    bgRadial:
      'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.20), transparent 55%)',
  },
  Herramientas: {
    label: 'Herramientas',
    icon: Wrench,
    gradient: 'from-accent-pink to-rose-700',
    ring: 'border-accent-pink/40',
    bar: 'from-accent-pink to-rose-500',
    bgRadial:
      'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.18), transparent 55%)',
  },
};

// =========================================
// 2. ANIMATIONS
// =========================================

const ANIM: Record<string, Variants> = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  },
  item: {
    hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 120, damping: 18 },
    },
    exit: { opacity: 0, y: -8, filter: 'blur(4px)' },
  },
};

// =========================================
// 3. MAIN COMPONENT
// =========================================

export default function Skills() {
  const [active, setActive] = useState<CategoryId>('Frontend');
  const meta = CATEGORY_META[active];
  const data = skillCategories.find((c) => c.name === active)!;
  const Icon = meta.icon;

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden py-24 md:py-32"
    >
      {/* Fondo radial dinámico */}
      <motion.div
        animate={{ background: meta.bgRadial }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute inset-0"
      />

      <div className="container-x relative">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Skills
          </p>
          <h2 className="section-title mt-3">
            Tecnologías con las que <span className="text-gradient">trabajo a diario</span>
          </h2>
          <p className="section-sub mx-auto">
            Mi stack actual. Cambia entre categorías con el selector inferior.
          </p>
        </motion.div>

        {/* Layout */}
        <motion.div
          layout
          transition={{ type: 'spring', bounce: 0, duration: 0.9 }}
          className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24"
        >
          {/* Visual con anillo rotando */}
          <motion.div
            layout="position"
            className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
          >
            {/* Anillo punteado rotando */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className={`absolute inset-[-12%] rounded-full border border-dashed ${meta.ring}`}
            />
            {/* Glow latente */}
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${meta.gradient} opacity-30 blur-2xl`}
            />

            {/* Card central */}
            <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/30 shadow-2xl backdrop-blur-sm md:h-80 md:w-80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.85, filter: 'blur(8px)', rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.85, filter: 'blur(8px)' }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div
                    className={`grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br ${meta.gradient} shadow-2xl`}
                  >
                    <Icon size={42} className="text-white" />
                  </div>
                  <p className="font-display text-2xl font-bold text-white">{data.name}</p>
                  <p className="max-w-[80%] text-xs text-white/60">
                    {data.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Status label */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-bg/80 px-4 py-1.5 text-[10px] uppercase tracking-widest text-white/60 backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                {data.items.length} habilidades · Activo
              </div>
            </div>
          </motion.div>

          {/* Panel de detalles */}
          <motion.div layout="position" className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={ANIM.container}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.p
                  variants={ANIM.item}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-white/50"
                >
                  {data.name}
                </motion.p>
                <motion.h3
                  variants={ANIM.item}
                  className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl"
                >
                  <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                    {data.description}
                  </span>
                </motion.h3>

                {/* Skill bars */}
                <motion.div
                  variants={ANIM.item}
                  className="mt-8 space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
                >
                  {data.items.map((s, idx) => (
                    <div key={s.name} className="group">
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-white">{s.name}</span>
                        <span className="font-mono text-xs text-white/40">{s.level}%</span>
                      </div>
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${s.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + idx * 0.08, ease: 'easeOut' }}
                          className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${meta.bar}`}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-end pt-2">
                    <a
                      href="/cv"
                      className="group/btn flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                    >
                      <Sliders size={13} /> Ver CV completo
                      <ChevronRight
                        size={13}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Switcher (dynamic island) */}
        <div className="mt-16 flex justify-center">
          <motion.div
            layout
            className="flex items-center gap-1 rounded-full border border-white/10 bg-bg/80 p-1.5 shadow-2xl ring-1 ring-white/5 backdrop-blur-2xl"
          >
            {(Object.keys(CATEGORY_META) as CategoryId[]).map((id) => {
              const isActive = id === active;
              const itemMeta = CATEGORY_META[id];
              const ItemIcon = itemMeta.icon;
              return (
                <motion.button
                  key={id}
                  type="button"
                  onClick={() => setActive(id)}
                  whileTap={{ scale: 0.96 }}
                  className="relative flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium focus:outline-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="skill-pill"
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${itemMeta.gradient} opacity-90 shadow-inner`}
                      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                    />
                  )}
                  <span
                    className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/50 hover:text-white/90'
                    }`}
                  >
                    <ItemIcon size={14} />
                    {itemMeta.label}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
