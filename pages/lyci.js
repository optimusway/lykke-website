import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';

import Head from '../components/Head';
import Lead from '../components/LyCI/Lead';
import Invest from '../components/LyCI/Invest';
import Documentation from '../components/LyCI/Documentation';

import {SELF_URL} from '../config';
import {mapToProduct} from '../components/MarketList';

class LyCI extends Component {
  state = {
    lyci: {}
  };

  componentDidMount() {
    fetch(`${SELF_URL}/api/products/lyci`)
      .then(r => r.json())
      .then(json => {
        this.setState({
          lyci: {
            ...mapToProduct(json),
            weights: json.Weights
          }
        });
      });
  }

  render() {
    const {lyci} = this.state;
    return (
      <>
        <Head
          title="Lykke – Buy and sell cryptocurrency and digital assets"
          description="Global marketplace for any kind of assets built on the top of blockchain technology"
        />
        <Lead lyci={lyci} />
        <Invest />
        {lyci && <Documentation lyci={lyci} />}
      </>
    );
  }
}

export default LyCI;
