import { useState } from 'react';
import { Download, Loader2, AlertTriangle } from 'lucide-react';
import { profile } from '../data/profile';

type Props = { className?: string; label?: string };

export default function CVDownloadButton({ className = 'btn-primary', label = 'Descargar CV' }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  async function handleDownload() {
    if (status === 'loading') return;
    setStatus('loading');
    try {
      // Carga perezosa: @react-pdf/renderer pesa ~1.5MB
      const [{ pdf }, { default: CVDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./CVDocument'),
      ]);

      const blob = await pdf(<CVDocument />).toBlob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `CV-${profile.name.replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setStatus('idle');
    } catch (err) {
      console.error('[CV] Error generando PDF:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  }

  return (
    <button type="button" className={className} onClick={handleDownload} disabled={status === 'loading'}>
      {status === 'loading' && (
        <>
          <Loader2 size={16} className="animate-spin" />
          Generando PDF…
        </>
      )}
      {status === 'error' && (
        <>
          <AlertTriangle size={16} />
          Error — reintentar
        </>
      )}
      {status === 'idle' && (
        <>
          <Download size={18} />
          {label}
        </>
      )}
    </button>
  );
}
