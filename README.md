# @labdigital/akeneo-node-sdk

[![npm](https://img.shields.io/npm/v/@labdigital/akeneo-node-sdk)](https://www.npmjs.com/package/@labdigital/akeneo-node-sdk)
[![CI](https://github.com/labd/akeneo-node-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/labd/akeneo-node-sdk/actions/workflows/ci.yml)

A typed TypeScript client for the [Akeneo PIM REST API](https://api.akeneo.com/). It is
generated with [OpenAPI Generator](https://openapi-generator.tech/) (`typescript-fetch`)
from Akeneo's OpenAPI spec, with some manual fixes (see [IMPROVEMENTS.md](./IMPROVEMENTS.md)).
It exposes one API class per resource (`ProductUuidApi`, `CategoryApi`, `FamilyApi`,
`AttributeApi`, `AuthenticationApi`, ...), the request/response models, and the runtime
(`Configuration`, `ResponseError`, middleware). It uses the global `fetch`.

## Installation

```sh
pnpm add @labdigital/akeneo-node-sdk
# or
npm install @labdigital/akeneo-node-sdk
```

## Requirements

- Node.js >= 22
- No peer dependencies

The package ships both ESM and CommonJS builds, with type definitions.

## Usage

### Get an access token

Akeneo uses OAuth2 with the password grant. Call `AuthenticationApi.postToken` with
your connection's client ID/secret (as Basic auth) and API user credentials:

```ts
import { AuthenticationApi, Configuration } from '@labdigital/akeneo-node-sdk';

const basePath = 'https://my-pim.cloud.akeneo.com';

const auth = new AuthenticationApi(new Configuration({ basePath }));

const token = await auth.postToken({
    contentType: 'application/json',
    authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    body: {
        username: apiUsername,
        password: apiPassword,
        grantType: 'password',
    },
});

// token.accessToken, token.refreshToken, token.expiresIn
```

### Call the API

The generated API classes do not add the bearer token themselves, so pass it as a
default header:

```ts
import { Configuration, ProductUuidApi } from '@labdigital/akeneo-node-sdk';

const config = new Configuration({
    basePath,
    headers: { Authorization: `Bearer ${token.accessToken}` },
});

const products = new ProductUuidApi(config);

const page = await products.getProductsUuid({
    limit: 10,
    paginationType: 'search_after',
    search: JSON.stringify({ enabled: [{ operator: '=', value: true }] }),
});

for (const product of page.embedded?.items ?? []) {
    console.log(product.uuid, product.family);
}

const product = await products.getProductsUuidUuid({ uuid: 'some-uuid' });
```

Every operation also has a `...Raw` variant (for example `getProductsUuidRaw`) that
returns an `ApiResponse` with the underlying `Response` in `raw`.

### Error handling

Non-2xx responses throw a `ResponseError` that carries the `Response`:

```ts
import { ResponseError } from '@labdigital/akeneo-node-sdk';

try {
    await products.getProductsUuidUuid({ uuid: 'missing' });
} catch (err) {
    if (err instanceof ResponseError) {
        console.error(err.response.status, await err.response.text());
    }
    throw err;
}
```

Network failures throw a `FetchError`. A missing required parameter throws a
`RequiredError`.

## Configuration

`new Configuration(params)` accepts:

| Option                 | Description                                                              |
| ---------------------- | ------------------------------------------------------------------------ |
| `basePath`             | Base URL of your Akeneo instance. Defaults to `http://demo.akeneo.com`.  |
| `headers`              | Headers sent with every request, such as `Authorization`.                |
| `fetchApi`             | Custom `fetch` implementation. Defaults to the global `fetch`.           |
| `middleware`           | Array of `{ pre, post, onError }` hooks that run around each request.    |
| `queryParamsStringify` | Custom query string serializer.                                          |
| `credentials`          | `RequestInit.credentials` value used on every request.                   |

You can also add middleware to an existing API instance with
`withMiddleware`, `withPreMiddleware` or `withPostMiddleware`.

## Development

```sh
pnpm install
pnpm build       # build with tsdown
pnpm lint        # biome check
pnpm typecheck   # tsc --noEmit
pnpm check       # lint + typecheck
pnpm format      # biome check --write
```

There are no tests. To regenerate the client from the spec, use the `Makefile`
(requires `openapi-generator`):

```sh
make fetch      # download the latest akeneo-web-api.json
make generate   # regenerate src/
```

Reapply the manual fixes in [IMPROVEMENTS.md](./IMPROVEMENTS.md) to the spec before
generating.

## Release

Releases use [Changesets](https://github.com/changesets/changesets). Add a changeset
with your change:

```sh
pnpm changeset
```

When it is merged to `main`, the publish workflow opens a release PR. Merging that PR
publishes the new version to npm.

## License

This package does not declare a license yet.
