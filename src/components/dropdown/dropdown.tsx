import React, { FC, useState, useEffect } from 'react'
import { Box, Fit, FitProps, Gap } from 'themeor'
import { Portal } from '../portal'
import { useAppLayout } from '../app-layout'
import { placeNode } from '../../utils'
import { TextInput } from "../text-input"
import filter from 'opium-filter'
import { useDropdown, DropdownContext } from './context'


export interface DropdownProps extends FitProps {
  place?: string
  placeOrder?: string[]
}


export const Dropdown: FC<DropdownProps> = ({ children, place, placeOrder, forwardRef, ...rest }) => {
  const [sourceNode, setSourceNode]: any = useState()
  const [targetNode, setTargetNode]: any = useState()
  const [isReady, setIsReady]: any = useState()
  const { contentNode } = useAppLayout()
  const [search, setSearch] = useState()
  const context = useDropdown()
  const { opened } = context
  let searchNode

  function alignNodes() {
    if (!sourceNode || !targetNode) { return }
    placeNode(targetNode, sourceNode, placeOrder, place)
  }

  useEffect(() => {
    alignNodes()
  })

  useEffect(() => {
    if (isReady) {
      contentNode?.addEventListener('scroll', alignNodes)
      window.addEventListener('resize', alignNodes)
      return () => {
        contentNode?.removeEventListener('scroll', alignNodes)
        window.removeEventListener('resize', alignNodes)
      }
    }
  }, [isReady])

  function handleRef(node) {
    if (!node) { return }
    !targetNode && setTargetNode(node)
      ; (forwardRef as any)?.(node)
  }

  useEffect(() => {
    alignNodes()
    if (contentNode && targetNode && sourceNode) {
      setIsReady(true)
    }
  })

  useEffect(() => {
    if (opened && searchNode) {
      searchNode.focus()
    }
  }, [opened])

  let newChildren: any = children
  const isMapped = children instanceof Map
  if (isMapped) {
    newChildren = []
    for (const [child, tags] of Array.from(children as any) as any) {
      newChildren.push({
        component: child,
        tags,
      })
    }
    if (search) {
      newChildren = filter(newChildren, { tags: search }).map(i => i.component)
    } else {
      newChildren = newChildren.map(i => i.component)
    }
  }
  const showSearch = isMapped && (children as any).size > 10

  return (
    <DropdownContext.Provider value={{...context, search}}>
      <Fit forwardRef={setSourceNode}>
        <Portal>
          <Fit absolute left="0" top="0">
            <Gap
              vert="10px"
              forwardRef={handleRef}
              {...rest}
            >
              <Fit.TryTagless
                scroll
                maxHeight="500px"
                maxWidth="600px"
                minWidth="100px"
              >
                <Box radius="md" shadow="lg" fill="base">
                  {showSearch && (
                    <Gap size="md" bottom="sm">
                      <TextInput
                        forwardRef={n => searchNode = n}
                        type="search"
                        placeholder="Search"
                        value={search}
                        onChange={setSearch}
                      />
                    </Gap>
                  )}
                  {isMapped ? newChildren : children}
                </Box>
              </Fit.TryTagless>
            </Gap>
          </Fit>
        </Portal>
      </Fit>
    </DropdownContext.Provider>
  )
}
