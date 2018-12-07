import React from 'react';
import styled, {css} from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import Button from '../Button'
import {rem} from 'polished';

import {social} from "../../utils/social";

export const Wrapper = styled.section`
  padding-top: ${rem('50px')};
  padding-bottom: ${rem('50px')};
`;

export const Card = styled.div`
  padding: ${rem('35px')} ${rem('25px')} ${rem('60px')};
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.boxShadow.card};
  border-radius: ${p => p.theme.corners.card};
  position: relative;
  
  > .icon {
    color: ${p => p.theme.colors.black};
    font-size: ${rem('20px')};
    margin-bottom: ${rem('20px')};
    padding: ${rem('5px')} ${rem('3px')};
  }
`;

export const Cards = styled.div`
  ${Card} {
    height: 100%;
  }
  
  > ${Row} {
    margin-left: ${rem('-20px')};
    margin-right: ${rem('-20px')};
    
    > ${Col} {
      padding-left: ${rem('20px')};
      padding-right: ${rem('20px')}
    }
  }
 
`;

export const CardTitle = styled.h4`
  font-size: ${rem('26px')};
  font-weight: bold;
  line-height: 1.35;
  margin-bottom: ${rem('7px')};
`;

export const CardText = styled.div`
  font-size: ${p => rem(p.theme.fontSize.lead)};
  font-stretch: normal;
  line-height: 1.67;
  color: ${p => p.theme.colors.grey};
  margin-bottom: ${rem('20px')};
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: ${rem('25px')};
  right: ${rem('25px')};
  min-height: ${rem('60px')};
  padding: ${rem('9px')} 0;

  ${(p) => p.border &&
  css`
      border-top: 2px solid ${p => p.theme.colors.greyLight};
    `
  }
  
  .btn {
    padding-left: 0;
    padding-right: 0;
  }
  
  form {
    input {
      border: 0;
      padding: ${rem('10px')} 0;
  
      &:focus {
        outline: none;
      }
    }
  }
`;

export const Social = styled.div`
  padding: ${rem('2px')} ${rem('20px')};
  text-align: center;

  a {
    font-size: ${rem('28px')};
    display: inline-block;
    vertical-align: middle;
    padding: ${rem('5px')};
    color: ${p => p.theme.colors.greyBluey};
    
    &:hover {
      color: ${p => p.theme.colors.dark};
    }
  }
`;

export default () => (
  <Wrapper>
    <Grid>
      <Cards>
        <Row>
          <Col sm={4}>
            <Card>
              <i className="icon icon--register"/>
              <CardTitle>Register</CardTitle>
              <CardText>Get your free account with Lykke</CardText>
              <CardFooter border>
                <Button className="btn" flat small href="#">Create free account</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <i className="icon icon--follow"/>
              <CardTitle>Follow us</CardTitle>
              <CardText>We like to stay in touch with our community.</CardText>
              <CardFooter>
                <Social>
                  <Row>
                    <Col xs={3}>
                      <a href={social.telegram.url} title={social.telegram.name} target="_blank">
                        <i className={"icon " + social.telegram.icon}/>
                      </a>
                    </Col>
                    <Col xs={3}>
                      <a href={social.twitter.url} title={social.twitter.name} target="_blank">
                        <i className={"icon " + social.twitter.icon}/>
                      </a>
                    </Col>
                    <Col xs={3}>
                      <a href={social.facebook.url} title={social.facebook.name} target="_blank">
                        <i className={"icon " + social.facebook.icon}/>
                      </a>
                    </Col>
                    <Col xs={3}>
                      <a href={social.instagram.url} title={social.instagram.name} target="_blank">
                        <i className={"icon " + social.instagram.icon}/>
                      </a>
                    </Col>
                  </Row>
                </Social>
              </CardFooter>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <i className="icon icon--newsletter"/>
              <CardTitle>SCBC Magazine</CardTitle>
              <CardText>Get our latest news right to your mailbox</CardText>
              <CardFooter border>
                <form>
                  <Row>
                    <Col xs={9}>
                      <input type="text" placeholder="Your email"/>
                    </Col>
                    <Col xs={3}>
                      <Button flat small block className="btn">Subscribe</Button>
                    </Col>
                  </Row>
                </form>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Cards>
    </Grid>
  </Wrapper>
);