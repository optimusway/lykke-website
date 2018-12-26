const express = require('express');
const fetch = require('isomorphic-unfetch');
const config = require('../../config');

const router = express.Router();

// FIXME: need to fetch LyCI ticker here
router.get('/products/lyci', async (req, res) => {
  try {
    const resp = await fetch(`${config.BASE_API_URL}/markets/BTCUSD`);
    res.json(await resp.json());
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
