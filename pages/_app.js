import App, {Container} from 'next/app';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MarketList from '../components/MarketList';
import theme from '../theme';
import * as config from '../config';
import styled from 'styled-components';

import GlobalFontFace from '../utils/font-face';
import GlobalIcons from '../utils/icons';
import GlobalStyle from '../utils/global';

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Main = styled.main`
  flex-grow: 1;

  @media all and (max-width: 991px) {
    padding-top: 58px;
  }
`;

const Layout = ({quotes, children}) => (
  <Wrapper>
    <MarketList quotes={quotes} />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);

const mapToProduct = x => ({
  ticker: x.AssetPair,
  price: x.LastPrice,
  change: x.PriceChange24H
});

export default class LykkeApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    let quotes = [];
    try {
      const resp = await fetch(`${config.BASE_API_URL}/markets`);
      const data = await resp.json();
      if (data) {
        for (let i = 0; i < config.PRODUCTS.length; i++) {
          const {ticker, name} = config.PRODUCTS[i];
          const idx = data.findIndex(x => x.AssetPair === ticker);
          if (idx > -1) {
            quotes.push({
              ...mapToProduct(data[idx]),
              name
            });
          }
        }
      }
    } catch (error) {
      console.error(error);
    }

    try {
      const resp = await fetch('http://localhost:3000/api/products/lyci');
      quotes.unshift(mapToProduct(await resp.json()));
    } catch (error) {
      console.error(error);
    }

    return {
      quotes,
      pageProps
    };
  }

  render() {
    const {Component, quotes, pageProps} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalFontFace />
          <GlobalStyle />
          <GlobalIcons />
          <Layout quotes={quotes}>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ThemeProvider>
    );
  }
}
