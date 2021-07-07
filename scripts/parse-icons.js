const fs = require('fs')
const path = require("path")

const fileList = []

const rootDir = './src/theme/icons'

function readFiles(dir, level) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)
    const splitPath = fullPath.split('/')
    let name = splitPath.pop()

    if (fs.statSync(fullPath).isDirectory()) {
      // const newLevel = `${level ? level + '/' : ''}${correctName(name)}`
      const newLevel = `${level ? level + '/' : ''}${name}`
      readFiles(fullPath, newLevel)
    } else {
      const splitName = name.split('.')
      const ext = splitName.pop()
      let onlyName = correctName(splitName.join(''))
      onlyName = offerName(onlyName)
      // const newPath = `${level ? level + '/' : ''}${onlyName}.${ext}`
      const newPath = `${level ? level + '/' : ''}${name}`

      // fs.rename(fullPath, rootDir+newPath, (e) => {
      //   console.log(e);
      // })

      if (ext === 'svg') {
        fileList.push({
          name: onlyName,
          path: newPath,
        })
      }
    }
  }
}

function correctName(name) {
  return name.replace(/[^a-zA-Z]/g, "_").replace(/__/g, "_").replace(/__/g, "_").replace(/^_/, "").replace(/_$/, "")
}

function offerName(name) {
  if (['delete', 'function'].includes(name)) {
    name = '_' + name
  }

  for (const file of fileList) {
    if (file.name === name) {
      const splitName = name.split('_')
      const counter = parseInt(splitName[splitName.length - 1])

      if (counter > 1) {
        splitName.pop()
        return offerName(`${splitName.join('_')}_${counter + 1}`)
      }
      return offerName(`${name}_2`)
    }
  }
  return name
}

readFiles(rootDir)

let text = ''
for (const file of fileList) {
  text += `import ${file.name} from "./icons/${file.path}"
  const ${file.name}_____component = ${file.name}.ReactComponent
  export {${file.name}_____component as ${file.name}}
`
}

fs.writeFile('./src/theme/iconList.ts', text, () => { })