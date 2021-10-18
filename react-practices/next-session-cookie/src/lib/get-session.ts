import { expressSession } from 'next-session/lib/compat'
import nextSession from 'next-session';
import RedisStore from 'connect-redis';

const options = {
  cookie: {
    httpOnly: true,
    path: '/'
  }
};

const sessionStore = RedisStore(expressSession);

export const getSession = nextSession({
  // store: sessionStore,
  ...options,
});