---
"@labdigital/akeneo-node-sdk": minor
---

Modernize the package:

- **Requires Node.js 22 or newer** (`engines.node`).
- Built with tsdown into a single bundle: `dist/index.js` (CommonJS), `dist/index.mjs` (ESM) and type declarations. The package now has an `exports` map, so deep imports into `dist/` (such as `dist/apis/...` or `dist/esm/...`) are no longer possible; import everything from the package root instead.
- Formatted with Biome, released with changesets.
