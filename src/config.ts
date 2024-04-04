export const mergePriority = [
  // multi plugin presets
  "xo",
  "ts-strict-typed",
  "ts-stylistic-typed",
  "react-app",
  "react",

  // single plugin recommended
  "regexp",
  "unicorn",
  "node"
]

export const deprecatedRules = new Set(["react/prop-types"])

export const dropPluginRules = [
  // Preset is React focused
  "vue",

  // Preset is TypeScript focused
  "flowtype",

  // Do not include framework specific rules
  "@next",

  // Drop quite slow import plugin which has no major benefits TypeScript code
  "import"
]

// Choose rules from existing presets to enable e.g. jsdoc, ...
export const selectPresetRules = [
  // Drop JSDoc "require" rules but keep useful "check" rules
  /^jsdoc\/(?!require-).+/
]
