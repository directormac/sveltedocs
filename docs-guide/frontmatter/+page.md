---
title: Frontmatter
lastUpdate: 2023
---

```ts
interface CommonFrontmatter {
  title?: string;
  description?: string;
  lastUpdate?: string;
}
```

### `title`

The final page title would be `page frontmatter title | siteConfig.title`

### `description`

The final page description would be use the page frontmatter if provided instead of `siteConfig.description`

### `lastUpdate`

It will affect the "last update at: " content at the end of the page.  
Default it would read the git commit time of the +page file.  
You can override it by config this field.

## Special frontmatter

### [Home page](/docs-guide/homepage)

---

Maybe an updated version exist on the official docs check it out

### [Read More](https://sveltepress.site/guide/default-theme/frontmatter/)
