import React from 'react'
import {ButtonBlank,Wrapper} from './styled'

function getButtonOptions({ ...opts }) {
  const {
    bordered,
    flat,
    primary,
    secondary,
    ...otherProps
  } = opts;

  const type = () => {
    if (bordered) return { bordered: true }
    else if (flat) return { flat: true }
    else return { defaultType: true }
  };

  const style = () => {
    if (primary) return { primary: true }
    if (secondary) return { secondary: true }
    else return { primary: true }
  };

  const other = () => {
    let props = {};

    // Пропуск параметров если они undefined
    Object.keys(otherProps).map(function(key, index) {
      let value = otherProps[key]
      if (value) {
        props[key] = value
      }
    });

    return props
  };

  return {
    ...type(),
    ...style(),
    ...other()
  }
}

export default function Button(props) {
  const {
    children,
    href,
    disabled,
    block,
    bordered,
    flat,
    primary,
    secondary,
    ...otherProps
  } = props;

  const ButtonComponent = href ? ButtonBlank.withComponent('a') : ButtonBlank;

  return (
    <ButtonComponent
      {...(href ? { href: href, role: 'button' } : { type: 'button' })}
      disabled={disabled}
      block={block}
      opts={getButtonOptions({
        disabled,
        bordered,
        flat,
        primary,
        secondary,
      })}
      {...otherProps}
    >
      <Wrapper>
        {children}
      </Wrapper>
    </ButtonComponent>
  )
}