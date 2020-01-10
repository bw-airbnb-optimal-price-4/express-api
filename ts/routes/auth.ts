import * as Express from 'express';
import * as Bcrypt from 'bcryptjs';

import { User as UserType, ValidatedCredentialsRequest } from '../types';
import { SALT_ROUNDS } from '../globalConstants';
import { generateToken } from '../utils';
import { Users } from '../data/models';


export const router = Express.Router();

const register = async (req: ValidatedCredentialsRequest, res: Express.Response) => {
  const { credentials } = req;

  const hashedPassword = Bcrypt.hashSync(credentials.password, SALT_ROUNDS);

  try {
    const [result] = await Users.insert({
      item: {
        ...credentials,
        password: hashedPassword,
      },
    });
    if (result) {
      const accessToken = generateToken(result);
      return res.status(201).json({ accessToken });
    }
    return res.status(500).json({ message: 'error registering user' });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: 'error registering user',
    });
  }
};

const login = async (req: ValidatedCredentialsRequest, res: Express.Response) => {
  const { email, password } = req.credentials;

  if (email === undefined || password === undefined) {
    return (res.status(400).json({ message: 'must provide email and password' }));
  }

  try {
    const result = await Users.getByEmail({ email }) as UserType;
    if (!!result && Bcrypt.compareSync(password, result.password)) {
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
