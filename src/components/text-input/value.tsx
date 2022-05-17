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
    autoComplete,
    onDisplayValue,
    handleRef,
  } = useTextInput()

  const defaultAutocomplete = autoComplete === true ? 'on' : 'off'

  const reaction = useReaction()
  const fields: any = {}

  const isDisplayValue = (type !== 'password') && (type === 'select' || !reaction.focus)

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
    <Fit.TryTagless cover="parent" style={{ resize: 'none' }}>
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
    type,
  } = useTextInput()

  const isTextarea = type === 'textarea'

  return (
    <Fit.TryTagless
      absolute
      left="0"
      right="0"
      top={label ? '23px' : '4px'}
      bottom="0"
      offset="0"
      maxWidth="100%"
      scroll
      {...rest}
    >
      <Box.TryTagless>
        <Align.TryTagless vert={isTextarea ? "top" : "center"} row>
          <Font.TryTagless
            size="sm"
            fill={(disabled && "faint") || "base"}
            weight="500"
            align="left"
            family="regular"
            lineHeight="md"
            nowrap
            {...valueFont}
          >
            <Gap.TryTagless hor="md" FORCE_TAGLESS>
              {children}
            </Gap.TryTagless>
          </Font.TryTagless>
        </Align.TryTagless>
      </Box.TryTagless>
    </Fit.TryTagless>
  )
}