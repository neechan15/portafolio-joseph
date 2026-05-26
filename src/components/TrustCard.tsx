import { motion } from 'framer-motion';
import { Target, Crown } from 'lucide-react';
import { techStack } from '../data/skills';

/**
 * Card de confianza con stats + barra de progreso + pills + marquee de tech.
 * Inspirado en design1: Glassmorphism Trust Hero, adaptado a la paleta del sitio.
 */
export default function TrustCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-2xl"
    >
      {/* Glow esquina */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-violet/30 blur-3xl" />

      <div className="relative z-10">
        {/* Cabecera con icono y stat principal */}
        <div className="mb-8 flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 ring-1 ring-white/20">
            <Target className="h-6 w-6 text-accent-cyan" />
          </div>
          <div>
            <div className="font-display text-3xl font-bold tracking-tight text-white">
              15+
            </div>
            <div className="text-sm text-white/60">Proyectos entregados</div>
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="mb-8 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-white/60">Satisfacción del cliente</span>
            <span className="font-medium text-white">98%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '98%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink"
            />
          </div>
        </div>

        <div className="mb-6 h-px w-full bg-white/10" />

        {/* Mini stats grid */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <Stat value="2+" label="Años" />
          <div className="mx-auto h-full w-px bg-white/10" />
          <Stat value="100%" label="Compromiso" />
          <div className="mx-auto h-full w-px bg-white/10" />
          <Stat value="24h" label="Respuesta" />
        </div>

        {/* Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-white/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            DISPONIBLE
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-white/80">
            <Crown className="h-3 w-3 text-accent-pink" />
            PREMIUM
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-white/80">
            REMOTO · LIMA · LATAM
          </span>
        </div>

        {/* Tech marquee */}
        <div className="mt-8">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
            Stack que uso a diario
          </p>
          <div
            className="relative flex overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            }}
          >
            <div className="flex animate-marquee gap-8 whitespace-nowrap pr-8">
              {[...techStack, ...techStack].map((t, i) => (
                <span
                  key={i}
                  className="font-mono text-xs uppercase tracking-widest text-white/60"
                >
                  {t}
                  <span className="ml-8 text-accent-violet/60">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex cursor-default flex-col items-center justify-center transition-transform hover:-translate-y-1">
      <span className="font-display text-xl font-bold text-white sm:text-2xl">{value}</span>
      <span className="text-[10px] font-medium uppercase tracking-wider text-white/40 sm:text-xs">
        {label}
      </span>
    </div>
  );
}
