import { Github, Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Social = {
  name: string;
  url: string;
  icon: LucideIcon;
  handle: string;
};

export const socials: Social[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/josephcorcuera',
    icon: Github,
    handle: '@josephcorcuera',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/josephcorcuera',
    icon: Linkedin,
    handle: '/in/josephcorcuera',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/josephcorcuera',
    icon: Instagram,
    handle: '@josephcorcuera',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/51986501081',
    icon: MessageCircle,
    handle: '+51 986 501 081',
  },
  {
    name: 'Correo',
    url: 'mailto:jcorcuer4@gmail.com',
    icon: Mail,
    handle: 'jcorcuer4@gmail.com',
  },
];
