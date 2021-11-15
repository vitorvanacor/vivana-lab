---
title: Add Mdsvex
---

# {title}

Mdsvex is a Markdown preprocessor for Svelte. It takes documents written in a mix of Markdown and Svelte and outputs Svelte components.

1. Add `mdsvex` to the project with `npx svelte-add@latest mdsvex`. It creates a `mdsvex.config.js` file with this content:

```js
const config = {
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [],
  rehypePlugins: [],
};

export default config;
```

The command also adds the preprocessor to `svelte.config.js`:

```js
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), mdsvex(mdsvexConfig)],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),
  },
};

export default config;
```

2. Run `npm install`

Now, if you have a blog post in `src/routes/blog/a-post.md` (or `.svx`), you will be able to access the generated version in `https://[your-site]/blog/a-post`
