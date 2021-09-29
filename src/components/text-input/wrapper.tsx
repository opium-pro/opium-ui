import React, { ReactNode, useState } from 'react'
import { Gap, Box, Align, Font, Fit, useReaction, Icon } from 'themeor'
import { MakeDropdown, Dropdown } from '../dropdown'
import filter from 'opium-filter'
import { useTextInput } from './context'
import { Tooltip } from '../tooltip'


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
    pasteLeft,
    pasteRight,
    hint,
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
    <MakeDropdown
      placeOrder={["bottom-stretch", "top-stretch"]}
      placeOredr
      items={isSelect ? options : rednerAutocomplete}
    >
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
            {pasteLeft && (
              <Align row vert="center">{pasteLeft}</Align>
            )}

            <Fit stretch>
              {children}
            </Fit>

            {hint && (<>
              <Align.TryTagless row vert="center">
                <Gap cursor="help">
                  <Icon fill="faint" name="question_circle" />
                </Gap>
              </Align.TryTagless>
              <Tooltip delay={0}>{hint}</Tooltip>
            </>)}

            {pasteRight && (
              <Align row vert="center">{pasteRight}</Align>
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