import { ESLint, Linter } from "eslint"
import { CombinedRules } from "./types"

async function getConfig(config: ESLint.ConfigData) {
  const linter = new ESLint({
    useEslintrc: false,
    baseConfig: config
  })

  const cfg = (await linter.calculateConfigForFile(
    "index.ts"
  )) as ESLint.ConfigData
  return cfg.rules ?? {}
}

async function mergeConfig(
  combined: CombinedRules,
  cfg: Promise<Partial<Linter.RulesRecord>>,
  origin: string
) {
  for (const [rule, value] of Object.entries(await cfg)) {
    if (!combined[rule]) {
      combined[rule] = {}
    }

    if (value) {
      combined[rule][origin] = normalizeLevel(value)
    }
  }
}

const ruleLevel: Record<number, Linter.RuleLevel> = {
  0: "off",
  1: "warn",
  2: "error"
}

function normalizeLevel(value: Linter.RuleEntry) {
  if (value instanceof Array) {
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
      extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"]
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
}
