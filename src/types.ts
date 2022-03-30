import { FC } from 'react'


export type TypeFields = 'boolean' | 'string' | 'number' | 'select'


export type OpiumComponent<Props> = FC<Props> & {
  type: 'component'
  description?: string
  demoProps: {[name: string]: [type: TypeFields, defaultValue: any, options?: any[]]}
}

export type OpiumCHook<Return> = ((...args: any) => Return) & {
  type: 'hook'
  description?: string
  demoComponent: [Component: any, props?: {[prop: string]: any}]
  demoProps: {[name: string]: [type: TypeFields, defaultValue: any, options?: any[]]}
}

export * from './theme/types'