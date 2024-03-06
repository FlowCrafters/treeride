import { parse } from 'yaml'

function parseYaml<T>(content: any): T {
  return parse(content) as T
}

function stringifyYaml(content: any): string {
  return JSON.stringify(content)
}

export { parseYaml, stringifyYaml }
