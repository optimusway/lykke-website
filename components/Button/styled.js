import styled, {css} from 'styled-components'
import {rem} from 'polished'

function getStyle(options) {
  let style

  if (options.bordered) style = 'styleBordered'
  else if (options.flat) style = 'styleFlat'
  else style = 'styleDefault'

  return style
}

function getColor(options) {
  let color

  if (options.secondary) color = 'colorSecondary'
  else color = 'colorPrimary'

  return color
}

const Style = p => {
  let style = getStyle(p.opts)

  return css`
    border-radius: ${p => p.theme.button[style].borderRadius};
    font-weight: ${p => p.theme.button[style].fontWeight};
  `
}

const Color = p => {
  let style = getStyle(p.opts)
  let color = getColor(p.opts)

  return css`
    color: ${p => p.theme.button[color][style].color};
    background-color: ${p => p.theme.button[color][style].backgroundColor};
    box-shadow: ${p => p.theme.button[color][style].boxShadow};
    border: ${p => p.theme.button[color][style].border};
    transition: all ${p => p.theme.transition.primary};

    @media (min-width: ${p => p.theme.media.tablet}) {
    ${(p) => !p.disabled &&
      css`
        &:hover {
          color: ${p => p.theme.button[color][style].colorHover};
          background-color: ${p => p.theme.button[color][style].backgroundColorHover};
          box-shadow: ${p => p.theme.button[color][style].boxShadowHover};
        }

        &:active {
          color: ${p => p.theme.button[color][style].colorActive};
          background-color: ${p => p.theme.button[color][style].backgroundColorActive};
          box-shadow: ${p => p.theme.button[color][style].boxShadowActive};
        }
      `
    }
  `
}

export const Wrapper = styled.span``

export const ButtonBlank = styled.button`
  font-family: ${p => p.theme.fonts.primary};
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  font-family: inherit;
  color: inherit;
  text-decoration: none;
  text-align: center;
  line-height: normal;
  white-space: nowrap;
  border: 0;
  outline: 0;
  cursor: pointer;
  overflow: hidden;
  font-weight: 600;
  font-size: ${rem('18px')};
  padding: ${rem('16px')} ${rem('25px')};
  background-color: transparent;
  appearance: none;

  &:hover {
    text-decoration: none;
  }
  
  &:focus {
    outline: none;
  }

  ${Style} ${Color} ${Wrapper} {
    display: block;
  }
  
  ${(p) => p.block &&
    css`
      display: block;
      width: 100%;
      box-sizing: border-box;
    `
  };
  
  ${(p) => p.small &&
    css`
      font-size: ${rem('16px')};
      padding: ${rem('10px')} ${rem('16px')};
    `
  };
  
  ${(p) => p.disabled &&
    css`
      cursor: default;
    `
  };
`