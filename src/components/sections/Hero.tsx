import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { profile } from '../../data/profile';
import SocialLinks from '../SocialLinks';
import CVDownloadButton from '../CVDownloadButton';
import LightningShader from '../LightningShader';

// ============================
// FloatingLabel
// ============================

function FloatingLabel({
  name,
  value,
  position,
}: {
  name: string;
  value: string;
  position: string;
}) {
  return (
    <div
      className={`absolute ${position} group z-10 hidden transition-all duration-300 hover:scale-110 sm:block`}
    >
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="h-2 w-2 rounded-full bg-white group-hover:animate-pulse" />
          <div className="absolute -inset-1 rounded-full bg-white/20 opacity-70 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative text-white">
          <div className="text-xs font-medium md:text-sm">{name}</div>
          <div className="text-[10px] text-white/60 md:text-xs">{value}</div>
          <div className="absolute -inset-2 -z-10 rounded-lg bg-white/10 opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
}

// ============================
// Hero
// ============================

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-black text-white"
    >
      {/* =========================================
          BACKGROUND LAYERS
         ========================================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Glow circular violeta-cyan */}
        <div className="absolute left-1/2 top-[55%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-accent-violet/20 to-accent-cyan/10 blur-3xl" />

        {/* Shader del rayo */}
        <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2">
          <LightningShader hue={265} speed={1.5} intensity={0.65} size={2} />
        </div>

        {/* Planeta / esfera oscura abajo */}
        <div
          className="absolute left-1/2 top-[55%] z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full backdrop-blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 25% 90%, #2a1745 15%, #00000099 70%, #000000ed 100%)',
          }}
        />
      </div>

      {/* =========================================
          CONTENIDO
         ========================================= */}
      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        {/* Floating labels alrededor del título */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full"
        >
          <motion.div variants={item}>
            <FloatingLabel
              name="React"
              value="para la base"
              position="left-0 top-12 sm:left-4 md:top-20"
            />
          </motion.div>
          <motion.div variants={item}>
            <FloatingLabel
              name="TailwindCSS"
              value="para los estilos"
              position="left-1/4 top-2 md:top-6"
            />
          </motion.div>
          <motion.div variants={item}>
            <FloatingLabel
              name="Framer Motion"
              value="para animaciones"
              position="right-1/4 top-2 md:top-6"
            />
          </motion.div>
          <motion.div variants={item}>
            <FloatingLabel
              name="TypeScript"
              value="para el tipado"
              position="right-0 top-12 sm:right-4 md:top-20"
            />
          </motion.div>
        </motion.div>

        {/* Bloque central */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-30 mx-auto mt-32 flex max-w-4xl flex-col items-center text-center md:mt-44"
        >
          {/* Badge */}
          <motion.button
            variants={item}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs backdrop-blur-md transition-all duration-300 hover:bg-white/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-white/90">Disponible para nuevos proyectos</span>
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          </motion.button>

          {/* H1 - saludo */}
          <motion.h2
            variants={item}
            className="font-display text-base font-light uppercase tracking-[0.3em] text-white/60 md:text-lg"
          >
            Hola, soy
          </motion.h2>

          {/* H2 - nombre gigante */}
          <motion.h1
            variants={item}
            className="mt-3 font-display text-5xl font-light leading-[0.95] tracking-tighter md:text-7xl lg:text-[6rem]"
          >
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          {/* H3 - rol con gradiente */}
          <motion.h3
            variants={item}
            className="mt-3 bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink bg-clip-text pb-3 font-display text-2xl font-light text-transparent md:text-4xl lg:text-5xl"
          >
            {profile.role}
          </motion.h3>

          {/* Descripción */}
          <motion.p variants={item} className="mt-2 max-w-2xl text-sm text-white/60 md:text-base">
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row md:mt-12"
          >
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:bg-white/90 active:scale-[0.97]"
            >
              Ver portafolio
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <CVDownloadButton
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10"
              label="Descargar CV"
            />
          </motion.div>

          {/* Mini stats */}
          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-x-8 gap-y-3 text-center md:mt-14"
          >
            <Stat n="15+" label="Proyectos" />
            <Bar />
            <Stat n="2+" label="Años exp." />
            <Bar />
            <Stat n="98%" label="Satisfacción" />
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="mt-10">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">
        {n}
      </span>
      <span className="text-[9px] uppercase tracking-widest text-white/40 md:text-[10px]">
        {label}
      </span>
    </div>
  );
}
function Bar() {
  return <div className="h-8 w-px bg-white/10" />;
}
