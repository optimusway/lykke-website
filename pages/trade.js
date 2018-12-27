import React from 'react';
import styled from 'styled-components';

import Head from '../components/Head';
import Actions from '../components/Home/Actions';
import Disclaimer from '../components/Home/Disclaimer';
import LykkeIndex from '../components/Home/LykkeIndex';
import News from '../components/Home/News';
import Team from '../components/Home/Team';

import Lead from '../components/Trade/Lead';
import Chips from '../components/Trade/Chips';
import Features from '../components/Trade/Features';

import {SectionHeader} from '../components/Home/styled';

export const Dark = styled.div`
  background-color: ${p => p.theme.colors.inverse};
  color: ${p => p.theme.colors.white};

  ${SectionHeader} p,
  .lead {
    color: ${p => p.theme.colors.greyBluey};
  }
`;

const Trade = () => (
  <>
    <Head
      title="Lykke – Buy and sell cryptocurrency and digital assets"
      description="Global marketplace for any kind of assets built on the top of blockchain technology"
    />
    <Dark>
      <Lead />
      <Chips />
      <Features />
    </Dark>
    <LykkeIndex />
    <News />
    <Team />

    <Actions />
    <Disclaimer />
  </>
);

export default Trade;
