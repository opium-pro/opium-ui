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
  } = useTextInput()

  const defaultAutocomplete = autocomplete === true ? 'on' : 'off'

  const reaction = useReaction()
  const fields: any = {}

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
    <StyleWrapper>
      {fields[type] || fields.input}
    </StyleWrapper>
    {!reaction.focus && displayValue && (
      <StyleWrapper>
        {displayValue}
      </StyleWrapper>
    )}
  </>)
}


function StyleWrapper({ children }) {
  const {
    disabled,
    valueFont,
    handleRef,
    displayValue,
  } = useTextInput()

  const reaction = useReaction()

  return (
    <Fit.TryTagless stick="top-left" top="25px">
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
              opacity={(reaction.focus || !displayValue) ? '1' : '0'}
            >
              {children}
            </Gap.TryTagless>
          </Font.TryTagless>
        </Align.TryTagless>
      </Box.TryTagless>
    </Fit.TryTagless>
  )
}