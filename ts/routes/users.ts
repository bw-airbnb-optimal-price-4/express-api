import * as Express from 'express';

import { Listing } from '../types';
import {
  Listings,
  Users,
} from '../data/models';


export const router = Express.Router();

const getUser = async (req: Express.Request, res: Express.Response) => {
  const { id } = req.params;

  try {
    const [result] = await Users.get({ id: parseInt(id, 10) });
    return ((result)
      ? res.status(200).json(result)
      : res.status(500).json({ message: `error getting user by id ${id}` })
    );
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
    const result = await Listings.get({ userId: parseInt(id, 10) } as Listing);
    return ((result)
      ? res.status(200).json(result)
      : res.status(500).json({ message: `error getting listings under id ${id}` })
    );
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: `error getting listings for user id ${id}`,
    });
  }
};

router.get('/:id', getUser);
// router.put('/:id/', updateUser); // ask how this is supposed to behave 
router.get('/:id/listings', getUserListings);

export default {};
