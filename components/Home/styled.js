import React from 'react';
import styled, {css} from 'styled-components';
import {Col, Row} from 'react-styled-flexboxgrid';
import {rem, placeholder} from 'polished';

export const Section = styled.section`
  padding-top: ${rem('80px')};
  padding-bottom: ${rem('80px')};
  
  @media all and (max-width: 767px) {
    padding-top: 70px;
    padding-bottom: 40px;
  }
  
  ${(p) => p.nopadding &&
    css`
      padding: 0 !important;
    `
  }
  
  ${(p) => p.small &&
    css`
      padding-top: ${rem('50px')};
      padding-bottom: ${rem('50px')};
    `
  }
  
  ${(p) => p.grey &&
    css`
      background-color: ${p => p.theme.colors.greyPale};
    `
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  width: ${rem('800px')};
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem('42px')};
  
  p {
    width: ${rem('590px')};
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    color: ${p => p.theme.colors.grey};
  }
`;

export const SectionLink = styled.div`
  text-align: center;
  
  >button, >a {
    width: 100%;
    max-width: 335px;
  }
`;