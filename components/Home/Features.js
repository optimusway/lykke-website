import React from 'react';
import styled, {css} from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import Button from '../Button'
import {rem} from 'polished';

import {
  Section,
  SectionHeader,
  SectionLink,
} from './styled'

export const AccordionTitle = styled.h4`
  line-height: normal;
  margin-top: ${rem('6px')};
  margin-bottom: 0;
  color: inherit;
  transition: all ${p => p.theme.transition.primary};
  color: ${p => p.theme.colors.black};

  @media all and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const Accordion = styled.div`
  margin-top: ${rem('98px')};
  margin-bottom: ${rem('40px')};

  @media all and (max-width: 767px) {
    margin-top: 0;
  }
`;

export const AccordionContent = styled.div`
  overflow: hidden;
  margin-top: ${rem('-5px')};
  padding-right: ${rem('20px')};
`;

export const AccordionText = styled.div`
  font-size: ${rem('14px')};
  color: ${p => p.theme.colors.grey};
  line-height: 1.36;
  
  @media all and (min-width: 768px) {
    display: none;
  }
`;

export const AccordionItem = styled.div`
  overflow: hidden;
  position: relative;
  margin-bottom: 83px;

  &:last-child {
    margin-bottom: 30px;
  }
  
  @media all and (min-width: 768px) {
    cursor: pointer;
    margin-bottom: -2px;
    padding: ${rem('24px')} ${rem('30px')};
    border: 1px solid #e0e0e0;
    background-color: ${p => p.theme.colors.white};
    transition: all ${p => p.theme.transition.primary};
  
    &:first-child {
      border-radius: ${p => p.theme.corners.primary} ${p => p.theme.corners.primary} 0 0;
    }
    
    &:last-child {
      border-radius: 0 0 ${p => p.theme.corners.primary} ${p => p.theme.corners.primary};
    }
    
    &:hover {
      ${AccordionTitle} {
        color: ${p => p.theme.colors.grey};
      }
    }
  
    ${p => p.active &&
      css`
          z-index: 2;
          cursor: default;
          padding-top: ${rem('25px')};
          padding-bottom: ${rem('25px')};
          box-shadow: 0 0 17px 0 rgba(0, 0, 0, 0.2);
          border-color: ${p => p.theme.colors.primary};
          border-radius: ${p => p.theme.corners.primary} !important;
          
          ${AccordionText} {
            display: block;
          } 
          
          ${AccordionTitle} {
            margin-top: 0;
            margin-bottom: ${rem('15px')};
            color: ${p => p.theme.colors.primary} !important;
          }
          
          ${AccordionIcon} {
            svg path {
              fill: ${p => p.theme.colors.primary}
            }
          }
          `
      }
    }
`;

export const AccordionIcon = styled.div`
  width: ${rem('50px')};
  height: ${rem('35px')};
  margin-right: ${rem('24px')};
  font-size: 0;
  line-height: 0;
  float: left;
 
  img {
    max-width: 100%;
  }
  
  svg path {
    fill: ${p => p.theme.colors.primary}
  }
  
  @media all and (max-width: 767px) {
    padding: 8px 20px;
    width: 92px;
    margin-right: 8px;
  }
  
  @media all and (min-width: 768px) {
    svg path {
      fill: ${p => p.theme.colors.dark}
    }
  }
`;

export const TabSlider = styled.div`
  padding-top: ${rem('60px')};
  
  @media all and (max-width: 767px) {
    padding-top: 0;
  }
`;

export const AccordionImage = styled.div`
  text-align: center;
  
  img {
    max-width: 100%;
  }
`;

export const SliderImages = styled.div`
  margin: -10px 0 73px 70px;
