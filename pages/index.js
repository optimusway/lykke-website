import React from 'react';
import fetch from 'isomorphic-unfetch';

import Head from '../components/Head';
import Lead from '../components/Home/Lead';
import Chips from '../components/Home/Chips';
import Features from '../components/Home/Features';
import Actions from '../components/Home/Actions';
import Disclaimer from '../components/Home/Disclaimer';
import LykkeIndex from '../components/Home/LykkeIndex';
import News from '../components/Home/News';
import Team from '../components/Home/Team';

const Home = ({posts}) => (
  <>
    <Head
      title="Lykke – Buy and sell cryptocurrency and digital assets"
      description="Global marketplace for any kind of assets built on the top of blockchain technology"
    />
    <Lead />
    <Chips />
    <Features />
    <LykkeIndex />
    <News posts={posts} />
    <Team />

    <Actions />
    <Disclaimer />
  </>
);

Home.getInitialProps = async () => {
  const resp = await fetch('http://localhost:3000/api/posts');
  const data = await resp.json();
  return {
    posts: data.items.slice(0, 3)
  };
};

export default Home;
