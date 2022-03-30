import { FC, useState } from 'react'
import { Font, Align, Gap, Box, Line } from 'themeor'
import { usePath } from 'opium-nav'
import { LimitWidth, TextInput, Toggle, Select, Tag, useScreenFit, Form, ScreenFit, useForm } from '../../components'
import * as components from '../../components'
import { TypeFields } from '../../types'
import * as mainMenu from '../index'


export type ComponentProps = {}


export const values: { [type in TypeFields]: any } = {
  boolean: Toggle,
  string: TextInput,
  number: (props) => <TextInput type="number" {...props} />,
  select: Select,
}


export const Component: FC<ComponentProps> = () => {
  const { nameParams = {} } = usePath()
  const { group, component } = nameParams
  const { isSmall } = useScreenFit()
  const Component = mainMenu[group][component]
  const isHook = Component.type === 'hook'

  const props = Object.keys(Component?.demoProps || {}).map((propName) => {
    if (!propName) { return null }
    const [type, initialValue, options] = Component.demoProps[propName]
    const Field = values[type]

    return (
      <Field
        key={propName}
        name={propName}
        label={propName}
        value={initialValue}
        autoComplete={options}
      >
        {type === 'select' && options.map((option) => (
          <Select.Option key={option} value={option} />
        ))}
      </Field>
    )
  })

  return (
    <ScreenFit>
      <LimitWidth>
        <Gap size="40px" />
        <Font size="x3l" weight="800">
          {component}
        </Font>
        {isHook && (<>
          <Gap size="4px" />
          <Tag label="Hook" />
        </>)}

        {Component?.description && (<>
          <Gap />
          <Font>{Component.description}</Font>
        </>)}
        <Gap size="40px" />
      </LimitWidth>
      <Form>
        <Box fill="base" shadow="md">
          <LimitWidth>
            <Gap vert="40px">
              <Font size="xl" weight="700">Props</Font>
              <Gap size="40px" />

              <Align gapVert="20px" pattern={isSmall ? "1fr" : "1fr 1fr"} gapHor="40px" vert="center">
                {props}
              </Align>

              <Gap size="80px" />

              <Font size="xl" weight="700">Result</Font>
              <Gap size="30px" />
              <Box radius="md" borderFill="base">
                <Align hor="center" vert="center" minHeight="300px">
                  <Gap size="40px">
                    <DemoComponent Component={Component} />
                  </Gap>
                </Align>
              </Box>
            </Gap>
          </LimitWidth>
        </Box>
      </Form>
    </ScreenFit>
  )
}


function DemoComponent({ Component, ...props }) {
  const { fields } = useForm()
  let initialProps = {}

  if (Component.demoComponent) {
    initialProps = Component.demoComponent[1]
    Component = components[Component.demoComponent[0]]
  }

  return (
    <Component {...initialProps} {...fields} />
  )
}