
    const rules = {
  "accessor-pairs": [
    "error",
    {
      "enforceForClassMembers": true,
      "getWithoutSet": false,
      "setWithoutGet": true
    }
  ],
  "array-callback-return": [
    "error",
    {
      "allowImplicit": true,
      "checkForEach": false,
      "allowVoid": false
    }
  ],
  "arrow-body-style": [
    "off"
  ],
  "block-scoped-var": [
    "error"
  ],
  "capitalized-comments": [
    "off"
  ],
  "complexity": [
    "error",
    15
  ],
  "default-case-last": [
    "error"
  ],
  "eqeqeq": [
    "error",
    "smart"
  ],
  "for-direction": [
    "error"
  ],
  "func-name-matching": [
    "error",
    {
      "considerPropertyDescriptor": true
    }
  ],
  "func-names": [
    "error",
    "never"
  ],
  "func-style": [
    "error",
    "declaration",
    {
      "allowArrowFunctions": true
    }
  ],
  "grouped-accessor-pairs": [
    "error",
    "getBeforeSet"
  ],
  "guard-for-in": [
    "error"
  ],
  "logical-assignment-operators": [
    "error",
    "always",
    {
      "enforceForIfStatements": true
    }
  ],
  "max-depth": [
    "warn"
  ],
  "max-lines": [
    "error",
    {
      "max": 1000,
      "skipBlankLines": false,
      "skipComments": false
    }
  ],
  "max-nested-callbacks": [
    "warn",
    4
  ],
  "max-params": [
    "warn",
    {
      "max": 4
    }
  ],
  "new-cap": [
    "error",
    {
      "newIsCap": true,
      "capIsNew": true,
      "properties": true
    }
  ],
  "no-alert": [
    "error"
  ],
  "no-async-promise-executor": [
    "error"
  ],
  "no-await-in-loop": [
    "error"
  ],
  "no-bitwise": [
    "error"
  ],
  "no-buffer-constructor": [
    "error"
  ],
  "no-caller": [
    "error"
  ],
  "no-case-declarations": [
    "error"
  ],
  "no-class-assign": [
    "error"
  ],
  "no-compare-neg-zero": [
    "error"
  ],
  "no-cond-assign": [
    "error"
  ],
  "no-constant-binary-expression": [
    "error"
  ],
  "no-constant-condition": [
    "error"
  ],
  "no-constructor-return": [
    "error"
  ],
  "no-control-regex": [
    "error"
  ],
  "no-debugger": [
    "error"
  ],
  "no-delete-var": [
    "error"
  ],
  "no-dupe-else-if": [
    "error"
  ],
  "no-duplicate-case": [
    "error"
  ],
  "no-else-return": [
    "error",
    {
      "allowElseIf": false
    }
  ],
  "no-empty": [
    "error",
    {
      "allowEmptyCatch": true
    }
  ],
  "no-empty-character-class": [
    "error"
  ],
  "no-empty-pattern": [
    "error"
  ],
  "no-empty-static-block": [
    "error"
  ],
  "no-eq-null": [
    "off"
  ],
  "no-eval": [
    "error"
  ],
  "no-ex-assign": [
    "error"
  ],
  "no-extend-native": [
    "error"
  ],
  "no-extra-bind": [
    "error"
  ],
  "no-extra-boolean-cast": [
    "error"
  ],
  "no-extra-label": [
    "error"
  ],
  "no-fallthrough": [
    "error"
  ],
  "no-global-assign": [
    "error"
  ],
  "no-implicit-coercion": [
    "error"
  ],
  "no-implicit-globals": [
    "error"
  ],
  "no-inner-declarations": [
    "error"
  ],
  "no-invalid-regexp": [
    "error"
  ],
  "no-irregular-whitespace": [
    "error"
  ],
  "no-iterator": [
    "error"
  ],
  "no-label-var": [
    "error"
  ],
  "no-labels": [
    "error"
  ],
  "no-lone-blocks": [
    "error"
  ],
  "no-lonely-if": [
    "error"
  ],
  "no-loop-func": [
    "off"
  ],
  "no-misleading-character-class": [
    "error"
  ],
  "no-multi-assign": [
    "error"
  ],
  "no-multi-str": [
    "error"
  ],
  "no-negated-condition": [
    "error"
  ],
  "no-new": [
    "error"
  ],
  "no-new-func": [
    "error"
  ],
  "no-new-object": [
    "warn"
  ],
  "no-new-wrappers": [
    "error"
  ],
  "no-nonoctal-decimal-escape": [
    "error"
  ],
  "no-object-constructor": [
    "error"
  ],
  "no-octal": [
    "error"
  ],
  "no-octal-escape": [
    "error"
  ],
  "no-promise-executor-return": [
    "error"
  ],
  "no-proto": [
    "error"
  ],
  "no-prototype-builtins": [
    "error"
  ],
  "no-regex-spaces": [
    "error"
  ],
  "no-restricted-globals": [
    "error",
    "event",
    {
      "name": "atob",
      "message": "This API is deprecated. Use https://github.com/sindresorhus/uint8array-extras instead."
    },
    {
      "name": "btoa",
      "message": "This API is deprecated. Use https://github.com/sindresorhus/uint8array-extras instead."
    }
  ],
  "no-restricted-properties": [
    "error",
    {
      "object": "require",
      "property": "ensure",
      "message": "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting"
    },
    {
      "object": "System",
      "property": "import",
      "message": "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting"
    }
  ],
  "no-restricted-syntax": [
    "error",
    {
      "selector": "TSEnumDeclaration",
      "message": "Don't declare enums - use union types instead"
    },
    {
      "selector": "WithStatement",
      "message": "Don't use with - it's deprecated"
    }
  ],
  "no-return-assign": [
    "error",
    "always"
  ],
  "no-return-await": [
    "error"
  ],
  "no-script-url": [
    "error"
  ],
  "no-self-assign": [
    "error",
    {
      "props": true
    }
  ],
  "no-self-compare": [
    "error"
  ],
  "no-sequences": [
    "error"
  ],
  "no-shadow-restricted-names": [
    "error"
  ],
  "no-sparse-arrays": [
    "error"
  ],
  "no-template-curly-in-string": [
    "error"
  ],
  "no-undef-init": [
    "error"
  ],
  "no-unmodified-loop-condition": [
    "error"
  ],
  "no-unneeded-ternary": [
    "error"
  ],
  "no-unreachable-loop": [
    "error"
  ],
  "no-unsafe-finally": [
    "error"
  ],
  "no-unsafe-optional-chaining": [
    "error",
    {
      "disallowArithmeticOperators": true
    }
  ],
  "no-unused-expressions": [
    "off",
    {
      "enforceForJSX": true,
      "allowShortCircuit": false,
      "allowTernary": false,
      "allowTaggedTemplates": false
    }
  ],
  "no-unused-labels": [
    "error"
  ],
  "no-useless-backreference": [
    "error"
  ],
  "no-useless-call": [
    "error"
  ],
  "no-useless-catch": [
    "error"
  ],
  "no-useless-computed-key": [
    "error",
    {
      "enforceForClassMembers": true
    }
  ],
  "no-useless-concat": [
    "error"
  ],
  "no-useless-escape": [
    "error"
  ],
  "no-useless-rename": [
    "error"
  ],
  "no-useless-return": [
    "error"
  ],
  "no-var": [
    "error"
  ],
  "no-void": [
    "error",
    {
      "allowAsStatement": true
    }
  ],
  "no-warning-comments": [
    "warn"
  ],
  "no-with": [
    "error"
  ],
  "object-shorthand": [
    "error",
    "always",
    {
      "avoidExplicitReturnArrows": true
    }
  ],
  "one-var": [
    "error",
    "never"
  ],
  "operator-assignment": [
    "error",
    "always"
  ],
  "prefer-arrow-callback": [
    "error",
    {
      "allowNamedFunctions": true,
      "allowUnboundThis": true
    }
  ],
  "prefer-const": [
    "error",
    {
      "destructuring": "all",
      "ignoreReadBeforeAssign": false
    }
  ],
  "prefer-destructuring": [
    "off"
  ],
  "prefer-exponentiation-operator": [
    "error"
  ],
  "prefer-numeric-literals": [
    "error"
  ],
  "prefer-object-has-own": [
    "error"
  ],
  "prefer-object-spread": [
    "error"
  ],
  "prefer-regex-literals": [
    "error",
    {
      "disallowRedundantWrapping": true
    }
  ],
  "prefer-rest-params": [
    "error"
  ],
  "prefer-spread": [
    "error"
  ],
  "radix": [
    "error"
  ],
  "require-yield": [
    "error"
  ],
  "spaced-comment": [
    "error",
    "always",
    {
      "line": {
        "exceptions": [
          "-",
          "+",
          "*"
        ],
        "markers": [
          "!",
          "/",
          "=>"
        ]
      },
      "block": {
        "exceptions": [
          "-",
          "+",
          "*"
        ],
        "markers": [
          "!",
          "*"
        ],
        "balanced": true
      }
    }
  ],
  "strict": [
    "warn",
    "never"
  ],
  "symbol-description": [
    "error"
  ],
  "unicode-bom": [
    "error",
    "never"
  ],
  "use-isnan": [
    "error"
  ],
  "valid-typeof": [
    "error",
    {
      "requireStringLiterals": false
    }
  ],
  "yoda": [
    "error"
  ],
  "@typescript-eslint/adjacent-overload-signatures": [
    "error"
  ],
  "@typescript-eslint/array-type": [
    "error",
    {
      "default": "array-simple"
    }
  ],
  "@typescript-eslint/await-thenable": [
    "error"
  ],
  "@typescript-eslint/ban-ts-comment": [
    "error",
    {
      "ts-expect-error": "allow-with-description",
      "minimumDescriptionLength": 4
    }
  ],
  "@typescript-eslint/ban-tslint-comment": [
    "error"
  ],
  "@typescript-eslint/ban-types": [
    "error",
    {
      "extendDefaults": false,
      "types": {
        "String": {
          "message": "Use `string` instead.",
          "fixWith": "string"
        },
        "Number": {
          "message": "Use `number` instead.",
          "fixWith": "number"
        },
        "Boolean": {
          "message": "Use `boolean` instead.",
          "fixWith": "boolean"
        },
        "Symbol": {
          "message": "Use `symbol` instead.",
          "fixWith": "symbol"
        },
        "BigInt": {
          "message": "Use `bigint` instead.",
          "fixWith": "bigint"
        },
        "Object": {
          "message": "The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848",
          "fixWith": "Record<string, unknown>"
        },
        "{}": {
          "message": "The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.",
          "fixWith": "Record<string, unknown>"
        },
        "object": {
          "message": "The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848",
          "fixWith": "Record<string, unknown>"
        },
        "Function": "Use a specific function type instead, like `() => void`.",
        "null": {
          "message": "Use `undefined` instead. See: https://github.com/sindresorhus/meta/issues/7",
          "fixWith": "undefined"
        },
        "Buffer": {
          "message": "Use Uint8Array instead. See: https://sindresorhus.com/blog/goodbye-nodejs-buffer",
          "suggest": [
            "Uint8Array"
          ]
        },
        "[]": "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
        "[[]]": "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
        "[[[]]]": "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
        "[[[[]]]]": "ur drunk 🤡",
        "[[[[[]]]]]": "🦄💥"
      }
    }
  ],
  "@typescript-eslint/class-literal-property-style": [
    "error",
    "getters"
  ],
  "@typescript-eslint/consistent-generic-constructors": [
    "error",
    "constructor"
  ],
  "@typescript-eslint/consistent-indexed-object-style": [
    "error"
  ],
  "@typescript-eslint/consistent-type-assertions": [
    "error",
    {
      "assertionStyle": "as",
      "objectLiteralTypeAssertions": "allow-as-parameter"
    }
  ],
  "@typescript-eslint/consistent-type-definitions": [
    "error",
    "interface"
  ],
  "@typescript-eslint/consistent-type-exports": [
    "error",
    {
      "fixMixedExportsWithInlineTypeSpecifier": true
    }
  ],
  "@typescript-eslint/consistent-type-imports": [
    "error",
    {
      "prefer": "type-imports",
      "fixStyle": "separate-type-imports"
    }
  ],
  "@typescript-eslint/default-param-last": [
    "error"
  ],
  "@typescript-eslint/dot-notation": [
    "error"
  ],
  "@typescript-eslint/lines-between-class-members": [
    "error",
    "always",
    {
      "exceptAfterSingleLine": true,
      "exceptAfterOverload": true
    }
  ],
  "@typescript-eslint/member-ordering": [
    "error",
    {
      "default": [
        "signature",
        "public-static-field",
        "public-static-method",
        "protected-static-field",
        "protected-static-method",
        "private-static-field",
        "private-static-method",
        "static-field",
        "static-method",
        "public-decorated-field",
        "public-instance-field",
        "public-abstract-field",
        "public-field",
        "protected-decorated-field",
        "protected-instance-field",
        "protected-abstract-field",
        "protected-field",
        "private-decorated-field",
        "private-instance-field",
        "private-field",
        "instance-field",
        "abstract-field",
        "decorated-field",
        "field",
        "public-constructor",
        "protected-constructor",
        "private-constructor",
        "constructor",
        "public-decorated-method",
        "public-instance-method",
        "public-abstract-method",
        "public-method",
        "protected-decorated-method",
        "protected-instance-method",
        "protected-abstract-method",
        "protected-method",
        "private-decorated-method",
        "private-instance-method",
        "private-method",
        "instance-method",
        "abstract-method",
        "decorated-method",
        "method"
      ]
    }
  ],
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "variable",
      "format": [
        "UPPER_CASE"
      ],
      "modifiers": [
        "const",
        "global"
      ],
      "types": [
        "boolean",
        "number",
        "string"
      ],
      "leadingUnderscore": "forbid",
      "trailingUnderscore": "forbid",
      "filter": {
        "regex": "[- ]",
        "match": false
      }
    },
    {
      "selector": [
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
      "format": [
        "strictCamelCase",
        "StrictPascalCase"
      ],
      "leadingUnderscore": "allowSingleOrDouble",
      "trailingUnderscore": "allow",
      "filter": {
        "regex": "[- ]",
        "match": false
      }
    },
    {
      "selector": "typeLike",
      "format": [
        "StrictPascalCase"
      ]
    },
    {
      "selector": "variable",
      "types": [
        "boolean"
      ],
      "format": [
        "StrictPascalCase"
      ],
      "prefix": [
        "is",
        "has",
        "can",
        "should",
        "will",
        "did"
      ]
    },
    {
      "selector": "interface",
      "filter": "^(?!I)[A-Z]",
      "format": [
        "StrictPascalCase"
      ]
    },
    {
      "selector": "typeParameter",
      "filter": "^T$|^[A-Z][a-zA-Z]+$",
      "format": [
        "StrictPascalCase"
      ]
    },
    {
      "selector": [
        "classProperty",
        "objectLiteralProperty"
      ],
      "format": null,
      "modifiers": [
        "requiresQuotes"
      ]
    }
  ],
  "@typescript-eslint/no-array-constructor": [
    "error"
  ],
  "@typescript-eslint/no-array-delete": [
    "error"
  ],
  "@typescript-eslint/no-base-to-string": [
    "error"
  ],
  "@typescript-eslint/no-confusing-non-null-assertion": [
    "error"
  ],
  "@typescript-eslint/no-confusing-void-expression": [
    "error"
  ],
  "@typescript-eslint/no-dupe-class-members": [
    "error"
  ],
  "@typescript-eslint/no-duplicate-enum-values": [
    "error"
  ],
  "@typescript-eslint/no-duplicate-type-constituents": [
    "error"
  ],
  "@typescript-eslint/no-dynamic-delete": [
    "error"
  ],
  "@typescript-eslint/no-empty-function": [
    "error"
  ],
  "@typescript-eslint/no-empty-interface": [
    "error",
    {
      "allowSingleExtends": true
    }
  ],
  "@typescript-eslint/no-explicit-any": [
    "error"
  ],
  "@typescript-eslint/no-extra-non-null-assertion": [
    "error"
  ],
  "@typescript-eslint/no-extraneous-class": [
    "error",
    {
      "allowConstructorOnly": false,
      "allowEmpty": false,
      "allowStaticOnly": false,
      "allowWithDecorator": true
    }
  ],
  "@typescript-eslint/no-floating-promises": [
    "error",
    {
      "ignoreVoid": true,
      "ignoreIIFE": true
    }
  ],
  "@typescript-eslint/no-for-in-array": [
    "error"
  ],
  "@typescript-eslint/no-implied-eval": [
    "error"
  ],
  "@typescript-eslint/no-inferrable-types": [
    "error"
  ],
  "@typescript-eslint/no-invalid-void-type": [
    "error"
  ],
  "@typescript-eslint/no-loop-func": [
    "error"
  ],
  "@typescript-eslint/no-loss-of-precision": [
    "error"
  ],
  "@typescript-eslint/no-magic-numbers": [
    "error",
    {
      "ignore": [
        -1,
        0,
        1
      ],
      "ignoreEnums": true,
      "ignoreDefaultValues": true,
      "ignoreNumericLiteralTypes": true,
      "ignoreTypeIndexes": true
    }
  ],
  "@typescript-eslint/no-meaningless-void-operator": [
    "error"
  ],
  "@typescript-eslint/no-misused-new": [
    "error"
  ],
  "@typescript-eslint/no-misused-promises": [
    "error",
    {
      "checksConditionals": true,
      "checksVoidReturn": false
    }
  ],
  "@typescript-eslint/no-mixed-enums": [
    "error"
  ],
  "@typescript-eslint/no-namespace": [
    "error"
  ],
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": [
    "error"
  ],
  "@typescript-eslint/no-non-null-asserted-optional-chain": [
    "error"
  ],
  "@typescript-eslint/no-non-null-assertion": [
    "error"
  ],
  "@typescript-eslint/no-redeclare": [
    "error"
  ],
  "@typescript-eslint/no-redundant-type-constituents": [
    "error"
  ],
  "@typescript-eslint/no-require-imports": [
    "error"
  ],
  "@typescript-eslint/no-restricted-imports": [
    "error",
    {
      "paths": [
        "error",
        "domain",
        "freelist",
        "smalloc",
        "punycode",
        "sys",
        "querystring",
        "colors"
      ]
    }
  ],
  "@typescript-eslint/no-this-alias": [
    "error",
    {
      "allowDestructuring": true
    }
  ],
  "@typescript-eslint/no-throw-literal": [
    "error",
    {
      "allowThrowingUnknown": true,
      "allowThrowingAny": false
    }
  ],
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
    "error"
  ],
  "@typescript-eslint/no-unnecessary-condition": [
    "error"
  ],
  "@typescript-eslint/no-unnecessary-qualifier": [
    "error"
  ],
  "@typescript-eslint/no-unnecessary-type-arguments": [
    "error"
  ],
  "@typescript-eslint/no-unnecessary-type-assertion": [
    "error"
  ],
  "@typescript-eslint/no-unnecessary-type-constraint": [
    "error"
  ],
  "@typescript-eslint/no-unsafe-argument": [
    "error"
  ],
  "@typescript-eslint/no-unsafe-assignment": [
    "error"
  ],
  "@typescript-eslint/no-unsafe-call": [
    "error"
  ],
  "@typescript-eslint/no-unsafe-declaration-merging": [
    "error"
  ],
  "@typescript-eslint/no-unsafe-enum-comparison": [
    "error"
  ],
  "@typescript-eslint/no-unsafe-member-access": [
    "error"
  ],
  "@typescript-eslint/no-unsafe-return": [
    "error"
  ],
  "@typescript-eslint/no-unused-expressions": [
    "error"
  ],
  "@typescript-eslint/no-unused-vars": [
    "error"
  ],
  "@typescript-eslint/no-use-before-define": [
    "warn",
    {
      "functions": false,
      "classes": false,
      "variables": false,
      "typedefs": false
    }
  ],
  "@typescript-eslint/no-useless-constructor": [
    "error"
  ],
  "@typescript-eslint/no-useless-empty-export": [
    "error"
  ],
  "@typescript-eslint/no-useless-template-literals": [
    "error"
  ],
  "@typescript-eslint/no-var-requires": [
    "error"
  ],
  "@typescript-eslint/non-nullable-type-assertion-style": [
    "error"
  ],
  "@typescript-eslint/only-throw-error": [
    "error"
  ],
  "@typescript-eslint/padding-line-between-statements": [
    "error",
    {
      "blankLine": "always",
      "prev": "multiline-block-like",
      "next": "*"
    }
  ],
  "@typescript-eslint/parameter-properties": [
    "error",
    {
      "prefer": "parameter-property"
    }
  ],
  "@typescript-eslint/prefer-as-const": [
    "error"
  ],
  "@typescript-eslint/prefer-find": [
    "error"
  ],
  "@typescript-eslint/prefer-for-of": [
    "error"
  ],
  "@typescript-eslint/prefer-function-type": [
    "error"
  ],
  "@typescript-eslint/prefer-includes": [
    "error"
  ],
  "@typescript-eslint/prefer-literal-enum-member": [
    "error"
  ],
  "@typescript-eslint/prefer-namespace-keyword": [
    "error"
  ],
  "@typescript-eslint/prefer-nullish-coalescing": [
    "error",
    {
      "ignoreTernaryTests": false,
      "ignoreConditionalTests": false,
      "ignoreMixedLogicalExpressions": false
    }
  ],
  "@typescript-eslint/prefer-optional-chain": [
    "error"
  ],
  "@typescript-eslint/prefer-promise-reject-errors": [
    "error"
  ],
  "@typescript-eslint/prefer-readonly": [
    "error"
  ],
  "@typescript-eslint/prefer-reduce-type-parameter": [
    "error"
  ],
  "@typescript-eslint/prefer-regexp-exec": [
    "error"
  ],
  "@typescript-eslint/prefer-return-this-type": [
    "error"
  ],
  "@typescript-eslint/prefer-string-starts-ends-with": [
    "error"
  ],
  "@typescript-eslint/prefer-ts-expect-error": [
    "error"
  ],
  "@typescript-eslint/promise-function-async": [
    "error"
  ],
  "@typescript-eslint/require-array-sort-compare": [
    "error",
    {
      "ignoreStringArrays": true
    }
  ],
  "@typescript-eslint/require-await": [
    "error"
  ],
  "@typescript-eslint/restrict-plus-operands": [
    "error",
    {
      "allowAny": false
    }
  ],
  "@typescript-eslint/restrict-template-expressions": [
    "error",
    {
      "allowNumber": true
    }
  ],
  "@typescript-eslint/return-await": [
    "error"
  ],
  "@typescript-eslint/switch-exhaustiveness-check": [
    "error",
    {
      "allowDefaultCaseForExhaustiveSwitch": false,
      "requireDefaultForNonUnion": true
    }
  ],
  "@typescript-eslint/triple-slash-reference": [
    "error",
    {
      "path": "never",
      "types": "never",
      "lib": "never"
    }
  ],
  "@typescript-eslint/unbound-method": [
    "error"
  ],
  "@typescript-eslint/unified-signatures": [
    "error",
    {
      "ignoreDifferentlyNamedParameters": true
    }
  ],
  "@typescript-eslint/use-unknown-in-catch-callback-variable": [
    "error"
  ],
  "jsdoc/check-access": [
    "warn"
  ],
  "jsdoc/check-alignment": [
    "warn"
  ],
  "jsdoc/check-param-names": [
    "warn"
  ],
  "jsdoc/check-property-names": [
    "warn"
  ],
  "jsdoc/check-tag-names": [
    "warn"
  ],
  "jsdoc/check-types": [
    "warn"
  ],
  "jsdoc/check-values": [
    "warn"
  ],
  "jsdoc/empty-tags": [
    "warn"
  ],
  "jsdoc/implements-on-classes": [
    "warn"
  ],
  "jsdoc/multiline-blocks": [
    "warn"
  ],
  "jsdoc/no-defaults": [
    "warn"
  ],
  "jsdoc/no-multi-asterisks": [
    "warn"
  ],
  "jsdoc/no-undefined-types": [
    "warn"
  ],
  "jsdoc/tag-lines": [
    "warn"
  ],
  "jsdoc/valid-types": [
    "warn"
  ],
  "jsx-a11y/alt-text": [
    "warn"
  ],
  "jsx-a11y/anchor-has-content": [
    "warn"
  ],
  "jsx-a11y/anchor-is-valid": [
    "warn",
    {
      "aspects": [
        "noHref",
        "invalidHref"
      ]
    }
  ],
  "jsx-a11y/aria-activedescendant-has-tabindex": [
    "warn"
  ],
  "jsx-a11y/aria-props": [
    "warn"
  ],
  "jsx-a11y/aria-proptypes": [
    "warn"
  ],
  "jsx-a11y/aria-role": [
    "warn",
    {
      "ignoreNonDOM": true
    }
  ],
  "jsx-a11y/aria-unsupported-elements": [
    "warn"
  ],
  "jsx-a11y/heading-has-content": [
    "warn"
  ],
  "jsx-a11y/iframe-has-title": [
    "warn"
  ],
  "jsx-a11y/img-redundant-alt": [
    "warn"
  ],
  "jsx-a11y/no-access-key": [
    "warn"
  ],
  "jsx-a11y/no-distracting-elements": [
    "warn"
  ],
  "jsx-a11y/no-redundant-roles": [
    "warn"
  ],
  "jsx-a11y/role-has-required-aria-props": [
    "warn"
  ],
  "jsx-a11y/role-supports-aria-props": [
    "warn"
  ],
  "jsx-a11y/scope": [
    "warn"
  ],
  "react-hooks/exhaustive-deps": [
    "warn"
  ],
  "react-hooks/rules-of-hooks": [
    "error"
  ],
  "react/boolean-prop-naming": [
    "error",
    {
      "validateNested": true,
      "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+"
    }
  ],
  "react/button-has-type": [
    "error"
  ],
  "react/default-props-match-prop-types": [
    "error"
  ],
  "react/display-name": [
    "error"
  ],
  "react/forbid-foreign-prop-types": [
    "warn",
    {
      "allowInPropTypes": true
    }
  ],
  "react/function-component-definition": [
    "error",
    {
      "namedComponents": "function-declaration",
      "unnamedComponents": "arrow-function"
    }
  ],
  "react/hook-use-state": [
    "error"
  ],
  "react/iframe-missing-sandbox": [
    "error"
  ],
  "react/jsx-boolean-value": [
    "error"
  ],
  "react/jsx-curly-brace-presence": [
    "error"
  ],
  "react/jsx-fragments": [
    "error",
    "syntax"
  ],
  "react/jsx-key": [
    "error",
    {
      "checkFragmentShorthand": true,
      "checkKeyMustBeforeSpread": true,
      "warnOnDuplicates": true
    }
  ],
  "react/jsx-no-bind": [
    "error",
    {
      "allowArrowFunctions": true,
      "allowBind": false,
      "allowFunctions": false,
      "ignoreRefs": false,
      "ignoreDOMComponents": false
    }
  ],
  "react/jsx-no-comment-textnodes": [
    "error"
  ],
  "react/jsx-no-constructed-context-values": [
    "error"
  ],
  "react/jsx-no-duplicate-props": [
    "error",
    {
      "ignoreCase": true
    }
  ],
  "react/jsx-no-script-url": [
    "error"
  ],
  "react/jsx-no-target-blank": [
    "error",
    {
      "warnOnSpreadAttributes": true,
      "forms": true,
      "links": true
    }
  ],
  "react/jsx-no-undef": [
    "error"
  ],
  "react/jsx-no-useless-fragment": [
    "error"
  ],
  "react/jsx-pascal-case": [
    "error"
  ],
  "react/jsx-sort-props": [
    "error",
    {
      "callbacksLast": true,
      "shorthandFirst": true,
      "noSortAlphabetically": true,
      "reservedFirst": true,
      "multiline": "ignore",
      "locale": "auto"
    }
  ],
  "react/jsx-uses-react": [
    "off"
  ],
  "react/jsx-uses-vars": [
    "error"
  ],
  "react/no-access-state-in-setstate": [
    "error"
  ],
  "react/no-array-index-key": [
    "error"
  ],
  "react/no-arrow-function-lifecycle": [
    "error"
  ],
  "react/no-children-prop": [
    "error"
  ],
  "react/no-danger": [
    "error"
  ],
  "react/no-danger-with-children": [
    "error"
  ],
  "react/no-deprecated": [
    "error"
  ],
  "react/no-did-update-set-state": [
    "error"
  ],
  "react/no-direct-mutation-state": [
    "error"
  ],
  "react/no-find-dom-node": [
    "error"
  ],
  "react/no-invalid-html-attribute": [
    "error"
  ],
  "react/no-is-mounted": [
    "error"
  ],
  "react/no-namespace": [
    "error"
  ],
  "react/no-redundant-should-component-update": [
    "error"
  ],
  "react/no-render-return-value": [
    "error"
  ],
  "react/no-string-refs": [
    "error",
    {
      "noTemplateLiterals": true
    }
  ],
  "react/no-this-in-sfc": [
    "error"
  ],
  "react/no-typos": [
    "error"
  ],
  "react/no-unescaped-entities": [
    "error"
  ],
  "react/no-unknown-property": [
    "error"
  ],
  "react/no-unsafe": [
    "error"
  ],
  "react/no-unused-prop-types": [
    "error"
  ],
  "react/no-unused-state": [
    "error"
  ],
  "react/prefer-read-only-props": [
    "error"
  ],
  "react/prop-types": [
    "off"
  ],
  "react/react-in-jsx-scope": [
    "off"
  ],
  "react/require-default-props": [
    "error",
    {
      "forbidDefaultForRequired": true,
      "ignoreFunctionalComponents": true
    }
  ],
  "react/require-render-return": [
    "error"
  ],
  "react/self-closing-comp": [
    "error"
  ],
  "react/state-in-constructor": [
    "error",
    "never"
  ],
  "react/static-property-placement": [
    "error"
  ],
  "react/style-prop-object": [
    "error",
    {
      "allow": [
        "FormattedNumber"
      ]
    }
  ],
  "react/void-dom-elements-no-children": [
    "error"
  ],
  "regexp/confusing-quantifier": [
    "warn"
  ],
  "regexp/control-character-escape": [
    "error"
  ],
  "regexp/match-any": [
    "error"
  ],
  "regexp/negation": [
    "error"
  ],
  "regexp/no-contradiction-with-assertion": [
    "error"
  ],
  "regexp/no-dupe-characters-character-class": [
    "error"
  ],
  "regexp/no-dupe-disjunctions": [
    "error"
  ],
  "regexp/no-empty-alternative": [
    "warn"
  ],
  "regexp/no-empty-capturing-group": [
    "error"
  ],
  "regexp/no-empty-character-class": [
    "error"
  ],
  "regexp/no-empty-group": [
    "error"
  ],
  "regexp/no-empty-lookarounds-assertion": [
    "error"
  ],
  "regexp/no-empty-string-literal": [
    "error"
  ],
  "regexp/no-escape-backspace": [
    "error"
  ],
  "regexp/no-extra-lookaround-assertions": [
    "error"
  ],
  "regexp/no-invalid-regexp": [
    "error"
  ],
  "regexp/no-invisible-character": [
    "error"
  ],
  "regexp/no-lazy-ends": [
    "warn"
  ],
  "regexp/no-legacy-features": [
    "error"
  ],
  "regexp/no-misleading-capturing-group": [
    "error"
  ],
  "regexp/no-misleading-unicode-character": [
    "error"
  ],
  "regexp/no-missing-g-flag": [
    "error"
  ],
  "regexp/no-non-standard-flag": [
    "error"
  ],
  "regexp/no-obscure-range": [
    "error"
  ],
  "regexp/no-optional-assertion": [
    "error"
  ],
  "regexp/no-potentially-useless-backreference": [
    "warn"
  ],
  "regexp/no-super-linear-backtracking": [
    "error"
  ],
  "regexp/no-trivially-nested-assertion": [
    "error"
  ],
  "regexp/no-trivially-nested-quantifier": [
    "error"
  ],
  "regexp/no-unused-capturing-group": [
    "error"
  ],
  "regexp/no-useless-assertions": [
    "error"
  ],
  "regexp/no-useless-backreference": [
    "error"
  ],
  "regexp/no-useless-character-class": [
    "error"
  ],
  "regexp/no-useless-dollar-replacements": [
    "error"
  ],
  "regexp/no-useless-escape": [
    "error"
  ],
  "regexp/no-useless-flag": [
    "warn"
  ],
  "regexp/no-useless-lazy": [
    "error"
  ],
  "regexp/no-useless-non-capturing-group": [
    "error"
  ],
  "regexp/no-useless-quantifier": [
    "error"
  ],
  "regexp/no-useless-range": [
    "error"
  ],
  "regexp/no-useless-set-operand": [
    "error"
  ],
  "regexp/no-useless-string-literal": [
    "error"
  ],
  "regexp/no-useless-two-nums-quantifier": [
    "error"
  ],
  "regexp/no-zero-quantifier": [
    "error"
  ],
  "regexp/optimal-lookaround-quantifier": [
    "warn"
  ],
  "regexp/optimal-quantifier-concatenation": [
    "error"
  ],
  "regexp/prefer-character-class": [
    "error"
  ],
  "regexp/prefer-d": [
    "error"
  ],
  "regexp/prefer-plus-quantifier": [
    "error"
  ],
  "regexp/prefer-predefined-assertion": [
    "error"
  ],
  "regexp/prefer-question-quantifier": [
    "error"
  ],
  "regexp/prefer-range": [
    "error"
  ],
  "regexp/prefer-set-operation": [
    "error"
  ],
  "regexp/prefer-star-quantifier": [
    "error"
  ],
  "regexp/prefer-unicode-codepoint-escapes": [
    "error"
  ],
  "regexp/prefer-w": [
    "error"
  ],
  "regexp/simplify-set-operations": [
    "error"
  ],
  "regexp/sort-flags": [
    "error"
  ],
  "regexp/strict": [
    "error"
  ],
  "regexp/use-ignore-case": [
    "error"
  ],
  "simple-import-sort/imports": [
    "error"
  ],
  "unicorn/better-regex": [
    "error"
  ],
  "unicorn/catch-error-name": [
    "error"
  ],
  "unicorn/consistent-function-scoping": [
    "error"
  ],
  "unicorn/error-message": [
    "error"
  ],
  "unicorn/escape-case": [
    "error"
  ],
  "unicorn/expiring-todo-comments": [
    "error"
  ],
  "unicorn/explicit-length-check": [
    "error"
  ],
  "unicorn/filename-case": [
    "off"
  ],
  "unicorn/import-style": [
    "error"
  ],
  "unicorn/new-for-builtins": [
    "error"
  ],
  "unicorn/no-abusive-eslint-disable": [
    "error"
  ],
  "unicorn/no-anonymous-default-export": [
    "error"
  ],
  "unicorn/no-array-callback-reference": [
    "error"
  ],
  "unicorn/no-array-for-each": [
    "error"
  ],
  "unicorn/no-array-method-this-argument": [
    "error"
  ],
  "unicorn/no-array-push-push": [
    "off"
  ],
  "unicorn/no-array-reduce": [
    "error"
  ],
  "unicorn/no-await-expression-member": [
    "error"
  ],
  "unicorn/no-await-in-promise-methods": [
    "error"
  ],
  "unicorn/no-console-spaces": [
    "error"
  ],
  "unicorn/no-document-cookie": [
    "error"
  ],
  "unicorn/no-empty-file": [
    "error"
  ],
  "unicorn/no-for-loop": [
    "error"
  ],
  "unicorn/no-hex-escape": [
    "error"
  ],
  "unicorn/no-instanceof-array": [
    "error"
  ],
  "unicorn/no-invalid-remove-event-listener": [
    "error"
  ],
  "unicorn/no-lonely-if": [
    "error"
  ],
  "unicorn/no-negated-condition": [
    "error"
  ],
  "unicorn/no-new-array": [
    "error"
  ],
  "unicorn/no-new-buffer": [
    "error"
  ],
  "unicorn/no-null": [
    "error"
  ],
  "unicorn/no-object-as-default-parameter": [
    "error"
  ],
  "unicorn/no-process-exit": [
    "error"
  ],
  "unicorn/no-single-promise-in-promise-methods": [
    "error"
  ],
  "unicorn/no-static-only-class": [
    "error"
  ],
  "unicorn/no-thenable": [
    "error"
  ],
  "unicorn/no-this-assignment": [
    "error"
  ],
  "unicorn/no-typeof-undefined": [
    "error"
  ],
  "unicorn/no-unnecessary-await": [
    "error"
  ],
  "unicorn/no-unnecessary-polyfills": [
    "error"
  ],
  "unicorn/no-unreadable-array-destructuring": [
    "error"
  ],
  "unicorn/no-unreadable-iife": [
    "error"
  ],
  "unicorn/no-useless-fallback-in-spread": [
    "error"
  ],
  "unicorn/no-useless-length-check": [
    "error"
  ],
  "unicorn/no-useless-promise-resolve-reject": [
    "error"
  ],
  "unicorn/no-useless-spread": [
    "error"
  ],
  "unicorn/no-useless-switch-case": [
    "error"
  ],
  "unicorn/no-useless-undefined": [
    "error"
  ],
  "unicorn/no-zero-fractions": [
    "error"
  ],
  "unicorn/numeric-separators-style": [
    "off"
  ],
  "unicorn/prefer-add-event-listener": [
    "error"
  ],
  "unicorn/prefer-array-find": [
    "error"
  ],
  "unicorn/prefer-array-flat": [
    "error"
  ],
  "unicorn/prefer-array-flat-map": [
    "error"
  ],
  "unicorn/prefer-array-index-of": [
    "error"
  ],
  "unicorn/prefer-array-some": [
    "error"
  ],
  "unicorn/prefer-at": [
    "error"
  ],
  "unicorn/prefer-blob-reading-methods": [
    "error"
  ],
  "unicorn/prefer-code-point": [
    "error"
  ],
  "unicorn/prefer-date-now": [
    "error"
  ],
  "unicorn/prefer-default-parameters": [
    "error"
  ],
  "unicorn/prefer-dom-node-append": [
    "error"
  ],
  "unicorn/prefer-dom-node-dataset": [
    "error"
  ],
  "unicorn/prefer-dom-node-remove": [
    "error"
  ],
  "unicorn/prefer-dom-node-text-content": [
    "error"
  ],
  "unicorn/prefer-event-target": [
    "error"
  ],
  "unicorn/prefer-export-from": [
    "error"
  ],
  "unicorn/prefer-includes": [
    "error"
  ],
  "unicorn/prefer-keyboard-event-key": [
    "error"
  ],
  "unicorn/prefer-logical-operator-over-ternary": [
    "error"
  ],
  "unicorn/prefer-math-trunc": [
    "error"
  ],
  "unicorn/prefer-modern-dom-apis": [
    "error"
  ],
  "unicorn/prefer-modern-math-apis": [
    "error"
  ],
  "unicorn/prefer-module": [
    "error"
  ],
  "unicorn/prefer-native-coercion-functions": [
    "error"
  ],
  "unicorn/prefer-negative-index": [
    "error"
  ],
  "unicorn/prefer-node-protocol": [
    "error"
  ],
  "unicorn/prefer-number-properties": [
    "error"
  ],
  "unicorn/prefer-object-from-entries": [
    "error"
  ],
  "unicorn/prefer-optional-catch-binding": [
    "error"
  ],
  "unicorn/prefer-prototype-methods": [
    "error"
  ],
  "unicorn/prefer-query-selector": [
    "error"
  ],
  "unicorn/prefer-reflect-apply": [
    "error"
  ],
  "unicorn/prefer-regexp-test": [
    "error"
  ],
  "unicorn/prefer-set-has": [
    "error"
  ],
  "unicorn/prefer-set-size": [
    "error"
  ],
  "unicorn/prefer-spread": [
    "error"
  ],
  "unicorn/prefer-string-replace-all": [
    "error"
  ],
  "unicorn/prefer-string-slice": [
    "error"
  ],
  "unicorn/prefer-string-starts-ends-with": [
    "error"
  ],
  "unicorn/prefer-string-trim-start-end": [
    "error"
  ],
  "unicorn/prefer-switch": [
    "error"
  ],
  "unicorn/prefer-ternary": [
    "error"
  ],
  "unicorn/prefer-top-level-await": [
    "error"
  ],
  "unicorn/prefer-type-error": [
    "error"
  ],
  "unicorn/prevent-abbreviations": [
    "error",
    {
      "replacements": {
        "props": false
      }
    }
  ],
  "unicorn/relative-url-style": [
    "error"
  ],
  "unicorn/require-array-join-separator": [
    "error"
  ],
  "unicorn/require-number-to-fixed-digits-argument": [
    "error"
  ],
  "unicorn/switch-case-braces": [
    "error"
  ],
  "unicorn/text-encoding-identifier-case": [
    "error"
  ],
  "unicorn/throw-new-error": [
    "error"
  ],
  "unused-imports/no-unused-imports": [
    "error"
  ]
};
    export default rules;
  