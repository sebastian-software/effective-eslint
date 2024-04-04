import type { Linter } from "eslint"

import type { CombinedRules } from "./types"

function isRuleOff(rule: Linter.RuleEntry) {
  return rule instanceof Array ? rule[0] === "off" : rule === "off"
}

export function cleanupExplicitOff(combined: CombinedRules) {
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

export function cleanupRemainingOff(combined: CombinedRules) {
  Object.keys(combined).forEach((ruleName) => {
    const origins = Object.keys(combined[ruleName])
    const off = origins.every((origin) => isRuleOff(combined[ruleName][origin]))
    if (off) {
      delete combined[ruleName]
    }
  })
}

export function cleanupUnusedPlugins(
  combined: CombinedRules,
  plugins: string[]
) {
  const pluginRegex = new RegExp(`^(${plugins.join("|")})/`)
  Object.keys(combined).forEach((ruleName) => {
    if (pluginRegex.test(ruleName)) {
      delete combined[ruleName]
    }
  })
}
