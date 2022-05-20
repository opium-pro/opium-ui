export function isDefined(value) {
  return !([undefined, null, ''].includes(value) || value == new Map() || value == new Set() || value?.length === 0)
}