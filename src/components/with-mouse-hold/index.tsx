import React, { useEffect, useRef, FC } from 'react'


export type WIthMouseHoldProps = {
  onMouseHold?: (delay?: number, ...event: any) => any
}

export type WIthMouseHold<Props = WIthMouseHoldProps> = (args: any) => FC<Props>


export function withMouseHold(Component) {
  return ({
    onMouseHold,
    onMouseEnter = (...n) => n,
    onMouseMove = (...n) => n,
    onMouseLeave = (...n) => n,
    ...rest
  }) => {
    const state: any = useRef({
      delay: 0,
      interval: undefined,
    }).current

    const isActive = typeof onMouseHold === 'function'

    function handleMouseHold(...args: any[]) {
      state.delay += 100
      onMouseHold(state.delay, ...args)
    }

    function handleMouseLeave(event) {
      onMouseLeave(event)
      reset()
    }

    function handleMouseMove(event) {
      onMouseMove(event)
      if (isActive) {
        reset()
        state.interval = setInterval(handleMouseHold, 100)
      }
    }

    function reset() {
      state.delay = 0
      clearInterval(state.interval)
    }

    useEffect(() => () => reset())

    return (
      <Component
        {...rest}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
    )
  }
}