import React from 'react';
import Link from 'next/link';
import {Row, Col} from 'react-styled-flexboxgrid';
import styled, {css} from 'styled-components';
import Button from './Button'

import {rem} from "polished/lib/index";

const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.transparent};
`;

const Nav = styled.nav`
  @media all and (max-width: 991px) {
    display:none;
  }
`;

const Logo = styled.div`  
  margin-right: ${rem('14px')};
  
  img {
    display: inline-block;
    vertical-align: middle;
    margin-top: -1px;
  }
  
  @media all and (max-width: 991px) {
    width: 30px;
    overflow: hidden;
    
    img {
      margin-top: 0;
      width: 94px;
    }
  }
`;

const NavItemInner = styled.div`
  font-weight: 600;
  font-size: ${rem('14px')};
  text-transform: uppercase;
  
  a {
    display: block;
    color: inherit;
    text-decoration: none;
    padding: ${rem('20px')} ${rem('14px')} ${rem('18px')};
    border: 1px solid transparent;
    border-radius:  ${p => p.theme.corners.primary};
    transition: color ${p => p.theme.transition.primary};
    
    img {
      display: inline-block;
      vertical-align: middle;
      margin: ${rem('-12px')} ${rem('5px')} ${rem('-10px')} ${rem('-5px')};
    }

    &:hover {
      color: ${p => p.theme.colors.grey};
    }
  }
`;

const NavItem = styled.div`
  padding-left: ${rem('4px')};
  padding-right: ${rem('4px')};
  
  ${(p) => p.active &&
    css`
      a {
        color: ${p => p.theme.colors.primary};
        border-color: ${p => p.theme.colors.primary};
        
        &:hover {
          color: ${p => p.theme.colors.primary};
        }
      }
    `
  }
`;

const ButtonMenu = styled(Button)`
  padding: 4px;
  width: 24px;
  height: 24px;
    
  span {
    transition-timing-function: cubic-bezier(.55,.055,.675,.19);
    transition-duration: 75ms;
    top: 50%;
    display: block;
    margin-top: -1px;
    
    &, &:after, &:before {
      position: absolute;
      width: 18px;
      height: 2px;
      border-radius: 4px;
      background-color: ${p => p.theme.colors.primary};
      transition-timing-function: ease;
      transition-duration: .15s;
      transition-property: transform;
    }
    
    &:before,
    &:after {
      display: block;
      content: "";
    }
    
    &:before {
      top: -5px;
      transition: top 75ms ease .12s,opacity 75ms ease;
    }
    
    &:after {
      bottom: -5px;
      transition: bottom 75ms ease .12s,transform 75ms cubic-bezier(.55,.055,.675,.19);
    }
  }
     
  
  ${(p) => p.active &&
    css`
      span {
        transition-delay: .12s;
        transition-timing-function: cubic-bezier(.215,.61,.355,1);
        transform: rotate(45deg);
        
        &:before {
          top: 0;
          transition: top 75ms ease,opacity 75ms ease .12s;
          opacity: 0;
        }
        
        &:after {
          bottom: 0;
          transition: bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) .12s;
          transform: rotate(-90deg);
        }
      }
    `
  }
`;

export default () => (
  <Wrapper>
    <Row className="align-items-center">
      <Col className="col-xs-auto d-lg-none">
        <ButtonMenu flat/>
      </Col>
      <Col className="col-xs-auto">
        <Logo>
          <Link href="/">
            <a><img src="/static/logo-main.svg" alt="Lykke" width="115px"/></a>
          </Link>
        </Logo>
      </Col>
      <Col>
        <Nav>
          <Row className="align-items-center">
            <NavItem as={Col} active>
              <NavItemInner>
                <Link href="#">
                  <a><img src="/static/lykke_wallet_logo.svg" alt="Lykke" width="36px"/> Lykke Wallet</a>
                </Link>
              </NavItemInner>
            </NavItem>
            <NavItem as={Col}>
              <NavItemInner>
                <Link href="#">
                  <a target="_blank"><img src="/static/lykke_exchange_logo.svg" alt="Lykke" width="36px"/> Lykke Trade</a>
                </Link>
              </NavItemInner>
            </NavItem>
            <NavItem as={Col}>
              <NavItemInner>
                <Link href="#">
                  <a target="_blank">CBCS Magazine</a>
                </Link>
              </NavItemInner>
            </NavItem>
            <NavItem as={Col}>
              <NavItemInner dropdown>
                <Link href="#">
                  <a>About</a>
                </Link>
              </NavItemInner>
            </NavItem>
          </Row>
        </Nav>
      </Col>
    </Row>
  </Wrapper>
);
