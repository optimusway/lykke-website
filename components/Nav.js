import React from 'react';
import Link from 'next/link';
import {Row, Col} from 'react-styled-flexboxgrid';
import styled, {css} from 'styled-components';

import {rem} from "polished/lib/index";

const Nav = styled.nav`
  background-color: ${p => p.theme.colors.transparent};
`;

const Logo = styled.div`  
  margin-right: ${rem('14px')};
  
  img {
    display: inline-block;
    vertical-align: middle;
    margin-top: -1px;
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
      color: ${p => p.theme.colors.primary};
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
      }
    `
  }
`;

export default () => (
  <Nav>
    <Row className="align-items-center">
      <Col>
        <Logo>
          <Link href="/">
            <a><img src="/static/logo-main.svg" alt="Lykke" width="115px"/></a>
          </Link>
        </Logo>
      </Col>
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
);
