import React, { useState, useEffect } from 'react'
import { Dropdown } from './dropdown'
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

  if (React.Children.count(children) !== 1) {
    console.error(`'MakeDropdown' component from 'opium-ui' can have only one child`)
    return null
  }

  const Child = children.type
  const props = children.props

  return (
    <DropdownContext.Provider value={{ opened, setOpened, dropdownNode }}>
      <Hotkey scope="dropdown" trigger="esc" action={() => setOpened(false)}>
        <Child {...props} onClick={handleClick} />

        {opened && items && (
          <Dropdown {...rest} forwardRef={n => n && setDropdownNode(n)}>
            {items}
          </Dropdown>
        )}
      </Hotkey>
    </DropdownContext.Provider>
  )
}