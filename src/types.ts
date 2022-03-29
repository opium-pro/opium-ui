import { FC } from 'react'


export type TypeFields = 'boolean' | 'string' | 'number'


export type OpiumComponent<Props> = FC<Props> & {
  type: 'component' | 'hook'
  description?: string,
  demoProps: {[name: string]: [type: TypeFields, defaultValue: any, options?: any[]]}
}

export * from './theme/types'