import React, { useEffect, useState } from 'react'

export type WIthMouseHoldProps = {
  onMouseHold?: (delay?: number, ...event: any) => any
}

export function withMouseHold(Component) {
  return ({
    onMouseHold = (...n) => n,
    onMouseEnter = (...n) => n,
    onMouseMove = (...n) => n,
    onMouseLeave = (...n) => n,
    ...rest
  }) => {
    const [state]: any = useState({
      delay: 0,
      interval: undefined,
    })

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
      reset()
      state.interval = setInterval(handleMouseHold, 100)
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