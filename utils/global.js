import {createGlobalStyle} from 'styled-components';
import {rem, normalize} from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()}; 
  
  html {
    font-size: ${p => p.theme.fontSize.primary};
  }
  
  body {
    font-family: ${p => p.theme.fonts.primary};
    font-size: 1rem;
    line-height: 1.56;
    color: ${p => p.theme.colors.black};
    background-color: ${p => p.theme.colors.white};
    -webkit-font-smoothing: antialiased;
    
    * {
      box-sizing: border-box;
    }
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
  
  a {
    text-decoration: none;
    color: inherit;
    transition: color ${p => p.theme.transition.primary};
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
  
  h2, .h2 {
    font-size: ${p => rem(p.theme.fontSize.h2)};
  }
  
  h3, .h3 {
    font-size: ${p => rem(p.theme.fontSize.h3)};
    line-height: normal;
    margin-bottom: ${rem('24px')};
  }
  
  h4, .h4 {
    font-size: ${p => rem(p.theme.fontSize.h4)};
  }
  
  h5, .h5 {
    font-size: ${p => rem(p.theme.fontSize.h5)};
    font-weight: 600;
    line-height: 1.33;
    margin: 0 0 ${rem('12px')};;
  }
  
  .lead {
    color: ${p => p.theme.colors.grey};
    font-size: ${p => rem(p.theme.fontSize.lead)};
  } 
  
  .text-grey {
    color: ${p => p.theme.colors.grey};
  } 
  
  .justify-content-between {
    justify-content: space-between!important;
  }
    
  .justify-content-end {
    justify-content: flex-end!important;
  }
  
  .align-items-center {
    align-items: center!important;
  }
  
  .text-right {
    text-align: right;
  }
  
  .text-center {
    text-align: center;
  }
  
  .clear-height {
    line-height: 0;
  }
`;

export default GlobalStyle;
