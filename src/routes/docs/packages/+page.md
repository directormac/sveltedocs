---
title: Packages
lastUpdate: 2023-08-08
---

```
Workspace
  packages/
    components/
    shared/
    eslint-config/

```

## COMPONENTS

Contains reusable components that can be used in any Svelte / Sveltekit project.

- The following components must be composable and not have any dependencies on other components
- The Components exposed must be as generic as possible
- The Components must be tested internally

## SHARED

Constains shared code that can be used in any API(Express, NestJS, Fastify) / Svelte / Sveltekit project.

- The following must not have any dependencies on other packages
- Types must be shared by both the underlying API and Web application
- The Shared code must be tested internally
