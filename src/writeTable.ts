import { writeFile } from "fs/promises"
import { ruleSorter } from "."
import { CombinedRules } from "./types"

export function getAllOrigins(combined: CombinedRules) {
  const origins = new Set<string>()
  for (const rules of Object.values(combined)) {
    for (const origin of Object.keys(rules)) {
      origins.add(origin)
    }
  }

  return Array.from(origins).sort()
}

export async function writeTable(combined: CombinedRules) {
  const columns = getAllOrigins(combined)

  const builder = []
  builder.push("<style>")
  builder.push("body {")
  builder.push("  margin: 0")
  builder.push("}")
  builder.push("table {")
  builder.push("  font-family: system-ui;")
  builder.push("  border-collapse: collapse;")
  builder.push("  table-layout: fixed;")
  builder.push("}")
  builder.push("thead {")
  builder.push("  position: fixed;")
  builder.push("  background: white;")
  builder.push("}")
  builder.push("tbody {")
  builder.push("  border-top: 40px solid white;")
  builder.push("}")
  builder.push("th, td {")
  builder.push("  border-right: 1px solid #999;")
  builder.push("  border-bottom: 1px solid #999;")
  builder.push("  padding: 4px 8px;")
  builder.push("  font-size: 12px;")
  builder.push("  overflow: hidden;")
  builder.push("  text-overflow: ellipsis;")
  builder.push("  text-align: left;")
  builder.push("  width: 80px;")
  builder.push("  font-weight: bold;")
  builder.push("}")
  builder.push("td.off {")
  builder.push("  background: #eee;")
  builder.push("}")
  builder.push("td.warn {")
  builder.push("  background: #ffe0ad;")
  builder.push("}")
  builder.push("td.error {")
  builder.push("  background: #fdb5bb;")
  builder.push("}")
  builder.push("tr > th:first-child {")
  builder.push("  width: 200px;")
  builder.push("}")
  builder.push("</style>")
  builder.push("<table>")
  builder.push("<thead>")
  builder.push(`<th></th>`)
  columns.forEach((origin) => {
    builder.push(`<th>${origin}</th>`)
  })
  builder.push("</thead>")

  builder.push("<tbody>")
  const ruleNames = Object.keys(combined).sort(ruleSorter)
  for (const ruleName of ruleNames) {
    builder.push("<tr>")
    builder.push(`<th>${ruleName}</th>`)
    for (const origin of columns) {
      const value = combined[ruleName][origin]
      const level = (value instanceof Array ? value[0] : value) ?? ""
      const label = level
        .toString()
        .replace(/^off$/, "✗")
        .replace(/^warn$/, "✓")
        .replace(/^error$/, "✓")
      const plus = value instanceof Array && value.length > 1 ? "+" : ""
      builder.push(`<td class="${level}">${label}${plus}</td>`)
    }
    builder.push("</tr>")
  }
  builder.push("</tbody>")
  builder.push("</table>")

  await writeFile("table.html", builder.join("\n"))
}
