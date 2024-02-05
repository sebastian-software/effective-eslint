import { writeTable } from "./writeTable"
import { CombinedRules } from "./types"
import { loadConfigs } from "./loader"
import {
  cleanupExplicitOff,
  cleanupRemainingOff,
  cleanupUnusedPlugins
} from "./cleanup"
import {
  deprecatedRules,
  dropPluginRules,
  mergePriority,
  selectPresetRules
} from "./config"

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
      if (deprecatedRules.has(ruleName)) {
        combined[ruleName].effective = ["off"]
      } else {
        counter++
        combined[ruleName].effective = values[use]
      }
    } else {
      if (selectPresetRules.some((regex) => regex.test(ruleName))) {
        counter++
        combined[ruleName].effective = values[origins[0]]
      }
    }
  }

  console.log("Effective Rules:", counter)
}

async function main() {
  const combined: CombinedRules = {}

  await loadConfigs(combined)

  console.log("All Rules:", Object.keys(combined).length)

  cleanupUnusedPlugins(combined, dropPluginRules)
  cleanupExplicitOff(combined)
  cleanupRemainingOff(combined)

  console.log("Relevant Rules:", Object.keys(combined).length)

  generateEffective(combined)

  console.log("Writing table...")
  await writeTable(combined)
}

void main()
