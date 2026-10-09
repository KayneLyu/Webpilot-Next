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
    ];
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);