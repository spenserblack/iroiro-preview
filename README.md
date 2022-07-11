# [Iroiro Preview](http://iroiro-preview.vercel.app/)

[![CI](https://github.com/spenserblack/iroiro-preview/actions/workflows/ci.yml/badge.svg)](https://github.com/spenserblack/iroiro-preview/actions/workflows/ci.yml)

Preview colors from [iroiro] in your browser.

This website isn't pretty, but should serve as a functional utility for getting
and previewing [iroiro] colors, which may not be accurate when displayed in the
terminal. 

## Developing

### Dependency Installation

```bash
yarn
```

### Running Development Instance

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev --open
```

### Building

```bash
yarn build
```

You can preview the production build with `yarn preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

[iroiro]: https://github.com/antfu/iroiro
