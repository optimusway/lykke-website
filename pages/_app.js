import App, {Container} from 'next/app';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MarketList from '../components/MarketList';
import theme from '../theme';
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

const Layout = ({children}) => (
  <Wrapper>
    <MarketList />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);

export default class LykkeApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalFontFace />
          <GlobalStyle />
          <GlobalIcons />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ThemeProvider>
    );
  }
}
