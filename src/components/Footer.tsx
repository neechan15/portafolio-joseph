import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { socials } from '../data/socials';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-white/10 bg-bg-soft/50 backdrop-blur-xl">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-bold">
            {profile.name}<span className="text-accent-violet">.</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-white/60">{profile.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Navegación
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/#sobre-mi" className="text-white/70 hover:text-white">Sobre mí</a></li>
            <li><a href="/#skills" className="text-white/70 hover:text-white">Skills</a></li>
            <li><a href="/#proyectos" className="text-white/70 hover:text-white">Proyectos</a></li>
            <li><a href="/cv" className="text-white/70 hover:text-white">Curriculum</a></li>
            <li><a href="/#contacto" className="text-white/70 hover:text-white">Contacto</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Redes
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-white/70 hover:text-white"
                >
                  <s.icon size={16} />
                  <span>{s.name}</span>
                  <ArrowUpRight
                    size={14}
                    className="-translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.</p>
          <p>
            Hecho con <span className="text-accent-violet">React</span>,{' '}
            <span className="text-accent-cyan">Tailwind</span> y café ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
