const session = require('express-session');
const ConnectRedis = require('connect-redis')(session);

module.exports = function commonSession(redisURL, redisPrefix, secret, domain) {
  return session({
    secret: secret,
    resave: true,
    saveUninitialized: true,
    store: new ConnectRedis({
      url: redisURL,
      prefix: redisPrefix
    }),
    cookie: {
      domain: domain,
      path: '/'
    }
  });
};
