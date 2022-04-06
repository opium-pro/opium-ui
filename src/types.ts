import { FC } from 'react'
import type * as components from './components'


export type TypeFields = 'boolean' | 'string' | 'number' | 'select'
export type DemoProps<OriginalProps = {}> = {
  [name in keyof OriginalProps]?: [type: TypeFields, defaultValue?: OriginalProps[name], options?: any[]]
} & {
  _extends?: (keyof typeof components)[]
}
export type DemoComponent<Props = {}> = [Component: any, props?: {[prop in keyof Props]: any}]

export type OpiumCommon<Props = {}> = {
  displayName: string
  description?: string
  demoProps?: {[variable: string]: DemoProps<Props>}
  usage?: string
}

export type OpiumComponent<Props = {}> = FC<Props> & OpiumCommon<Props> & {}
export type OpiumHook<Return, Props = {}> = ((...args: any) => Return) & OpiumCommon<Props> & {}
export type OpiumHOC<Return, Props = {}> = ((...args: any) => Return) & OpiumCommon<Props> & {}

export * from './theme/types'