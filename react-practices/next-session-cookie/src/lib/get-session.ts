import { expressSession, promisifyStore } from 'next-session/lib/compat'
import nextSession from 'next-session';
import RedisStoreFactory from 'connect-redis';

const options = {
  cookie: {
    httpOnly: true,
    path: '/'
  }
};

const RedisStore = RedisStoreFactory(expressSession);

const sessionStore = new RedisStore({});

export const getSession = nextSession({
  // store: promisifyStore(sessionStore),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'strict',
  }
});