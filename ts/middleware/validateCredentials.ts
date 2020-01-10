import * as Express from 'express';

import { User, ValidatedCredentialsRequest } from '../types';
import { filterOutUndefinedMembers } from '../utils';

export const validateCredentials = (
  req: ValidatedCredentialsRequest,
  res: Express.Response,
  next: Express.NextFunction,
) => {
  const {
    email,
    password,
    firstName,
    lastName,
    city,
    state,
    dateOfBirth,
  }: User = req.body;

  req.credentials = filterOutUndefinedMembers({ obj: {
    email,
    password,
    firstName,
    lastName,
    city,
    state,
    dateOfBirth,
  }});
  return ((email === undefined
    || password === undefined
  )
    ? res.status(400).json({ message: 'must provide email and password' })
    : next()
  );
};

export default {};