`;

export default () => (
  <Section>
    <Grid className="container">
      <SectionHeader>
        <h3>Everything you need. Right where you need it.</h3>
        <p>
          The Lykke Wallet is packed with simple yet powerful
          features to give you everything you need to secure your future in digital assets.
        </p>
      </SectionHeader>

      <TabSlider>
        <Row>
          <Col xs={12} sm={6} md={6}>
            <Accordion>
              <AccordionItem active>
                <AccordionImage className="d-md-none">
                  <img src="/static/images/feature-01-mobile.png" alt="" width="303px"/>
                </AccordionImage>
                <AccordionIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="32"><path fill="#0388EF" d="M17.361 0c-1.117 0-2.105.558-2.742 1.403a6.138 6.138 0 0 0-1.609-.59 4.813 4.813 0 0 0-2.105.043c-1.418.341-2.834 1.266-4.554 2.725C4.403 5.233.25 8.78.25 8.78a.725.725 0 0 0-.09 1.002.683.683 0 0 0 .98.092s4.156-3.55 6.098-5.197c1.65-1.4 2.921-2.18 3.987-2.442.95-.228 1.78-.08 2.78.456a3.53 3.53 0 0 0-.116.864V18.1l-1.885.911a.714.714 0 0 0-.407.586.723.723 0 0 0 .298.65.687.687 0 0 0 .703.05l12.272-5.93-.344-.353c.211.217.528.27.797.139.583-.292 1.24-.642 1.76-.642 1.541 0 2.778 1.267 2.778 2.845 0 .9-.412 1.686-1.055 2.21a.726.726 0 0 0-.138.962l-.385-.514-11.413 9.005A11.487 11.487 0 0 1 9.755 30.5H1.39a.695.695 0 0 0-.61.353.733.733 0 0 0 0 .716c.127.223.36.356.61.353h8.366c2.507 0 4.95-.741 7.048-2.12a3.78 3.78 0 0 0 2.989 1.487c1.188 0 2.091-.783 2.718-1.47.049-.055.033-.055.081-.11C23.196 31.05 24.51 32 26.041 32c1.18 0 2.098-.608 2.681-1.356.277-.355.35-.73.524-1.11.52.544 1.386 1.044 2.674 1.044a3.828 3.828 0 0 0 2.659-1.075c.702-.67 1.196-1.584 1.502-2.634l.006-.01.732-2.681h9.709c1.91 0 3.472-1.6 3.472-3.556V3.556C50 1.6 48.438 0 46.528 0H17.36zm0 1.422h29.167c1.158 0 2.083.947 2.083 2.134v1.422H15.278V3.556c0-1.187.925-2.134 2.083-2.134zm-2.083 6.4h33.333v12.8c0 1.186-.925 2.134-2.083 2.134H25.817l3.863-3.048a.7.7 0 0 0 .23-.327c.79-.773 1.34-1.814 1.34-3.025 0-2.348-1.874-4.267-4.166-4.267-1.015 0-1.829.511-2.33.764l-.033.014-9.443 4.564V7.822zm3.472 1.422a.704.704 0 0 0-.694.712c0 .391.312.71.694.71a.704.704 0 0 0 .695-.71.704.704 0 0 0-.695-.712zm2.778 0a.704.704 0 0 0-.694.712c0 .391.312.71.694.71a.703.703 0 0 0 .694-.71.704.704 0 0 0-.694-.712zm2.778 0a.704.704 0 0 0-.695.712c0 .391.312.71.695.71a.704.704 0 0 0 .694-.71.704.704 0 0 0-.694-.712zm2.778 0a.704.704 0 0 0-.695.712c0 .391.312.71.695.71a.704.704 0 0 0 .694-.71.704.704 0 0 0-.694-.712zM25 15.644a.704.704 0 0 0-.694.712c0 .391.312.71.694.71a.704.704 0 0 0 .695-.71.704.704 0 0 0-.695-.712zm1.39 2.134a.704.704 0 0 0-.695.71c0 .393.312.712.694.712.383 0 .695-.32.695-.711a.704.704 0 0 0-.695-.711zm-2.377 6.4h11.363l-.624 2.289c-.252.858-.645 1.544-1.12 1.997-.475.453-1.017.692-1.712.692-1.017 0-1.478-.342-1.752-.656-.274-.311-.323-.564-.323-.564l-1.343-.047c-.187.636-.466 1.355-.865 1.867-.399.51-.846.822-1.595.822-1.351 0-2.43-1.106-2.43-2.49l-1.297-.355s-.318.559-.822 1.114c-.505.559-1.164 1.02-1.701 1.02a2.388 2.388 0 0 1-1.858-.892l6.079-4.797zm-.402.71a.704.704 0 0 0-.694.712c0 .392.312.711.694.711.383 0 .695-.32.695-.711a.704.704 0 0 0-.695-.711zm6.25 0a.704.704 0 0 0-.694.712c0 .392.312.711.694.711.383 0 .695-.32.695-.711a.704.704 0 0 0-.695-.711z"/></svg>
                </AccordionIcon>
                <AccordionContent>
                  <AccordionTitle>Easily buy the world's top trending crypto</AccordionTitle>
                  <AccordionText>
                    Become a part of the future of finance. Buy your first Bitcoin,
                    Ether or other cryptocurrencies with your credit card or bank wire.
                  </AccordionText>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem>
                <AccordionImage className="d-md-none">
                  <img src="/static/images/feature-02-mobile.png" alt="" width="261px"/>
                </AccordionImage>
                <AccordionIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="34"><path d="M3.333 0C1.501 0 0 1.493 0 3.317v26.537c0 1.823 1.5 3.317 3.333 3.317h.834V34h4.166v-.83h23.334V34h4.166v-.83h.834c1.832 0 3.333-1.493 3.333-3.316V3.317C40 1.493 38.5 0 36.667 0H3.333zm0 1.659h33.334a1.65 1.65 0 0 1 1.666 1.658v26.537a1.65 1.65 0 0 1-1.666 1.658H3.333a1.65 1.65 0 0 1-1.666-1.658V3.317A1.65 1.65 0 0 1 3.333 1.66zm1.51 2.487a.83.83 0 0 0-.676.83v9.692a.846.846 0 0 0 0 .492v3.006a.845.845 0 0 0 0 .182v9.847c0 .457.374.83.833.83h30a.833.833 0 0 0 .833-.83V4.975A.833.833 0 0 0 35 4.147H4.844zm.99 1.659h28.334v21.56H5.833v-8.758l1.433-1.426a.826.826 0 0 0 0-1.192l-1.433-1.425v-8.76zm14.089 1.633a.978.978 0 0 0-.182.051 9.142 9.142 0 0 0-5.964 2.436.828.828 0 0 0-.469.467 9.054 9.054 0 0 0-2.448 5.779.837.837 0 0 0 0 .829 9.08 9.08 0 0 0 2.37 5.727.831.831 0 0 0 .6.596 9.16 9.16 0 0 0 5.937 2.358c.026.01.052.02.078.026h.338a.735.735 0 0 0 .078-.026 9.166 9.166 0 0 0 5.912-2.358c.3-.08.53-.32.599-.622a9.04 9.04 0 0 0 2.37-5.882.386.386 0 0 0 .026-.052v-.026a.621.621 0 0 0 0-.156v-.103a.862.862 0 0 0-.026-.156 9.054 9.054 0 0 0-2.5-6.012l-.026-.026c-.013-.013-.013-.039-.026-.052a.853.853 0 0 0-.26-.233 9.142 9.142 0 0 0-6.017-2.514.842.842 0 0 0-.39-.051zm-.755 1.71a.83.83 0 0 0 .833.816.83.83 0 0 0 .833-.816c1.459.155 2.77.745 3.855 1.607a.83.83 0 0 0-.29.832.836.836 0 0 0 1.461.334c.866 1.078 1.459 2.384 1.615 3.835h-.13a.834.834 0 0 0 .13 1.659c-.156 1.45-.749 2.756-1.615 3.835a.835.835 0 0 0-.65-.233h-.079a.828.828 0 0 0-.442 1.4c-1.084.86-2.396 1.45-3.855 1.606a.837.837 0 0 0-.27-.616.835.835 0 0 0-.641-.213.978.978 0 0 0-.104.026.832.832 0 0 0-.651.803c-1.459-.156-2.77-.745-3.855-1.607a.827.827 0 0 0 .157-.907.834.834 0 0 0-.781-.492h-.079a.84.84 0 0 0-.468.233c-.866-1.079-1.459-2.384-1.615-3.835a.83.83 0 0 0 0-1.659c.156-1.451.749-2.757 1.615-3.835a.836.836 0 1 0 1.462-.334.83.83 0 0 0-.29-.832c1.083-.862 2.395-1.452 3.854-1.607zM20 12.439c-2.292 0-4.167 1.866-4.167 4.146s1.875 4.147 4.167 4.147 4.167-1.866 4.167-4.147c0-2.28-1.875-4.146-4.167-4.146zm0 1.659c1.39 0 2.5 1.104 2.5 2.487a2.482 2.482 0 0 1-2.5 2.488c-1.39 0-2.5-1.104-2.5-2.488a2.482 2.482 0 0 1 2.5-2.487z"/></svg>
                </AccordionIcon>
                <AccordionContent>
                  <AccordionTitle>Secure storage. Peace of mind.</AccordionTitle>
                  <AccordionText>
                    Become a part of the future of finance. Buy your first Bitcoin,
                    Ether or other cryptocurrencies with your credit card or bank wire.
                  </AccordionText>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem>
                <AccordionImage className="d-md-none">
                  <img src="/static/images/feature-03-mobile.png" alt="" width="311px"/>
                </AccordionImage>
                <AccordionIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41"><path d="M13.12 0C5.871 0 0 5.871 0 13.12c0 7.249 5.871 13.12 13.12 13.12a12.9 12.9 0 0 0 1.768-.102c-.077.573-.128 1.15-.128 1.742 0 7.236 5.884 13.12 13.12 13.12C35.116 41 41 35.116 41 27.88c0-7.236-5.884-13.12-13.12-13.12-.593 0-1.17.051-1.742.128a12.9 12.9 0 0 0 .102-1.768C26.24 5.871 20.369 0 13.12 0zm19.91.23l-4.1 4.1-.563.59.564.59 4.1 4.1 1.178-1.18-2.69-2.69h3.741c2.258 0 4.1 1.842 4.1 4.1v4.92H41V9.84c0-3.152-2.588-5.74-5.74-5.74h-3.741l2.69-2.69L33.031.23zM13.12 1.64c6.365 0 11.48 5.115 11.48 11.48 0 .772-.06 1.454-.205 2.127a13.143 13.143 0 0 0-9.148 9.148 9.967 9.967 0 0 1-2.127.205A11.449 11.449 0 0 1 1.64 13.12c0-6.365 5.115-11.48 11.48-11.48zm.897 4.843c-1.477 0-2.607.477-3.51 1.46-.82.904-1.314 2.06-1.64 3.537h-1l-.487 1.076h1.307v.897h-.82l-.487 1.05h1.384c.573 3.527 2.3 5.254 5.253 5.254 1.067 0 1.973-.327 2.793-.82v-1.87c-.493.493-.903.81-1.23.973-.493.247-.99.333-1.563.333-1.887 0-3.024-1.323-3.434-3.946h3.92l.513-1.05h-4.51v-.923h4.74l.488-1.05h-5.15c.162-1.068.48-1.804.973-2.46.573-.738 1.326-1.154 2.23-1.154.903 0 1.793.41 2.613 1.23l.897-1.384c-1.067-.736-2.213-1.153-3.28-1.153zM27.88 16.4a11.47 11.47 0 0 1 11.48 11.48 11.47 11.47 0 0 1-11.48 11.48A11.47 11.47 0 0 1 16.4 27.88 11.47 11.47 0 0 1 27.88 16.4zm-.333 3.434v1.23c-.493 0-.967.17-1.46.333-.494.247-.904.493-1.23.82-.327.41-.657.737-.82 1.23-.247.41-.334.913-.334 1.486s.067.974.23 1.384c.084.41.34.753.667 1 .327.246.66.477 1.153.64.41.163.983.323 1.64.487v4.843c-.737-.163-1.326-.404-1.82-.897-.41-.41-.723-1.07-.64-1.973H23.37c.083 1.313.493 2.313 1.23 3.05.657.736 1.64 1.223 2.87 1.306v1.46h.974v-1.46c.656 0 1.146-.17 1.64-.333.493-.247.903-.493 1.23-.82.326-.327.656-.737.82-1.23.246-.41.333-.99.333-1.563s-.087-1.05-.333-1.46c-.164-.41-.391-.753-.718-1-.326-.327-.672-.477-1-.64a5.89 5.89 0 0 0-.82-.334l-1.05-.333v-4.51c1.147.247 1.804.897 2.05 2.127h1.538c-.247-1.067-.657-1.964-1.23-2.537a3.741 3.741 0 0 0-2.358-1.076v-1.23h-1zm-.154 2.793v4.28c-.247-.084-.573-.25-.82-.334-.247-.163-.503-.247-.666-.41-.163-.163-.327-.343-.41-.59a2.412 2.412 0 0 1-.154-.82c0-.656.154-1.21.564-1.537.41-.41.993-.59 1.486-.59zM0 26.24v4.92c0 3.152 2.588 5.74 5.74 5.74h3.741l-2.69 2.69 1.178 1.18 4.1-4.1.564-.59-.564-.59-4.1-4.1-1.178 1.18 2.69 2.69H5.74a4.108 4.108 0 0 1-4.1-4.1v-4.92H0zm28.444 2.537c.326.083.596.25.922.333.247.083.471.247.718.41.246.163.429.317.512.564.084.246.154.596.154.922 0 .327-.07.727-.154.974-.083.327-.266.58-.512.743-.164.163-.471.327-.718.41-.246.083-.596.147-.922.23v-4.586z"/></svg>
                </AccordionIcon>
                <AccordionContent>
                  <AccordionTitle>Convert crypto to currency easily.</AccordionTitle>
                  <AccordionText>
                    Become a part of the future of finance. Buy your first Bitcoin,
                    Ether or other cryptocurrencies with your credit card or bank wire.
                  </AccordionText>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Col>
          <Col xs={12} sm={6} md={6} className="d-none d-md-block">
            <SliderImages>
              <img src="/static/images/phone-01.png" alt="" width="467px"/>
              <img src="/static/images/phone-02.png" alt="" width="467px" style={{display: 'none'}}/>
              <img src="/static/images/phone-03.png" alt="" width="467px" style={{display: 'none'}}/>
            </SliderImages>
          </Col>
        </Row>
      </TabSlider>

      <SectionLink>
        <Button href="#">Get Started Now</Button>
      </SectionLink>
    </Grid>
  </Section>
);