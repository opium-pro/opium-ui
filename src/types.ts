import { FC } from 'react'


export type TypeFields = 'boolean' | 'string' | 'number'


export type OpiumComponent<Props> = FC<Props> & {
  type: 'component' | 'hook'
  note?: string,
  description?: string,
  demoProps?: {[name: string]: [type: TypeFields, defaultValue: any, options?: any[]]}
}