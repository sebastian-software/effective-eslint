# Effective / ESLint-Config

[![Sponsored by][sponsor-img]][sponsor] [![License][github-license-img]][github] [![Stars][github-stars-img]][github] [![Version][npm-version-img]][npm] [![Build][github-action-img]][github] [![Downloads][npm-downloads-img]][npm]

Introducing `@effective/eslint-config`—your definitive ESLint configuration package. By synthesizing the most effective practices and presets from industry-leading sources including React, XO, and TypeScript ESLint, `Effective ESLint` offers a premier linting solution that stands on the shoulders of giants. This configuration is meticulously crafted to enhance your development workflow, ensuring that your code is not only clean and efficient but also meets the highest standards of coding excellence.

[sponsor]: https://www.sebastian-software.de
[sponsor-img]: https://badgen.net/badge/Sponsored%20by/Sebastian%20Software/c41e54
[npm]: https://www.npmjs.com/package/@effective/eslint-config
[npm-downloads-img]: https://badgen.net/npm/dm/@effective/eslint-config
[npm-version-img]: https://badgen.net/npm/v/@effective/eslint-config
[github]: https://github.com/sebastian-software/effective-eslint-config
[github-stars-img]: https://badgen.net/github/stars/sebastian-software/effective-eslint-config
[github-license-img]: https://badgen.net/github/license/sebastian-software/effective-eslint-config
[github-action-img]: https://github.com/sebastian-software/effective-eslint-config/actions/workflows/node.js.yml/badge.svg

## Key Features

- **Comprehensive Configurations:** `Effective ESLint` integrates a variety of top-tier ESLint presets into one unified configuration, offering the best practices from the ESLint community. This approach ensures you have a comprehensive and effective linting setup.
- **Fully Customizable:** With the understanding that each project is unique, `Effective ESLint` is built to be fully customizable. It allows for easy adjustment or deactivation of specific rules to fit your project's needs, providing a perfect mix of guideline enforcement and creative latitude.
- **Streamlined Integration:** `Effective ESLint` is designed to be user-friendly, streamlining the setup process. Its configuration facilitates quick integration, allowing you to refine your codebase efficiently, without the complexities of intricate setups.
- **Enhanced Efficiency:** `Effective ESLint` enhances the linting process by combining multiple presets into one, which not only eases management but also improves the linter's startup time. This results in a quicker and more productive development workflow.
- **Addons:** `Effective ESLint` includes addons that enhance code consistency, specifically for imports, JSX code, and enforcing sensible defaults to maintain low code complexity.
- **Community-Driven Development:** The development of `Effective ESLint` is community-driven, emphasizing continuous improvement and inclusivity. Contributions from the community are highly encouraged, helping to keep our configurations up-to-date with the latest coding standards and practices.

## Installation

To use `@effective/eslint-config` in your project, you need to install it via `npm`, `yarn` or `pnpm`. Ensure you have ESLint installed in your project; if not, you can install it alongside this package.

```bash
npm install @effective/eslint-config eslint --save-dev
# or
yarn add @effective/eslint-config eslint --dev
# or
pnpm add @effective/eslint-config eslint --dev
```

## Usage

After installation, you can configure ESLint to use @effective/eslint-config by adding it to your `eslint.config.js` (flat configuration) file:

```js
import { recommended } from "@effective/eslint-config"

export default [
  recommended

  // room for custom overrides
]
```

There is also a `main` import as an alternative to `recommended` which does not include any of the listed addons.

## Rules

You can check the [full resolution table here](generated/rules.md) which shows which rules are active and from where.

## Approach

All starts with `eslint:recommended` the built-in recommendations list from [ESLint](https://eslint.org).

### Collections

Effective ESLint incorporates rules from the following collections to establish a comprehensive linting foundation:

1. [XO](https://github.com/xojs/eslint-config-xo): Constituting over 50% of Effective ESLint's preset, XO provides a robust, TypeScript-centric base. It stands out for its thorough approach and specialized focus on TypeScript.
2. [TypeScript ESLint](https://typescript-eslint.io/linting/configs/): Effective ESLint utilizes the strict and stylistic rules from TypeScript ESLint, opting for the type-enhanced versions. While there is significant overlap with XO rules, XO typically enforces stricter standards, offering finer-grained exceptions and options.

### Framework Collections

Effective ESLint embraces best practices by integrating presets from leading React frameworks:

1. [Create React App](https://create-react-app.dev/): Focused on React (including JSX-A11Y), the CRA preset offers a well-rounded, common-sense-oriented foundation for React development.
2. [NextJS](https://www.npmjs.com/package/eslint-config-next): Specializes in framework-agnostic rules, specifically excluding `@next/plugin`-specific rules.
3. [Remix](https://www.npmjs.com/package/@remix-run/eslint-config): Enhances Effective ESLint's presets with standards from the Remix framework.

### Plugins

Effective ESLint is further enriched by recommended rules from these plugins:

1. [React Plugin](https://www.npmjs.com/package/eslint-plugin-react) & [React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): Integrates all recommended rules not already part of CRA, including warnings on deprecated APIs, the use of string refs, and more.
2. [JSX-A11Y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y): Adopts all recommended accessibility rules from the JSX-A11Y plugin.
3. [Unicorn Plugin](https://github.com/sindresorhus/eslint-plugin-unicorn): Implements all recommended practices from the Unicorn plugin to promote superior coding patterns.
4. [Node](https://www.npmjs.com/package/eslint-plugin-n): A maintained fork of the original Node.js plugin, with all recommended ESM Node.js rules enabled.
5. [JSDoc](https://github.com/gajus/eslint-plugin-jsdoc): Enables all recommended JSDoc rules, excluding those starting with `required-`. This reflects the TypeScript project's reliance on the type system over extensive JSDoc comments.
6. [RegExp Plugin](https://www.npmjs.com/package/eslint-plugin-regexp): All recommended RegExp rules are enabled to ensure expressions are both efficient and error-free.

### Addons

There are three addon files:

- `import`: sorting and grouping imports automatically
- `quality`: sensible defaults for complexity, file size, etc.
- `react`: enhanced unified code style for JSX code

These are all part of the `recommended` import which we suggest to use. Alternatively you can also built upon the base unified rule set by importing `main` instead.

### Focus: React/TypeScript

Effective ESLint globally excludes specific namespaces/plugins to maintain focus and avoid conflicts:

1. `vue/*`: Tailored for ReactJS, hence all Vue-related rules are excluded.
2. `flowtype/*`: Dedicated to TypeScript, omitting all Flowtype-related rules.
3. `@next/*`: Framework-specific rules, such as those from NextJS, are avoided to prevent conflicts in diverse environments.
4. `import/*`: Given its reduced relevance in TypeScript projects, the import plugin is not very utilized in most presets nowadays. It is also relatively slow in execution for TypeScript code.

### Disabled Formatting

Effective ESLint employs Prettier's configuration to disable any stylistic/formatting rules that could conflict with Prettier's guidelines. This encompasses core ESLint rules and those from React and TypeScript plugins.

## License

[Apache License; Version 2.0, January 2004](http://www.apache.org/licenses/LICENSE-2.0)

## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Logo of Sebastian Software GmbH, Mainz, Germany" width="460" height="160"/>

Copyright 2024<br/>[Sebastian Software GmbH](https://www.sebastian-software.de)
