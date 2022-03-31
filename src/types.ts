import { FC } from 'react'
import type * as components from './components'


export type TypeFields = 'boolean' | 'string' | 'number' | 'select'
export type DemoProps<OriginalProps = {}> = {[name in keyof OriginalProps]?: [type: TypeFields, defaultValue?: OriginalProps[name], options?: any[]]}
export type DemoComponent<Props = {}> = [Component: any, props?: {[prop in keyof Props]: any}]

export type OpiumCommon = {
  displayName: string
  description?: string
}

export type OpiumComponent<Props = {}> = FC<Props> & OpiumCommon & {
  demoProps: DemoProps<Props>
  extends?: (keyof typeof components)[]
}

export type OpiumHook<Return, Props = {}> = ((...args: any) => Return) & OpiumCommon & {
  demoComponent: DemoComponent<Props>
  demoProps: DemoProps<Props>
}

export type OpiumHOC<Return, Props = {}> = ((...args: any) => Return) & OpiumCommon & {
  demoComponent: DemoComponent<Props>
  demoProps: DemoProps<Props>
}

export * from './theme/types'