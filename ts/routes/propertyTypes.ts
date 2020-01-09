import * as Express from 'express';

import { Propterty } from '../types';
import { PropertyTypes } from '../data/models';


export const router = Express.Router();

const getPropertyTypes = async (req: Express.Request, res: Express.Response) => {
  try {
    const result = await PropertyTypes.get() as [Propterty];
    return ((result)
      ? res.status(200).json(result)
      : res.status(500).json({ message: 'error getting PropertyTypes' })
    );
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: 'error getting PropertyTypes',
    });
  }
};

router.get('/', getPropertyTypes);

export default {};
