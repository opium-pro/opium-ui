import React from 'react'
import { Dropdown } from '../dropdown/index.js'
import { useTextInput } from './context.js'
import { filter } from 'opium-filter'


export function AutoComplete() {
  const {
    autoComplete,
    onChange,
    value,
    isSelect,
  } = useTextInput()

  if (!autoComplete || isSelect || !Array.isArray(autoComplete)) { return null }

  const itemsToAutocomplete = filter(autoComplete as any, value)
    .filter((option) => value !== option)
    .slice(0, 100)

  return (<>
    {itemsToAutocomplete.map((option, index) => (
      <Dropdown.Item
        key={index}
        onClick={() => onChange(option)}
      >
        {option}
      </Dropdown.Item>
    ))}
  </>)
}