# Vivana Lab

I've created this repo to make experiments - that's why it's called "lab" (**vivana** is just a wordplay with my name).

The idea is to simulate the development of a product starting from nothing and making very small increments on each iteration. The development process will be documented on posts in the `src/routes/blog/` folder.

The "product" being developed will start as a simple website to display these posts describing the development process - _very meta_. The end-product remains uncertain.

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
