export default {
  shallInverseOn: [
    'accent', 'accentUp', 'accentDown',
    'complement', 'complementUp', 'complementDown',
    'critic', 'criticUp', 'criticDown',
    'success', 'successUp', 'successDown',
    'darkblur',
    'notification',
    'error'
  ],

  fill: {
    backblur: 'rgba(228, 232, 237, 0.5)',
    baseblur: 'rgba(255, 255, 255, 0.5)',
    darkblur: 'rgba(113, 120, 132, 0.5)',
    notification: 'rgba(36, 39, 41, 0.7)',
    error: 'rgba(242, 67, 12, 0.7)',
    hovereffect: 'rgba(107, 122, 136, 0.05)',
    auxiliary1: '#c3dcf1',
    base: '#242729',
    baseDown: 'rgba(0, 0, 0, 0.7)',
    faint: '#72787E',
    faintDown: '#919399',
    accent: '#0072f5',
    accentUp: '#0080ff',
    accentDown: '#0062d1',
    complement: '#5B24B3',
    critic: '#F2430C',
    criticUp: '#F2430C',
    criticDown: '#F2430C',
    warning: '#FFDD1F',
    success: '#56C839',
  },

  fillInverse: {
    base: '#fff',
    baseUp: '#fff',
    baseDown: '#fff',
    faint: '#EDEFF3',
    faintUp: '#E4E8ED',
    faintDown: '#F6F7F9',
    critic: '#fff',
    criticUp: '#fff',
    criticDown: '#fff',
  },

  box: {
    fill: {
      base: '#fff',
      baseUp: '#FCFCFD',
      baseDown: 'rgba(255, 255, 255, 0.5)',
      faint: '#EDEFF3',
      faintUp: '#E4E8ED',
      faintDown: '#F6F7F9',
    },
    fillInverse: {
      base: '#242729',
      baseDown: 'rgba(0, 0, 0, 0.7)',
      faint: '#72787E',
      faintDown: '#919399',
      accent: '#b5daff',
      accentUp: 'rgba(61, 132, 219, 0.15)',
      critic: '#FEF3F0',
      warning: '#FEF8E7',
      success: 'rgba(61, 181, 60, 0.1)',
    },
    radius: {
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      x2l: '20px'
    },
    blur: {
      md: '10px'
    },
    shadow: {
      x3s: '0px 1px 2px 0px rgba(79, 105, 118, 0.05)',
      sm: '0px 4px 10px 0px rgba(79, 105, 118, 0.05)',
      md: '0px 10px 25px 0px rgba(79, 105, 118, 0.03)',
      lg: '0px 10px 30px 0px rgba(79, 105, 118, 0.1)',
      xl: '0px 10px 40px 0px rgba(79, 105, 118, 0.13)'
    },
    glow: {
      md: '0px 0px 10px 3px rgba(255, 255, 255, 0.5)'
    }
  },

  font: {
    family: {
      regular: '"Montserrat", sans-serif'
    },
    lineHeight: {
      x3s: '1',
      x2s: '1.1',
      xs: '1.2',
      sm: '1.3',
      md: '1.4',
      lg: '1.5'
    },
    letterSpacing: {
      md: '0',
      lg: '0.05em'
    },
    size: {
      x3s: '11px',
      x2s: '12px',
      xs: '13px',
      sm: '14px',
      md: '15px',
      lg: '18px',
      xl: '22px',
      x2l: '28px',
      x3l: '40px'
    }
  },

  line: {
    fill: {
      faintDown: '#F3F3F5',
      faint: '#E4E8ED',
      faintUp: '#D5D5DD'
    },
    weight: {
      md: '1px'
    }
  },

  icon: {
    size: {
      sm: '16px',
      md: '24px',
      lg: '32px'
    }
  },

  gap: {
    default: '16px',
    x3s: '2px',
    x2s: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    x2l: '32px',
    x3l: '40px'
  },

  reaction: {
    speed: {
      md: '0.25s'
    }
  },

  effect: {
    opacity: {
      x2s: '0.05',
      xs: '0.1',
      sm: '0.3',
      md: '0.5',
      lg: '0.2',
      xl: '0.7',
      x2l: '0.8',
      x3l: '0.9'
    }
  }
}