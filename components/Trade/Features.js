import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import Button from '../Button';

import {Section, SectionHeader, SectionLink} from '../Home/styled';

import {
  AccordionTitle,
  AccordionContent,
  AccordionText,
  AccordionItem,
  AccordionIcon,
  AccordionImage
} from '../Home/Features';
import styled from 'styled-components';
import {rem} from 'polished/lib/index';

import config from '../../config';

export const Accordion = styled.div`
  margin-top: ${rem('72px')};
  margin-bottom: ${rem('40px')};
  
  @media all and (max-width: 767px) {
    margin-top: 0;
    
    h4 {
      color: ${p => p.theme.colors.white};
    s}
  }
`;

export const TabSlider = styled.div`
  padding-top: ${rem('35px')};

  @media all and (max-width: 767px) {
    padding-top: 0;
  }
`;

export const SliderImages = styled.div`
  margin: 0 0 130px 10px;
`;

const SliderImage = styled.img`
  animation: ${p =>
    `slideUp 0.3s ease-in-out forwards ${
      p.active ? ', fadeIn 0.3s ease-in-out forwards' : ''
    }`};
  display: ${p => (p.active ? '' : 'none')};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    to {
      transform: translate(0, -5px);
    }
  }
`;

export default class extends Component {
  state = {
    selectedIndex: 0
  };
  render() {
    return (
      <Section>
        <Grid className="container">
          <SectionHeader>
            <h3>The new generation of trading</h3>
            <p>
              Lykke Trade offers a seamless user interface, a robust API and a
              host of other professional tools for best-in-class trading
              experience.
            </p>
          </SectionHeader>

          <TabSlider>
            <Row>
              <Col xs={12} sm={6} md={5}>
                <Accordion>
                  <AccordionItem
                    active={this.state.selectedIndex === 0}
                    onClick={() => {
                      this.setState({
                        selectedIndex: 0
                      });
                    }}
                  >
                    <AccordionImage className="d-md-none">
                      <img
                        src="/static/images/feature-hero-01.png"
                        alt=""
                        width="310px"
                      />
                    </AccordionImage>
                    <AccordionIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="41"
                      >
                        <path
                          fill="#0388EF"
                          d="M15.065.514c-3.773 0-6.848 3.078-6.848 6.847 0 1.06.25 2.076.685 2.968l1.627-.8a4.923 4.923 0 0 1-.486-2.168 5.004 5.004 0 0 1 5.022-5.021 5.009 5.009 0 0 1 5.022 5.021h1.826c0-3.773-3.078-6.847-6.848-6.847zm17.063 3.994a.903.903 0 0 0-.114.029.426.426 0 0 0-.057.028c-2.315.582-4.965 1.969-6.649 5.108-1.601-.343-3.238-.6-4.993-.6-5.193 0-9.22 1.616-12.383 4.08-1.616 1.256-2.882 2.982-3.68 5.108a4.522 4.522 0 0 1-1.085-.542c-.717-.489-1.34-1.16-1.34-2.397 0-.984.46-1.808 1.226-2.14a.912.912 0 0 0-.37-1.769.95.95 0 0 0-.343.086C.824 12.15 0 13.724 0 15.322c0 1.912 1.113 3.21 2.14 3.909a5.942 5.942 0 0 0 1.57.77c-.311 1.352-.44 2.85-.372 4.451.172 4.066 2.925 7.048 4.994 8.703h.028c.186.146.243.232.257.257.014.025.057-.032-.029.228-.274.842-.799 2.111-.799 2.111v.029a2.483 2.483 0 0 0 1.427 3.196v.028l2.939 1.084c1.273.485 2.739-.153 3.224-1.426 0 0 .364-1.027.685-1.883.05-.129.085-.161.114-.2.036.003.04.014.114.028.581.107 1.873.485 4.023.485 2.194 0 3.47-.22 4.052-.256.114-.008.16 0 .2 0 .014.025.01.046.028.085.004.014-.003.014 0 .029.293.874.646 1.687.656 1.712.004.014.022.014.029.028a2.47 2.47 0 0 0 3.167 1.398l2.939-1.084v-.028a2.476 2.476 0 0 0 1.427-3.196l-.457-1.227a1.162 1.162 0 0 0-.086-.143s.029-.003.029 0c0 .004-.125.047.171-.114 2.219-1.205 3.916-3.063 4.993-5.307.1-.21.186-.36.257-.428.071-.068.114-.114.4-.114h1.483A2.411 2.411 0 0 0 42 26.05V21.6a2.409 2.409 0 0 0-2.397-2.398H38.12c-.232 0-.293-.017-.314-.028-.453-2.629-2.226-5.92-6.135-7.59.047-1.88.46-3.367 1.37-5.82a.916.916 0 0 0-.913-1.256zM30.7 7.076c-.553 1.72-.945 3.264-.913 5.05a.912.912 0 0 0 .628.856c3.82 1.334 5.228 4.305 5.592 6.591.14.87 1.067 1.456 2.112 1.456h1.483a.56.56 0 0 1 .57.57v4.451a.56.56 0 0 1-.57.57H38.12c-.671 0-1.277.25-1.655.6-.378.35-.546.735-.657.97-.927 1.93-2.318 3.46-4.194 4.48-.731.396-1.123 1.13-1.141 1.683-.014.475.146.728.2.828h-.029l.057.142.4 1.113a.65.65 0 0 1-.371.856l-2.94 1.113a.664.664 0 0 1-.855-.4v-.028s-.357-.817-.628-1.626c-.135-.396-.328-.839-.77-1.113-.443-.275-.878-.253-1.284-.228-.813.053-1.862.256-3.938.256-1.958 0-2.924-.314-3.709-.456-.392-.072-.874-.136-1.37.142-.495.279-.68.732-.856 1.199-.313.842-.713 1.854-.713 1.854a.666.666 0 0 1-.856.4l-2.939-1.113a.652.652 0 0 1-.37-.856c.014-.04.513-1.262.827-2.225.21-.65.121-1.306-.143-1.74-.264-.436-.617-.668-.713-.743-1.848-1.476-4.173-4.101-4.309-7.361-.192-4.626 1.395-7.85 3.88-9.787 2.883-2.243 6.45-3.68 11.271-3.68 1.84 0 3.581.224 5.222.627a.916.916 0 0 0 1.055-.513c1.024-2.258 2.54-3.257 4.11-3.938zm.77 12.184c-.966 0-1.74.777-1.74 1.74 0 .967.774 1.769 1.74 1.769.963 0 1.741-.806 1.741-1.769 0-.963-.778-1.74-1.74-1.74z"
                        />
                      </svg>
                    </AccordionIcon>
                    <AccordionContent>
                      <AccordionTitle>Lowest roundtrip costs</AccordionTitle>
                      <AccordionText>
                        Easily transfer and safely store all your assets to your
                        Lykke Wallet whenever you want, wherever your want.
                      </AccordionText>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    active={this.state.selectedIndex === 1}
                    onClick={() => {
                      this.setState({
                        selectedIndex: 1
                      });
                    }}
                  >
                    <AccordionImage className="d-md-none">
                      <img
                        src="/static/images/feature-trade-02.png"
                        alt=""
                        width="310px"
                      />
                    </AccordionImage>
                    <AccordionIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                      >
                        <path d="M24.452.029c-.231.017-.46.05-.684.114L7.675 4.708C5.867 5.22 4.793 7.122 5.307 8.93l7.533 26.478c.014.09.042.175.085.257l1.085 3.852c.513 1.808 2.414 2.853 4.222 2.34l16.093-4.566c1.808-.513 2.882-2.414 2.368-4.223l-1.056-3.709a.923.923 0 0 0-.171-.6L27.99 2.483A3.405 3.405 0 0 0 25.137.03a3.38 3.38 0 0 0-.685 0zm.143 1.797a1.6 1.6 0 0 1 1.655 1.17l7.276 25.68-19.174 5.42L7.076 8.417A1.587 1.587 0 0 1 8.19 6.448l16.09-4.565c.107-.032.207-.05.314-.057zm8.446 6.078a.914.914 0 0 0-.714 1.198l4.566 16.092a.92.92 0 1 0 1.769-.513L34.096 8.588a.912.912 0 0 0-.884-.684h-.171zm5.164 2.881a.914.914 0 0 0-.713 1.199l2.282 8.046a.92.92 0 1 0 1.77-.514L39.26 11.47a.912.912 0 0 0-.885-.685h-.17zM4.137 16.121a.803.803 0 0 0-.085.028.914.914 0 0 0-.714 1.17l4.566 16.093a.92.92 0 1 0 1.769-.514L5.107 16.806a.912.912 0 0 0-.884-.685h-.086zm-2.882 5.164a.803.803 0 0 0-.085.029.914.914 0 0 0-.713 1.17l2.282 8.046a.92.92 0 1 0 1.77-.514L2.225 21.97a.912.912 0 0 0-.885-.685h-.086zm32.784 9.16l.885 3.138a1.587 1.587 0 0 1-1.113 1.969L17.72 40.117a1.587 1.587 0 0 1-1.969-1.113l-.885-3.139 19.174-5.42zm-9.016 3.794c-.082.007-.175.004-.257.029-.667.189-1.045.902-.856 1.569a1.24 1.24 0 0 0 1.541.856 1.24 1.24 0 0 0 .856-1.54 1.24 1.24 0 0 0-1.284-.914z" />
                      </svg>
                    </AccordionIcon>
                    <AccordionContent>
                      <AccordionTitle>
                        Trading on the go with our mobile app
                      </AccordionTitle>
                      <AccordionText>
                        Enjoy limitless connection to the market wherever you
                        want, whenever you want.
                      </AccordionText>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    active={this.state.selectedIndex === 2}
                    onClick={() => {
                      this.setState({
                        selectedIndex: 2
                      });
                    }}
                  >
                    <AccordionImage className="d-md-none">
                      <img
                        src="/static/images/feature-trade-03.png"
                        alt=""
                        width="310px"
                      />
                    </AccordionImage>
                    <AccordionIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                      >
                        <path d="M1.596.824a.83.83 0 0 0-.67.694c-.144.924-.173 2.333 0 3.835.174 1.502.544 3.085 1.39 4.246l10.86 15.107v5.662a8.065 8.065 0 0 1-1.183-.695c-1.11-.782-2.11-1.914-2.11-3.68 0-1.04-.071-1.93-.31-2.728-.238-.798-.665-1.5-1.312-2.033-.344-.283-.737-.422-1.21-.54-.472-.12-1.055-.232-1.647.18a.823.823 0 0 0-.257 1.08c.167.293.58 1.107.824 1.827.103.3.173.547.205.747-.06 0-.038.022-.128 0-.254-.065-.58-.229-.9-.54-.641-.625-1.278-1.85-1.159-4.17a.827.827 0 0 0-.248-.646.83.83 0 0 0-.653-.229c-.823.08-1.531.67-1.853 1.416-.321.746-.411 1.627-.411 2.728 0 1.833.897 3.57 2.136 5.172 1.238 1.602 2.85 3.101 4.452 4.375a47.093 47.093 0 0 0 6.099 4.092c.927 3.04 3.741 5.276 7.077 5.276C24.67 42 28 38.67 28 34.588V18.143c1.358 1.664 3.68 4.5 5.018 6.125.827 1.007 2.027 2.127 3.475 2.883 1.447.756 3.194 1.148 4.94.566a.825.825 0 0 0 .489-1.107c-1.276-2.991-2.447-5.246-3.422-7.437a.693.693 0 0 0-.077-.155c-3.191-4.397-11.17-13.974-11.17-13.974-1.196-2.49-3.725-4.22-6.665-4.22-4.082 0-7.412 3.329-7.412 7.411v4.118a.828.828 0 0 0-.72-.746l-.875-.13.206-1.209a.827.827 0 0 0-.695-.952l-1.235-.18.206-1.235a.828.828 0 0 0-.695-.927l-1.21-.206.18-1.21a.827.827 0 0 0-.695-.952l-1.21-.18.181-1.235a.828.828 0 0 0-.67-.952l-1.98-.309a4.813 4.813 0 0 1-.85-.412c-.357-.218-.666-.437-.952-.592a.828.828 0 0 0-.566-.102zM20.588 2.47a5.757 5.757 0 0 1 5.25 3.37.724.724 0 0 0 .026.078c.312.711.489 1.49.489 2.316V15.7a.93.93 0 0 0 0 .231v18.658a5.751 5.751 0 0 1-5.765 5.765 5.746 5.746 0 0 1-5.584-4.35 1 1 0 0 0-.026-.077 5.749 5.749 0 0 1-.154-1.338v-2.882a.863.863 0 0 0 0-.257v-6.923a.863.863 0 0 0 0-.258v-8.75a.837.837 0 0 0 0-.334v-6.95a5.751 5.751 0 0 1 5.764-5.764zm-18.014.617c.308.184.614.373 1.003.463.016.01.036.02.052.026l1.235.18-.206 1.21a.827.827 0 0 0 .695.952l1.21.206-.18 1.21a.827.827 0 0 0 .695.952l1.209.18-.18 1.235a.828.828 0 0 0 .694.927l1.21.206-.206 1.21a.835.835 0 0 0 .158.63c.135.18.338.296.563.321l1.003.129v1.21a.833.833 0 0 0 .36.694l1.287.824v5.996L3.654 8.621c-.534-.733-.923-2.097-1.08-3.448-.097-.83-.023-1.406 0-2.085zm18.014 3.5a1.646 1.646 0 1 0 0 3.294 1.646 1.646 0 1 0 0-3.294zM28 8.544c2.297 2.79 6.669 8.136 9.059 11.427.006.01.02.016.026.025.849 1.895 1.852 3.915 2.882 6.228-.914.061-1.818-.077-2.702-.54-1.187-.621-2.284-1.615-2.986-2.47A6567.252 6567.252 0 0 1 28 15.543v-7zM2.6 22.004c.266 1.36.73 2.5 1.415 3.165.52.505 1.09.814 1.647.952.556.139 1.094.152 1.595-.154.303-.183.48-.499.54-.746.062-.248.072-.483.052-.695-.038-.428-.16-.833-.309-1.261-.103-.3-.215-.47-.334-.747.402.332.634.689.798 1.236.164.547.231 1.274.231 2.239 0 2.412 1.47 4.085 2.831 5.044.891.627 1.605.946 2.11 1.132v2.445a48.015 48.015 0 0 1-4.735-3.294c-1.538-1.223-3.056-2.625-4.169-4.066-1.113-1.442-1.801-2.886-1.801-4.17 0-.517.077-.723.128-1.08zm17.165 10.114v1.647h-1.647v1.647h1.647v1.647h1.647v-1.647h1.647v-1.647h-1.647v-1.647h-1.647z" />
                      </svg>
                    </AccordionIcon>
                    <AccordionContent>
                      <AccordionTitle>
                        Powerful tools for empowered traders
                      </AccordionTitle>
                      <AccordionText>
                        Comprehensive portfolio of indicators enables users to
                        take full advantage of market movements.
                      </AccordionText>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Col>
              <Col xs={12} sm={6} md={7} className="d-none d-md-block">
                <SliderImages>
                  <SliderImage
                    src="/static/images/feature-trade-03.png"
                    alt=""
                    width="688px"
                    active={this.state.selectedIndex === 0}
                  />
                  <SliderImage
                    src="/static/images/feature-hero-01.png"
                    alt=""
                    width="628px"
                    style={{display: ''}}
                    active={this.state.selectedIndex === 1}
                  />
                  <SliderImage
                    src="/static/images/feature-trade-02.png"
                    alt=""
                    width="626px"
                    style={{display: ''}}
                    active={this.state.selectedIndex === 2}
                  />
                </SliderImages>
              </Col>
            </Row>
          </TabSlider>

          <SectionLink>
            <Button href={config.WALLET_URL}>Go to dashboard</Button>
          </SectionLink>
        </Grid>
      </Section>
    );
  }
}
