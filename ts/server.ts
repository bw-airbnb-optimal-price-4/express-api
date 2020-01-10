import * as Express from 'express';
import * as Helment from 'helmet';
import * as Cors from 'cors';

import {
  amenitiesRouter,
  authRouter,
  listingsRouter,
  neighborhoodsRouter,
  propertyTypesRouter,
  usersRouter,
} from './routes';
import {
  verifyLoggedIn,
} from './middleware';

const server = Express();

server.use(Helment());
server.use(Express.json());
server.use(Cors());

const generalRestrictedRoute = Express.Router();

generalRestrictedRoute.use(verifyLoggedIn);
generalRestrictedRoute.use('/amenities', amenitiesRouter);
generalRestrictedRoute.use('/listings', listingsRouter);
generalRestrictedRoute.use('/neighborhoods', neighborhoodsRouter);
generalRestrictedRoute.use('/propertyTypes', propertyTypesRouter);
generalRestrictedRoute.use('/users', usersRouter);

server.use('/api/auth', authRouter);
server.use('/api/restricted', generalRestrictedRoute);

export default server;
