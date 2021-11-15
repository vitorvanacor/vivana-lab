---
title: Deploying a static SvelteKit app to GitHub Pages
---

# {title}

1. Install SvelteKit's [static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) with `npm i --save-dev @sveltejs/adapter-static@next`
2. Add the adapter to `svelte.config.js`
3. Update `config.kit.paths.base` to match the repo name, `vivana-lab`, since the site will be served from https://[my-username].github.io/[my-repo-name] rather than from the root.

Here is how `svelte.config.js` ends up:

```js
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/vivana-lab',
    },
  },
};

export default config;
```

4. Create an empty file `.nojekyll` in the `static/` folder.
5. Install the gh-pages package with `npm install -D gh-pages`
6. Add a deploy script to `package.json` (**Note:** The `--dotfiles true` option is added because otherwise the `.nojekyll` file is ignored):

```json
"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages --dist build --dotfiles true",
  ...
}
```

7. Make sure the repository is public
8. Run `npm run deploy`

Done! The default SvelteKit's page is live on https://vitorvanacor.github.io/vivana-lab
