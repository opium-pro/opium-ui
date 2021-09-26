import React, { useEffect, useState } from 'react'
import { Gap, Box, Align, Font, Fit, Reaction } from 'themeor'
import newId from 'themeor/dist/utils/new-id'
import { withForm } from '../form'
import { MakeDropdown, Dropdown } from '../dropdown'
import filter from 'opium-filter'


export interface TextInputProps {
  type?: string
  height?: string
  valueFont?: any
  label?: string
  value?: string
  placeholder?: string
  onChange?: any
  onFocus?: any
  onBlur?: any
  onClick?: any
  id?: string
  error?: string | boolean
  name?: string
  disabled?: boolean
  forwardRef?: any
  initialValue?: string
  autocomplete?: string[] | boolean
}


export const TextInput = withForm(({
  type = "text",
  height = "50px",
  valueFont,
  label,
  value,
  placeholder,
  initialValue,
  onChange,
  forwardRef,
  onFocus,
  id,
  error,
  name,
  disabled,
  onBlur,
  autocomplete = true,
  ...props
}: TextInputProps, ref) => {
  const fieldId = id || newId()
  let inputRef
  const [showDropdown, setShowDropdown] = useState(false)

  function handleChange(event) {
    const value = typeof event === 'string' ? event : event?.target?.value
    onChange && onChange(value)
  }

  function handleAutocomplete(option?: any) {
    handleChange(option)
    showDropdown && setShowDropdown(false)
  }

  function handleFocus(event) {
    onFocus && onFocus(event)
    if (!inputRef) { return }
    inputRef.focus()
  }

  function handleBlur() {
    onBlur?.(value)
    if (!inputRef) { return }
    inputRef.blur()
  }

  function handleRef(fRef) {
    if (!fRef) { return }
    typeof forwardRef === 'function' && forwardRef(fRef)
    inputRef = fRef
  }

  const defaultAutocomplete = autocomplete === true ? 'on' : 'off'
  const setAutocomplete = Array.isArray(autocomplete)
  const itemsToAutocomplete = filter(autocomplete as any, value).filter((option) => value !== option)
  const rednerAutocomplete = setAutocomplete && (<>
    {itemsToAutocomplete.map((option, index) => (
      <Dropdown.Item
        key={`option-${index}`}
        onClick={() => handleAutocomplete(option)}
      >
        {option}
      </Dropdown.Item>
    ))}
  </>)

  return (
    <Reaction
      {...props}
      track={!disabled && ['focus', 'hover']}
      cursor={disabled ? "default" : "text"}
      onFocus={!disabled && handleFocus}
      onBlur={!disabled && handleBlur}
    >
      {(rProps: any, r: any) => (<>
        <MakeDropdown items={rednerAutocomplete}>
          <Fit.TryTagless height={height}>
            <Box
              fill={(disabled && "base") || (r.focus && "base") || (r.hover && "faint") || "faint-down"}
              radius="md"
              borderFill={(disabled && "faint") || (r.focus && "base") || (error && 'critic') || "none"}
              style={{ transition: "all 0.25s ease" }}
              tabIndex={disabled ? -1 : 0}
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
                    fill={(error && 'critic') || "faint-down"}
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
                      fill={(disabled && "faint") || "base"}
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
                              name={name}
                              disabled={disabled}
                              tabIndex={-1}
                              autoComplete={defaultAutocomplete}
                            />
                          </Fit.TryTagless>
                        ) : (
                          <input
                            id={fieldId}
                            type={type}
                            onChange={handleChange}
                            value={value}
                            name={name}
                            disabled={disabled}
                            tabIndex={-1}
                            autoComplete={defaultAutocomplete}
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
        </MakeDropdown>

        {typeof error === 'string' && (<>
          <Gap size="xs" />

          <Font fill="critic" size="sm">
            {error}
          </Font>
        </>)}
      </>)}
    </Reaction>
  )
})