import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import Button from '../Button';
import config from '../../config';

import {Section, SectionHeader, SectionLink} from './styled';

export const AccentText = styled.div``;

export default () => (
  <Section grey>
    <Grid className="container">
      <SectionHeader>
        <h3>Join the voices of the future of finance</h3>
      </SectionHeader>

      <SectionLink>
        <Button href={config.WALLET_URL}>Sign up</Button>
      </SectionLink>
    </Grid>
  </Section>
);
