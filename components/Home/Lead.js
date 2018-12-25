import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {placeholder,rem} from 'polished';
import Button from '../Button'

export const Lead = styled.section`
  padding-top: ${rem('80px')};
  padding-bottom: ${rem('40px')};
  position: relative;
  
  h1 {
    margin-bottom: ${rem('18px')};
  }
  
  .lead {
    margin-bottom: ${rem('70px')};
  }
    
  @media all and (max-width: 767px) {
    padding-top: 40px;
    padding-bottom: 120px;
    text-align: center;
    
    h1 {
      margin-top: 0;
      margin-bottom: 7px;
    }
    
    .lead {
      margin-bottom: ${rem('10px')};
    }
  }
  
  @media all and (max-width: 420px) {
    padding-top: 10px;
  }
`;

export const Image = styled.div`
  margin: -148px 0 -8px -80px;
  position: relative;
  z-index: -1;
  pointer-events: none;
  user-select: none;
  
  @media all and (max-width: 767px) {
    margin: 0 0 0 -265px;
    
    img {
      max-width: 100%;
    }
  }
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
 
  
  button {
    width: 100%;
    padding: ${rem('18px')} ${rem('25px')};
    height: ${rem('54px')};
  }
  
  @media all and (max-width: 767px) {
    position: absolute;
    bottom: 0;
    padding: 0 15px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 360px;
    max-width: 100%;
    
    button {
      box-shadow: 0 4px 15px 0 rgba(25, 112, 236, 0.5);
    }
    
    ${Input} {
      text-align: center;
    }
    
    ${InputGroup} {
      margin-bottom: 12px;
    }
  }
  
  @media all and (min-width: 768px) {
    box-shadow: 0 4px 15px 0 rgba(25, 112, 236, 0.5);
    border-radius: ${p => p.theme.corners.round};
    
    ${Input} {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    
    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export default () => (
  <Lead>
    <Grid className="container">
      <Row>
        <Col xs={12} sm={7} md={6}>
          <h1>Become a <br className="d-md-none"/> Bitcoin&nbsp;owner</h1>
          <p className="lead">
            <span className="d-none d-md-block">Lykke is the easiest and secure way to buy, exchange and sell cryptos.</span>
            <b>No hidden costs. Swiss quality</b>.
          </p>
          <FormSubscribe>
            <Row>
              <Col xs={12} sm={8} lg={9}>
                <InputGroup>
                  <Input type="email" placeholder="Enter your Email to get started"/>
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
           <img src="/static/images/hero-mobile.jpg" width={411} className="d-md-none" />
            <img src="/static/images/hero.jpg" width={778} className="d-none d-md-block" />
          </Image>
        </Col>
      </Row>
    </Grid>
  </Lead>
);