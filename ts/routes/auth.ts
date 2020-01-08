import * as Express from 'express';
import * as Bcrypt from 'bcryptjs';

import { UserCredentials as UserCredentialsType } from '../types';
import { SALT_ROUNDS } from '../globalConstants';
import { generateToken } from '../utils';
import { UserCredentials } from '../data/models';
import { Users } from '../data/models';


export const router = Express.Router();

const register = async (req: Express.Request, res: Express.Response) => {
  const { username, password } = req.body;

  if (username === undefined || password === undefined) {
    return (res.status(400).json({ message: 'must provide username and password' }));
  }

  const hashedPassword = Bcrypt.hashSync(password, SALT_ROUNDS);

  try {
    const [result] = await UserCredentials.insert({ item: { username, hashedPassword } });
    if (result) {
      const token = generateToken(result);
      return res.status(201).json({ token });
    }
    return res.status(500).json({ message: 'error registering user' });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: 'error registering user',
    });
  }
};

const login = async (req: Express.Request, res: Express.Response) => {
  const { username, password } = req.body;

  if (username === undefined || password === undefined) {
    return (res.status(400).json({ message: 'must provide username and password' }));
  }

  try {
    const result = await UserCredentials.getByUsername({ username }) as UserCredentialsType;
    if (!!result && Bcrypt.compareSync(password, result.hashedPassword)) {
      const token = generateToken(result);
      return res.status(200).json({ token });
    }
    return res.status(403).json({ message: 'invalid credentials' });
  } catch (error) {
    return res.status(500).json({
      error: 'error logging in',
      message: error.message,
    });
  }
};


router.post('/register', register);
router.post('/login', login);

export default {};
