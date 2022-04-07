import React, { useState, useEffect, FC } from 'react'
import { Wrapper, WrapperProps } from './wrapper'
import { DropdownContext } from './context'


export type DropdownProps = WrapperProps & {
  opened?: boolean
  element?: any
  withSearch?: boolean
  children?: any
  disabled?: boolean
  onClick?: any
}


export const Dropdown: FC<DropdownProps> = ({ opened: initialOpened, element, withSearch, onClick, children, disabled, ...rest }) => {
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

  if (React.Children.count(element) !== 1) {
    console.error(`'MakeDropdown' component from 'opium-ui' can have only one target`)
    return null
  }

  const Target = element.type
  const props = element.props

  return (
    <DropdownContext.Provider value={{
      opened,
      setOpened,
      dropdownNode,
      search,
      setSearch,
      withSearch,
    }}>
      <Target {...props} onClick={handleClick} />

      {!disabled && children && opened && (
        <Wrapper {...rest} forwardRef={n => n && setDropdownNode(n)}>
          {children}
        </Wrapper>
      )}
    </DropdownContext.Provider>
  )
}