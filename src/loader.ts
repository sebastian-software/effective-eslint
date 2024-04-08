import typeScriptPlugin from "@typescript-eslint/eslint-plugin"
import type { Linter as LinterNS } from "eslint"
import { ESLint, Linter } from "eslint"
import jsdocPlugin from "eslint-plugin-jsdoc"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import nodePlugin from "eslint-plugin-n"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import regexpPlugin from "eslint-plugin-regexp"
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort"
import unicornPlugin from "eslint-plugin-unicorn"
import unusedImportsPlugin from "eslint-plugin-unused-imports"

import type { CombinedRules } from "./types"

export const plugins: Record<string, ESLint.Plugin> = {
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

function getAutofixableRules() {
  const rules = new Set()
  const autofix = new Set()

  for (const [ruleName, rule] of new Linter().getRules()) {
    rules.add(ruleName)
    if (rule.meta?.fixable === "code") {
      autofix.add(ruleName)
    }
  }

  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin.rules) {
      for (const [ruleName, rule] of Object.entries(plugin.rules)) {
        const fullName = `${name}/${ruleName}`
        rules.add(fullName)
        if ("meta" in rule && rule.meta?.fixable === "code") {
          autofix.add(fullName)
        }
      }
    }
  }

  return autofix
}

export const autofixRules = getAutofixableRules()

async function getConfig(config: ESLint.ConfigData) {
  const linter = new ESLint({
    useEslintrc: false,
    baseConfig: config
  })

  const cfg = (await linter.calculateConfigForFile(
    "index.tsx"
  )) as ESLint.ConfigData

  return cfg.rules ?? {}
}

async function mergeConfig(
  combined: CombinedRules,
  cfg: Promise<Partial<LinterNS.RulesRecord>>,
  origin: string
) {
  for (const [rule, value] of Object.entries(await cfg)) {
    if (!(rule in combined)) {
      combined[rule] = {}
    }

    if (value) {
      combined[rule][origin] = normalizeLevel(value)
    }
  }
}

const ruleLevel: Record<number, LinterNS.RuleLevel> = {
  /* eslint-disable @typescript-eslint/naming-convention */
  0: "off",
  1: "warn",
  2: "error"
  /* eslint-enable @typescript-eslint/naming-convention */
}

function normalizeLevel(value: LinterNS.RuleEntry) {
  if (Array.isArray(value)) {
    if (typeof value[0] === "number") {
      value[0] = ruleLevel[value[0] as keyof typeof ruleLevel]
    }
  } else if (typeof value === "number") {
    value = ruleLevel[value as keyof typeof ruleLevel]
  }

  return value
}

export async function loadConfigs(combined: CombinedRules) {
  await mergeConfig(
    combined,
    getConfig({
      extends: ["eslint:recommended"]
    }),
    "eslint"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: ["plugin:@typescript-eslint/strict-type-checked"]
    }),
    "ts-strict-typed"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: ["plugin:@typescript-eslint/stylistic-type-checked"]
    }),
    "ts-stylistic-typed"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended"
      ]
    }),
    "react"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: ["plugin:jsx-a11y/recommended"]
    }),
    "jsx-a11y"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: ["plugin:unicorn/recommended"]
    }),
    "unicorn"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: ["plugin:n/recommended-module"]
    }),
    "node"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: ["plugin:jsdoc/recommended"]
    }),
    "jsdoc"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: ["plugin:regexp/recommended"]
    }),
    "regexp"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: [
        "eslint-config-xo",
        "eslint-config-xo-react",
        "eslint-config-xo-typescript"
      ]
    }),
    "xo"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: ["eslint-config-prettier"]
    }),
    "prettier"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: ["eslint-config-react-app"]
    }),
    "react-app"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: ["eslint-config-next"]
    }),
    "next"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: ["@remix-run/eslint-config"]
    }),
    "remix"
  )

  await mergeConfig(
    combined,
    getConfig({
      extends: ["./config/index"]
    }),
    "local"
  )
}
