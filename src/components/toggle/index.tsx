import React, { ReactNode, useEffect } from 'react'
import { FC } from 'react'
import { Align, Fit, Box, Font, Gap, Reaction } from 'themeor'
import { withForm } from '../form'
import { withTooltip, WithTooltipProps } from '../tooltip'
import { WithFormProps } from '../form'
import { call } from '../../utils'


type Props = WithFormProps & WithTooltipProps & {
  hint?: string | ReactNode,
  radio?: boolean,
  valueOn?: any,
  valueOff?: any,
}

export const Toggle: FC<Props> = withForm(withTooltip(({
  name,
  value,
  initialValue,
  radio,
  label,
  onChange,
  hint,
  disabled,
  valueOn = initialValue || true,
  valueOff = false,
  ...props
}: Props) => {
  const checked = value === valueOn

  function handleChange() {
    if (!radio)  {
      value = value === valueOn ? valueOff : valueOn
    }
    call(onChange)(value)
  }

  return (
    <Reaction track="hover" disabled={disabled} {...props}>
      {(rProps, r) => (
        <Align hor="left">
          <Align row vert="center" {...rProps} onClick={handleChange} tabIndex={0}>

            <Fit.TryTagless height="20px" width="34px">
              <Box.TryTagless
                inverse={checked}
                fill={(disabled && "faint") || (checked && "base") || (r.hoverOrFocus ? "faintUp" : "faint")}
                radius="max"
              >
                <Gap size="2px">

                  <Fit.TryTagless
                    width="16px"
                    height="16px"
                    transition
                    left={checked ? '14px' : '0'}
                  >
                    <Box fill="base" radius="max" shadow="sm" />
                  </Fit.TryTagless>

                </Gap>
              </Box.TryTagless>
            </Fit.TryTagless>


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
        </Align>
      )}
    </Reaction>
  )
}))