export default {
  // Function declarations have the side effect of hoisting but have the benefit
  // of being more readable and easier to debug.Enabling this rule leads to a more
  // uniform codebase.
  "func-style": ["error", "declaration", { allowArrowFunctions: true }],

  // ReactApp suggests the smart mode, XO uses non smart. But smart is fine.
  // Typically we prefer XO over other presets but not here.
  eqeqeq: ["error", "smart"],

  // Limit complexity by default to a sensible number
  complexity: ["error", 15],

  // Keep the number of lines in a file to a sensible number
  "max-lines": [
    "error",
    { max: 1000, skipBlankLines: false, skipComments: false }
  ],

  // XO prefers types over interfaces, but most of the community prefers interfaces
  // it seems. This is also part of the stylistic TS preset and the default rule value.
  // See also:
  // - https://github.com/typescript-eslint/typescript-eslint/issues/433
  // - https://ncjamieson.com/prefer-interfaces/
  // - https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680
  // - https://www.bloomberg.com/company/stories/10-insights-adopting-typescript-at-scale/
  "@typescript-eslint/consistent-type-definitions": ["error", "interface"]
}
