import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {Row, Col} from 'react-styled-flexboxgrid';

const Wrapper = styled.div`  
  width: 355px;
  max-width: 100%;
  margin-bottom: 25px;
`;

const AppItem = styled.div`
  font-size: 0;
  line-height: 0;
  
  img {
    width: 100%;
  }
`;

export default () => (
  <Wrapper>
    <Row>
      <Col xs={6}>
        <AppItem>
          <Link href="https://appsto.re/ru/Dwjvcb.i">
            <a target="_blank">
              <img src="/static/appstore.svg" width="170px" alt="apps_apple"/>
            </a>
          </Link>
        </AppItem>
      </Col>
      <Col xs={6}>
        <AppItem>
          <Link href="https://play.google.com/store/apps/details?id=com.lykkex.LykkeWallet">
            <a target="_blank">
              <img src="/static/google-play.svg" width="170px" alt="apps_google"/>
            </a>
          </Link>
        </AppItem>
      </Col>
    </Row>
  </Wrapper>
);
