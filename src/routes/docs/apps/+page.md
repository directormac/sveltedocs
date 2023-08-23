---
title: Apps
lastUpdate: 2023-08-08
---

# The Application Workspaces

```
.
└── Workspace/
    └── apps/
        ├── api/
        ├── web/
        ├── fullstack/
        ├── sveltekit/
        ├── landing/
        ├── storefront/
        └── admin/
```

To leverage a monorepo we can build multiple application that can interact with each
other and share `packages` in this starter template

- the `api` is an expressjs server
- the `web` is a svelte app.

---

## Api

An Express server that serves as a starter for a REST API.

Run the local project

```bash
cd project/apps/api & pnpm dev
```

#### [localhost:3000](http://localhost:3000/)

### [Dcoumentation](/api)

A more comprehensive app documentation can be read at [api](/api)

External Links

[Express](https://expressjs.com/)

---

## Web

A Svelte app that serves as a starter for a web application.

```bash
cd project/apps/web & pnpm dev
```

#### [localhost:5173](http://localhost:5173/)

### [Documentation](/web)

A more comprehensive app documentation can be read at [web](/web)

### [Svelte](https://svelte.dev/)

---

The 2 base app basically communicate with each other through REST API;

<!-- TODO: Add features here as you go -->

- The WebApp calls the API to get data
