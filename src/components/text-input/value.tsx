import React from 'react'
import { Gap, Box, Align, Font, Fit, useReaction } from 'themeor'
import { useTextInput } from './context'


export const Value = () => {
  const {
    disabled,
    type,
    onChange,
    value,
    options,
    name,
    autocomplete,
    onDisplayValue,
    handleRef,
  } = useTextInput()

  const defaultAutocomplete = autocomplete === true ? 'on' : 'off'

  const reaction = useReaction()
  const fields: any = {}

  const isDisplayValue = (type !== 'password') && ((type === 'select') || (!reaction.focus))

  const fieldProps = {
    ref: handleRef,
    type,
    onChange,
    value,
    name,
    disabled,
    tabIndex: -1,
    autoComplete: defaultAutocomplete,
  }

  fields.input = (
    <input {...fieldProps} />
  )

  fields.textarea = (
    <Fit.TryTagless
      cover="parent"
      width="100%"
      bottom="0"
    >
      <textarea {...fieldProps} />
    </Fit.TryTagless>
  )

  fields.select = (
    <Fit.TryTagless opacity="0" hidden cursor={reaction.cursor}>
      <select {...fieldProps}>
        {React.Children.map(options, (child) => child && (
          <option key={child.props?.value} value={child.props?.value} />
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
    label,
  } = useTextInput()

  return (
    <Fit.TryTagless
      absolute
      left="0"
      top={label ? '25px' : '10px'}
      {...rest}
      static
    >
      <Box.TryTagless>
        <Align.TryTagless vert="center" row>
          <Font.TryTagless
            size="sm"
            fill={(disabled && "faint") || "base"}
            weight="500"
            align="left"
            family="regular"
            lineHeight="md"
            {...valueFont}
          >
            <Gap.TryTagless hor="md">
              {children}
            </Gap.TryTagless>
          </Font.TryTagless>
        </Align.TryTagless>
      </Box.TryTagless>
    </Fit.TryTagless>
  )
}