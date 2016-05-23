# ecr-session
## A Redis backed Express-session wrapper for sharing the session store under the same root domain between different servers

### Usage
```js
const app = express();
app.use(commonSession({
    secret: 'secret_to_sign_session_id',
    saveUninitialized: true,
    ttl: '3600', // second
    url: 'redis://redis_url:6379/0',
    prefix: 'session_store_prefix',
    domain: 'root-domain.io',
}));
```

All servers set with the same option will share the same session store.