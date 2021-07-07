import React from 'react'
import {FC} from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'

type Props = {
  checked?: boolean,
  label?: string,
  onChange?: (value: boolean) => void,
}

export const Toggle: FC<Props> = ({ checked, label, onChange, ...props }: any) => {

  function handleChange() {
    onChange && onChange(!checked)
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
}