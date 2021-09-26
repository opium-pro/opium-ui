import React, { ReactNode, useState } from 'react'
import { Gap, Box, Align, Font, Fit, useReaction, Effect } from 'themeor'
import { MakeDropdown, Dropdown } from '../dropdown'
import filter from 'opium-filter'
import { useTextInput } from './context'


export const Wrapper = ({ children }) => {
  const {
    autocomplete,
    onChange,
    value,
    disabled,
    options,
    isSelect,
    height,
    error,
    pasteBefore,
    pasteAfter,
    children: parentChildren,
  } = useTextInput()
  const { passProps, focus, hover } = useReaction()
  const context = useTextInput()
  const reaction = useReaction()

  const setAutocomplete = !isSelect && Array.isArray(autocomplete)
  const itemsToAutocomplete = setAutocomplete && filter(autocomplete as any, value).filter((option) => value !== option).slice(0, 10)
  const rednerAutocomplete = setAutocomplete && (<>
    {itemsToAutocomplete.map((option, index) => (
      <Dropdown.Item
        key={`option-${index}`}
        onClick={() => onChange(option)}
      >
        {option}
      </Dropdown.Item>
    ))}
  </>)

  return (
    <MakeDropdown items={isSelect ? options : rednerAutocomplete}>
      <Fit.TryTagless height={height}>
        <Box.TryTagless
          fill={(disabled && "base") || (focus && "base") || (hover && "faint") || "faint-down"}
          radius="md"
          borderFill={(disabled && "faint") || (focus && "base") || (error && 'critic') || "none"}
          style={{ transition: "all 0.25s ease" }}
          tabIndex={disabled ? -1 : 0}
          {...passProps}
        >
          <Align row vert="stretch">
            {pasteBefore && (
              <Align row vert="center">{pasteBefore}</Align>
            )}

            <Fit stretch>
              {children}
            </Fit>

            {pasteAfter && (
              <Align row vert="center">{pasteAfter}</Align>
            )}

            {parentChildren && parentChildren instanceof Function ? (
              parentChildren(context, reaction)
            ) : (
              <Align row vert="center">{parentChildren}</Align>
            )}
          </Align>
        </Box.TryTagless>
      </Fit.TryTagless>
    </MakeDropdown>
  )
}