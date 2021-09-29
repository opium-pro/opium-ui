import React, {FC} from 'react'
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
  onDisplayValue,
  ...rest
}) => {
  function handleDisplayValue(value) {
    if (Array.isArray(value)) {
      return value.join(', ')
    }
    return value
  }

  return (
    <SelectContext.Provider value={{ multi }}>
      <TextInput
        {...rest}
        onDisplayValue={onDisplayValue || handleDisplayValue}
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