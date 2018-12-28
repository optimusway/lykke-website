import React, {Component} from 'react';
import Link from './Link';
import {Row, Col} from 'react-styled-flexboxgrid';
import styled, {css} from 'styled-components';
import {isBrowser} from 'react-device-detect';
import Button from './Button';
import HeaderAccount from './HeaderAccount';
import NextLink from 'next/link';

import {rem} from 'polished/lib/index';

const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.transparent};
`;

const Nav = styled.nav`
  @media all and (max-width: 991px) {
    position: fixed;
    left: 0;
    top: 59px;
    right: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    z-index: 220;
    background-color: ${p => p.theme.colors.white};
    transition: height ${p => p.theme.transition.primary},
      visibility ${p => p.theme.transition.primary};

    .align-items-center {
      margin: 0;
    }

    ${p =>
      p.show &&
      css`
        visibility: visible;
        height: calc(100% - 58px);
      `}
  }
`;

const NavInner = styled.nav`
  @media all and (max-width: 991px) {
    padding: 30px 16px;
    overflow: auto;
    height: 100%;
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
    transition: width ${p => p.theme.transition.primary};

    img {
      margin-top: 0;
      width: 94px;
    }

    .menu-opened & {
      width: 94px;
    }
  }
`;

const AccountContainer = styled.div`
  width: 320px;
  max-width: 100%;
  text-align: center;
  margin-top: 40px;

  .justify-content-end {
    justify-content: flex-start !important;
    flex-direction: column-reverse;

    > div {
      flex: 0 0 100%;
    }

    a[role='button'] {
      width: 100%;
      padding: 19px;
      margin-bottom: 20px;
    }
  }

  @media all and (max-width: 991px) {
    &.d-md-none {
      display: block !important;
    }
  }
