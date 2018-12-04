import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Link from 'next/link';
import {Row, Col} from 'react-styled-flexboxgrid';

const Wrapper = styled.div`
  flex-shrink: 0;
`;

export default () => (
  <Wrapper>
    <Row className="justify-content-end">
      <Col>
        <Button flat href="/signup">Login</Button>
      </Col>
      <Col>
        <Button href="/signup">Get started</Button>
      </Col>
    </Row>
  </Wrapper>
);
