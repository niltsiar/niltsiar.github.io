/**
 * Site Configuration
 * Change the default language here. This is the ONLY place you need to update.
 * After changing, also rename the pages folder accordingly.
 */
export const siteConfig = {
  /** Default language shown at root URL (/) */
  defaultLang: 'en',

  /** Secondary language shown at /es/ URL */
  secondaryLang: 'es',
} as const;

export type Lang = typeof siteConfig.defaultLang | typeof siteConfig.secondaryLang;
