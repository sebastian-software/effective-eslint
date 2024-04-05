import { mkdir, rm, writeFile } from "node:fs/promises"

import type { Linter } from "eslint"

import {
  cleanupExplicitOff,
  cleanupRemainingOff,
  cleanupUnusedPlugins
} from "./cleanup"
import {
  blockedRules,
  deprecatedRules,
  dropPluginRules,
  mergePriority,
  selectPresetRules
} from "./config"
import { loadConfigs } from "./loader"
import { writeTable } from "./table"
import type { CombinedRules } from "./types"

/** Custom sort method which sorts plugin rules separately. */
export function ruleSorter(a: string, b: string) {
  if (a.includes("/") && !b.includes("/")) {
    return 1
  }

  if (!a.includes("/") && b.includes("/")) {
    return -1
  }

  return a.localeCompare(b)
}

function generateEffective(combined: CombinedRules) {
  const ruleNames = Object.keys(combined).sort(ruleSorter)
  let counter = 0
  for (const ruleName of ruleNames) {
    const values = combined[ruleName]
    const origins = Object.keys(values)

    const use = mergePriority.find((priority) => origins.includes(priority))

    if (use) {
      if (deprecatedRules.has(ruleName) || blockedRules.has(ruleName)) {
        combined[ruleName].effective = ["off"]
      } else {
        counter++
        combined[ruleName].effective = values[use]
      }
    } else if (selectPresetRules.some((regex) => regex.test(ruleName))) {
      counter++
      combined[ruleName].effective = values[origins[0]]
    }
  }

  console.log("Effective Rules:", counter)
}

async function writeConfig(combined: CombinedRules) {
  const ruleNames = Object.keys(combined).sort(ruleSorter)

  const rules: Record<string, Linter.RuleEntry> = {}
  for (const ruleName of ruleNames) {
    const values = combined[ruleName]
    const effective = values.effective

    if (effective != undefined) {
      rules[ruleName] = effective
    }
  }

  const json = JSON.stringify(rules, null, 2)
  const wrapped = `
    const rules = ${json};
    export default rules;
  `

  return wrapped
}

async function main() {
  const combined: CombinedRules = {}

  console.log("Loading...")
  await loadConfigs(combined)

  console.log("All Rules:", Object.keys(combined).length)

  cleanupUnusedPlugins(combined, dropPluginRules)
  cleanupExplicitOff(combined)
  cleanupRemainingOff(combined)

  console.log("Relevant Rules:", Object.keys(combined).length)

  generateEffective(combined)

  await rm("./generated", { recursive: true, force: true })
  await mkdir("./generated", { recursive: true })

  console.log("Writing table...")
  const table = await writeTable(combined)
  await writeFile("./generated/rules.md", table)

  console.log("Writing config...")
  const config = await writeConfig(combined)
  await writeFile("./generated/rules.js", config)
}

void main()
