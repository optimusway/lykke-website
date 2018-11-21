import App, {Container} from 'next/app';
import {normalize} from 'polished';
import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import theme from '../theme';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html {
    font-size: ${p => `${p.theme.fontSize}px`};
  }
  
  body {
    background: ${p => p.theme.bg};
    font-family: ${p => p.theme.fonts.sans};
    font-size: 1rem;
    color: ${p => p.theme.colors.dark};
  }

  html, body, body > div {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Layout = ({children}) => (
  <Wrapper>
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
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ThemeProvider>
    );
  }
}
