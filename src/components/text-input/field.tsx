import React from 'react'
import { Gap, Box, Align, Font, Fit, useReaction } from 'themeor'
import { useTextInput } from './context'


export const Field = () => {
  const {
    disabled,
    type,
    fieldId,
    onChange,
    value,
    options,
    name,
    autocomplete,
    displayValue,
    onDisplayValue,
  } = useTextInput()

  const defaultAutocomplete = autocomplete === true ? 'on' : 'off'

  const reaction = useReaction()
  const fields: any = {}

  const isDisplayValue = (type === 'select') || (!reaction.focus && (displayValue || onDisplayValue))

  fields.input = (
    <input
      id={fieldId}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      disabled={disabled}
      tabIndex={-1}
      autoComplete={defaultAutocomplete}
    />
  )

  fields.textarea = (
    <Fit.TryTagless
      cover="parent"
      width="100%"
      bottom="0"
    >
      <textarea
        id={fieldId}
        onChange={onChange}
        value={value}
        name={name}
        disabled={disabled}
        tabIndex={-1}
        autoComplete={defaultAutocomplete}
      />
    </Fit.TryTagless>
  )

  fields.select = (
    <Fit opacity="0">
      <select
        id={fieldId}
        className={reaction.className.cursor}
        onChange={onChange}
        value={value}
        name={name}
        disabled={true}
        tabIndex={-1}
      >
        {React.Children.map(options, ({ props }) => (
          <option key={props.value} value={props.value} />
        ))}
      </select>
    </Fit>
  )

  return (<>
    <StyleWrapper opacity={!isDisplayValue ? '1' : '0'}>
      {fields[type] || fields.input}
    </StyleWrapper>
    {isDisplayValue && (
      <StyleWrapper>
        {typeof onDisplayValue === 'function' ? onDisplayValue(displayValue) : displayValue}
      </StyleWrapper>
    )}
  </>)
}


function StyleWrapper({ children, ...rest }) {
  const {
    disabled,
    valueFont,
    handleRef,
  } = useTextInput()

  return (
    <Fit.TryTagless stick="top-left" top="25px" {...rest}>
      <Box.TryTagless>
        <Align.TryTagless vert="center">
          <Font.TryTagless
            size="sm"
            fill={(disabled && "faint") || "base"}
            weight="500"
            align="left"
            family="regular"
            lineHeight="md"
            {...valueFont}
          >
            <Gap.TryTagless
              hor="md"
              forwardRef={handleRef}
            >
              {children}
            </Gap.TryTagless>
          </Font.TryTagless>
        </Align.TryTagless>
      </Box.TryTagless>
    </Fit.TryTagless>
  )
}