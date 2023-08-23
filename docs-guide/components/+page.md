---
title: Components
lastUpdate: 2023-08-08
---

:::note[Manually import]
All built-in Components can directly use in markdown files.  
But should be imported manually in svelte files.
:::

:::warning[In Markdown]
All provided components can be used in markdown files.
For Svelte specific usage check out this [page](https://sveltepress.site/guide/default-theme/builtin-components/)
:::

## Links

### Props

- `label` - The link label text
- `to` - The link address
- `withBase` - Determine whether to with [sveltekit config.kit.paths.base](https://kit.svelte.dev/docs/modules#$app-paths-base). Default is `true`

:::info[Auto external icon]{icon=ic:sharp-rocket-launch}
Would auto add a external icon when link address starts with http or https
:::

```md live
- <Link to="https://github.com/" label="Github" />
- <Link to="/" label="Home page" />
```

## Tabs & TabPanel

### Tab Props

- `activeName` - The default active panel name.
- `bodyPadding` - Determine whether the panel body has a padding or not. Default is `true`

### TabPanel Props

- `name` - The panel name.
- `activeIcon` - The icon component used when tab is active
- `inactiveIcon` - The icon component used when tab is inactive

````md live
<Tabs activeName="Svelte">
  <TabPanel name="Svelte">

```svelte title="Counter.svelte"
<script>
  let count = 0
</script>
<button on:click={() => count++}>
  You've clicked {count} times
</button>
```

  </TabPanel>

  <TabPanel name="Vue">

```html title="Counter.vue"
<script setup>
  import { ref } from "vue";

  const count = ref(0);
</script>
<button @click="count++">You've clicked {count} times</button>
```

  </TabPanel>
</Tabs>
````

## Expansion

### Props

- `title` - The expansion title
- `showIcon` - Determine whether to the icon or not. Default is `true`
- `headerStyle` - Customize the header inline style
- `bind:expanded` - Determine the expanded status. Default is `false`

### Slots

- `default` - The expansion content
- `icon-fold` - The icon used for folded
- `icon-expanded` - The icon used for expanded
- `arrow` - Customize the expansion arrow indicator

```md live
<Expansion title="Click to expand/fold panel">
  <div class="text-[24px]">Some content</div>
</Expansion>
```

---

Maybe an updated version exist on the official docs check it out

### [Read More](https://sveltepress.site/guide/default-theme/builtin-components/)
