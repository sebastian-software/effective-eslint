import rules from "./generated/rules.js"

import typeScriptParser from "@typescript-eslint/parser"

import typeScriptPlugin from "@typescript-eslint/eslint-plugin"

import jsdocPlugin from "eslint-plugin-jsdoc"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import nodePlugin from "eslint-plugin-n"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import regexpPlugin from "eslint-plugin-regexp"
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort"
import unicornPlugin from "eslint-plugin-unicorn"
import unusedImportsPlugin from "eslint-plugin-unused-imports"

import importAddonRules from "./addon/import.js"
import qualityAddonRules from "./addon/quality.js"
import reactAddonRules from "./addon/react.js"

const plugins = {
  "@typescript-eslint": typeScriptPlugin,
  jsdoc: jsdocPlugin,
  "jsx-a11y": jsxA11yPlugin,
  n: nodePlugin,
  react: reactPlugin,
  "react-hooks": reactHooksPlugin,
  regexp: regexpPlugin,
  "simple-import-sort": simpleImportSortPlugin,
  unicorn: unicornPlugin,
  "unused-imports": unusedImportsPlugin
}

export const base = {
  files: ["**/*.ts", "**/*.tsx", "**/*.mts"],
  languageOptions: {
    parser: typeScriptParser,
    parserOptions: {
      sourceType: "module",
      project: `${process.cwd()}/tsconfig.json`
    }
  },
  settings: {
    react: {
      version: "18.2"
    }
  },
  plugins
}

export const main = {
  ...base,
  rules
}

export const recommended = {
  ...main,
  rules: {
    ...rules,
    ...importAddonRules,
    ...qualityAddonRules,
    ...reactAddonRules
  }
}
