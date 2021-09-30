import React, { FC, useState } from 'react'
import { TextInput, TextInputProps } from "../text-input"
import { Icon, Gap, Effect } from 'themeor'
import { useDropdown } from '../dropdown'
import { SelectContext } from './context'


export type SelectProps = TextInputProps & {
  multi?: boolean
}


export const Select: FC<SelectProps> = ({
  children,
  onChange,
  multi = false,
  // onDisplayValue,
  ...rest
}) => {
  const [displayValue, setDisplayValue]: any = useState()

  // function handleDisplayValue(value) {
  //   if (Array.isArray(displayValue)) {
  //     return displayValue.join(', ')
  //   }
  //   return value
  // }

  return (
    <SelectContext.Provider value={{ multi, setDisplayValue, displayValue }}>
      <TextInput
        {...rest}
        // onDisplayValue={handleDisplayValue || onDisplayValue}
        pasteRight={<SelectIcon />}
        options={children}
        type="select"
      />
    </SelectContext.Provider>
  )
}


function SelectIcon() {
  const { opened } = useDropdown()
  return (
    <Gap right="12px">
      <Effect smooth rotate={opened && '180deg'}>
        <Icon name="chevron_down" />
      </Effect>
    </Gap>
  )
}