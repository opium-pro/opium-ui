import React, { FC, useState, useEffect } from 'react'
import { Box, Fit, FitProps, Gap } from 'themeor'
import { Portal } from '../portal'
import { useAppLayout } from '../app-layout'
import { placeNode } from '../../utils'
import { TextInput } from "../text-input"
import filter from 'opium-filter'
import { useDropdown } from './context'
import { Hotkey } from '../hotkey'


export interface DropdownProps extends FitProps {
  place?: string
  placeOrder?: string[]
  parentNode?: any
}


export const Dropdown: FC<DropdownProps> = ({
  children,
  place = 'bottom-stretch',
  placeOrder = ['bottom', 'top'],
  forwardRef,
  parentNode,
  ...rest
}) => {
  const [targetNode, setTargetNode]: any = useState()
  const [isReady, setIsReady]: any = useState()
  const { contentNode } = useAppLayout()
  const { opened, search, setSearch, setOpened } = useDropdown()
  let searchNode

  function alignNodes() {
    if (!parentNode || !targetNode) { return }
    placeNode(targetNode, parentNode, placeOrder, place)
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
    setTargetNode(node)
      ; (forwardRef as any)?.(node)
  }

  useEffect(() => {
    alignNodes()
    if (contentNode && targetNode && parentNode) {
      setIsReady(true)
    }
  })

  function handleSourceRef(node) {
    if (!node) { return }
    parentNode = parentNode || node.previousElementSibling || node.parentNode
  }

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
    <Fit forwardRef={handleSourceRef} hidden>
      <Portal>
        <Hotkey
          scope="dropdown"
          trigger="esc"
          action={() => setOpened(false)}
        >
          <Fit.TryTagless absolute>
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
                    <Fit sticky top="0" zIndex={1}>
                      <Gap size="md" bottom="sm">
                        <TextInput
                          forwardRef={n => searchNode = n}
                          type="search"
                          placeholder="Search"
                          value={search}
                          onChange={setSearch}
                        />
                      </Gap>
                    </Fit>
                  )}
                  {isMapped ? newChildren : children}
                </Box>
              </Fit.TryTagless>
            </Gap>
          </Fit.TryTagless>
        </Hotkey>
      </Portal>
    </Fit>
  )
}
