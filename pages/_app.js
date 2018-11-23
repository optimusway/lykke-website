import App, {Container} from 'next/app';
import {rem, normalize} from 'polished';
import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import theme from '../theme';
import styled from 'styled-components';
import GlobalFontFace from '../utils/font-face';

const GlobalStyle = createGlobalStyle`
  ${normalize()}; 
  
  html {
    font-size: ${p => `${p.theme.fontSize.primary}`};
  }
  
  body {
    font-family: ${p => p.theme.fonts.primary};
    font-size: 1rem;
    line-height: 1.56;
    color: ${p => p.theme.colors.black};
    background-color: ${p => p.theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }
  
  p, ul, ol {
    margin-top: 0;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
    margin-bottom: 1rem;
  }
  
  b, strong {
    font-weight: bold;
  }
  
  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4 {
    font-family: ${p => p.theme.fonts.headings};
    font-weight: 600;
    margin-top: 0;
  }
  
  h1, .h1 {
    font-size: ${p => rem(p.theme.fontSize.h1)};
    line-height: 1.2;
    margin-bottom: ${rem('24px')};
  }
  
  .lead {
    color: ${p => p.theme.colors.grey};
  } 
  
  .justify-content-between {
    justify-content: space-between!important;
  }
  
  .align-items-center {
    align-items: center!important;
  }
  
  .text-right {
    text-align: right;
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
          <GlobalFontFace />
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ThemeProvider>
    );
  }
}
