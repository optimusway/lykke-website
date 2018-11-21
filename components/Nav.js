import React from 'react';
import Link from 'next/link';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${p => p.theme.bg};
  min-height: 3em;
`;

export default () => (
  <Nav as={Grid}>
    <Row>
      <Col lg={10}>
        <Link prefetch href="/">
          <a>Lykke</a>
        </Link>
      </Col>
      <Col lg={1}>
        <Link href="/signin">
          <a>Sign in</a>
        </Link>
      </Col>
      <Col lg={1}>
        <Link href="/signup">
          <a>Get started</a>
        </Link>
      </Col>
    </Row>
  </Nav>
);
