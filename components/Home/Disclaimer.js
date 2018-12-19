import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import Link from 'next/link';
import {rem} from 'polished';

export const Disclaimer = styled.div`
  font-size: ${rem('14px')};
  line-height: 1.43;
  color: ${p => p.theme.colors.grey};
  
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
  
  @media all and (max-width: 767px) {
    font-size: 11px;
    line-height: 1.45;
  }
  
  @media all and (min-width: 992px) {
    ${Row} {
      margin-left: ${rem('-20px')};
      margin-right: ${rem('-20px')};
    }
    
    ${Col} {
      padding-left: ${rem('20px')};
      padding-right: ${rem('20px')}
    }
  }
`;

export default () => (
  <Disclaimer>
    <Grid className="container">
      <Row>
        <Col xs={12} sm={6}>
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
        <Col xs={12} sm={6}>
          <p>Lykke Corp (Lykke AG) is registered in Zurich, Switzerland. Identification number CHE-345.258.499. <Link href="#"><a>Commercial register</a></Link>.</p>
          <p>Lykke Corp UK Limited is a company registered in England number 10093552 limited by shares with its registered office at 86-90 Paul Street, London EC2A 4NE</p>
          <p>Lykke Vanuatu Limited is regulated by the Vanuatu Financial Services Commission (VFSC) of Vanuatu with Company number 17909</p>
          <p>Risk warning: Trading leveraged products can result in losses that exceed your deposits. Ensure you understand the risks. Read full <Link href="#"><a>Risk Disclosure</a></Link>.</p>
        </Col>
      </Row>
    </Grid>
  </Disclaimer>
);