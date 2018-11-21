import React from 'react';
import Head from '../components/Head';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

const Home = () => (
  <>
    <Head
      title="Lykke – Buy and sell cryptocurrency and digital assets"
      description="Global marketplace for any kind of assets built on the top of blockchain technology"
    />
    <Grid>
      <Row>
        <Col lg={6}>
          <h1>Buy and sell cryptocurrency and digital assets</h1>
          <p>
            Global marketplace for any kind of assets built on the top of
            blockchain technology
          </p>
        </Col>
        <Col lg={6}>
          <img src="https://placekitten.com/350/350" />
        </Col>
      </Row>
    </Grid>
  </>
);

export default Home;
