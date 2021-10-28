# Starting with SvelteKit

I've created this repo to make experiments - that's why it's called "lab" (**vivana** is just a wordplay with my name).

The idea is to simulate the development of a product starting from nothing and making very small increments on each iteration. The development process will be documented on posts in the `blog/` folder.

The "product" being developed will start as a simple website to display these posts describing the development process - *very meta*. The end-product remains uncertain.

Let's begin!

## SvelteKit

I wanna learn Svelte so I'm gonna use [SvelteKit](https://kit.svelte.dev/docs). I went with the latest version of the time, which was `1.0.0-next.179`.

Following the Getting Started guide, I ran the `npm init svelte@next` command and I was given some options:
- Skeleton Project or Demo Project?
  - Demo Project starts with some features, so it will be useful for reference; but I went with Skeleton Project to start from scratch.
- Add TypeScript? Yes.
- Add Prettier? Yes.
- Add ESLint? Yes.

The following file structure was created:
```
.
├── README.md
├── package.json
├── src
│   ├── app.html
│   ├── global.d.ts
│   └── routes
│       └── index.svelte
├── static
│   └── favicon.ico
├── svelte.config.js
├── tsconfig.json
├── .eslintrc.cjs
├── .prettierrc
```

That's the end of this post. In the next one, I will deploy it as a static website.

I'll leave here the contents of the files created by `npm init svelte@next`:

### `README.md`
`````
## Developing

This project uses SvelteKit.
Install dependencies with `npm install` (or `pnpm install` or `yarn`) and start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
`````

### `package.json`

```json
{
  "name": "vivana-lab",
  "version": "0.0.1",
  "scripts": {
    "dev": "svelte-kit dev",
    "build": "svelte-kit build",
    "preview": "svelte-kit preview",
    "check": "svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-check --tsconfig ./tsconfig.json --watch",
    "lint": "prettier --ignore-path .gitignore --check --plugin-search-dir=. . && eslint --ignore-path .gitignore .",
    "format": "prettier --ignore-path .gitignore --write --plugin-search-dir=. ."
  },
  "devDependencies": {
    "@sveltejs/kit": "next",
    "@typescript-eslint/eslint-plugin": "^4.31.1",
    "@typescript-eslint/parser": "^4.31.1",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-svelte3": "^3.2.1",
    "prettier": "^2.4.1",
    "prettier-plugin-svelte": "^2.4.0",
    "svelte": "^3.42.6",
    "svelte-check": "^2.2.6",
    "svelte-preprocess": "^4.9.4",
    "tslib": "^2.3.1",
    "typescript": "^4.4.3"
  },
  "type": "module"
}
```

### `app.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    %svelte.head%
  </head>
  <body>
    <div id="svelte">%svelte.body%</div>
  </body>
</html>
```

### `global.d.ts`
```ts
/// <reference types="@sveltejs/kit" />
```

### `index.svelte`
```html
<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
```

### `svelte.config.js`
```js
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};

export default config;
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "module": "es2020",
    "lib": ["es2020", "DOM"],
    "target": "es2019",
    /**
			svelte-preprocess cannot figure out whether you have a value or a type, so tell TypeScript
			to enforce using \`import type\` instead of \`import\` for Types.
			*/
    "importsNotUsedAsValues": "error",
    "isolatedModules": true,
    "resolveJsonModule": true,
    /**
			To have warnings/errors of the Svelte compiler at the correct position,
			enable source maps by default.
			*/
    "sourceMap": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "allowJs": true,
    "checkJs": true,
    "paths": {
      "$lib": ["src/lib"],
      "$lib/*": ["src/lib/*"]
    }
  },
  "include": ["src/**/*.d.ts", "src/**/*.js", "src/**/*.ts", "src/**/*.svelte"]
}
```
