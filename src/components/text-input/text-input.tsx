import React, { useState } from 'react'
import { Reaction } from 'themeor'
import newId from 'themeor/dist/utils/new-id'
import { withForm } from '../form'
import { Label } from './label'
import { Placeholder } from './placeholder'
import { Value } from './value'
import { Caption } from './caption'
import { Wrapper } from './wrapper'
import { TextInputProps } from './types'
import { TextInputContext } from './context'


export const TextInput = withForm(({
  type = "text",
  height = "50px",
  autocomplete = type === 'email',
  forwardRef,
  onChange,
  onFocus,
  onBlur,
  initialValue,
  disabled,
  pasteRight,
  pasteLeft,
  hint,
  onDisplayValue,
  ...props
}: TextInputProps) => {
  let inputNode

  const isSelect = type === 'select'

  function handleChange(event) {
    let value
    if (isSelect || typeof event === 'string') {
      value = event
    } else {
      value = event?.target?.value
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
    type,
    height,
    autocomplete,
    onChange: handleChange,
    handleRef,
    onFocus: handleFocus,
    onBlur: handleBlur,
    inputNode,
    isSelect,
    initialValue,
    disabled,
    pasteRight,
    pasteLeft,
    hint,
    onDisplayValue,
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
        <div>
          <Wrapper>
            <Placeholder />
            <Label />
            <Value />
          </Wrapper>
          <Caption />
        </div>
      </TextInputContext.Provider>
    </Reaction>
  )
})