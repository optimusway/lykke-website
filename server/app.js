const express = require('express');
const next = require('next');
const api = require('./api');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const config = require('../config');

require('dotenv').config();

app
  .prepare()
  .then(() => {
    const server = express();

    api(server);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log(`> Ready on ${config.SELF_URL}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
