import React from 'react'
import {FC} from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import {withForm} from '../form'

type Props = {
  checked?: boolean,
  label?: string,
  name?: string,
  value?: string,
  initialValue?: string,
  radio?: boolean,
  onChange?: (value: boolean) => void,
}

export const Toggle: FC<Props> = withForm(({ name, value, initialValue, radio, checked, label, onChange, ...props }: any) => {
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

    onChange?.(value)
  }

  return (
    <Reaction track="hover" {...props}>
      {(rProps, r) => (
        <Align hor="left">
          <Align row vert="center" {...rProps} onClick={handleChange}>

            <Fit.TryTagless height="20px" width="36px">
              <Box.TryTagless
                strong={checked}
                fill={(checked && "success") || (r.hoverOrFocus ? "faint-up" : "faint")}
                radius="max"
              >
                <Gap size="x3s">

                  <Fit.TryTagless
                    width="16px"
                    height="16px"
                    left={checked && '16px'}
                  >
                    <Box fill="base" radius="max" shadow="sm">
                      {checked && <Icon name="Check" size="sm" fill="success" line={false} />}
                    </Box>
                  </Fit.TryTagless>

                </Gap>
              </Box.TryTagless>
            </Fit.TryTagless>


            {label && <Gap size="xs" />}

            {label}
          </Align>
        </Align>
      )}
    </Reaction>
  )
})