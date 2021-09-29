import React, { useEffect, useState } from 'react'

export type WithOutsideClickProps = {
  onOutsideClick?: (...args: any) => any
}

export function withOutsideClick(Component) {
  return ({
    onOutsideClick = (...n) => n,
    forwardRef = (...n) => n,
    ...rest
  }) => {
    const [node, setNode]: any = useState()

    function handleRef(node) {
      setNode(node)
      forwardRef(node)
    }

    function trackOutsideClick(...args: any[]) {
      if (!node?.contains(args[0].target)) {
        onOutsideClick(...args)
      }
    }

    useEffect(() => {
      if (node) {
        window.addEventListener('click', trackOutsideClick)
        return () => window.removeEventListener('click', trackOutsideClick)
      }
    }, [node])

    return (
      <Component
        {...rest}
        forwardRef={handleRef}
      />
    )
  }
}