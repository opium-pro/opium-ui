import { FC, Fragment, useEffect, useState } from 'react'
import { Font, Align, Gap, Box, Icon } from 'themeor'
import { usePath, nav } from 'opium-nav'
import { TextInput, Toggle, Select, Tag, useScreenFit, useForm, Link } from '../../components'
import * as components from '../../components'
import { TypeFields } from '../../types'
import * as mainMenu from '../index'
import JsxParser from 'react-jsx-parser'
import CodeEditor from '@uiw/react-textarea-code-editor'


const values: { [type in TypeFields]: any } = {
  boolean: Toggle,
  string: TextInput,
  number: (props) => <TextInput type="number" {...props} />,
  select: Select,
}

function extractExtends(componentNames = [], group) {
  const result = [...componentNames]
  for (const componentName of componentNames) {
    const Component = components[componentName]
    result.push(...extractExtends(Component.demoProps?.[group]?._extends, group))
  }
  return result
}


export function Example({ Component }) {
  const { fields } = useForm()
  const { isSmall } = useScreenFit()

  // useEffect(() => {
  //   const initialFields = {}
  //   for (const prop in Component.demoProps) {
  //     initialFields[prop] = Component.demoProps[prop][1]
  //   }
  //   setFields(initialFields)
  // }, [path])

  let usage = Component?.usage
  for (const variable in Component.demoProps) {
    const initialProps = { ...Component.demoProps?.[variable] }
    for (const key in initialProps) {
      initialProps[key] = initialProps[key]?.[1]
    }

    const demoProps = { ...initialProps, ...fields[variable] }
    usage = usage?.replace(`{${variable}}`, Object.keys(demoProps).map((propName) => {
      if (propName.indexOf('_') === 0) { return }

      let value = demoProps[propName]
      if (typeof value === 'string') {
        value = `${propName}="${value}"`
      } else if (value === true) {
        value = `${propName}`
      } else if ([undefined, false].includes(value)) {
        return
      } else {
        value = `${propName}={${value}}`
      }

      value = `
  ${value}`

      return value
    }).join(''))
  }

  const [jsxExample, setJsxExample] = useState(usage)

  useEffect(() => {
    setJsxExample(usage)
  }, [fields])

  return (<>
    <Gap size="40px" />
    {Object.keys(Component?.demoProps || {}).map((propGroup) => {
      const extendFrom = extractExtends(Component.demoProps[propGroup]._extends, propGroup)
      const extendMenu = []
      for (const name of extendFrom) {
        for (const group in mainMenu) {
          if (name in mainMenu[group]) {
            extendMenu.push([name, `/${group}/${name}`])
          }
        }
      }

      return (
        <Align key={propGroup} pattern={isSmall ? "1fr" : "50% 50%"} gapHor="40px">
          <Align>
            <Font size="lg" weight="700">
              <Align stack vert="center">
                {propGroup}
                {extendMenu.map(([name, path]) => (
                  <Fragment key={name}>
                    <Gap size="12px" />
                    <Icon fill="faintDown" name="chevron-left" />
                    <Gap size="12px" />
                    <Link
                      size="md"
                      weight="500"
                      fill="faint"
                      href={path}
                      onClick={() => nav.go(path)}
                    >
                      {name}
                    </Link>
                  </Fragment>
                ))}
              </Align>
            </Font>
            <Gap size="20px" />

            <Align gapVert="12px">
              {Object.keys(Component?.demoProps?.[propGroup] || {}).map((propName) => {
                console.log(Component?.demoProps[propGroup][propName])
                if (propName.indexOf('_') === 0) { return }
                const [type, initialValue, options] = Component?.demoProps?.[propGroup]?.[propName] || []
                const Field = values[type]

                return (
                  <Field
                    key={propName}
                    name={`${propGroup}.${propName}`}
                    label={propName}
                    value={initialValue}
                    autoComplete={options}
                  >
                    {type === 'select' && options.map((option) => (
                      <Select.Option key={option} value={option} />
                    ))}
                  </Field>
                )
              })}
            </Align>

            <Gap size="40px" />
          </Align>

          <Align>
            <Font size="lg" weight="700">Usage</Font>
            <Gap size="16px" />
            <Box radius="sm" fill="base" borderFill="faint">
              <CodeEditor
                value={jsxExample}
                language="jsx"
                placeholder="Please enter JS code."
                padding={20}
                onChange={event => setJsxExample(event.target.value)}
                style={{
                  fontSize: 12,
                  backgroundColor: "#f5f5f5",
                  fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
              />
            </Box>
            <Gap size="40px" />
          </Align>
        </Align>
      )
    }
    )}

    <Font size="lg" weight="700">Result</Font>
    <Gap size="16px" />
    <Box radius="sm" fill="base" borderFill="faint">
      <Align hor="center" vert="center" minHeight="200px">
        <Gap size="40px">
          <JsxParser
            components={components as any}
            jsx={jsxExample}
          />
        </Gap>
      </Align>
    </Box>
    <Gap size="40px" />
  </>)
}