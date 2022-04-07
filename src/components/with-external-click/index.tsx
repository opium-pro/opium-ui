import React, { useEffect, FC, useRef } from 'react'


export type WithExternalClickProps = {
  onExternalClick?: (...args: any) => any
}

export type WithExternalClick<Props = WithExternalClickProps> = FC<Props>


export const withExternalClick = (Component) => {
  return ({
    onExternalClick = (...n) => n,
    ...rest
  }: WithExternalClickProps) => {
    const node: any = useRef()

    function trackExternalClick(...args: any[]) {
      if (!node.current?.contains(args[0].target)) {
        onExternalClick(...args)
      }
    }

    useEffect(() => {
      window.addEventListener('click', trackExternalClick)
      return () => window.removeEventListener('click', trackExternalClick)
    }, [])

    return (
      <Component
        {...rest}
        forwardRef={node}
      />
    )
  }
}