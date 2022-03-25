import React from 'react'
import { FC } from 'react'
import { Align, Fit, Box, Font, Gap, Icon, Reaction } from 'themeor'
import { withForm } from '../form'
import { withTooltip, WithTooltipProps } from '../tooltip'
import { WithFormProps } from '../form'

type Props = WithFormProps<WithTooltipProps<{
  checked?: boolean,
  label?: any,
  hint?: any,
  name?: string,
  value?: string,
  initialValue?: string,
  radio?: boolean,
  disabled?: boolean,
  onChange?: (value: boolean) => void,
}>>

export const Toggle: FC<Props> = withForm(withTooltip(({
  name,
  value,
  initialValue,
  radio,
  checked,
  label,
  onChange,
  hint,
  disabled,
  ...props
}: any) => {
  if (checked === undefined && name !== undefined) {
    if (radio) {
      checked = (initialValue === value)
    } else {
      checked = value === 'on'
    }
  }

  function handleChange() {
    if (!radio && value === 'off') {
      value = 'on'
    } else if (!radio && value === 'on') {
      value = 'off'
    } else if (value === initialValue) {
      value = undefined
    } else {
      value = initialValue
    }

    if (typeof onChange === 'function') {
      onChange?.(value)
    }
  }

  return (
    <Reaction track="hover" disabled={disabled} {...props}>
      {(rProps, r) => (
        <Align hor="left">
          <Align row vert="center" {...rProps} onClick={handleChange}>

            <Fit.TryTagless height="20px" width="36px">
              <Box.TryTagless
                strong={checked}
                fill={(disabled && "faint") || (checked && "base") || (r.hoverOrFocus ? "faint-up" : "faint")}
                radius="max"
              >
                <Gap size="x3s">

                  <Fit.TryTagless
                    width="16px"
                    height="16px"
                    left={checked && '16px'}
                  >
                    <Box fill="base" radius="max" shadow="sm">
                      {checked && <Icon name="Check" size="sm" fill={disabled ? "base" : "success"} />}
                    </Box>
                  </Fit.TryTagless>

                </Gap>
              </Box.TryTagless>
            </Fit.TryTagless>


            {label && (<>
              <Gap size="sm" />
              <Font
                size="sm"
                fill={disabled ? "faint-down" : "base"}
                weight="400"
                cursor="default"
              >
                {label}
                {hint && (<>
                  <Font
                    size="x2s"
                    fill="faint-down"
                  >
                    {hint}
                  </Font>
                </>)}
              </Font>
            </>)}
          </Align>
        </Align>
      )}
    </Reaction>
  )
}))