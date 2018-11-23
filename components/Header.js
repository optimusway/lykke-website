import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import HeaderAccount from './HeaderAccount';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {rem} from 'polished';

const Header = styled.header`
  flex-shrink: 0;
`;

const Wrapper = styled.div`
  flex-shrink: 0;
  padding: ${rem('20px')} 0;
`;

export default () => (
  <Header>
    <Wrapper as={Grid}>
      <Row className="justify-content-between">
        <Col sm={9}>
          <Nav/>
        </Col>
        <Col sm={3} className="text-right">
          <HeaderAccount />
        </Col>
      </Row>
    </Wrapper>
  </Header>
);
