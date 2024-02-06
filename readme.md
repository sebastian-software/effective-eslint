# @effective/eslint-config

Welcome to `@effective/eslint-config`, the one-stop-shop for all your ESLint configurations. Standing on the shoulders of giants, this package amalgamates the best practices and presets from renowned sources such as React, XO, ESLint-TypeScript, Next.js, and more, to deliver a best-of-breed ESLint configuration. It's designed to streamline your development process, ensuring your code is clean, efficient, and adheres to the highest standards of quality.

## Features

- **Comprehensive Configurations:** Leverage a unified ESLint configuration that integrates the best aspects of various popular presets.
- **Fully Customizable:** While `@effective/eslint-config` provides a robust starting point, we understand one size doesn't fit all. Therefore, you can easily disable or tweak individual rules to perfectly align with your project's needs.
- **Easy to Use:** Get up and running with minimal setup, allowing you to focus on what's important - writing great code.
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

### Priorities

This is the list of priorities from different sources to merge into the "effective" list of this preset:

- [XO](https://github.com/xojs/eslint-config-xo): That's about 50+% of our preset. A very good, very TS-focused base for ESLint.
- [TypeScript ESLint](https://typescript-eslint.io/linting/configs/): We are using the strict and stylistic rules, both in the type-enhanced version. A lof of rules from XO are also enabled here, but XO is generally more strict with finer-grained exceptions/options.
- [Create React App](https://create-react-app.dev/): The preset from CRA is focused on React (and JSX-A11Y) and is a very good common-sense oriented React preset. It has practically no overlap with the previous two presets.

**There are also these very plugin-specific recommendations:**

- [React Plugin](https://www.npmjs.com/package/eslint-plugin-react): All recommended rules which are not already part of CRA e.g. warnings on deprecated API, usage of string refs, ... are enabled by default.
- [RegExp Plugin](https://www.npmjs.com/package/eslint-plugin-regexp): All recommended rules of the plugin are enabled by default
- [Unicorn Plugin](https://github.com/sindresorhus/eslint-plugin-unicorn): All recommended rules of the plugin are enabled by default
- [JSDOC Plugin](https://www.npmjs.com/package/eslint-plugin-jsdoc): Recommended rules except all `"required-*"` are enabled by default. The reason here is that we do not like to require JSDoc as this mostly functions for documentation proposes in TypeScript projects.

**Explicit unused plugins:**

- [Import](https://www.npmjs.com/package/eslint-plugin-import): The import plugin does not seem as relevant in TypeScript code base anymore. Most presets do not actively enable most rules.

## License

[Apache License; Version 2.0, January 2004](http://www.apache.org/licenses/LICENSE-2.0)

## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Logo of Sebastian Software GmbH, Mainz, Germany" width="460" height="160"/>

Copyright 2024<br/>[Sebastian Software GmbH](https://www.sebastian-software.de)
