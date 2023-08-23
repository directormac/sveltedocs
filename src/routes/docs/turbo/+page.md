---
title: Turbo
lastUpdate: 2023-08-08
---

## Pipeline

### Dev Server

- [x] Runs api on port [localhost:3000](http://localhost:3000)
- [x] Runs web on port [localhost:5173](http://localhost:5173)
- [x] Runs docs on port 5000 [localhost:5000](http://localhost:5000)

```bash
pnpm dev
```

All dev script have the following arguments

```json
{
  "scripts": {
    "dev": "vite --open --host --port 5173"
  }
}
```

### Build

- [x] Builds api on `apps/api/dist`
- [x] Builds web on `apps/web/dist`
- [x] Builds docs on `docs/dist`

```bash
pnpm build
```

### Test

- [x] Runs test on all packages and apps

```bash
pnpm test
```

- [x] Watch test on all packages and apps

```bash
pnpm test:watch
```
