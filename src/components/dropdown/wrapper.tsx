import React, { FC, useState, useEffect, useRef } from 'react'
import { Box, Fit, FitProps, Gap, Font } from 'themeor'
import { Portal } from '../portal/index.js'
import { useAppLayout } from '../app-layout/index.js'
import { placeNode } from '../../utils/index.js'
import { TextInput } from "../text-input/index.js"
import { filter } from 'opium-filter'
import { useDropdown } from './context.js'
import { Hotkey } from '../hotkey/index.js'
import { LazyScroller } from '../lazy-scroller/index.js'
import { withExternalClick, WithExternalClick, WithExternalClickProps } from '../with-external-click/index.js'


export type WrapperProps = WithExternalClickProps & FitProps & {
  place?: string
  placeOrder?: string[]
  parentNode?: any
}


export const Wrapper: WithExternalClick<WrapperProps> = ({
  children,
  place = 'bottom-stretch',
  placeOrder = ['bottom', 'top'],
  forwardRef,
  parentNode,
  ...rest
}) => {
  const [targetNode, setTargetNode]: any = useState()
  const [isReady, setIsReady]: any = useState()
  const scrollNode = useRef()
  const { contentNode } = useAppLayout()
  const { opened, search, setSearch, setOpened, withSearch } = useDropdown()
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
    if (typeof forwardRef === 'function') {
      forwardRef(node)
    }
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

  const newChildren = React.Children.map(children, (child: any) => ({ props: child.props, Component: child.type }))
  let filtered

  if (search) {
    filtered = filter(newChildren, { props: search }, { deep: true })
  } else {
    filtered = newChildren
  }

  const showSearch = withSearch && newChildren.length > 10

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
                forwardRef={n => scrollNode.current = n}
                scroll
                maxHeight="500px"
                maxWidth="100%"
                minWidth="100px"
              >
                <Box radius="sm" shadow="lg" fill="base" borderFill="faintDown">
                  {showSearch && (
                    <Fit sticky top="0" zIndex={1}>
                      <Gap hor="md" vert="sm">
                        <TextInput
                          forwardRef={n => searchNode = n}
                          type="search"
                          radius="max"
                          placeholder="Search"
                          value={search}
                          onChange={setSearch}
                        />
                      </Gap>
                    </Fit>
                  )}
                  <LazyScroller scrollNode={scrollNode.current}>
                    {filtered?.length
                      ? filtered.map(({ Component, props }, index) => <Component key={index} {...props} />)
                      : <Gap><Font align="center">Nothing is found</Font></Gap>
                    }
                  </LazyScroller>
                </Box>
              </Fit.TryTagless>
            </Gap>
          </Fit.TryTagless>
        </Hotkey>
      </Portal>
    </Fit>
  )
}