import React from 'react'
import { Dropdown } from '../dropdown'
import { useTextInput } from './context'
import filter from 'opium-filter'


export function Autocomplete() {
  const {
    autocomplete,
    onChange,
    value,
    isSelect,
  } = useTextInput()

  if (isSelect || !Array.isArray(autocomplete)) { return null }

  const itemsToAutocomplete = filter(autocomplete as any, value)
    .filter((option) => value !== option)
    .slice(0, 10)

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