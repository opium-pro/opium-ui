import React from 'react'
import { Align, Fit, Box, Font, Gap, Effect } from 'themeor'
import { MakeButton } from '../make-button'
import { withForm } from '../form'
import { call } from '../../utils'

type CheckboxProps = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> & {
  checked?: boolean,
  indeterminate?: boolean,
  label?: string,
  name?: string,
  value?: boolean | string,
  initialValue?: string,
  radio?: boolean,
  forwardRef?: any
  onChange?: (value: boolean | string) => void,
  onClick?: any
  onFocus?: any
  onBlur?: any
}

export const Checkbox = withForm(({
  name,
  value,
  radio,
  initialValue,
  checked,
  indeterminate,
  label,
  onChange,
  forwardRef,
  onClick,
  onFocus,
  onBlur,
  ...props
}: CheckboxProps) => {
  let fieldRef

  if (checked === undefined && name !== undefined) {
    if (radio) {
      checked = (initialValue === value)
    } else {
      checked = value === true
    }
  }

  function handleChange(event) {
    let value = event.target.value

    if (!radio && value === 'off') {
      value = true
    } else if (!radio && value === 'on') {
      value = false
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
        <MakeButton radius="max" offset="14px" track={["hover", "active"]} {...props}>
          <Fit.TryTagless hidden>
            <input
              ref={n => fieldRef = n}
              value={radio ? initialValue : value ? 'on' : 'off'}
              type="checkbox"
              onChange={handleChange}
              tabIndex={0}
            />
          </Fit.TryTagless>

          <Fit.TryTagless width="20px" height="20px">
            <Box.TryTagless
              radius="max"
              borderFill={checked ? "complement" : "faint-up"}
              fill="none"
              strong={checked}
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
                      fill="complement"
                      strong
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
            fill="base"
            weight="400"
            cursor="default"
          >
            {label}
          </Font>
        </>)}
      </Align>
    </Fit.TryTagless>
  )
})