---
title: Project Structure
description: Project Structure and Naming Conventions
lastUpdate: 08/08/2023
---

:::caution[The project is still in beta]
Incase you see this the following is still in beta
:::

## Turbo

This repository is built using [Turbo](https://turbo.build)

## The Project Structure

```
└── Project/
    ├── README.md
    ├── package.json
    ├── pnpm-workspace.yaml
    ├── turbo.json
    ├── apps/
    │   ├── api/
    │   ├── web/
    │   └── fullstack/
    ├── docs/
    │   ├── README.md
    │   └── package.json
    └── packages/
        ├── components/
        └── shared/
```

## Naming and Directory Conventions for Typescript Files

```
└── api/
    ├── package.json
    ├── index.ts
    ├── README.md
    └── app/
        ├── app.ts
        ├── server.ts
        ├── routes/
        │   ├── index.ts
        │   ├── user.route.ts
        │   └── auth.route.ts
        ├── controllers/
        │   ├── index.ts
        │   ├── user.controller.ts
        │   └── auth.controller.ts
        ├── middlewares/
        │   ├── index.ts
        │   ├── authguard.middleware.ts
        │   └── validator.middleware.ts
        └── utils/
            ├── index.ts
            ├── auth.util.ts
            ├── error.util.ts
            └── helper.util.ts
```

A Package example

```
└── shared/
    ├── README.md
    ├── package.json
    ├── index.ts
    └── src/
        ├── index.ts
        ├── types/
        │   ├── index.ts
        │   ├── user.type.ts
        │   └── response.type.ts
        ├── schemas/
        │   ├── index.ts
        │   ├── user.schema.ts
        │   └── response.schema.ts
        └── utils/
            ├── index.ts
            ├── auth.util.ts
            ├── error.util.ts
            └── helper.util.ts
```

1. Only export on the `index.ts` file e.g `export * from './types'`
2. Each directory should have an `index.ts` which exposes only necessary functions or types e.g `export * from './user.types'`
3.
