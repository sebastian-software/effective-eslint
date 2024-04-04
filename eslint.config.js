import base from "./index.js"

import importRules from "./addon/import.js"
import qualityRules from "./addon/quality.js"
import reactRules from "./addon/react.js"

export default [
  ...base,
  {
    rules: {
      ...importRules,
      ...qualityRules,
      ...reactRules
    }
  }
]
