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

Then we add rules from the following rule collections:

1. [XO](https://github.com/xojs/eslint-config-xo): That's about 50+% of our preset. A very good, very TS-focused base preset.
2. [TypeScript ESLint](https://typescript-eslint.io/linting/configs/): We are using the strict and stylistic rules, both in the type-enhanced version. A lof of rules from XO are also enabled here, but XO is generally more strict with finer-grained exceptions/options.
3. [Create React App](https://create-react-app.dev/): The preset from CRA is focused on React (and JSX-A11Y) and is a very good common-sense oriented React preset. It has practically no overlap with the previous two presets.

We also add recommended rules from these plugins:

1. [React Plugin](https://www.npmjs.com/package/eslint-plugin-react) and [React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): All recommended rules which are not already part of CRA e.g. warnings on deprecated API, usage of string refs, ... are enabled by default.
2. [JSX-A11Y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y): All recommended rules of the plugin are enabled by default.
3. [Unicorn Plugin](https://github.com/sindresorhus/eslint-plugin-unicorn): All recommended rules of the plugin are enabled by default.
4. [Node](https://www.npmjs.com/package/eslint-plugin-n): Maintained fork of the original NodeJS plugin. All recommended ESM NodeJS rules are enabled by default.
5. [JSDoc](https://github.com/gajus/eslint-plugin-jsdoc): All recommended rules of the plugin are enabled by default with the exception of all rules starting with `required-` as in TypeScript project its typically not required to add all the little details in JSDOC but rely on the actual type engine instead. This means that the rules are configured to check existing JSDoc but do not require to add JSDoc for all params, return values, etc.
6. [RegExp Plugin](https://www.npmjs.com/package/eslint-plugin-regexp): All recommended rules of the plugin are enabled by default.

A few namespaces are globally blocked (independent from the preset):

1. `vue/\*`: Effective ESLint is focussed on ReactJS - therefor all Vue related rules are dropped.
2. `flowtype/\*`: Effective ESLint is focussed on TypeScript - therefor all Flowtype related rules are dropped.
3. `@next/\*`: Effective ESLint omits adding frameworks e.g. NextJS specific rules as they might conflict when used in other environments.

**Explicitly unused plugins:**

- [Import](https://www.npmjs.com/package/eslint-plugin-import): The import plugin does not seem as relevant in TypeScript code base anymore. Most presets do not actively enable most rules.

## License

[Apache License; Version 2.0, January 2004](http://www.apache.org/licenses/LICENSE-2.0)

## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Logo of Sebastian Software GmbH, Mainz, Germany" width="460" height="160"/>

Copyright 2024<br/>[Sebastian Software GmbH](https://www.sebastian-software.de)
