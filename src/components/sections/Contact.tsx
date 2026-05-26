import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../../data/profile';
import SocialLinks from '../SocialLinks';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Contacto desde portafolio — ${data.get('name')}`);
    const body = encodeURIComponent(
      `Nombre: ${data.get('name')}\nCorreo: ${data.get('email')}\n\n${data.get('message')}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contacto" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Contacto
          </p>
          <h2 className="section-title mt-3">
            ¿Tienes una idea? <span className="text-gradient">Conversemos</span>
          </h2>
          <p className="section-sub mx-auto">
            Estoy abierto a colaboraciones, proyectos freelance o simplemente saludar.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card relative overflow-hidden p-8 lg:col-span-2"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-cyan/20 blur-3xl" />
            <h3 className="font-display text-2xl font-bold">Información</h3>
            <p className="mt-2 text-sm text-white/60">
              Respondo en menos de 24 h. La mejor forma es por correo.
            </p>

            <ul className="mt-8 space-y-5">
              <Info icon={<Mail size={18} />} label="Correo" value={profile.email} href={`mailto:${profile.email}`} />
              <Info icon={<Phone size={18} />} label="Teléfono" value={profile.phone} />
              <Info icon={<MapPin size={18} />} label="Ubicación" value={profile.location} />
            </ul>

            <div className="mt-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
                Sígueme
              </p>
              <SocialLinks size="sm" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card relative space-y-5 p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name" label="Nombre" placeholder="Ej. Juan Pérez" />
              <Field name="email" type="email" label="Correo" placeholder="tu@correo.com" />
            </div>
            <Field name="subject" label="Asunto" placeholder="Sobre qué quieres hablar" />
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/50">
                Mensaje
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Cuéntame sobre tu proyecto…"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm
                  text-white placeholder:text-white/30 outline-none transition focus:border-accent-violet/60"
              />
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              {sent ? '¡Enviado!' : 'Enviar mensaje'}
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/50">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-accent-violet/60"
      />
    </div>
  );
}

function Info({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Wrapper: any = href ? 'a' : 'div';
  return (
    <li>
      <Wrapper href={href} className="group flex items-center gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan transition group-hover:scale-110">
          {icon}
        </span>
        <span>
          <p className="text-xs uppercase tracking-widest text-white/40">{label}</p>
          <p className="text-sm font-medium text-white/90">{value}</p>
        </span>
      </Wrapper>
    </li>
  );
}
