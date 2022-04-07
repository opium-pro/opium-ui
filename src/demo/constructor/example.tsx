import { FC, Fragment, useEffect, useState } from 'react'
import { Font, Align, Gap, Box, Icon, useConfig } from 'themeor'
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
  const { currentConfig } = useConfig()

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
    const indent = Component.demoProps?.[variable]?._indent

    const demoProps = { ...initialProps, ...fields[variable] }
    let hasProps = false
    usage = usage?.replaceAll(`{${variable}}`, Object.keys(demoProps).map((propName, index) => {
      let value = demoProps[propName]
      if (typeof value === 'string') {
        value = `${propName}="${value}"`
      } else if (value === true) {
        value = `${propName}`
      } else if ([undefined, false, ''].includes(value)) {
        value = ''
      } else {
        value = `${propName}={${value}}`
      }

      if (![undefined, false, ''].includes(demoProps[propName])) {
        hasProps = true
        value = `
${(indent || '') + '  '}${value}`
      } else {
        value = ''
      }

      if (propName.indexOf('_') === 0) {
        value = ''
      }

      if ((Object.keys(demoProps).length === index + 1) && hasProps) {
        value += `
${indent || ''}`
      }

      return value
    }).join(''))
  }

  const [jsxExample, setJsxExample] = useState(usage)

  useEffect(() => {
    setJsxExample(usage)
  }, [fields])

  return (<>
    <Gap size="40px" />
    <Align pattern={isSmall ? "1fr" : "50% 50%"} gapHor="40px" vert="stretch">
      <Align>
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
            <Align key={propGroup}>
              <Font size="lg" weight="700">
                <Align stack vert="center" gapHor="4px" gapVert="12px">
                  {propGroup}
                  {!!extendMenu.length && (
                    <Icon fill="faintDown" name="chevron-left" />
                  )}
                  {extendMenu.map(([name, path], index) => (
                    <Align row vert="center" key={index}>
                      <Link
                        size="sm"
                        weight="500"
                        fill="faintDown"
                        href={path}
                        onClick={() => nav.go(path)}
                      >
                        {name}
                        {index < extendMenu.length - 1 && ','}
                      </Link>
                    </Align>
                  ))}
                </Align>
              </Font>
              <Gap size="20px" />

              <Align>
                {Object.keys(Component?.demoProps?.[propGroup] || {}).map((propName) => {
                  if (propName.indexOf('_') === 0) { return null }
                  const [type, initialValue, options] = Component?.demoProps?.[propGroup]?.[propName] || []
                  const Field = values[type]

                  const hasPlaceholder = typeof options === 'string'

                  return (
                    <Fragment key={propName}>
                      <Field
                        name={`${propGroup}.${propName}`}
                        label={propName}
                        value={initialValue}
                        placeholder={hasPlaceholder ? options : undefined}
                        autoComplete={!hasPlaceholder && options}
                      >
                        {type === 'select' && options.map((option) => (
                          <Select.Option key={option} value={option} />
                        ))}
                      </Field>
                      <Gap size="12px" />
                    </Fragment>)
                })}
              </Align>
              <Gap size="40px" />
            </Align>
          )
        }
        )}
      </Align>

      <Align>
        <Font size="lg" weight="700">Usage</Font>
        <Gap size="20px" />
        <Box stretch radius="sm" fill="base" borderFill="faint">
          <CodeEditor
            value={jsxExample}
            language="jsx"
            placeholder="Please enter JS code."
            padding={20}
            onChange={event => setJsxExample(event.target.value)}
            style={{
              height: '100%',
              fontSize: 12,
              backgroundColor: currentConfig.fillInverse?.faintDown,
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </Box>
        <Gap size="40px" />
      </Align>
    </Align>

    <Font size="lg" weight="700">Result</Font>
    <Gap size="20px" />
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