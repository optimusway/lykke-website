import React from 'react';

import Head from '../components/Head';
import Lead from '../components/LyCI/Lead'
import Invest from '../components/LyCI/Invest'
import Documentation from '../components/LyCI/Documentation'

const LyCI = () => (
  <>
    <Head
      title="Lykke – Buy and sell cryptocurrency and digital assets"
      description="Global marketplace for any kind of assets built on the top of blockchain technology"
    />

    <Lead/>
    <Invest/>
    <Documentation/>
  </>
);

export default LyCI;
