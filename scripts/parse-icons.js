const fs = require('fs')
const path = require("path")

const fileList = []

function readFiles(dir, level) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)

    const name = fullPath.split('/').pop()

    if (fs.statSync(fullPath).isDirectory()) {
      const newLevel = `${level ? level + '/' : ''}${name}`
      readFiles(fullPath, newLevel)
    } else {
      const splitName = name.split('.')
      const ext = splitName.pop()
      let onlyName = splitName.join().replace(/[^a-zA-Z]/g, "_").replace(/__/g, "_").replace(/__/g, "_").replace(/^_/, "").replace(/_$/, "")
      onlyName = offerName(onlyName)

      if (ext === 'svg') {
        fileList.push({
          name: onlyName,
          path: `${level ? level + '/' : ''}${name}`,
        })
      }
    }
  }
}

function offerName(name) {
  for (const file of fileList) {
    if (file.name === name) {
      const splitName = name.split('_')
      const counter =  parseInt(splitName[splitName.length - 1])

      if (counter > 1) {
        splitName.pop()
        return offerName(`${splitName.join('_')}_${counter+1}`)
      }
      return  offerName(`${name}_2`)
    }
  }
  return name
}

readFiles('./src/theme/icons')

let text = ''
for (const file of fileList) {
  text += `export { ReactComponent as ${file.name} } from "./icons/${file.path}"
`
}

fs.writeFile('./src/theme/icons.ts', text, () => { })