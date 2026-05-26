import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Star } from 'lucide-react';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section id="proyectos" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-pink">
              Proyectos
            </p>
            <h2 className="section-title mt-3">
              Algunos trabajos <span className="text-gradient">recientes</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60">
            Una selección de proyectos donde combiné diseño, código y arquitectura para resolver
            problemas reales.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card group relative overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                {p.featured && (
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent-violet/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    <Star size={12} /> Destacado
                  </div>
                )}
                <div className="absolute left-3 top-3 chip glass-strong">{p.year}</div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold transition group-hover:text-accent-cyan md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{p.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex items-center gap-1 text-sm font-medium text-accent-cyan hover:text-white"
                    >
                      Ver demo
                      <ArrowUpRight
                        size={14}
                        className="transition group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                      />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white"
                    >
                      <Github size={14} /> Código
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
