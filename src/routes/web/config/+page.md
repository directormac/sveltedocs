---
title: Configuration
lastUpdate: 2023
---

### Single Page Application (SPA)

Read more at [SvelteKit Docs - SPA](https://kit.svelte.dev/docs/single-page-apps)

```typescript title="src/routes/+layout.ts" ln
export const ssr = false; // [svp! df:+]
```

### Built statically

Read more at [SvelteKit Docs - Adapter Static](https://kit.svelte.dev/docs/adapter-static)

```typescript title="src/routes/+layout.ts" ln
export const prerender = true; // [svp! df:+]
```

Some Pages cannot be prerendered e.g `dashboard/users/:id`
must explicitly indicate in `+page.ts`

```typescript title="src/routes/dashbord/users/[id]/+page.ts"
export const prerender = false; // [svp! df:+]
```

### SvelteKit Custom Config

- Changing the `adapter-auto` to `adapter-static`

```javascript title="svelte.config.js" ln
import adapter from '@sveltejs/adapter-auto'; // [svp! df:-]
import adapter from '@sveltejs/adapter-static'; // [svp! df:+]

import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      buildDir: 'dist', //set build directory to dist // [svp! df:+]
    }),
  },
};
```

<!-- TODO: Additional Configuration Changes must be put here -->
