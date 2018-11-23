import styled, {css} from 'styled-components'
import {ifProp} from 'styled-tools'
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
  `
}

const Color = p => {
  let style = getStyle(p.opts)
  let color = getColor(p.opts)

  return css`
    color: ${p => p.theme.button[color][style].color};
    background-color: ${p => p.theme.button[color][style].backgroundColor};
    box-shadow: ${p => p.theme.button[color][style].boxShadow};
    transition: ${p => p.theme.transition.primary};

    @media (min-width: ${p => p.theme.media.tablet}) {
      ${ifProp(
        'disabled',
        '',
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
      )};
    }
  `
}

export const Wrapper = styled.span``

export const ButtonBlank = styled.button`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  font-family: inherit;
  color: inherit;
  text-decoration: none;
  text-align: center;
  line-height: normal;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  overflow: hidden;
  font-weight: 600;
  padding: ${rem('13px')} ${rem('25px')};

  &:hover {
    text-decoration: none;
  }

  ${Style} ${Color} ${Wrapper} {
    display: block;
  }

  ${ifProp(['opts.block'],
    css`
        display: block;
        width: 100%;
        box-sizing: border-box;
      `
  )}

  ${ifProp('disabled',
    css` 
      cursor: default;
    `
  )};
`