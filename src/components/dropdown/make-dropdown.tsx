import React, { useState, useEffect } from 'react'
import { Dropdown } from './dropdown'
import { Fit } from 'themeor'
import { Hotkey } from '../hotkey'
import { DropdownContext } from './context'


export function MakeDropdown({ opened: initialOpened, items, onClick, children, ...rest }: any) {
  const [dropdownNode, setDropdownNode]: any = useState()
  const [opened, setOpened] = useState(initialOpened)

  function trackOutsideClick(event) {
    if (!dropdownNode?.contains(event.target)) {
      setOpened(false)
    }
  }

  useEffect(() => {
    setOpened(initialOpened)
  }, [initialOpened])


  useEffect(() => {
    if (dropdownNode) {
      window.addEventListener('click', trackOutsideClick)
      return () => window.removeEventListener('click', trackOutsideClick)
    }
  }, [dropdownNode])

  function handleClick(event) {
    event.stopPropagation()
    onClick?.(opened)
    setOpened(!opened)
  }

  return (
    <DropdownContext.Provider value={{ opened, setOpened, dropdownNode }}>
      <Hotkey scope="dropdown" trigger="esc" action={() => setOpened(false)}>
        <Fit>
          <div onClick={handleClick}>
            {children}
          </div>

          {opened && items && (
            <Dropdown {...rest} forwardRef={n => n && setDropdownNode(n)}>
              {items}
            </Dropdown>
          )}
        </Fit>
      </Hotkey>
    </DropdownContext.Provider>
  )
}