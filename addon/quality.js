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

  // Limit the number of nested callbacks to a sensible number. This is often
  // referred to as "callback hell" and can lead to difficult-to-read code.
  "max-nested-callbacks": ["error", 3]
}
