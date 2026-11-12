import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware({
  ...routing,
  // The bare domain must stay English. Automatic Accept-Language redirects
  // would send Chinese/Russian browsers to /zh or /ru before they can see the
  // English homepage, which is the opposite of an English-primary site.
  // Visitors switch language explicitly from the header.
  localeDetection: false
});
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};