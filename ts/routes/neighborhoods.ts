import * as Express from 'express';

import { Neighborhood } from '../types';
import { Neighborhoods } from '../data/models';


export const router = Express.Router();

const getNeighborhoods = async (req: Express.Request, res: Express.Response) => {
  try {
    const result = await Neighborhoods.get() as [Neighborhood];
    return ((result)
      ? res.status(200).json(result)
      : res.status(500).json({ message: 'error getting neighborhoods' })
    );
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: 'error getting neighborhoods',
    });
  }
};

router.get('/', getNeighborhoods);

export default {};
