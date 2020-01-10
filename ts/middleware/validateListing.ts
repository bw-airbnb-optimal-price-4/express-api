import * as Express from 'express';

import { Listing, ValidatedListingRequest } from '../types';
import { filterOutUndefinedMembers } from '../utils';

export const validateListing = (
  req: ValidatedListingRequest,
  res: Express.Response,
  next: Express.NextFunction,
) => {
  const {
    id,
    userId,
    propertyTypeId,
    neighborhoodId,
    roomTypes,
    accommodates,
    bedrooms,
    bathrooms,
    beds,
    listingUrl,
    title,
    pictureUrl,
    city,
    state,
    zip,
    country,
    latitude,
    longitude,
  }: Listing = req.body;

  req.listing = filterOutUndefinedMembers({ obj: {
    id,
    userId,
    propertyTypeId,
    neighborhoodId,
    roomTypes,
    accommodates,
    bedrooms,
    bathrooms,
    beds,
    listingUrl,
    title,
    pictureUrl,
    city,
    state,
    zip,
    country,
    latitude,
    longitude,
  }}) as Listing;

  return ((userId === undefined
    || propertyTypeId === undefined
    || neighborhoodId === undefined
    || roomTypes === undefined
    || accommodates === undefined
    || bedrooms === undefined
    || bathrooms === undefined
    || beds === undefined
  )
    ? res.status(400).json({
      message: 'mustp provide userId, PropertyTypeId, NeighborhoodId, roomTypes, accommodates, '
        + 'bedrooms, bathrooms and beds',
    })
    : next()
  );
};

export default {};
