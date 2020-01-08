import * as Express from 'express';

import { Listing } from '../types';
import { Listings } from '../data/models';


export const router = Express.Router();

const getListing = async (req: Express.Request, res: Express.Response) => {
  const { id } = req.params;

  try {
    const [result] = await Listings.get({ id: parseInt(id, 10) } as Listing);
    return ((result)
      ? res.status(200).json(result)
      : res.status(500).json({ message: `error getting listing by id ${id}` })
    );
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: `error getting listing by id ${id}`,
    });
  }
};

const insertListing = async (req: Express.Request, res: Express.Response) => {
  try {
    const [result] = await Listings.insert({ item: req.body }); // this needs to be changed to the validated obj 
    return ((result)
      ? res.status(201).json(result)
      : res.status(500).json({ message: 'error adding listing' })
    );
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: 'error adding listing',
    });
  }
};

const removeListing = async (req: Express.Request, res: Express.Response) => {
  const { id } = req.params;

  try {
    const result = await Listings.remove({ id: parseInt(id, 10) });
    return ((result)
      ? res.status(200).send()
      : res.status(500).json({ message: `error deleting listing by id ${id}` })
    );
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: `error deleting listing by id ${id}`,
    });
  }
};

router.get('/:id', getListing);
router.post('/', insertListing);
// router.put('/:id/', updateListing); // ask how this is supposed to behave 
router.delete('/:id', removeListing);

export default {};
