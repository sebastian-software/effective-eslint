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
  "n"
]

// This is kind of special, but there are some rules defined in some presets
// and recommended sets which are overly specific on style and are not functionally useful.
export const blockedRules = new Set([
  // string builds often use this, but combining multiple pushes lead to non-intentional formatting/structure
  "unicorn/no-array-push-push",

  // possible file name settings too limitied for typical use cases
  "unicorn/filename-case",

  // This is mainly formatting, not functional and might hurt DX when commenting out code temporarily.
  "capitalized-comments"
])

export const deprecatedRules = new Set([
  // There is a TS variant for the same rule
  "prefer-destructuring",

  // The "eqeqeq" rule is a more powerful alternative
  "no-eq-null",

  // With TypeScript we do not use PropTypes anymore
  "react/prop-types",

  // Some presets still define these legacy rules
  "react/react-in-jsx-scope",
  "react/jsx-uses-react"
])

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
