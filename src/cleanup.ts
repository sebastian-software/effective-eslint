/* eslint-disable @typescript-eslint/no-dynamic-delete */
import type { Linter } from "eslint"

import type { CombinedRules } from "./types"

function isRuleOff(rule: Linter.RuleEntry | undefined) {
  return Array.isArray(rule) ? rule[0] === "off" : rule === "off"
}

export function cleanupExplicitOff(combined: CombinedRules) {
  for (const ruleName of Object.keys(combined)) {
    if (isRuleOff(combined[ruleName].prettier)) {
      delete combined[ruleName]
    }
  }

  for (const ruleName of Object.keys(combined)) {
    if (isRuleOff(combined[ruleName]["ts-strict-typed"])) {
      delete combined[ruleName]
    }
  }

  for (const ruleName of Object.keys(combined)) {
    if (isRuleOff(combined[ruleName]["ts-stylistic-typed"])) {
      delete combined[ruleName]
    }
  }
}

export function cleanupRemainingOff(combined: CombinedRules) {
  for (const ruleName of Object.keys(combined)) {
    const origins = Object.keys(combined[ruleName])
    const off = origins.every((origin) => isRuleOff(combined[ruleName][origin]))
    if (off) {
      delete combined[ruleName]
    }
  }
}

export function cleanupUnusedPlugins(
  combined: CombinedRules,
  plugins: string[]
) {
  const pluginRegex = new RegExp(`^(${plugins.join("|")})/`)
  for (const ruleName of Object.keys(combined)) {
    if (pluginRegex.test(ruleName)) {
      delete combined[ruleName]
    }
  }
}
