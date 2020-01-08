import * as Express from 'express';
import * as Helment from 'helmet';
import * as Cors from 'cors';

import { authRouter } from './routes';

const server = Express();

server.use(Helment());
server.use(Express.json());
server.use(Cors());

server.use('/api/auth', authRouter);

export default server;
