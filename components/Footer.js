import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {Grid,Row, Col} from 'react-styled-flexboxgrid';
import {rem} from 'polished';

import Apps from './Apps';

const Footer = styled.footer`
  flex-shrink: 0;
  padding-top: ${rem('25px')};
  padding-bottom: ${rem('25px')};
`;

const Top = styled.section`
  padding: ${rem('35px')} 0;
  border-top: 1px solid ${p => p.theme.colors.greyLight};
`;

const Bottom = styled.section`
  color: ${p => p.theme.colors.dark};
  padding: ${rem('20px')} 0;
  font-size:  ${rem('14px')};
  line-height: 1.43;
  border-top: 1px solid ${p => p.theme.colors.greyLight};
  border-bottom: 1px solid ${p => p.theme.colors.greyLight};

  a {
    color: ${p => p.theme.colors.grey};

    &:hover {
      color: ${p => p.theme.colors.slate};
    }
    
    + a {
      margin-left: ${rem('25px')};
    }
  }
`;

const Logo = styled.div`  
  padding: 0 ${rem('2px')};
  margin-bottom: ${rem('30px')};
`;

const ListWrapper = styled.div`  
  padding: ${rem('10px')} 0;
  margin-bottom: ${rem('25px')};
`;

const ListHeader = styled.h5`  
  padding: 0 ${rem('10px')};
`;

const List = styled.ul`  
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: ${rem('16px')};
  font-weight: 600;
  line-height: 1.56;
  color: ${p => p.theme.colors.greyBluey};
  
  a {
    color: ${p => p.theme.colors.greyBluey};
    padding: ${rem('5px')} ${rem('10px')};
    
    &:hover {
      color: ${p => p.theme.colors.primary};
    }
  }
  
  li + li {
    margin-top: ${rem('10px')};
  }
`;

export default () => (
  <Footer>
    <Grid>
      <Top>
        <Row>
          <Col lg={4}>
            <Logo>
              <Link href="/">
                <a><img src="/static/logo-main.svg" alt="Lykke" width="108px"/></a>
              </Link>
            </Logo>
            <Apps/>
          </Col>

          <Col lg={8}>
            <Row>
              <Col md={3}>
                <ListWrapper>
                  <ListHeader>Products</ListHeader>
                  <List>
                    <li>
                      <Link href="#"><a target="_blank">Lykke Wallet</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a target="_blank">Lykke Trade</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a target="_blank">Lykke Index</a></Link>
                    </li>
                  </List>
                </ListWrapper>
                <ListWrapper>
                  <ListHeader>For clients</ListHeader>
                  <List>
                    <li>
                      <Link href="#"><a>Tokens and coins</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Fees and limits</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Trading indicators</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Margin trading</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Blockchain explorer</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Public tradelog</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Apply for listing</a></Link>
                    </li>
                  </List>
                </ListWrapper>
              </Col>
              <Col md={3}>
                <ListWrapper>
                  <ListHeader>About</ListHeader>
                  <List>
                    <li>
                      <Link href="#"><a>Lykke team</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>News</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Invest</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Carreers</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>FAQ</a></Link>
                    </li>
                  </List>
                </ListWrapper>
                <ListWrapper>
                  <ListHeader>API</ListHeader>
                  <List>
                    <li>
                      <Link href="#"><a>API Fees and limits</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>API Deposits</a></Link>
                    </li>
                  </List>
                </ListWrapper>
              </Col>
              <Col md={3}>
                <ListWrapper>
                  <ListHeader>Get in touch</ListHeader>
                  <List>
                    <li>
                      <Link href="#"><a>Contacts</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Help Center</a></Link>
                    </li>
                  </List>
                </ListWrapper>
                <ListWrapper>
                  <ListHeader>Contribute</ListHeader>
                  <List>
                    <li>
                      <Link href="#"><a>Github</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Streams</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Careers</a></Link>
                    </li>
                  </List>
                </ListWrapper>
              </Col>
              <Col md={3}>
                <ListWrapper>
                  <ListHeader>Social</ListHeader>
                  <List>
                    <li>
                      <Link href="https://www.facebook.com/LykkeCity"><a target="_blank">Facebook</a></Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/lykke"><a target="_blank">Twitter</a></Link>
                    </li>
                    <li>
                      <Link href="http://instagram.com/lykkecity"><a target="_blank">Instagram</a></Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/c/LykkeX"><a target="_blank">Youtube</a></Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/company/lykke"><a target="_blank">LinkedIn</a></Link>
                    </li>
                    <li>
                      <Link href="https://www.reddit.com/r/lykke"><a target="_blank">Reddit</a></Link>
                    </li>
                    <li>
                      <Link href="https://t.co/TmjMYnQD7T"><a target="_blank">Telegram</a></Link>
                    </li>
                    <li>
                      <Link href="https://t.me/LykkeDev"><a target="_blank">Telegram DEV</a></Link>
                    </li>
                    <li>
                      <Link href="/cp/rss"><a target="_blank">RSS</a></Link>
                    </li>
                  </List>
                </ListWrapper>
              </Col>
            </Row>
          </Col>
        </Row>
      </Top>

      <Bottom>
        <Row className="justify-content-between">
          <Col>© 2018 Lykke, Inc.</Col>
          <Col className="text-right">
            <Link href="#">
              <a>Privacy Policy</a>
            </Link>
            <Link href="#">
              <a>Terms of Use</a>
            </Link>
          </Col>
        </Row>
      </Bottom>
    </Grid>
  </Footer>
);
