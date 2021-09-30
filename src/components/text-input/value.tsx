import React from 'react'
import { Gap, Box, Align, Font, Fit, useReaction } from 'themeor'
import { useTextInput } from './context'


export const Value = () => {
  const {
    disabled,
    type,
    fieldId,
    onChange,
    value,
    options,
    name,
    autocomplete,
    onDisplayValue,
  } = useTextInput()

  const defaultAutocomplete = autocomplete === true ? 'on' : 'off'

  const reaction = useReaction()
  const fields: any = {}

  const isDisplayValue = (type !== 'password') && ((type === 'select') || (!reaction.focus))

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
    <Fit.TryTagless opacity="0">
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
    </Fit.TryTagless>
  )

  return (<>
    <StyleWrapper opacity={!isDisplayValue ? '1' : '0'}>
      {fields[type] || fields.input}
    </StyleWrapper>
    {isDisplayValue && (
      <StyleWrapper>
        {typeof onDisplayValue === 'function' ? onDisplayValue?.(value) : value}
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
  const { focus } = useReaction()

  return (
    <Fit.TryTagless stick="top-left" top="25px" {...rest} zIndex={focus && 2}>
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