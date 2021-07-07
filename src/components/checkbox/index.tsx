import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction, Effect } from 'themeor'
import {MakeButton} from '../make-button'

type Props = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> & {
  checked?: boolean,
  multiple?: boolean,
  label?: string,
  onChange?: (value: boolean) => void,
}

export const Checkbox = ({ checked, multiple, label, onChange, ...props }: Props) => {

  function handleChange(event) {
    const value = event.target.value === 'on'
    onChange && onChange(!value)
  }

  return (
    <Reaction cursor="pointer" {...props}>
      {(rProps, r) => (
        <Fit
          {...rProps}
          inline
        >
          <Align.TryTagless row vert="center">
            <label>
              <MakeButton radius="max" offset="14px" track={["hover", "active"]}>
                <Fit.TryTagless maxWidth="0" maxHeight="0" clip>
                  <Effect transparency="max">
                    <input
                      value={!!checked ? 'on' : 'off'}
                      type="checkbox"
                      onChange={handleChange}
                    />
                  </Effect>
                </Fit.TryTagless>

                <Fit.TryTagless width="20px" height="20px">
                  <Box.TryTagless
                    radius="max"
                    borderFill={checked ? "complement" : "faint-up"}
                    fill="none"
                    // strong={!!checked}
                  >
                    <Align
                      vert="center"
                      hor="center"
                      style={{ transition: "all 0.2s ease" }}
                    >
                      {!!checked && (
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
                <Font size="x2s" fill="base" weight="400">{label}</Font>
              </>)}
            </label>
          </Align.TryTagless>
        </Fit>
      )}
    </Reaction>
  )
}