import * as Express from 'express';
import * as Helment from 'helmet';
import * as Cors from 'cors';

import {
  authRouter,
  listingsRouter,
  usersRouter,
} from './routes';

const server = Express();

server.use(Helment());
server.use(Express.json());
server.use(Cors());

server.use('/api/auth', authRouter);
server.use('/api/listings', listingsRouter);
server.use('/api/users', usersRouter);

export default server;
