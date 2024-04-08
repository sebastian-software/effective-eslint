import importAddonRules from "./import"
import namingAddonRules from "./naming"
import qualityAddonRules from "./quality"
import reactAddonRules from "./react"

module.exports = {
  rules: {
    ...importAddonRules,
    ...qualityAddonRules,
    ...namingAddonRules,
    ...reactAddonRules
  }
}
