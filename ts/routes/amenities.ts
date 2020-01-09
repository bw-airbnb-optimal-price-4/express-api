import * as Express from 'express';

import { Amenity } from '../types';
import { Amenities } from '../data/models';


export const router = Express.Router();

const getAmenities = async (req: Express.Request, res: Express.Response) => {
  try {
    const result = await Amenities.get() as [Amenity];
    return ((result)
      ? res.status(200).json(result)
      : res.status(500).json({ message: 'error getting amenities' })
    );
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: 'error getting amenities',
    });
  }
};

router.get('/', getAmenities);

export default {};
