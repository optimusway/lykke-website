import React from 'react';
import Link from 'next/link';
import {Row, Col} from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import {rem} from "polished/lib/index";

const Nav = styled.nav`
  background-color: ${p => p.theme.colors.white};
  min-height: 3em;
`;

const Logo = styled.div`
  line-height: ${rem('60px')};
  
  img {
    display: inline-block;
    vertical-align: middle;
  }
`;

export default () => (
  <Nav>
    <Row className="align-items-center">
      <Col>
        <Logo>
          <Link href="/">
            <a><img src="/static/logo-main.svg" alt="Lykke" width="143px"/></a>
          </Link>
        </Logo>
      </Col>
      <Col>
        <Link href="/signin">
          <a>Lykke Wallet</a>
        </Link>
      </Col>
      <Col>
        <Link href="/signup">
          <a>Lykke Trade</a>
        </Link>
      </Col>
      <Col>
        <Link href="/signup">
          <a>CBCS Magazine</a>
        </Link>
      </Col>
      <Col>
        <Link href="/signup">
          <a>About</a>
        </Link>
      </Col>
    </Row>
  </Nav>
);
