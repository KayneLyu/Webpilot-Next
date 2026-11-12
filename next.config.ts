import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
/** Canonical host: the origin used by canonicals, the sitemap and search results. */
const CANONICAL_HOST = 'jinjiutech.com';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // www.jinjiutech.com serves the same site as the apex domain, which would
        // let search engines index two copies of every page. A permanent redirect
        // consolidates all of them onto the canonical host. Covers every path,
        // including /robots.txt, /sitemap.xml and the icons, because the matcher
        // in middleware.ts skips paths that contain a dot.
        source: '/:path*',
        has: [{ type: 'host', value: `www.${CANONICAL_HOST}` }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
      {
        // English is the default locale and is served from the bare domain.
        // next-intl already normalises /en/* in middleware with a temporary
        // redirect; these permanent rules give search engines and old ad
        // links a single, cacheable hop to the unprefixed URL instead.
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);