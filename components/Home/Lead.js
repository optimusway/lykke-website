import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import Button from '../Button'
import {placeholder,rem} from 'polished';

export const Lead = styled.section`
  padding-top: ${rem('80px')};
  padding-bottom: 0;
  
  h1 {
    margin-top: ${rem('6px')};
    margin-bottom: ${rem('18px')};
  }
  
  .lead {
    margin-bottom: ${rem('70px')};
  }
`;

export const Image = styled.div`
  margin: -148px 0 -8px -80px;
  position: relative;
  z-index: -1;
  pointer-events: none;
  user-select: none;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  font-family: ${p => p.theme.fonts.headings};
  font-size: ${rem('20px')};
  font-weight: 600;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.corners.round};
  border: 1px solid ${p => p.theme.colors.primary};
  padding: ${rem('13px')} ${rem('40px')} ${rem('15px')};
  width: 100%;
  height: ${rem('54px')};
  appearance: none;
  
  &:focus {
    outline: none;
  } 
  
   ${placeholder({'color': '#8c94a0'})};
`;


export const FormSubscribe = styled.form`
  width: 590px;
  max-width: 100%;
  
  ${Row} {
    margin: 0;
  }
  
  ${Col} {
    padding: 0;
  }
  
  ${Input} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: ${rem('16px')} ${rem('25px')};
  }
`;

export default () => (
  <Lead>
    <Grid>
      <Row>
        <Col md={6}>
          <h1>Become a Bitcoin owner</h1>
          <p className="lead">
            Lykke is the easiest and secure way to buy, exchange and sell cryptos.<br/>
            <b>No hidden costs. Swiss quality</b>.
          </p>
          <FormSubscribe>
            <Row>
              <Col xs={9}>
                <InputGroup>
                  <Input typ  e="email" placeholder="Enter your Email to get started"/>
                </InputGroup>
              </Col>
              <Col xs={3}>
                <Button block>Get Started</Button>
              </Col>
            </Row>
          </FormSubscribe>
        </Col>
        <Col md={6}>
          <Image>
            <img src="/static/images/hero.jpg" width={778} />
          </Image>
        </Col>
      </Row>
    </Grid>
  </Lead>
);