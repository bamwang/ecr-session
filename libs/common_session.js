'use strict';

const session = require('express-session');
const ConnectRedis = require('connect-redis')(session);

module.exports = function commonSession(options) {
  options = options || {};
  const secret = options.secret || '';
  const saveUninitialized = options.saveUninitialized || true;
  const ttl = options.ttl || 3600;
  const url = options.url || 'redis://localhost/0';
  const prefix = options.prefix || 'session';
  if (!options.domain) {
    console.warn(`empty domain will not form a common session`);
  }
  const domain = `.${options.domain}`;

  return session({
    resave: true,
    secret,
    saveUninitialized,
    store: new ConnectRedis({
      ttl,
      url,
      prefix
    }),
    cookie: {
      domain,
      path: '/'
    }
  });
};
