import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const HeaderAccount = styled.div`
  flex-shrink: 0;
`;

export default () => (
  <HeaderAccount>
    <Button flat href="/signup">Login</Button>
    <Button href="/signup">Get started</Button>
  </HeaderAccount>
);
