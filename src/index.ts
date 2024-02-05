import { ESLint, Linter } from "eslint"
import { writeFile } from "fs/promises"

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

export type CombinedRules = Record<string, Record<string, Linter.RuleEntry>>
const combined: CombinedRules = {}

const ruleLevel = {
  0: "off",
  1: "warn",
  2: "error"
}

function normalizeLevel(value: unknown) {
  if (value instanceof Array) {
    if (typeof value[0] === "number") {
      value[0] = ruleLevel[value[0] as keyof typeof ruleLevel]
    }
  } else if (typeof value === "number") {
    value = ruleLevel[value as keyof typeof ruleLevel]
  }

  return value
}

async function mergeConfig(
  cfg: Promise<Partial<Linter.RulesRecord>>,
  origin: string
) {
  for (const [rule, value] of Object.entries(await cfg)) {
    if (!combined[rule]) {
      combined[rule] = {}
    }

    combined[rule][origin] = normalizeLevel(value)
  }
}

function isRuleOff(rule: Linter.RuleEntry) {
  return rule instanceof Array ? rule[0] === "off" : rule === "off"
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

function cleanupExplicitOff(combined: CombinedRules) {
  Object.keys(combined).forEach((ruleName) => {
    if (isRuleOff(combined[ruleName]?.["prettier"])) {
      delete combined[ruleName]
    }
  })

  Object.keys(combined).forEach((ruleName) => {
    if (isRuleOff(combined[ruleName]?.["ts-strict-typed"])) {
      delete combined[ruleName]
    }
  })

  Object.keys(combined).forEach((ruleName) => {
    if (isRuleOff(combined[ruleName]?.["ts-stylistic-typed"])) {
      delete combined[ruleName]
    }
  })
}

function cleanupUnusedPlugins(combined: CombinedRules, plugins: string[]) {
  const pluginRegex = new RegExp(`^(${plugins.join("|")})/`)
  Object.keys(combined).forEach((ruleName) => {
    if (pluginRegex.test(ruleName)) {
      delete combined[ruleName]
    }
  })
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
      extends: ["plugin:@typescript-eslint/strict-type-checked"]
    }),
    "ts-strict-typed"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:@typescript-eslint/stylistic-type-checked"]
    }),
    "ts-stylistic-typed"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:react/recommended"]
    }),
    "react"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:react-hooks/recommended"]
    }),
    "react-hooks"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:jsx-a11y/recommended"]
    }),
    "jsx-a11y"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:import/recommended", "plugin:import/typescript"]
    }),
    "import"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:unicorn/recommended"]
    }),
    "unicorn"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:n/recommended-module"]
    }),
    "node"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:jsdoc/recommended"]
    }),
    "jsdoc"
  )

  await mergeConfig(
    getConfig({
      extends: ["plugin:regexp/recommended"]
    }),
    "regexp"
  )

  await mergeConfig(
    getConfig({
      extends: ["eslint-config-xo", "eslint-config-xo-typescript"]
    }),
    "xo"
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

  cleanupUnusedPlugins(combined, ["vue", "flowtype", "@next"])
  cleanupExplicitOff(combined)

  const ruleNames = Object.keys(combined).sort(ruleSorter)
  for (const ruleName of ruleNames) {
  }

  for (const ruleName of ruleNames) {
    console.log(ruleName)
    for (const [origin, value] of Object.entries(combined[ruleName])) {
      console.log(`  - ${origin}:`, value)
    }
  }

  console.log("Length:", ruleNames.length)

  console.log("Writing table...")
  await writeTable(combined)
}

function getAllOrigins(combined: CombinedRules) {
  const origins = new Set<string>()
  for (const rules of Object.values(combined)) {
    for (const origin of Object.keys(rules)) {
      origins.add(origin)
    }
  }

  return Array.from(origins).sort()
}

async function writeTable(combined: CombinedRules) {
  const columns = getAllOrigins(combined)

  const builder = []
  builder.push("<style>")
  builder.push("body {")
  builder.push("  margin: 0")
  builder.push("}")
  builder.push("table {")
  builder.push("  font-family: system-ui;")
  builder.push("  border-collapse: collapse;")
  builder.push("  table-layout: fixed;")
  builder.push("}")
  builder.push("thead {")
  builder.push("  position: fixed;")
  builder.push("  background: white;")
  builder.push("}")
  builder.push("tbody {")
  builder.push("  border-top: 40px solid white;")
  builder.push("}")
  builder.push("th, td {")
  builder.push("  border-right: 1px solid #999;")
  builder.push("  border-bottom: 1px solid #999;")
  builder.push("  padding: 4px 8px;")
  builder.push("  font-size: 12px;")
  builder.push("  overflow: hidden;")
  builder.push("  text-overflow: ellipsis;")
  builder.push("  text-align: left;")
  builder.push("  width: 80px;")
  builder.push("  font-weight: bold;")
  builder.push("}")
  builder.push("td.off {")
  builder.push("  background: #eee;")
  builder.push("}")
  builder.push("td.warn {")
  builder.push("  background: #ffe0ad;")
  builder.push("}")
  builder.push("td.error {")
  builder.push("  background: #fdb5bb;")
  builder.push("}")
  builder.push("tr > th:first-child {")
  builder.push("  width: 200px;")
  builder.push("}")
  builder.push("</style>")
  builder.push("<table>")
  builder.push("<thead>")
  builder.push(`<th></th>`)
  columns.forEach((origin) => {
    builder.push(`<th>${origin}</th>`)
  })
  builder.push("</thead>")

  builder.push("<tbody>")
  const ruleNames = Object.keys(combined).sort(ruleSorter)
  for (const ruleName of ruleNames) {
    builder.push("<tr>")
    builder.push(`<th>${ruleName}</th>`)
    for (const origin of columns) {
      const value = combined[ruleName][origin]
      const level = (value instanceof Array ? value[0] : value) ?? ""
      const label = level
        .toString()
        .replace(/^off$/, "✗")
        .replace(/^warn$/, "✓")
        .replace(/^error$/, "✓")
      const plus = value instanceof Array && value.length > 1 ? "+" : ""
      builder.push(`<td class="${level}">${label}${plus}</td>`)
    }
    builder.push("</tr>")
  }
  builder.push("</tbody>")
  builder.push("</table>")

  await writeFile("table.html", builder.join("\n"))
}

void loadConfigs()
