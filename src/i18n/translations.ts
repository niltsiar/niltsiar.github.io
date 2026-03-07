import { siteConfig } from '../config';

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = siteConfig.defaultLang;

export const ui = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero (buttons only - content comes from profile.json)
    'hero.cta.contact': 'Contact me',
    'hero.cta.projects': 'View projects',

    // About (labels only - content comes from profile.json)
    'about.label': 'About me',
    'about.stats.experience': 'Years of experience',
    'about.stats.repos': 'Public repositories',
    'about.stats.followers': 'GitHub followers',

    // Experience
    'experience.label': 'Career',
    'experience.title': 'Professional experience',
    'experience.current': 'Current',

    // Projects
    'projects.label': 'Work',
    'projects.title': 'Featured projects',
    'projects.view': 'View project',

    // Skills
    'skills.label': 'Expertise',
    'skills.title': 'Tech stack',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Let\'s connect',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with',
    'footer.and': 'and',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Skills',
    'nav.contact': 'Contacto',

    // Hero
    'hero.cta.contact': 'Contactar',
    'hero.cta.projects': 'Ver proyectos',

    // About
    'about.label': 'Sobre mí',
    'about.stats.experience': 'Años de experiencia',
    'about.stats.repos': 'Repositorios públicos',
    'about.stats.followers': 'Seguidores en GitHub',

    // Experience
    'experience.label': 'Trayectoria',
    'experience.title': 'Experiencia profesional',
    'experience.current': 'Actual',

    // Projects
    'projects.label': 'Trabajo',
    'projects.title': 'Proyectos destacados',
    'projects.view': 'Ver proyecto',

    // Skills
    'skills.label': 'Expertise',
    'skills.title': 'Stack tecnológico',

    // Contact
    'contact.label': 'Contacto',
    'contact.title': 'Conectemos',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.made': 'Hecho con',
    'footer.and': 'y',
  },
} as const;

export type Lang = keyof typeof ui;
type TranslationKey = keyof (typeof ui)['en'];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}
