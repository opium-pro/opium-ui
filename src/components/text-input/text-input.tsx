import React, { useState, FC } from 'react'
import { Reaction } from 'themeor'
import { withForm, WithForm } from '../form'
import { Label } from './label'
import { Placeholder } from './placeholder'
import { Value } from './value'
import { Caption } from './caption'
import { Wrapper } from './wrapper'
import { TextInputProps } from './types'
import { TextInputContext } from './context'


export const TextInput = withForm(({
  label,
  type = "text",
  height = label ? '50px' : '40px',
  autoComplete = ['email'].includes(type),
  forwardRef,
  onChange,
  onFocus,
  onBlur,
  initialValue,
  disabled,
  insertRight,
  insertLeft,
  hint,
  error,
  onDisplayValue,
  tooltip,
  value,
  valueFont,
  ...props
}) => {
  let inputNode

  const isSelect = type === 'select'

  let isObject = false
  if (type === 'json' && typeof value === 'object' && value !== null) {
    isObject = true
    value = JSON.stringify(value)
  }

  function handleChange(event) {
    let value
    if (isSelect || !(event instanceof Object)) {
      value = event
    } else {
      value = event?.target?.value
    }
    (type === 'number') && value && (value = parseFloat(value))

    if (isObject) {
      value = JSON.parse(value)
    }
    

    onChange?.(value)
  }

  function handleFocus(event) {
    onFocus?.(event)
    inputNode?.focus?.()
  }

  function handleBlur() {
    onBlur?.(value)
    if (!inputNode) { return }
    inputNode?.blur?.()
  }

  function handleRef(fRef) {
    if (!fRef) { return }
    typeof forwardRef === 'function' && forwardRef(fRef)
    inputNode = fRef
  }

  const context = {
    ...props,
    label,
    type,
    height,
    autoComplete,
    onChange: handleChange,
    handleRef,
    onFocus: handleFocus,
    onBlur: handleBlur,
    inputNode,
    isSelect,
    initialValue,
    disabled,
    insertRight,
    insertLeft,
    hint,
    onDisplayValue,
    error,
    tooltip,
    value,
    valueFont,
  }

  return (
    <Reaction
      {...props}
      track={!disabled && ['focus', 'hover']}
      cursor={(disabled && 'default') || (isSelect && 'pointer') || 'text'}
      onFocus={!disabled && handleFocus}
      onBlur={!disabled && handleBlur}
    >
      <TextInputContext.Provider value={context}>
        <Wrapper>
          <Label />
          <Value />
          <Placeholder />
        </Wrapper>
        <Caption />
      </TextInputContext.Provider>
    </Reaction>
  )
}) as WithForm<TextInputProps>