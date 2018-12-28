const express = require('express');
const fetch = require('isomorphic-unfetch');
const config = require('../../config');

const router = express.Router();

// FIXME: need to fetch LyCI ticker here
router.get('/products/lyci', async (req, res) => {
  try {
    const resp = await Promise.resolve({
      AssetPair: 'LyCI',
      Volume24H: 0.1,
      PriceChange24H: 0.22,
      LastPrice: 1532.12,
      Weights: {
        BTC: 0.5,
        XRP: 0.25,
        ETH: 0.15,
        BCH: 0.05,
        XLM: 0.05
      }
    });
    res.json(resp);
  } catch (err) {
    res.json({error: err.message || err.toString()});
  }
});

router.get('/posts', async (req, res) => {
  try {
    const resp = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/scbc-magazine'
    );
    res.json(await resp.json());
  } catch (err) {
    res.json({error: err.message || err.toString()});
  }
});

function api(server) {
  server.use('/api', router);
}

module.exports = api;
