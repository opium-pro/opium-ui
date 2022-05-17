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
  ...props
}) => {
  let inputNode

  const isSelect = type === 'select'

  let isObject = false
  let isArray = false
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      isArray = true
      value = JSON.stringify(value)
    } else {
      isObject = true
      value = JSON.stringify(value)
    }
  }

  function handleChange(event) {
    let value
    if (isSelect || !(event instanceof Object)) {
      value = event
    } else {
      value = event?.target?.value
    }
    (type === 'number') && value && (value = parseInt(value))

    if (isObject) {
      value = JSON.parse(value)
    }
    if (isArray) {
      value = JSON.parse(value)
    }

    onChange?.(value)
  }

  function handleFocus(event) {
    onFocus?.(event)
    inputNode?.focus?.()
  }

  function handleBlur() {
    onBlur?.(props.value)
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
    isObject,
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