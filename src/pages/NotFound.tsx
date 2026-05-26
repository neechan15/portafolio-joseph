import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[80vh] place-items-center text-center">
      <div>
        <p className="font-display text-[10rem] font-bold leading-none text-gradient">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold">Página no encontrada</h1>
        <p className="mt-2 text-white/60">La ruta que buscas no existe o fue movida.</p>
        <Link to="/" className="btn-primary mt-8">
          <ArrowLeft size={18} /> Volver al inicio
        </Link>
      </div>
    </section>
  );
}
