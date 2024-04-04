import type { Linter } from "eslint"

export type CombinedRules = Record<string, Record<string, Linter.RuleEntry>>
