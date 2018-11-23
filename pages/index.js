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
          <h1>Discover the world of digital assets</h1>
          <p className="lead">
            Lykke is your gateway to the future of investment, allowing you to securely buy, sell and store
            cryptocurrencies and other digital assets on the fully regulated <b>Swiss-based Lykke Exchange</b>.
          </p>

          <form className="form form_subscribe">

          </form>
        </Col>
        <Col lg={6}>
          <img src="https://placekitten.com/695/507" />
        </Col>
      </Row>
    </Grid>
  </>
);

export default Home;
