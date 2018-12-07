import React from 'react';

import Head from '../components/Head';
import Lead from '../components/Home/Lead'
import Chips from '../components/Home/Chips'
import Features from '../components/Home/Features'
import Actions from '../components/Home/Actions'
import Disclaimer from '../components/Home/Disclaimer'
import LykkeIndex from '../components/Home/LykkeIndex'
import News from '../components/Home/News'
import Team from '../components/Home/Team'

const Home = () => (
  <>
    <Head
      title="Lykke – Buy and sell cryptocurrency and digital assets"
      description="Global marketplace for any kind of assets built on the top of blockchain technology"
    />

    <Lead />
    <Chips />
    <Features />
    <LykkeIndex />
    <News />
    <Team />

    <Actions />
    <Disclaimer />
  </>
);

export default Home;
