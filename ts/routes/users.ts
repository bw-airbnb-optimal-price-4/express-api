import * as Express from 'express';

// import { UserCredentials as UserCredentialsType } from '../types';
import { Users } from '../data/models';


export const router = Express.Router();

const getUser = async (req: Express.Request, res: Express.Response) => {
  const { id } = req.params;

  try {
    const [result] = await Users.get({ id: parseInt(id, 10) });
    if (result) {
      return res.status(200).json(result);
    }
    return res.status(500).json({ message: `error getting user by id ${id}` });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: `error getting user by id ${id}`,
    });
  }
};

const getUserListings = async (req: Express.Request, res: Express.Response) => {
  const { id } = req.params;

  try {
    const [result] = await Users.get({ id: parseInt(id, 10) });
    if (result) {
      return res.status(200).json(result);
    }
    return res.status(500).json({ message: `error getting user by id ${id}` });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: `error getting user by id ${id}`,
    });
  }
};

router.get('/:id', getUser);
// router.get('/:id/listings', getUserListings);
// router.put('/:id/listings', updateUserListings);

export default {};
