export type Screen = { name: string, start: number, limit: number | string, gutter?: string, oneRem?: string, isSmall?: boolean, currentWidth?: number }

export const SCREEN_FIT: Screen[] = [
  { name: "x3s", start: 0, limit: 320, gutter: '12px', oneRem: '16px', isSmall: true, currentWidth: undefined },
  { name: "x2s", start: 320, limit: '100%', gutter: '16px', oneRem: '16px', isSmall: true, currentWidth: undefined },
  { name: "xs", start: 512, limit: '100%', gutter: '20px', oneRem: '16px', isSmall: true, currentWidth: undefined },
  { name: "sm", start: 768, limit: 768, gutter: '20px', oneRem: '16px', isSmall: true, currentWidth: undefined },
  { name: "md", start: 1024, limit: 1024, gutter: '24px', oneRem: '16px', currentWidth: undefined },
  { name: "lg", start: 1280, limit: 1280, gutter: '32px', oneRem: '16px', currentWidth: undefined },
  { name: "xl", start: 1600, limit: 1600, gutter: '40px', oneRem: '16px', currentWidth: undefined },
  { name: "x2l", start: 1800, limit: 1800, gutter: '40px', oneRem: '16px', currentWidth: undefined },
]