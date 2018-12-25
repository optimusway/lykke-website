import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import Button from '../Button'

import {
  Lead,
  InputGroup,
  Input,
  FormSubscribe
} from '../Home/Lead'

export const Image = styled.div`
  position: relative;
  pointer-events: none;
  user-select: none;
  text-align: right;
  margin: -20px 0 100px 0;
  padding-left: 40px;
  
  img {
    max-width: 100%;
  }
  
  @media all and (max-width: 767px) {
    padding-left: 0;
    margin: 20px 0 50px 0;
  }
`;

export default () => (
  <Lead>
    <Grid className="container">
      <Row>
        <Col xs={12} sm={7} md={6}>
          <h1>Secure and trusted platform for pro traders.</h1>
          <p className="lead">
            Buy and sell FX, crypto and other digital assets on our Swiss based exchange.
          </p>
          <FormSubscribe>
            <Row>
              <Col xs={12} sm={8} lg={9}>
                <InputGroup>
                  <Input typ  e="email" placeholder="Enter your Email to get started"/>
                </InputGroup>
              </Col>
              <Col xs={12} sm={4} lg={3}>
                <Button block>Get Started</Button>
              </Col>
            </Row>
          </FormSubscribe>
        </Col>
        <Col xs={12} sm={5} md={6}>
          <Image>
            <img src="/static/images/hero-trade.svg" width={567} />
          </Image>
        </Col>
      </Row>
    </Grid>
  </Lead>
);