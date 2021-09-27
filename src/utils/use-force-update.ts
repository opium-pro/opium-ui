import { useState } from 'react'

export function useForceUpdate() {
  const [value, setValue]: any = useState(0)
  return [
    value,
    () => { setValue(value => value + 1) },
  ]
}