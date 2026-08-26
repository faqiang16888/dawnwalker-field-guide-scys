# Dawnwalker Field Guide

A pre-release, source-linked guide site created for the SCYS AI product voyage assignment.

## Local run

```bash
npm run build
npm run serve
```

Open <http://localhost:4173>.

## Content contract

- Each search intent has one dedicated static page, title, description and H1.
- Official claims link to the source used.
- Unknown pre-release details stay explicitly unconfirmed.
- `src/site-data.mjs` is the content source of truth; `scripts/build.mjs` generates `dist/`.

Before a public deployment, replace the placeholder origin in `sitemap.xml`/canonical generation with the final domain.
