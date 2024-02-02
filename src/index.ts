import { ESLint, Linter } from "eslint"

process.env.ESLINT_USE_FLAT_CONFIG = "true"

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

const combined: Record<string, Record<string, unknown>> = {}

async function mergeConfig(
  cfg: Promise<Partial<Linter.RulesRecord>>,
  origin: string
) {
  for (const [rule, value] of Object.entries(await cfg)) {
    if (!combined[rule]) {
      combined[rule] = {}
    }

    combined[rule][origin] = value
  }
}

function ruleSorter(a: string, b: string) {
  if (a.includes("/") && !b.includes("/")) {
    return 1
  }
  if (!a.includes("/") && b.includes("/")) {
    return -1
  }

  return a.localeCompare(b)
}

async function loadConfigs() {
  await mergeConfig(
    getConfig({
      extends: ["eslint:recommended"]
    }),
    "eslint"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:@typescript-eslint/recommended"]
    }),
    "ts"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:@typescript-eslint/recommended-type-checked"]
    }),
    "ts-typed"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:@typescript-eslint/strict"]
    }),
    "ts-strict"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:@typescript-eslint/strict-type-checked"]
    }),
    "ts-strict-typed"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:@typescript-eslint/stylistic"]
    }),
    "ts-stylistic"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:@typescript-eslint/stylistic-type-checked"]
    }),
    "ts-stylistic-typed"
  )

  await mergeConfig(
    getConfig({
      extends: ["eslint-config-xo"]
    }),
    "xo"
  )

  await mergeConfig(
    getConfig({
      extends: ["eslint-config-xo-typescript"]
    }),
    "xo-ts"
  )

  await mergeConfig(
    getConfig({
      extends: ["eslint-config-prettier"]
    }),
    "prettier"
  )

  await mergeConfig(
    getConfig({
      extends: ["eslint-config-react-app"]
    }),
    "react-app"
  )

  await mergeConfig(
    getConfig({
      extends: ["eslint-config-next"]
    }),
    "next"
  )

  await mergeConfig(
    getConfig({
      extends: ["@remix-run/eslint-config"]
    }),
    "remix"
  )

  await mergeConfig(
    getConfig({
      extends: [require.resolve("./quality")]
    }),
    "quality"
  )

  const keys = Object.keys(combined).sort(ruleSorter)
  for (const key of keys) {
    console.log(key)
    for (const [origin, value] of Object.entries(combined[key])) {
      console.log(`  - ${origin}:`, value)
    }
  }
}

void loadConfigs()
