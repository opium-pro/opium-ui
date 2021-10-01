export function isDefined(value) {
  return !!value && value != [] && value != {} && value != new Map() && value != new Set()
}