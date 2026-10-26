# @labdigital/akeneo-node-sdk

## 1.1.0

### Minor Changes

- [#5](https://github.com/labd/akeneo-node-sdk/pull/5) [`ac4f104`](https://github.com/labd/akeneo-node-sdk/commit/ac4f104e953d279981765e291f547b2433e8151d) Thanks [@mvantellingen](https://github.com/mvantellingen)! - Modernize the package:
  
  - **Requires Node.js 22 or newer** (`engines.node`).
  - Built with tsdown into a single bundle: `dist/index.js` (CommonJS), `dist/index.mjs` (ESM) and type declarations. The package now has an `exports` map, so deep imports into `dist/` (such as `dist/apis/...` or `dist/esm/...`) are no longer possible; import everything from the package root instead.
  - Formatted with Biome, released with changesets.
