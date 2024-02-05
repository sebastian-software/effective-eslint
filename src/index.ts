import { Linter } from "eslint"
import { writeTable } from "./writeTable"
import { CombinedRules } from "./types"
import { loadConfigs } from "./loader"
import {
  cleanupExplicitOff,
  cleanupRemainingOff,
  cleanupUnusedPlugins
} from "./cleanup"

export function ruleSorter(a: string, b: string) {
  if (a.includes("/") && !b.includes("/")) {
    return 1
  }
  if (!a.includes("/") && b.includes("/")) {
    return -1
  }

  return a.localeCompare(b)
}

const effectivePriorities = [
  // multi plugin presets
  "xo",
  "ts-strict-typed",
  "ts-stylistic-typed",
  "react-app",
  "react",

  // single plugin recommended
  "regexp",
  "unicorn"
]

const deprecatedRules = new Set(["react/prop-types"])

function generateEffective(combined: CombinedRules) {
  const ruleNames = Object.keys(combined).sort(ruleSorter)
  let counter = 0
  for (const ruleName of ruleNames) {
    const values = combined[ruleName]
    const origins = Object.keys(values)

    const use = effectivePriorities.find((priority) =>
      origins.includes(priority)
    )

    if (use) {
      if (deprecatedRules.has(ruleName)) {
        combined[ruleName].effective = ["off"]
      } else {
        counter++
        combined[ruleName].effective = values[use]
      }
    }
  }

  console.log("Effective Rules:", counter)
}

async function main() {
  const combined: CombinedRules = {}

  await loadConfigs(combined)

  cleanupUnusedPlugins(combined, ["vue", "flowtype", "@next"])
  cleanupExplicitOff(combined)
  cleanupRemainingOff(combined)

  console.log("All Rules:", Object.keys(combined).sort(ruleSorter).length)

  generateEffective(combined)

  console.log("Writing table...")
  await writeTable(combined)
}

void main()
