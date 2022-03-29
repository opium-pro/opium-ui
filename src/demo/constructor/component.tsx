import { FC, useState } from 'react'
import { Font, Align, Gap, Box, Line } from 'themeor'
import { nav } from 'opium-nav'
import { nameToUrl } from './utils'
import { LimitWidth, TextInput, Toggle, Select, Checkbox, Form, ScreenFit, useForm } from '../../components'
import { TypeFields } from '../../types'


export type ComponentProps = {
  Component?: any,
  name?: string,
}


export const values: { [type in TypeFields]: any } = {
  boolean: Toggle,
  string: TextInput,
  number: TextInput,
}


export const Component: FC<ComponentProps> = ({
  Component,
  name,
}) => {
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
      />
    )
  })

  return (
    <ScreenFit>
      <LimitWidth>
        <Gap size="40px" />
        <Font size="x3l" weight="900">{name}</Font>

        {Component.description && (<>
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

            <Align gapVert="20px" pattern="1fr 1fr" gapHor="40px" vert="center">
              {props}
            </Align>

            <Gap size="80px" />

            <Font size="xl" weight="700">Result</Font>
            <Gap size="40px" />
            <DemoComponent Component={Component} />
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