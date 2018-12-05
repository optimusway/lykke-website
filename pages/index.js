import React from 'react';
import Head from '../components/Head';
import Button from '../components/Button'
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import Link from 'next/link';

import {social} from '../utils/social'

import {
  Section,
  SectionHeader,
  SectionLink,
  LeadImage,
  Features,
  FeatureItem,
  FeatureItemIcon,
  FeatureItemTitle,
  InputGroup,
  Input,
  FormSubscribe,
  Disclaimer,
  Cards,
  Card,
  CardTitle,
  CardText,
  CardFooter,
  Social
} from './index-styled'


const Home = () => (
  <>
    <Head
      title="Lykke – Buy and sell cryptocurrency and digital assets"
      description="Global marketplace for any kind of assets built on the top of blockchain technology"
    />
    <Section lead>
      <Grid>
        <Row>
          <Col md={6}>
            <h1>Become a Bitcoin owner</h1>
            <p className="lead">
              Lykke is the easiest and secure way to buy, exchange and sell cryptos.<br/>
              <b>No hidden costs. Swiss quality</b>.
            </p>
            <FormSubscribe>
              <Row>
                <Col xs={9}>
                  <InputGroup>
                    <Input typ  e="email" placeholder="Enter your Email to get started"/>
                  </InputGroup>
                </Col>
                <Col xs={3}>
                  <Button block>Get Started</Button>
                </Col>
              </Row>
            </FormSubscribe>
          </Col>
          <Col md={6}>
            <LeadImage>
              <img src="/static/images/hero.jpg" width={778} />
            </LeadImage>
          </Col>
        </Row>
      </Grid>
    </Section>

    <Section nopadding>
      <Grid>
        <Features>
          <Row>
            <Col sm={4}>
              <FeatureItem>
                <FeatureItemIcon>
                  <img src="/static/images/badge-easy.svg" alt="Easy" width="70px"/>
                </FeatureItemIcon>
                <FeatureItemTitle>Easy to start. Easy to use.</FeatureItemTitle>
              </FeatureItem>
            </Col>
            <Col sm={4}>
              <FeatureItem>
                <FeatureItemIcon>
                  <img src="/static/images/badge-costs.svg" alt="Costs" width="70px"/>
                </FeatureItemIcon>
                <FeatureItemTitle>Best prices. No hidden costs.</FeatureItemTitle>
              </FeatureItem>
            </Col>
            <Col sm={4}>
              <FeatureItem>
                <FeatureItemIcon>
                  <img src="/static/images/badge-swiss.svg" alt="Swiss" width="70px"/>
                </FeatureItemIcon>
                <FeatureItemTitle>Swiss Quality Exchange.</FeatureItemTitle>
              </FeatureItem>
            </Col>
          </Row>
        </Features>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <SectionHeader>
          <h3>Everything you need. Right where you need it.</h3>
          <p>The Lykke Wallet is packed with simple yet powerful features to give you everything you need to secure your future in digital assets.</p>
        </SectionHeader>

        <SectionLink>
          <Button href="#">Get Started Now</Button>
        </SectionLink>
      </Grid>
    </Section>

    <Section grey>
      <Grid>
        <SectionHeader>
          <h3>Join the voices of the future of finance</h3>
        </SectionHeader>

        <SectionLink>
          <Button href="#">Sign up</Button>
        </SectionLink>
      </Grid>
    </Section>

    <Section small>
      <Grid>
        <Cards>
          <Row>
            <Col sm={4}>
              <Card>
                <i className="icon icon--register"/>
                <CardTitle>Register</CardTitle>
                <CardText>Get your free account with Lykke</CardText>
                <CardFooter border>
                  <Button className="btn" flat small href="#">Create free account</Button>
                </CardFooter>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <i className="icon icon--follow"/>
                <CardTitle>Follow us</CardTitle>
                <CardText>We like to stay in touch with our community.</CardText>
                <CardFooter>
                  <Social>
                    <Row>
                      <Col xs={3}>
                        <a href={social.telegram.url} title={social.telegram.name} target="_blank">
                          <i className={"icon " + social.telegram.icon}/>
                        </a>
                      </Col>
                      <Col xs={3}>
                        <a href={social.twitter.url} title={social.twitter.name} target="_blank">
                          <i className={"icon " + social.twitter.icon}/>
                        </a>
                      </Col>
                      <Col xs={3}>
                        <a href={social.facebook.url} title={social.facebook.name} target="_blank">
                          <i className={"icon " + social.facebook.icon}/>
                        </a>
                      </Col>
                      <Col xs={3}>
                        <a href={social.instagram.url} title={social.instagram.name} target="_blank">
                          <i className={"icon " + social.instagram.icon}/>
                        </a>
                      </Col>
                    </Row>
                  </Social>
                </CardFooter>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <i className="icon icon--newsletter"/>
                <CardTitle>SCBC Magazine</CardTitle>
                <CardText>Get our latest news right to your mailbox</CardText>
                <CardFooter border>
                  <form>
                    <input type="text"/>
                  </form>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Cards>
      </Grid>
    </Section>

    <Section nopadding>
      <Grid>
        <Disclaimer>
          <Row>
            <Col sm={6}>
              <p>Trading financial products involves significant risk and can result in the loss of your invested capital. You should not invest more
                than you can afford to lose and should ensure that you fully understand the risks involved. Trading leveraged products may not be suitable
                for all investors. Before trading, please take into consideration your level of experience, investment objectives and seek independent financial
                advice if necessary. It is the responsibility of the Client to ascertain whether he/ she is permitted to use the services of Lykke Vanuatu Limited
                based on the legal requirements in his/ her country of residence. Please read full&nbsp;
                <Link href="#"><a>Risk Disclosure</a></Link>.</p>
              <p>Spot FX trading is provided by Lykke Corp UK. Leveraged FX &amp; CFD trading is only available to Lykke Vanuatu clients who reside in Asian and
                African countries. Lykke services are not available to the residents of US, Canada, Japan, Australia. For full list of countries please refer to the&nbsp;
                <Link href="#"><a>Terms of Use</a></Link>.</p>
            </Col>
            <Col sm={6}>
              <p>Lykke Corp (Lykke AG) is registered in Zurich, Switzerland. Identification number CHE-345.258.499. <Link href="#"><a>Commercial register</a></Link>.</p>
              <p>Lykke Corp UK Limited is a company registered in England number 10093552 limited by shares with its registered office at 86-90 Paul Street, London EC2A 4NE</p>
              <p>Lykke Vanuatu Limited is regulated by the Vanuatu Financial Services Commission (VFSC) of Vanuatu with Company number 17909</p>
              <p>Risk warning: Trading leveraged products can result in losses that exceed your deposits. Ensure you understand the risks. Read full <Link href="#"><a>Risk Disclosure</a></Link>.</p>
            </Col>
          </Row>
        </Disclaimer>
      </Grid>
    </Section>
  </>
);

export default Home;
