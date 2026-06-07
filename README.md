# sentinel-website

**Marketing site for Sentinel Labs.** Single-page Next.js 14 static site with the headline, the ecosystem grid, and links to the rest of the org.

[![ci](https://github.com/Sentinels-Today/sentinel-website/actions/workflows/ci.yml/badge.svg)](https://github.com/Sentinels-Today/sentinel-website/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-Apache--2.0-blue)
![node](https://img.shields.io/badge/node-%E2%89%A520-green)

## Run

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # static export
```

## Develop

```sh
npm run lint
npm run typecheck
```

The home page lives in `src/app/page.tsx`. Repos are listed in the `REPOS` array — drop a new entry to surface another sibling project.

## License

Apache-2.0 — see [LICENSE](./LICENSE).
