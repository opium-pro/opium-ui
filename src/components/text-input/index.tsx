import React from 'react'
import { forwardRef } from 'react'
import { Gap, Box, Align, Font, Icon, Fit, Reaction, Effect } from 'themeor'
import newId from 'themeor/dist/utils/new-id'
import {withForm} from '../form'

export interface ITextInputProps {
  type?: string
  height?: string
  valueFont?: any
  label?: string
  value?: string
  placeholder?: string
  onChange?: any
  onFocus?: any
  id?: string
}


export const TextInput = withForm(forwardRef(({
  type = "text",
  height = "50px",
  valueFont,
  label, value, placeholder, onChange, onFocus, id,
  ...props
}: ITextInputProps, ref) => {
  const fieldId = id || newId()
  let inputRef

  function handleChange(event) {
    const value = event.target.value
    onChange && onChange(value)
  }

  function handleFocus(event) {
    onFocus && onFocus(event)
    if (!inputRef) { return }
    inputRef.focus()
  }

  function handleBlur() {
    if (!inputRef) { return }
    inputRef.blur()
  }

  function handleRef(fRef) {
    if (!fRef) { return }
    inputRef = fRef
  }

  return (
    <Reaction cursor="text" onFocus={handleFocus} onBlur={handleBlur} {...props}>
      {(rProps: any, r: any) => (
        <Fit.TryTagless height={height}>
          <Box
            fill={(r.focus && "base") || (r.hover && "faint") || "faint-down"}
            radius="md"
            tabIndex={0}
            borderFill={(r.focus && "base") || "none"}
            style={{ transition: "all 0.25s ease" }}
            {...rProps}
          >
            <Fit.TryTagless
              cover="parent"
              zIndex={(r.focus || value) ? undefined : 1}
              className={rProps.className}
            >
              <label htmlFor={fieldId} />
            </Fit.TryTagless>

            <Fit.TryTagless
              cover="parent"
              height={(value || r.focus) ? "30px" : "50px"}
            >
              <Align.TryTagless vert="center">
                <Font.TryTagless
                  fill="faint-down"
                  size={(value || r.focus) ? "x2s" : "xs"}
                  style={{ transition: "all 0.1s ease" }}
                  align="left"
                >
                  <Gap.TryTagless hor="md">
                    {label}
                  </Gap.TryTagless>
                </Font.TryTagless>
              </Align.TryTagless>
            </Fit.TryTagless>

            <Fit.TryTagless
              stick="top-left"
              top="25px"
            >
              <Box.TryTagless>
                <Align.TryTagless vert="center">
                  <Font.TryTagless
                    size="sm"
                    fill="base"
                    weight="500"
                    align="left"
                    family="regular"
                    lineHeight="md"
                    {...valueFont}
                  >
                    <Gap.TryTagless
                      hor="md"
                      forwardRef={handleRef}
                    >
                      {type === 'textarea' ? (
                        <Fit.TryTagless
                          cover="parent"
                          width="100%"
                          bottom="0"
                        >
                            <textarea
                              id={fieldId}
                              onChange={handleChange}
                              value={value}
                            />
                        </Fit.TryTagless>
                      ) : (
                          <input
                            id={fieldId}
                            type={type}
                            onChange={handleChange}
                            value={value}
                          />
                        )}
                    </Gap.TryTagless>
                  </Font.TryTagless>
                </Align.TryTagless>
              </Box.TryTagless>
            </Fit.TryTagless>

            {placeholder && !value && r.focus && (
              <Fit.TryTagless
                stick="top-left"
                top="50%"
              >
                <Align.TryTagless vert="center">
                  <Font.TryTagless
                    size="sm"
                    fill="faint-down"
                    weight="400"
                    family="regular"
                    align="left"
                  >
                    <Gap.TryTagless
                      hor="md"
                    >
                      {placeholder}
                    </Gap.TryTagless>
                  </Font.TryTagless>
                </Align.TryTagless>
              </Fit.TryTagless>
            )}

          </Box>
        </Fit.TryTagless>
      )}
    </Reaction>
  )
}))