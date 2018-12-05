import React from 'react';
import styled, {css} from 'styled-components';
import {Col, Row} from 'react-styled-flexboxgrid';
import {rem, placeholder} from 'polished';

export const Section = styled.section`
  padding-top: ${rem('80px')};
  padding-bottom: ${rem('80px')};
  
  ${(p) => p.lead &&
    css`
      padding-top: ${rem('80px')};
      padding-bottom: 0;
      
      h1 {
        margin-top: ${rem('6px')};
        margin-bottom: ${rem('18px')};
      }
      
      .lead {
        margin-bottom: ${rem('70px')};
      }
    `
  }
  
  ${(p) => p.nopadding &&
    css`
      padding: 0;
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
  margin-bottom: ${rem('40px')};
  
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

export const LeadImage = styled.div`
  margin: -148px 0 -8px -80px;
  position: relative;
  z-index: -1;
  pointer-events: none;
  user-select: none;
`;

export const Features = styled.div`
  ${Row} {
    margin-left: ${rem('-20px')};
    margin-right: ${rem('-20px')};
  }
  
  ${Col} {
    padding-left: ${rem('20px')};
    padding-right: ${rem('20px')}
  }
`;

export const FeatureItem = styled.div`
  text-align: center;
  position: relative;
  box-shadow: ${p => p.theme.boxShadow.light};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.corners.secondary};
  padding: ${rem('42px')} ${rem('50px')} ${rem('30px')};
  margin-bottom: ${rem('20px')};
`;

export const FeatureItemIcon = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: ${rem('-35px')};
  width: ${rem('70px')};
  pointer-events: none;
  user-select: none;
  
  img {
    width: 100%;
  }
`;

export const FeatureItemTitle = styled.h4`
  margin: 0;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  font-family: ${p => p.theme.fonts.headings};
  font-size: ${rem('20px')};
  font-weight: 600;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.corners.round};
  border: 1px solid ${p => p.theme.colors.primary};
  padding: ${rem('13px')} ${rem('40px')} ${rem('15px')};
  width: 100%;
  height: ${rem('54px')};
  appearance: none;
  
  &:focus {
    outline: none;
  } 
  
   ${placeholder({'color': '#8c94a0'})};
`;


export const FormSubscribe = styled.form`
  width: 590px;
  max-width: 100%;
  
  ${Row} {
    margin: 0;
  }
  
  ${Col} {
    padding: 0;
  }
  
  ${Input} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: ${rem('16px')} ${rem('25px')};
  }
`;

export const Disclaimer = styled.div`
  font-size: ${rem('14px')};
  line-height: 1.43;
  color: ${p => p.theme.colors.grey};
  
  ${Row} {
    margin-left: ${rem('-20px')};
    margin-right: ${rem('-20px')};
  }
  
  ${Col} {
    padding-left: ${rem('20px')};
    padding-right: ${rem('20px')}
  }
  
  p {
    margin-bottom: .63rem;
    
    a {
      font-weight: 600;
      text-decoration: underline;
      
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export const Card = styled.div`
  padding: ${rem('35px')} ${rem('25px')} ${rem('60px')};
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.boxShadow.card};
  border-radius: ${p => p.theme.corners.card};
  position: relative;
  
  > .icon {
    color: ${p => p.theme.colors.black};
    font-size: ${rem('20px')};
    margin-bottom: ${rem('20px')};
    padding: ${rem('5px')} ${rem('3px')};
  }
`;

export const Cards = styled.div`
  ${Card} {
    height: 100%;
  }
  
  > ${Row} {
    margin-left: ${rem('-20px')};
    margin-right: ${rem('-20px')};
    
    > ${Col} {
      padding-left: ${rem('20px')};
      padding-right: ${rem('20px')}
    }
  }
 
`;

export const CardTitle = styled.h4`
  font-size: ${rem('26px')};
  font-weight: bold;
  line-height: 1.35;
  margin-bottom: ${rem('7px')};
`;

export const CardText = styled.div`
  font-size: ${p => rem(p.theme.fontSize.lead)};
  font-stretch: normal;
  line-height: 1.67;
  color: ${p => p.theme.colors.grey};
  margin-bottom: ${rem('20px')};
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: ${rem('25px')};
  right: ${rem('25px')};
  min-height: ${rem('60px')};
  padding: ${rem('9px')} 0;

  ${(p) => p.border &&
    css`
      border-top: 2px solid ${p => p.theme.colors.greyLight};
    `
  }
  
  .btn {
    padding-left: 0;
  }
`;

export const Social = styled.div`
  padding: ${rem('2px')} ${rem('20px')};
  text-align: center;

  a {
    font-size: ${rem('28px')};
    display: inline-block;
    vertical-align: middle;
    padding: ${rem('5px')};
    color: ${p => p.theme.colors.greyBluey};
    
    &:hover {
      color: ${p => p.theme.colors.dark};
    }
  }
`;