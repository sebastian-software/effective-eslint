# Effective / ESLint-Config

[![Sponsored by][sponsor-img]][sponsor] [![GitHub][github-license-img]][github] [![GitHub][github-stars-img]][github] [![Version][npm-version-img]][npm] [![Downloads][npm-downloads-img]][npm]

Welcome to `@effective/eslint-config`, the one-stop-shop for all your ESLint configurations. Standing on the shoulders of giants, this package amalgamates the best practices and presets from renowned sources such as React, XO, ESLint-TypeScript and more, to deliver a best-of-breed ESLint configuration. It's designed to streamline your development process, ensuring your code is clean, efficient, and adheres to the highest standards of quality.

[sponsor]: https://www.sebastian-software.de
[sponsor-img]: https://badgen.net/badge/Sponsored%20by/Sebastian%20Software/c41e54
[npm]: https://www.npmjs.com/package/@effective/eslint-config
[npm-downloads-img]: https://badgen.net/npm/dm/@effective/eslint-config
[npm-version-img]: https://badgen.net/npm/v/@effective/eslint-config
[github]: https://github.com/sebastian-software/effective-eslint-config
[github-stars-img]: https://badgen.net/github/stars/sebastian-software/effective-eslint-config
[github-license-img]: https://badgen.net/github/license/sebastian-software/effective-eslint-config

## Features

- **Comprehensive Configurations:** Leverage a unified ESLint configuration that integrates the best aspects of various popular presets.
- **Fully Customizable:** While `@effective/eslint-config` provides a robust starting point, we understand one size doesn't fit all. Therefore, you can easily disable or tweak individual rules to perfectly align with your project's needs.
- **Easy to Use:** Get up and running with minimal setup, allowing you to focus on what's important - writing great code.
- **Efficient**: As the preset is merging all the listed presets into one new preset it is more efficient to handle for ESLint and results into faster startups of the linter process.
- **Community-Driven:** Contributions are welcome! Help us refine and expand our configurations to cater to an even broader spectrum of coding standards and practices.

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

After installation, you can configure ESLint to use @effective/eslint-config by adding it to your .eslintrc file or the ESLint configuration section of your package.json.

```json
{
  "extends": "@effective"
}
```

## Rules

You can check the [full resolution table here](rules.md) which shows which rules are active and from where.

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

### Focus: React/TypeScript

Effective ESLint globally excludes specific namespaces/plugins to maintain focus and avoid conflicts:

1. `vue/*`: Tailored for ReactJS, hence all Vue-related rules are excluded.
2. `flowtype/*`: Dedicated to TypeScript, omitting all Flowtype-related rules.
3. `@next/*`: Framework-specific rules, such as those from NextJS, are avoided to prevent conflicts in diverse environments.

### Disabled Formatting

Effective ESLint employs Prettier's configuration to disable any stylistic/formatting rules that could conflict with Prettier's guidelines. This encompasses core ESLint rules and those from React and TypeScript plugins.

**Explicitly Unused Plugins:**

- [Import](https://www.npmjs.com/package/eslint-plugin-import): Given its reduced relevance in TypeScript projects, the import plugin is not utilized in most presets.

## License

[Apache License; Version 2.0, January 2004](http://www.apache.org/licenses/LICENSE-2.0)

## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Logo of Sebastian Software GmbH, Mainz, Germany" width="460" height="160"/>

Copyright 2024<br/>[Sebastian Software GmbH](https://www.sebastian-software.de)
