import React, { ReactNode } from 'react'
import { FitProps, ReactionContext, Fit, Font, Box, Reaction, Align, AlignProps, FontProps, CommonProps, ReactionProps } from 'themeor'
import { withTooltip, WithTooltipProps } from '../tooltip/index.js'
import { OpiumComponent } from '../../types.js'


export type MakeButtonProps = Omit<ReactionProps, 'children'> & WithTooltipProps & Omit<FitProps, 'children'> & {
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
  tabIndex?: number
  children?: ReactNode | ((r?: ReactionContext, rProps?: any) => ReactNode)
  Tag?: any
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
  tabIndex = 0,
  onClick,
  Tag,
  style,
  ...rest
}: MakeButtonProps) => {
  if (!Tag) {
    Tag = href ? 'a' : 'button'
  }

  function handleClick(e) {
    if (onClick && href) {
      e.preventDefault()
    }
    onClick?.(e)
  }

  return (
    <Reaction
      track={['active', 'focus', 'hover']}
      {...rest}
      onClick={!disabled && handleClick}
      disabled={disabled}
      button
    >
      {(rProps, r) => (
        <Fit.TryTagless
          inline
          {...rProps}
          style={{
            ...style,
            margin: `-${offset.split(' ').join(' -')}`,
            padding: offset,
          }}
          forwardRef={forwardRef}
        >
          <Tag
            tabIndex={tabIndex}
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
            <Fit>
              {typeof children === 'function' ? (
                (children as any)(r, rProps)
              ) : (
                children
              )}
            </Fit>
          </Tag>
        </Fit.TryTagless>
      )}
    </Reaction>
  )
}) as OpiumComponent<MakeButtonProps>


MakeButton.displayName = 'MakeButton'
MakeButton.description = 'Converts anything into a button or a link with animated hover and expanded clickable aria'
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