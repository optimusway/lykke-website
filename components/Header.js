import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import HeaderAccount from './HeaderAccount';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {rem} from 'polished';

const Header = styled.header`
  flex-shrink: 0;
  padding-top: ${rem('22px')};
  padding-bottom: ${rem('22px')};
  z-index: 200;
  
  @media all and (max-width: 991px) {
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid ${p => p.theme.colors.greyLight};
    background-color: ${p => p.theme.colors.white};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  flex-shrink: 0;
`;

export default () => (
  <Header>
    <Wrapper as={Grid}>
      <Row className="justify-content-between align-items-center">
        <Col className="col-sm-auto">
          <Nav/>
        </Col>
        <Col className="col-sm-auto text-right d-none d-lg-block">
          <HeaderAccount />
        </Col>
      </Row>
    </Wrapper>
  </Header>
);
