import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const links = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#sobre-mi', label: 'Sobre mí' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/cv', label: 'CV' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container-x">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled
              ? 'border border-white/10 bg-bg/70 backdrop-blur-xl shadow-lg shadow-black/40'
              : 'border border-transparent'
          }`}
        >
          <Link to="/" className="group flex items-center gap-2">
            <div className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-accent-cyan to-accent-violet font-display font-bold text-white">
              {profile.shortName}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">
              {profile.name.split(' ')[0]}
              <span className="text-accent-violet">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative inline-block rounded-lg px-3 py-2 text-sm text-white/70
                    transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/#contacto"
            className="hidden btn-primary px-5 py-2 text-sm md:inline-flex"
          >
            Hablemos
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 md:hidden"
            aria-label="Menú"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-bg/80 p-3 backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a href="/#contacto" className="btn-primary w-full text-sm">
                    Hablemos
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
