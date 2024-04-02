export default {
  // Possible alternative solution: https://github.com/lydell/eslint-plugin-simple-import-sort
  "sort-imports": ["error", { ignoreDeclarationSort: true }],
  "import/order": [
    "error",
    {
      alphabetize: { order: "asc" },
      pathGroups: [
        { pattern: "~**", group: "internal" },
        { pattern: "~**/**", group: "internal" }
      ],
      groups: ["builtin", "external", "internal"],
      "newlines-between": "always"
    }
  ],

  "unused-imports/no-unused-imports": "error"
}
