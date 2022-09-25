import React from 'react'
import { Gap, Box, Align, Fit, useReaction, Icon } from 'themeor'
import { Dropdown } from '../dropdown/index.js'
import { useTextInput } from './context.js'
import { Tooltip } from '../tooltip/index.js'
import { AutoComplete } from './auto-complete.js'
import { isDefined } from '../../utils/index.js'
import { ActionButton } from '../action-button/index.js'


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
    autoComplete,
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
      {isSelect ? options : autoComplete && <AutoComplete />}
    </Dropdown>
  )
}