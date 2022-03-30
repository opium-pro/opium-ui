import React, { useState, useEffect, FC } from 'react'
import { Dropdown, DropdownProps } from './dropdown'
import { DropdownContext } from './context'


export type MakeDropdownProps = DropdownProps & {
  opened?: boolean
  items?: any
  withSearch?: boolean
  children?: any
  disabled?: boolean
  onClick?: any
}


export const MakeDropdown: FC<MakeDropdownProps> = ({ opened: initialOpened, items, withSearch, onClick, children, disabled, ...rest }) => {
  const [dropdownNode, setDropdownNode]: any = useState()
  const [opened, setOpened] = useState(initialOpened)
  const [search, setSearch] = useState()

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
    <DropdownContext.Provider value={{
      opened,
      setOpened,
      dropdownNode,
      search,
      setSearch,
      withSearch,
    }}>
      <Child {...props} onClick={handleClick} />

      {!disabled && items && opened && (
        <Dropdown {...rest} forwardRef={n => n && setDropdownNode(n)}>
          {items}
        </Dropdown>
      )}
    </DropdownContext.Provider>
  )
}