import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  ChevronRight,
  Quote,
  ListChecks,
  Mail,
  Phone,
  MapPin,
  Globe,
} from 'lucide-react';
import { profile } from '../data/profile';
import { cvSections, type CVSection } from '../data/cvContent';
import CVDownloadButton from '../components/CVDownloadButton';

export default function CV() {
  const [query, setQuery] = useState('');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const filteredSections = useMemo(() => {
    if (!query.trim()) return cvSections;
    const q = query.toLowerCase();
    return cvSections.filter((s) => {
      const titleMatch = s.title.toLowerCase().includes(q);
      const bodyText = JSON.stringify(s).toLowerCase();
      return titleMatch || bodyText.includes(q);
    });
  }, [query]);

  // Salto de scroll al click en TOC
  function scrollToSection(id: string) {
    const el = document.getElementById(`cv-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  }

  return (
    <section className="container-x scroll-mt-24 pb-32 pt-36">
      {/* Hero del CV */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-violet">
              Curriculum Vitae · Edición 2026
            </p>
            <h1 className="section-title mt-3">
              Mi <span className="text-gradient">trayectoria</span> profesional
            </h1>
            <p className="section-sub">
              {cvSections.length} secciones · documento completo, también disponible en PDF.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CVDownloadButton />
            <button
              onClick={() => window.print()}
              className="btn-ghost"
              title="Imprimir esta página"
            >
              Imprimir
            </button>
          </div>
        </div>

        {/* Tarjeta personal */}
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <PersonalCard
            icon={<Mail size={16} />}
            label="Correo"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <PersonalCard
            icon={<Phone size={16} />}
            label="Teléfono"
            value={profile.phone}
          />
          <PersonalCard
            icon={<MapPin size={16} />}
            label="Ubicación"
            value={profile.location}
          />
          <PersonalCard
            icon={<Globe size={16} />}
            label="Sitio web"
            value="juancorcuera.dev"
          />
        </div>
      </motion.div>

      {/* Layout principal */}
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar — TOC sticky */}
        <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto">
          <div className="card p-5">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                type="text"
                placeholder="Buscar en el CV…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-9 pr-3 text-sm
                  text-white placeholder:text-white/30 outline-none transition focus:border-accent-violet/60"
              />
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Índice ({filteredSections.length})
              </p>
              <ul className="mt-3 space-y-0.5">
                {filteredSections.map((s, idx) => {
                  const realIdx = cvSections.indexOf(s);
                  return (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollToSection(s.id)}
                        className={`group flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-xs transition
                          ${
                            activeSection === s.id
                              ? 'bg-accent-violet/10 text-white'
                              : 'text-white/60 hover:bg-white/5 hover:text-white'
                          }`}
                      >
                        <span className="font-mono text-[10px] text-accent-violet/70">
                          {String(realIdx + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 truncate">{s.title}</span>
                        <ChevronRight
                          size={12}
                          className="opacity-0 transition group-hover:opacity-100"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>

        {/* Secciones */}
        <div className="space-y-6">
          {filteredSections.map((section, i) => (
            <SectionCard
              key={section.id}
              section={section}
              index={cvSections.indexOf(section)}
              animationDelay={i < 5 ? i * 0.05 : 0}
            />
          ))}
          {filteredSections.length === 0 && (
            <div className="card p-12 text-center">
              <p className="text-white/60">Sin resultados para "{query}".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function PersonalCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper: any = href ? 'a' : 'div';
  return (
    <Wrapper
      href={href}
      className="card group flex items-center gap-3 p-4 transition hover:border-accent-violet/40"
    >
      <span className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
          {label}
        </p>
        <p className="truncate text-sm text-white/90">{value}</p>
      </div>
    </Wrapper>
  );
}

function SectionCard({
  section,
  index,
  animationDelay = 0,
}: {
  section: CVSection;
  index: number;
  animationDelay?: number;
}) {
  return (
    <motion.article
      id={`cv-${section.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: animationDelay }}
      className="card relative overflow-hidden p-7 md:p-9 scroll-mt-28"
    >
      {/* Decoración esquina */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-violet/15 blur-3xl" />

      {/* Cabecera */}
      <header className="relative mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent-violet">
            Sección {String(index + 1).padStart(2, '0')} / {cvSections.length}
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
            {section.title}
          </h2>
          {'subtitle' in section && section.subtitle && (
            <p className="mt-1 text-sm text-white/60">{section.subtitle}</p>
          )}
          {'intro' in section && section.intro && (
            <p className="mt-1 text-sm text-white/60">{section.intro}</p>
          )}
        </div>
      </header>

      {/* Cuerpo según layout */}
      <div className="relative">{renderBody(section)}</div>
    </motion.article>
  );
}

function renderBody(section: CVSection) {
  switch (section.layout) {
    case 'cover':
      return (
        <div className="grid place-items-center py-12 text-center">
          <p className="text-xs uppercase tracking-widest text-accent-cyan">
            {section.tagline}
          </p>
          <h3 className="mt-4 font-display text-5xl font-bold text-gradient md:text-7xl">
            {section.title}
          </h3>
          <p className="mt-3 text-lg text-white/70">{section.subtitle}</p>
          <p className="mt-6 text-xs text-white/50">
            {profile.location} · {profile.email}
          </p>
        </div>
      );

    case 'toc':
      return (
        <div className="grid gap-1 sm:grid-cols-2">
          {section.entries.map((e) => (
            <div
              key={e.num}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
            >
              <span className="font-mono text-xs text-accent-violet">
                {String(e.num).padStart(2, '0')}
              </span>
              <span className="text-sm text-white/80">{e.label}</span>
            </div>
          ))}
        </div>
      );

    case 'letter':
      return (
        <div className="space-y-4">
          {section.paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-white/80 md:text-base">
              {p}
            </p>
          ))}
          <p className="mt-6 font-display text-lg italic text-accent-cyan">
            {section.signature}
          </p>
        </div>
      );

    case 'profile':
      return (
        <dl className="divide-y divide-white/5">
          {section.rows.map((r, i) => (
            <div key={i} className="grid gap-1 py-3 sm:grid-cols-[200px_1fr] sm:gap-4">
              <dt className="text-xs font-semibold uppercase tracking-widest text-white/40">
                {r.label}
              </dt>
              <dd className="text-sm text-white/90">{r.value}</dd>
            </div>
          ))}
        </dl>
      );

    case 'standard':
      return (
        <div className="space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      );

    case 'bullets':
      return (
        <ul className="space-y-3">
          {section.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3"
            >
              <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-violet/30">
                <ListChecks size={11} className="text-accent-cyan" />
              </span>
              <span className="text-sm text-white/85">{b}</span>
            </li>
          ))}
        </ul>
      );

    case 'items':
      return (
        <div className="space-y-5">
          {section.items.map((it, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-white/5 bg-white/[0.02] p-5"
            >
              <div className="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full bg-gradient-to-b from-accent-cyan to-accent-violet" />
              {it.period && (
                <p className="text-xs font-mono uppercase tracking-widest text-accent-cyan">
                  {it.period}
                </p>
              )}
              <h4 className="mt-1.5 font-display text-lg font-semibold text-white">
                {it.title}
              </h4>
              <p className="mt-2 text-sm text-white/70">{it.description}</p>
              {it.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {it.tags.map((t, j) => (
                    <span key={j} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      );

    case 'skillBars':
      return (
        <div className="space-y-4">
          {section.skills.map((sk, i) => (
            <div key={i}>
              <div className="mb-1.5 flex items-baseline justify-between">
                <span className="text-sm font-medium text-white">{sk.name}</span>
                <span className="font-mono text-xs text-white/40">{sk.level}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${sk.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.04, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink"
                />
              </div>
              {sk.note && (
                <p className="mt-1 text-xs italic text-white/40">{sk.note}</p>
              )}
            </div>
          ))}
        </div>
      );

    case 'quote':
      return (
        <div className="space-y-6">
          <blockquote className="relative rounded-2xl border-l-4 border-accent-cyan bg-white/[0.04] p-6">
            <Quote
              size={28}
              className="absolute -top-3 left-4 text-accent-cyan/60"
            />
            <p className="text-lg italic leading-relaxed text-white md:text-xl">
              {section.quote}
            </p>
            <footer className="mt-3 text-xs font-semibold uppercase tracking-widest text-accent-cyan">
              — {section.author}
            </footer>
          </blockquote>
          <div className="space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      );

    case 'twoColumn':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {[section.left, section.right].map((col, j) => (
            <div
              key={j}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                {col.heading}
              </p>
              <ul className="mt-3 space-y-2">
                {col.bullets.map((b, k) => (
                  <li key={k} className="flex gap-2 text-sm text-white/80">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent-violet" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
  }
}
