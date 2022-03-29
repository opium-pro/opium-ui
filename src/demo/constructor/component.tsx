import { FC, useState } from 'react'
import { Font, Align, Gap, Box, Line } from 'themeor'
import { usePath } from 'opium-nav'
import { LimitWidth, TextInput, Toggle, Select, Checkbox, Button, useScreenFit, Form, ScreenFit, useForm } from '../../components'
import { TypeFields } from '../../types'
import * as mainMenu from '../index'


export type ComponentProps = {}


export const values: { [type in TypeFields]: any } = {
  boolean: Toggle,
  string: TextInput,
  number: TextInput,
}


export const Component: FC<ComponentProps> = () => {
  const { nameParams = {} } = usePath()
  const { group, component } = nameParams
  const { isSmall } = useScreenFit()
  const Component = mainMenu[group]?.menu.filter(item => !!item[component])?.[0]?.[component]

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
      />
    )
  })

  return (
    <ScreenFit>
      <LimitWidth>
        <Gap size="40px" />
        <Font size="x3l" weight="900">{component}</Font>

        {Component?.description && (<>
          <Gap />
          <Font>{Component.description}</Font>
        </>)}
        <Gap size="40px" />
      </LimitWidth>
      <Form>
        <Box fill="base" shadow="md">
          <Gap size="40px" />
          <LimitWidth>
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
          </LimitWidth>
          <Gap size="40px" />
        </Box>
      </Form>
    </ScreenFit>
  )
}

function DemoComponent({ Component, ...props }) {
  const { fields } = useForm()

  return (
    <Component {...fields} />
  )
}