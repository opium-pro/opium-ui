import React, { FC } from 'react'
import { Align, Fit, Box, Font, Gap } from 'themeor'
import { MakeButton, MakeButtonProps } from '../make-button'
import { withForm, WithFormProps } from '../form'
import { call } from '../../utils'

type CheckboxProps = WithFormProps & Omit<MakeButtonProps, 'onChange'> & {
  indeterminate?: boolean,
  hint?: any,
  radio?: boolean,
  forwardRef?: any
  valueOn?: any,
  valueOff?: any,
}

export const Checkbox: FC<CheckboxProps> = withForm(({
  name,
  value,
  radio,
  initialValue,
  indeterminate,
  label,
  onChange,
  forwardRef,
  onClick,
  onFocus,
  onBlur,
  hint,
  disabled,
  valueOn = initialValue || true,
  valueOff = undefined,
  ...props
}: CheckboxProps) => {
  const checked = value === valueOn
  let fieldRef

  function handleChange(event) {
    let value = event.target.value
    value = value === 'on' ? valueOn : valueOff
    if (!radio)  {
      value = value === valueOn ? valueOff : valueOn
    }
    call(onChange)(value)
  }

  function handleClick(e) {
    fieldRef && fieldRef.click()
    call(onClick)(e)
  }

  function handleBlur(e) {
    fieldRef && fieldRef.blur()
    call(onBlur)(e)
  }

  function handleFocus(e) {
    fieldRef && fieldRef.focus()
    call(onFocus)(e)
  }

  return (
    <Fit.TryTagless
      inline
      forwardRef={forwardRef}
      tabIndex={0}
      onClick={handleClick}
      onBlur={handleBlur}
      onFocus={handleFocus}
    >
      <Align row vert="center">
        <MakeButton disabled={disabled} radius="max" offset="14px" track={["hover", "active"]} {...props}>
          <Fit.TryTagless hidden>
            <input
              ref={n => fieldRef = n}
              value={radio ? initialValue : value ? 'on' : 'off'}
              type="checkbox"
              onChange={handleChange}
              tabIndex={0}
              disabled={disabled}
            />
          </Fit.TryTagless>

          <Fit.TryTagless width="20px" height="20px">
            <Box.TryTagless
              radius="max"
              borderFill={disabled ? "faint" : checked ? "base" : "faintUp"}
              fill="none"
              inverse={checked}
            >
              <Align
                vert="center"
                hor="center"
                style={{ transition: "all 0.2s ease" }}
              >
                {checked && (
                  <Fit.TryTagless width="8px" height="8px">
                    <Box
                      radius="max"
                      fill={disabled ? "faintDown" : "base"}
                      inverse
                    />
                  </Fit.TryTagless>
                )}
              </Align>
            </Box.TryTagless>
          </Fit.TryTagless>
        </MakeButton>

        {label && (<>
          <Gap size="sm" />
          <Font
            size="sm"
            fill={disabled ? "faintDown" : "base"}
            weight="400"
            cursor="default"
          >
            {label}
            {hint && (<>
              <Gap size="4px" />
              <Font
                size="x2s"
                fill="faintDown"
              >
                {hint}
              </Font>
            </>)}
          </Font>
        </>)}
      </Align>
    </Fit.TryTagless>
  )
})