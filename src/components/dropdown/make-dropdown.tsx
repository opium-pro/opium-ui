import React, { useState, useEffect } from 'react'
import { Dropdown } from './dropdown'
import { Fit } from 'themeor'
import hotkeys from 'hotkeys-js'
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
    hotkeys('esc', (event) => {
      setOpened(false)
    })
    return () => hotkeys.unbind('esc')
  }, [])


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
    </DropdownContext.Provider>
  )
}