import {mix, rgba} from 'polished';

const colors = {
  white: '#fff',
  primary: '#0388ef',
  black: '#111',
  dark: '#333',
  grey: '#657180',
  greyBluey: '#8c94a0',
  greyLight: '#ebedef',
  greyPale: '#f7f8f9',
  slate: '#3f4d60',
  red: '#d64052',
  orangeRed: '#ff3e2e',
  green: '#13b72a',
  blank: '#e8edf2',
  transparent: 'transparent'
}

const corners = {
  primary: '4px',
  secondary: '8px',
  card: '12px',
  round: '100px',
}

const light = {
  flexboxgrid: {
    container: {
      lg: 80.25
    },
  },
  colors: colors,
  fonts: {
    primary:
      '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    headings: '"Akrobat", "Segoe UI", Roboto,"Droid Sans", "Helvetica Neue", Arial, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontSize: {
    primary: '16px',
    h1: '60px',
    h2: '48px',
    h3: '38px',
    h4: '24px',
    h5: '18px',
  },
  corners: corners,
  boxShadow: {
    primary: '0 0 15px 0 rgba(101, 113, 128, 0.2)',
    card: '0 4px 15px 0 rgba(101, 113, 128, 0.2), 0 2px 4px 0 rgba(140, 148, 160, 0.15)',
    light: '0 0 17px 0 rgba(0, 0, 0, 0.11)',
  },
  transition: {
    primary: '.3s ease'
  },
  media: {
    mobileTiny: '340px',
    mobileSmall: '575px',
    mobile: '767px',
    tablet: '991px',
    desktop: '1070px'
  },
  button: {
    styleDefault: {
      borderRadius: corners.round,
    },
    styleBordered: {
      borderRadius: corners.round,
    },
    styleFlat: {
      borderRadius: 0,
    },
    colorPrimary: {
      styleDefault: {
        color: colors.white,
        colorHover: colors.white,
        colorActive: colors.white,
        colorDisabled: colors.white,
        backgroundColor: colors.primary,
        backgroundColorHover: mix(0.2, colors.white, colors.primary),
        backgroundColorActive: mix(0.2, colors.black, colors.primary),
        backgroundColorDisabled: colors.greyPale,
        boxShadow: 'none',
        border: 'none',
        boxShadowHover: 'none',
        boxShadowActive: 'none',
        boxShadowDisabled: 'none',
        boxShadowLoading: 'none'
      },
      styleBordered: {
        color: colors.primary,
        colorHover: colors.primary,
        colorActive: colors.primary,
        colorDisabled: colors.primary,
        backgroundColor: colors.transparent,
        backgroundColorHover: mix(0.05, colors.primary, colors.white),
        backgroundColorActive: mix(0.1, colors.primary, colors.white),
        backgroundColorDisabled: colors.transparent,
        backgroundColorLoading: colors.transparent,
        border: `1px solid ${colors.primary}`,
        boxShadow: 'none',
        boxShadowHover: 'none',
        boxShadowActive: 'none',
        boxShadowDisabled: 'none'
      },
      styleFlat: {
        color: colors.primary,
        colorHover: mix(0.2, colors.white, colors.primary),
        colorActive: mix(0.2, colors.white, colors.primary),
        colorDisabled: colors.primary,
        backgroundColor: colors.transparent,
        backgroundColorHover: colors.transparent,
        backgroundColorActive: colors.transparent,
        backgroundColorDisabled: colors.transparent,
        boxShadow: 'none',
        border: 'none',
        boxShadowHover: 'none',
        boxShadowActive: 'none',
        boxShadowDisabled: 'none'
      }
    },

    colorSecondary: {
      styleDefault: {
        color: colors.white,
        colorHover: colors.white,
        colorActive: colors.white,
        colorDisabled: rgba(colors.grey, 0.6),
        backgroundColor: colors.primary,
        backgroundColorHover: mix(0.07, colors.white, colors.primary),
        backgroundColorActive: mix(0.03, colors.black, colors.primary),
        backgroundColorDisabled: colors.grey,
        boxShadow: 'none',
        border: 'none',
        boxShadowHover: 'none',
        boxShadowActive: 'none',
        boxShadowDisabled: 'none'
      },
      styleFlat: {
        color: colors.primary,
        colorHover: mix(0.2, colors.white, colors.primary),
        colorActive: mix(0.2, colors.white, colors.primary),
        colorDisabled: rgba(colors.grey, 0.6),
        backgroundColor: colors.transparent,
        backgroundColorHover: colors.transparent,
        backgroundColorActive: colors.transparent,
        backgroundColorDisabled: colors.transparent,
        boxShadow: 'none',
        border: 'none',
        boxShadowHover: 'none',
        boxShadowActive: 'none',
        boxShadowDisabled: 'none'
      }
    },
  },
};

export default light;
