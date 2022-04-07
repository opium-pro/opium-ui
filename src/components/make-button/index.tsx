import React, { ReactNode } from 'react'
import { FitProps, ReactionContext, Fit, Font, Box, Reaction, Align, AlignProps, FontProps, CommonProps, ReactionProps } from 'themeor'
import { withTooltip, WithTooltipProps } from '../tooltip'
import { OpiumComponent } from '../../types'


export type MakeButtonProps = Omit<ReactionProps, 'children'> & WithTooltipProps & FitProps & CommonProps & {
  offset?: string,
  disabled?: boolean,
  radius?: string,
  fade?: boolean,
  forwardRef?: any,
  fillHover?: string
  fillActive?: string
  href?: string
  blank?: boolean
  type?: string
  children?: ReactNode | ((r: ReactionContext) => ReactNode)
}

export const MakeButton = withTooltip(({
  children,
  offset = "10px",
  disabled,
  radius = "sm",
  type = "button",
  fade,
  forwardRef,
  fillHover = "hovereffect",
  fillActive = "faint",
  href,
  blank,
  onClick,
  ...rest
}: MakeButtonProps) => {
  const Tag = href ? 'a' : 'button'

  function handleClick(e) {
    if (onClick && href) {
      e.preventDefault()
    }
    onClick?.(e)
  }

  return (
    <Reaction
      {...rest}
      onClick={handleClick}
      disabled={disabled}
      button
    >
      {(rProps, r) => (
        <Fit.TryTagless
          {...rProps}
          style={{
            margin: `-${offset.split(' ').join(' -')}`,
            padding: offset,
          }}
          forwardRef={forwardRef}
        >
          <Tag
            href={href}
            rel={href && blank && "nofollow"}
            target={href && blank && "_blank"}
            type={(!href ? type : undefined) as any}
          >
            {!disabled && (
              <Fit.TryTagless
                width={r.hoverOrFocus ? "100%" : (!fade ? "0" : undefined)}
                height={r.hoverOrFocus ? "100%" : (!fade ? "0" : undefined)}
                stick="top-left"
                top={r.hoverOrFocus ? "0" : (!fade ? "50%" : undefined)}
                left={r.hoverOrFocus ? "0" : (!fade ? "50%" : undefined)}
              >
                <Box
                  radius={r.hoverOrFocus ? radius as any : 'max'}
                  fill={r.active ? fillActive : fillHover}
                  style={{
                    transition: "all 0.2s ease",
                    opacity: fade ? (r.hoverOrFocus ? "1" : "0") : undefined,
                  }}
                />
              </Fit.TryTagless>
            )}
            {typeof children === 'function' ? (
              children(r)
            ) : (
              children
            )}
          </Tag>
        </Fit.TryTagless>
      )}
    </Reaction>
  )
}) as OpiumComponent<MakeButtonProps>


MakeButton.displayName = 'MakeButton'
MakeButton.description = 'Converts anything into a button or a link'
MakeButton.demoProps = {
  Props: {
    _extends: ['withTooltip'],
    offset: ['string', undefined, '10px'],
    radius: ['string', undefined, 'sm'],
    fillHover: ['string', undefined],
    fillActive: ['string', undefined],
    type: ['string', undefined, 'button'],
    href: ['string', undefined, `If filled, then <a> tag will be used instead of <button>`],
    blank: ['boolean', false],
    disabled: ['boolean', false],
    fade: ['boolean', false],
  }
}
MakeButton.usage = `<MakeButton{Props}>
  Clickable thing
</MakeButton>`