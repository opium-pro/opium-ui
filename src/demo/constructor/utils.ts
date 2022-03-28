export function nameToUrl(name = '') {
  let newString = ''
  for (let i = 0; i < name.length; i++) {
    newString += (name[i] >= 'A' && name[i] <= 'Z')
      ? `${(i > 0 && i < name.length) ? '-' : ''}${name[i].toLowerCase()}`
      : name[i]
  }
  return newString
}