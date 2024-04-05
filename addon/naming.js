export default {
  // Based on the very well defined set of rules from the XO preset
  "@typescript-eslint/naming-convention": [
    "error",
    // This is a new section which is not part of XO to have uppercase
    // for global constant variables.
    {
      selector: "variable",
      format: ["UPPER_CASE"],
      modifiers: ["const", "global"],
      types: ["boolean", "number", "string"],
      leadingUnderscore: "forbid",
      trailingUnderscore: "forbid",
      filter: {
        regex: "[- ]",
        match: false
      }
    },

    // XO configuration (unmodified)
    {
      selector: [
        "variable",
        "function",
        "classProperty",
        "objectLiteralProperty",
        "parameterProperty",
        "classMethod",
        "objectLiteralMethod",
        "typeMethod",
        "accessor"
      ],
      format: ["strictCamelCase", "StrictPascalCase"],
      leadingUnderscore: "allowSingleOrDouble",
      trailingUnderscore: "allow",
      filter: {
        regex: "[- ]",
        match: false
      }
    },
    {
      selector: "typeLike",
      format: ["StrictPascalCase"]
    },
    {
      selector: "variable",
      types: ["boolean"],
      format: ["StrictPascalCase"],
      prefix: ["is", "has", "can", "should", "will", "did"]
    },

    {
      selector: "interface",
      filter: "^(?!I)[A-Z]",
      format: ["StrictPascalCase"]
    },
    {
      selector: "typeParameter",
      filter: "^T$|^[A-Z][a-zA-Z]+$",
      format: ["StrictPascalCase"]
    },
    {
      selector: ["classProperty", "objectLiteralProperty"],
      format: null,
      modifiers: ["requiresQuotes"]
    }
  ]
}
