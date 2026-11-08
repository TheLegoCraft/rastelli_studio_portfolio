// The sub-path the site is served from: "/rastelli_studio_portfolio" on github.io, "" on a custom domain.
// Set at build time by the GitHub Pages workflow; empty locally.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

// <Link> and the router add the base path themselves; raw <img>, <video>, <a> and CSS url() don't,
// so every root-relative asset path goes through this. External URLs are returned unchanged.
export function withBasePath(path) {
  return path?.startsWith('/') ? `${BASE_PATH}${path}` : path;
}
