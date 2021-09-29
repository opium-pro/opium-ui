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
  displayValue,
  ...rest
}) => {
  function handleDisplayValue(value) {
    if (multi) {
      return value?.length ? value?.join?.(', ') : 'Выбери опцию, еба'
    } else {
      return value
    }
  }

  return (
    <SelectContext.Provider value={{ multi }}>
      <TextInput
        {...rest}
        displayValue={displayValue || handleDisplayValue}
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