`;

const NavItemInner = styled.div`
  font-weight: 600;
  font-size: ${rem('14px')};
  text-transform: uppercase;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: ${rem('20px')};
  min-width: ${rem('205px')};
  border-radius: ${rem('8px')};
  box-shadow: 0 0 17px 0 rgba(0, 0, 0, 0.11);
  background-color: ${p => p.theme.colors.white};
  opacity: 0;
  visibility: hidden;
  transform: translate3d(0, -10px, 0);
  transition: all ${p => p.theme.transition.primary};

  @media all and (max-width: 991px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding-left: ${rem('4px')};
  padding-right: ${rem('4px')};
  position: relative;

  a {
    display: block;
    color: inherit;
    text-decoration: none;
    padding: ${rem('20px 20px 18px 14px')};
    border: 1px solid transparent;
    border-radius: ${p => p.theme.corners.primary};
    transition: all ${p => p.theme.transition.primary};

    img {
      display: inline-block;
      vertical-align: middle;
      margin: ${rem('-12px')} ${rem('5px')} ${rem('-10px')} 0;
    }

    &:hover {
      color: ${p => p.theme.colors.grey};
    }

    &.active {
      color: ${p => p.theme.colors.primary};
      border-color: ${p => p.theme.colors.primary};

      &:hover {
        color: ${p => p.theme.colors.primary};
      }
    }

    @media all and (max-width: 991px) {
      display: inline-block;
    }
  }

  ${p =>
    p.dropdown &&
    css`
      &:hover,
      &:focus {
        ${DropdownMenu} {
          opacity: 1;
          visibility: visible;
          transform: translate3d(0, 0, 0);
        }
      }
    `}

  @media all and (max-width: 991px) {
    flex: none;
    width: 100%;
    padding: 0;
  }
`;

const DropdownMenuInner = styled.div`
  padding: ${rem('12px 0px')};
`;

const DropdownItem = styled.div`
  a {
    font-size: ${rem('16px')};
    padding: ${rem('12px 22px')};
    letter-spacing: -0.2px;
    line-height: normal;
    display: block;

    &:hover {
      color: ${p => p.theme.colors.grey};
    }
  }
`;

const ButtonMenu = styled(Button)`
  padding: 4px;
  width: 24px;
  height: 24px;

  span {
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition-duration: 75ms;
    top: 50%;
    display: block;
    margin-top: -1px;

    &,
    &:after,
    &:before {
      position: absolute;
      width: 18px;
      height: 2px;
      border-radius: 4px;
      background-color: ${p => p.theme.colors.primary};
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &:before,
    &:after {
      display: block;
      content: '';
    }

    &:before {
      top: -5px;
      transition: top 75ms ease 0.12s, opacity 75ms ease;
    }

    &:after {
      bottom: -5px;
      transition: bottom 75ms ease 0.12s,
        transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  ${p =>
    p.active &&
    css`
      span {
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: rotate(45deg);

        &:before {
          top: 0;
          transition: top 75ms ease, opacity 75ms ease 0.12s;
          opacity: 0;
        }

        &:after {
          bottom: 0;
          transition: bottom 75ms ease,
            transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
          transform: rotate(-90deg);
        }
      }
    `}
`;

const Caret = styled.span`
  &:after {
    display: inline-block;
    margin-left: ${rem('10px')};
    vertical-align: middle;
    position: relative;
    top: -1px;
    content: '';
    border-top: 0.4em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;

    @media all and (max-width: 991px) {
      display: none;
    }
  }
`;

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.openMenu = this.openMenu.bind(this);

    this.state = {
      isOpen: false
    };
  }

  openMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });

    document.body.classList.toggle('menu-opened');
  }

  render() {
    return (
      <Wrapper>
        <Row className="align-items-center">
          <Col className="col-xs-auto d-lg-none">
            <ButtonMenu
              flat
              onClick={this.openMenu}
              active={this.state.isOpen}
            />
          </Col>
          <Col className="col-xs-auto">
            <Logo>
              <Link href="/">
                <a>
                  <img src="/static/logo-main.svg" alt="Lykke" width="115px" />
                </a>
              </Link>
            </Logo>
          </Col>
          <Col>
            <Nav show={this.state.isOpen}>
              <NavInner>
                <Row className="align-items-center">
                  <NavItem as={Col}>
                    <NavItemInner>
                      <Link prefetch activeClassName="active" href="/">
                        <a>
                          <img
                            src="/static/lykke_wallet_logo.svg"
                            alt="Lykke"
                            width="36px"
                          />{' '}
                          Lykke Wallet
                        </a>
                      </Link>
                    </NavItemInner>
                  </NavItem>
                  <NavItem as={Col}>
                    <NavItemInner>
                      <Link prefetch activeClassName="active" href="/trade">
                        <a>
                          <img
                            src="/static/lykke_exchange_logo.svg"
                            alt="Lykke"
                            width="36px"
                          />{' '}
                          Lykke Trade
                        </a>
                      </Link>
                    </NavItemInner>
                  </NavItem>
                  <NavItem as={Col}>
                    <NavItemInner>
                      <Link href="https://medium.com/scbc-magazine">
                        <a target="_blank">CBCS Magazine</a>
                      </Link>
                    </NavItemInner>
                  </NavItem>
                  <NavItem as={Col} dropdown>
                    <NavItemInner>
                      <Link href="#">
                        <a>
                          About
                          {isBrowser && <Caret />}
                        </a>
                      </Link>
                    </NavItemInner>

                    {isBrowser && (
                      <DropdownMenu>
                        <DropdownMenuInner>
                          <DropdownItem>
                            <Link href="/leadership">
                              <a>Lykke Team</a>
                            </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <NextLink href="/lyci">
                              <a>About Lykke Index</a>
                            </NextLink>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href="/city/invest">
                              <a>Invest</a>
                            </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href="/company/news">
                              <a>News</a>
                            </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href="/career_in_lykke">
                              <a>Careers</a>
                            </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href="/city/faq">
                              <a>FAQ</a>
                            </Link>
                          </DropdownItem>
                        </DropdownMenuInner>
                      </DropdownMenu>
                    )}
                  </NavItem>
                </Row>

                <AccountContainer className="d-md-none">
                  <HeaderAccount />
                </AccountContainer>
              </NavInner>
            </Nav>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}
