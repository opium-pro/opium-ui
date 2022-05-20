import React from 'react'
import { Gap, Box, Align, Fit, useReaction, Icon } from 'themeor'
import { Dropdown } from '../dropdown'
import { useTextInput } from './context'
import { Tooltip } from '../tooltip'
import { AutoComplete } from './auto-complete'
import { isDefined } from '../../utils'
import { ActionButton } from '../action-button'


export const Wrapper = ({ children }) => {
  const {
    disabled,
    options,
    isSelect,
    height,
    error,
    insertLeft,
    insertRight,
    tooltip,
    value,
    type,
    onChange,
    children: parentChildren,
  } = useTextInput()
  const { passProps, focus, hover, hoverOrFocus } = useReaction()
  const context = useTextInput()
  const reaction = useReaction()
  const textarea = type === 'textarea'

  return (
    <Dropdown
      disabled={disabled}
      element={(
        <Fit.TryTagless height={height}>
          <Box.TryTagless
            fill={(disabled && "base") || (focus && "base") || (hover && "faint") || "faintDown"}
            radius="sm"
            borderFill={(disabled && "faint") || (focus && "base") || (error && 'critic') || "none"}
            style={{ transition: "all 0.25s ease" }}
            tabIndex={disabled ? -1 : 0}
            {...passProps}
          >
            <Align row vert="stretch">
              {insertLeft && (
                <Align row vert="center">{insertLeft}</Align>
              )}

              <Fit clip stretch>
                {children}
              </Fit>

              <Align row vert="center" height="100%">
                {!textarea && !disabled && isDefined(value) && hoverOrFocus && (<>
                  <ActionButton tabIndex={-1} icon="cross" fill="faintDown" onClick={() => onChange('')} />
                  <Gap size="16px" />
                </>)}

                {tooltip && (<>
                  <ActionButton tabIndex={-1} cursor="help" fill="faintDown" icon="question-circle" />
                  <Tooltip delay={100}>{tooltip}</Tooltip>
                  <Gap size="16px" />
                </>)}

                {type === 'url' && isDefined(value) && (<>
                  <ActionButton tabIndex={-1} icon="share-1" fill="faintDown" href={value} blank />
                  <Gap size="16px" />
                </>)}

                {insertRight}

                {parentChildren && parentChildren instanceof Function ? (
                  parentChildren(context, reaction)
                ) : parentChildren}
              </Align>
            </Align>
          </Box.TryTagless>
        </Fit.TryTagless>
      )}
      withSearch={isSelect}
    >
      {isSelect ? options : <AutoComplete />}
    </Dropdown>
  )
}