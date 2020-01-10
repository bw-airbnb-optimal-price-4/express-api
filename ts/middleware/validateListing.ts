import * as Express from 'express';
import * as Jwt from 'jsonwebtoken';

import { Listing, ValidatedListingRequest } from '../types';
import { filterOutUndefinedMembers } from '../utils';

export const validateListing = (
  req: ValidatedListingRequest,
  res: Express.Response,
  next: Express.NextFunction,
) => {
  const {
    id,
    propertyTypeId,
    neighborhoodId,
    roomType,
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
  const { subject } = Jwt.decode(req.headers.token as string) as { subject: string };

  req.listing = filterOutUndefinedMembers({ obj: {
    id,
    userId: parseInt(subject, 10),
    propertyTypeId,
    neighborhoodId,
    roomType,
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

  return ((req.listing.userId === undefined
    || Number.isNaN(req.listing.userId)
    || propertyTypeId === undefined
    || neighborhoodId === undefined
    || roomType === undefined
    || accommodates === undefined
    || bedrooms === undefined
    || bathrooms === undefined
    || beds === undefined
  )
    ? res.status(400).json({
      message: 'mustp provide userId, PropertyTypeId, NeighborhoodId, roomType, accommodates, '
        + 'bedrooms, bathrooms and beds',
    })
    : next()
  );
};

export default {};
