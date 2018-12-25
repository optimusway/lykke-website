import React from 'react';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';

import {
  Chips,
  FeatureItem,
  FeatureItemIcon,
  FeatureItemTitle
} from '../Home/Chips'

export default () => (
  <Chips className="d-none d-md-block">
    <Grid className="container">
      <Row className="justify-content-center">
        <Col xs={9} sm={4}>
          <FeatureItem>
            <FeatureItemIcon>
              <img src="/static/images/badge-easy.svg" alt="Easy" width="70px"/>
            </FeatureItemIcon>
            <FeatureItemTitle>Low spreads</FeatureItemTitle>
          </FeatureItem>
        </Col>
        <Col xs={9} sm={4}>
          <FeatureItem>
            <FeatureItemIcon>
              <img src="/static/images/badge-costs.svg" alt="Costs" width="70px"/>
            </FeatureItemIcon>
            <FeatureItemTitle>0% trading fees</FeatureItemTitle>
          </FeatureItem>
        </Col>
        <Col xs={9} sm={4}>
          <FeatureItem>
            <FeatureItemIcon>
              <img src="/static/images/badge-swiss.svg" alt="Swiss" width="70px"/>
            </FeatureItemIcon>
            <FeatureItemTitle>Swiss Quality Exchange</FeatureItemTitle>
          </FeatureItem>
        </Col>
      </Row>
    </Grid>
  </Chips>
);