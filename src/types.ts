import { FC } from 'react'
import type * as components from './components'


export type TypeFields = 'boolean' | 'string' | 'number' | 'select'
export type DemoProps<OriginalProps = any> = {
  [name in keyof OriginalProps]?: [type: TypeFields, defaultValue?: OriginalProps[name], options?: any[] | string]
} & {
  _extends?: (keyof typeof components)[]
  _indent?: string
}
export type DemoComponent<Props = any> = [Component: any, props?: {[prop in keyof Props]: any}]

export type OpiumCommon<Props = any> = {
  displayName: string
  description?: string
  demoProps?: {[variable: string]: DemoProps<Props>}
  usage?: string
}

export type OpiumComponent<Props = {}> = FC<Props> & OpiumCommon<Props> & {}
export type OpiumHook<Return, Props = {}> = ((...args: any) => Return) & OpiumCommon<Props> & {}
export type OpiumHOC<Return, Props = {}> = ((...args: any) => Return) & OpiumCommon<Props> & {}

export * from './theme/types'