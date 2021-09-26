import React from 'react'
import { TextInput, useTextInput } from "../text-input"
import { Dropdown } from '../dropdown'
import { Font, Icon, Gap, Effect, useReaction } from 'themeor'
import { useDropdown } from '../dropdown'


export function Select({ ...rest }) {
  return (
    <TextInput
      {...rest}
      pasteAfter={<SeelctIcon />}
      options={[
        <Option value="123123" label="sadasdasd" hint="asdasds" />,
        <Option value="222" label="adasdsad" hint="hint" />,
        <Option value="3333" label="iioois" />,
      ]}
      type="select"
    />
  )
}


function SeelctIcon() {
  const { opened } = useDropdown()
  return (
    <Gap right="12px">
      <Effect smooth rotate={opened && '180deg'}>
        <Icon name="chevron_down" />
      </Effect>
    </Gap>
  )
}


function Option({
  value,
  onClick = undefined,
  label = undefined,
  hint = undefined,
  children = undefined
}) {
  // const { value: currentValue } = useTextInput()

  return (
    <Dropdown.Item onClick={onClick}>
      {label}
      {!!hint && (<Font size="sm" fill="faint-down">{hint}</Font>)}
      {children}
    </Dropdown.Item>
  )
}