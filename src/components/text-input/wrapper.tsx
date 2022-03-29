import React from 'react'
import { Gap, Box, Align, Fit, useReaction, Icon } from 'themeor'
import { MakeDropdown } from '../dropdown'
import { useTextInput } from './context'
import { Tooltip } from '../tooltip'
import { AutoComplete } from './auto-complete'
import { isDefined } from '../../utils'
import { IconButton } from '../icon-button'


export const Wrapper = ({ children }) => {
  const {
    disabled,
    options,
    isSelect,
    height,
    error,
    insertLeft,
    insertRight,
    hint,
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
    <MakeDropdown
      disabled={disabled}
      // placeOrder={["bottom-stretch", "top-stretch"]}
      items={isSelect ? options : <AutoComplete />}
      withSearch={isSelect}
    >
      <Fit.TryTagless height={height}>
        <Box.TryTagless
          fill={(disabled && "base") || (focus && "base") || (hover && "faint") || "faintDown"}
          radius={context.label ? 'md' : 'max'}
          borderFill={(disabled && "faint") || (focus && "base") || (error && 'critic') || "none"}
          style={{ transition: "all 0.25s ease" }}
          tabIndex={disabled ? -1 : 0}
          {...passProps}
        >
          <Align row vert="stretch">
            {insertLeft && (
              <Align row vert="center">{insertLeft}</Align>
            )}

            <Fit stretch>
              {children}
            </Fit>

            <Align row vert="center">
              {!textarea && !disabled && isDefined(value) && hoverOrFocus && (<>
                <IconButton size="xs" name="cross" fill="faintDown" onClick={() => onChange('')} />
                {/* {!(hint || insertRight || parentChildren) */}
                  <Gap size="8px" />
                {/* } */}
              </>)}

              {hint && (<>
                <IconButton size="xs" cursor="help" fill="faint" name="question_circle" />
                <Gap />
                <Tooltip delay={0}>{hint}</Tooltip>
              </>)}

              {insertRight}

              {parentChildren && parentChildren instanceof Function ? (
                parentChildren(context, reaction)
              ) : parentChildren}
            </Align>
          </Align>
        </Box.TryTagless>
      </Fit.TryTagless>
    </MakeDropdown>
  )
}