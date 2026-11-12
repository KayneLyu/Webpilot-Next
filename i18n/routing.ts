import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'zh', 'ru', 'ko', 'vi', 'tr'],
  // Used when no locale matches
  defaultLocale: 'en',
  // English is the primary site language and stays on the bare domain:
  //   /            -> English
  //   /zh, /ru ... -> other locales
  // next-intl redirects /en/* to the unprefixed equivalent.
  localePrefix: 'as-needed'
});