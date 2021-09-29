import React from 'react'
import { TextInput } from "../text-input"
import { Icon, Gap, Effect } from 'themeor'
import { useDropdown } from '../dropdown'


export function Select({ children, ...rest }) {
  return (
    <TextInput
      {...rest}
      pasteRight={<SeelctIcon />}
      options={children}
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