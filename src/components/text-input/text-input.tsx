import React from 'react'
import { Reaction } from 'themeor'
import newId from 'themeor/dist/utils/new-id'
import { withForm } from '../form'
import { Label } from './label'
import { Placeholder } from './placeholder'
import { Field } from './field'
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
  displayValue,
  ...props
}: TextInputProps) => {
  const fieldId = props.id || newId()
  let inputNode

  const isSelect = type === 'select'

  function handleChange(event) {
    const value = typeof event === 'string' ? event : event?.target?.value
    onChange && onChange(value)
  }

  function handleFocus(event) {
    onFocus && onFocus(event)
    if (!inputNode) { return }
    inputNode.focus()
  }

  function handleBlur() {
    onBlur?.(props.value)
    if (!inputNode) { return }
    inputNode.blur()
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
    fieldId,
    inputNode,
    isSelect,
    initialValue,
    disabled,
    pasteRight,
    pasteLeft,
    hint,
    displayValue,
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
            <Label />
            <Field />
            <Placeholder />
          </Wrapper>
          <Caption />
        </div>
      </TextInputContext.Provider>
    </Reaction>
  )
})