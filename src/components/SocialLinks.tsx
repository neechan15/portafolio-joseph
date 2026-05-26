import { motion } from 'framer-motion';
import { socials } from '../data/socials';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
};

const sizeMap = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-14 w-14',
};

const iconSize = { sm: 16, md: 18, lg: 22 };

export default function SocialLinks({ size = 'md', showLabel = false }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socials.map((s, i) => (
        <motion.a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          aria-label={s.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          whileHover={{ y: -3, scale: 1.05 }}
          className={`group relative grid ${sizeMap[size]} place-items-center
            overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]
            text-white/70 backdrop-blur-md transition-colors hover:text-white`}
        >
          <span className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100
            bg-gradient-to-br from-accent-cyan/30 via-accent-violet/30 to-accent-pink/30" />
          <s.icon size={iconSize[size]} />
          {showLabel && <span className="ml-2 text-sm">{s.name}</span>}
        </motion.a>
      ))}
    </div>
  );
}
