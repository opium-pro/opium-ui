import React, { useEffect } from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction, Effect } from 'themeor'
import { MakeButton } from '../make-button'
import { withForm } from '../form'

type Props = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> & {
  checked?: boolean,
  indeterminate?: boolean,
  label?: string,
  name?: string,
  value?: string,
  initialValue?: string,
  radio?: boolean,
  onChange?: (value: boolean | string) => void,
}

export const Checkbox = withForm(({ name, value, radio, initialValue, checked, indeterminate, label, onChange, ...props }: Props) => {
  if (checked === undefined && name !== undefined) {
    if (radio) {
      checked = (initialValue === value)
    } else {
      checked = value === 'on'
    }
  }

  function handleChange(event) {
    let value = event.target.value

    if (!radio && value === 'off') {
      value = 'on'
    } else if (!radio && value === 'on') {
      value = 'off'
    }

    onChange?.(value)
  }

  return (
    <Reaction cursor="pointer" {...props}>
      {(rProps, r) => (
        <Fit {...rProps}>
          <Align.TryTagless row vert="center">
            <label>
              <MakeButton radius="max" offset="14px" track={["hover", "active"]}>
                <Fit.TryTagless maxWidth="0" maxHeight="0" clip>
                  <Effect transparency="max">
                    <input
                      value={radio ? initialValue : value}
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
                <Font size="sm" fill="base" weight="400">{label}</Font>
              </>)}
            </label>
          </Align.TryTagless>
        </Fit>
      )}
    </Reaction>
  )
})